import os
import chromadb
from chromadb.utils import embedding_functions
import httpx
from dotenv import load_dotenv

load_dotenv()


class RAGEngine:
    """RAG engine for Lakshya Chalana's portfolio assistant.

    Retrieves relevant portfolio context from ChromaDB and uses an LLM
    to generate grounded answers based solely on the portfolio data.
    """

    SYSTEM_PROMPT = (
        "You are LakshyaBot, Lakshya Chalana's portfolio assistant.\n"
        "Answer ONLY using the provided portfolio context below.\n"
        "Do not answer unrelated questions.\n"
        "If the context does not contain the answer, say:\n"
        '"I could not find that information in Lakshya\'s portfolio data."\n'
        "Do not fabricate or hallucinate information.\n"
        "Be concise, professional, and use markdown formatting heavily. "
        "Use bold text for emphasis and structure answers with bullet points when listing multiple items."
    )

    def __init__(self):
        # Resolve ChromaDB path relative to this file
        script_dir = os.path.dirname(os.path.abspath(__file__))
        chroma_path = os.path.join(script_dir, "chroma_db")

        # Initialize ChromaDB
        self._client = chromadb.PersistentClient(path=chroma_path)
        self._ef = embedding_functions.ONNXMiniLM_L6_V2(preferred_providers=["CPUExecutionProvider"])
        self._collection = self._client.get_collection(
            name="portfolio_data",
            embedding_function=self._ef,
        )

        # LLM configuration from environment
        self._ai_provider = os.getenv("AI_PROVIDER", "openrouter").lower()
        self._top_k = int(os.getenv("RAG_TOP_K", "5"))
        self._similarity_threshold = float(os.getenv("RAG_SIMILARITY_THRESHOLD", "1.5"))

        # Ollama settings
        self._ollama_base_url = os.getenv("OLLAMA_BASE_URL", "http://localhost:11434")
        self._ollama_model = os.getenv("OLLAMA_MODEL", "llama3.2")

        # OpenRouter settings
        self._openrouter_api_key = os.getenv("OPENROUTER_API_KEY", "")
        self._openrouter_model = os.getenv(
            "OPENROUTER_MODEL", "meta-llama/llama-3.2-3b-instruct:free"
        )

        # OpenAI-compatible settings
        self._openai_base_url = os.getenv("OPENAI_BASE_URL", "https://api.openai.com/v1")
        self._openai_api_key = os.getenv("OPENAI_API_KEY", "")
        self._openai_model = os.getenv("OPENAI_MODEL", "")

    # ------------------------------------------------------------------
    # Retrieval
    # ------------------------------------------------------------------

    def retrieve(self, query: str, top_k: int = None) -> list[dict]:
        """Query ChromaDB and return relevant documents with distances.

        Args:
            query: The user's search query.
            top_k: Number of results to retrieve. Uses RAG_TOP_K env default.

        Returns:
            A list of dicts with keys: document, metadata, distance.
            Only documents within the similarity threshold are returned.
        """
        k = top_k if top_k is not None else self._top_k

        results = self._collection.query(
            query_texts=[query],
            n_results=k,
        )

        docs = []
        if results and results["documents"] and results["distances"]:
            for doc, meta, dist in zip(
                results["documents"][0],
                results["metadatas"][0],
                results["distances"][0],
            ):
                if dist <= self._similarity_threshold:
                    docs.append({
                        "document": doc,
                        "metadata": meta,
                        "distance": dist,
                    })
        return docs

    # ------------------------------------------------------------------
    # LLM routing
    # ------------------------------------------------------------------

    def _call_llm(self, system_prompt: str, user_message: str) -> str:
        """Route the LLM call to the configured provider with Ollama fallback."""
        provider = self._ai_provider
        
        def try_openrouter_then_ollama():
            try:
                return self._call_openrouter(system_prompt, user_message)
            except Exception as e:
                print(f"[RAGEngine] Falling back to Ollama due to OpenRouter error: {e}")
                return self._call_ollama(system_prompt, user_message)

        if provider == "ollama":
            return self._call_ollama(system_prompt, user_message)
        elif provider == "openrouter":
            return try_openrouter_then_ollama()
        elif provider == "openai":
            try:
                return self._call_openai(system_prompt, user_message)
            except Exception as e:
                print(f"[RAGEngine] Falling back to Ollama due to OpenAI error: {e}")
                return self._call_ollama(system_prompt, user_message)
        else:
            print(f"[RAGEngine] Unknown AI_PROVIDER '{provider}', falling back to openrouter.")
            return try_openrouter_then_ollama()

    def _call_ollama(self, system_prompt: str, user_message: str) -> str:
        """Call a local Ollama instance."""
        url = f"{self._ollama_base_url}/api/chat"
        payload = {
            "model": self._ollama_model,
            "messages": [
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_message},
            ],
            "stream": False,
        }
        try:
            response = httpx.post(url, json=payload, timeout=30.0)
            response.raise_for_status()
            data = response.json()
            return data.get("message", {}).get("content", "").strip()
        except Exception as e:
            print(f"[RAGEngine] Ollama error: {e}")
            return (
                "Hi there! I'm currently undergoing a quick maintenance update. "
                "In the meantime, you can explore Lakshya's skills and projects on this page, "
                "or feel free to reach out to him directly via the Contact section!"
            )

    def _call_openrouter(self, system_prompt: str, user_message: str) -> str:
        """Call the OpenRouter API."""
        url = "https://openrouter.ai/api/v1/chat/completions"
        headers = {
            "Authorization": f"Bearer {self._openrouter_api_key}",
            "Content-Type": "application/json",
        }
        payload = {
            "model": self._openrouter_model,
            "messages": [
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_message},
            ],
        }
        try:
            response = httpx.post(url, json=payload, headers=headers, timeout=30.0)
            response.raise_for_status()
            data = response.json()
            return data["choices"][0]["message"]["content"].strip()
        except Exception as e:
            print(f"[RAGEngine] OpenRouter error: {e}")
            raise e

    def _call_openai(self, system_prompt: str, user_message: str) -> str:
        """Call an OpenAI-compatible API."""
        url = f"{self._openai_base_url}/chat/completions"
        headers = {
            "Authorization": f"Bearer {self._openai_api_key}",
            "Content-Type": "application/json",
        }
        payload = {
            "model": self._openai_model,
            "messages": [
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_message},
            ],
        }
        try:
            response = httpx.post(url, json=payload, headers=headers, timeout=30.0)
            response.raise_for_status()
            data = response.json()
            return data["choices"][0]["message"]["content"].strip()
        except Exception as e:
            print(f"[RAGEngine] OpenAI error: {e}")
            raise e

    # ------------------------------------------------------------------
    # Chat orchestration
    # ------------------------------------------------------------------

    def chat(self, query: str) -> str:
        """Orchestrate the full RAG pipeline: retrieve → build context → LLM.

        Args:
            query: The user's question.

        Returns:
            The assistant's response string.
        """
        # Quick check for simple greetings to improve UX and save API calls
        query_lower = query.strip().lower()
        if query_lower in ["hi", "hello", "hey", "hi there", "hello there", "greetings"]:
            return (
                "Hi there! I am Lakshya's AI assistant. "
                "Feel free to ask me anything about his skills, projects, or experience!"
            )

        # Step 1: Retrieve relevant chunks
        relevant_docs = self.retrieve(query)

        # Step 2: If nothing relevant found, respond without calling LLM
        if not relevant_docs:
            return (
                "I could not find relevant information in Lakshya's portfolio data "
                "to answer your question. Please try asking about his projects, "
                "skills, education, certifications, or experience."
            )

        # Step 3: Assemble context
        context_parts = ["--- Portfolio Context ---"]
        for doc in relevant_docs:
            context_parts.append(doc["document"])
            context_parts.append("---")
        context_parts.append("--- End Context ---")
        context_block = "\n".join(context_parts)

        # Step 4: Build the full system prompt with context
        full_system_prompt = f"{self.SYSTEM_PROMPT}\n\n{context_block}"

        # Step 5: Call LLM
        return self._call_llm(full_system_prompt, query)
