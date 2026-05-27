"""
FastAPI server for the RAG-based portfolio chatbot.
Serves as the backend for Lakshya Chalana's portfolio AI assistant.
"""

import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv

load_dotenv()

from rag_engine import RAGEngine

app = FastAPI(
    title="LakshyaBot RAG API",
    description="RAG-based portfolio assistant for Lakshya Chalana",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize RAG engine on startup
rag_engine: RAGEngine | None = None


@app.on_event("startup")
async def startup_event():
    """Initialize the RAG engine when the server starts."""
    global rag_engine
    try:
        rag_engine = RAGEngine()
        provider = os.getenv("AI_PROVIDER", "openrouter")
        print(f"[SUCCESS] RAG engine initialized successfully (provider: {provider})")
    except Exception as e:
        print(f"[ERROR] RAG engine initialization failed: {e}")
        print("   Make sure you've run 'python build_index.py' first.")
        rag_engine = None


class ChatRequest(BaseModel):
    message: str


class ChatResponse(BaseModel):
    reply: str


class HealthResponse(BaseModel):
    status: str
    provider: str
    indexed: bool


@app.post("/api/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    """Process a chat message through the RAG pipeline."""
    if not rag_engine:
        raise HTTPException(
            status_code=503,
            detail="AI assistant is not available. Please ensure the index has been built.",
        )

    if not request.message.strip():
        return ChatResponse(reply="Please enter a question about Lakshya's portfolio.")

    try:
        reply = rag_engine.chat(request.message.strip())
        return ChatResponse(reply=reply)
    except Exception as e:
        print(f"[ERROR] Chat error: {e}")
        return ChatResponse(
            reply="Sorry, I'm having trouble processing your request right now. Please try again later."
        )


@app.get("/api/health", response_model=HealthResponse)
async def health():
    """Health check endpoint."""
    provider = os.getenv("AI_PROVIDER", "openrouter")
    indexed = rag_engine is not None
    return HealthResponse(
        status="ok" if indexed else "degraded",
        provider=provider,
        indexed=indexed,
    )


if __name__ == "__main__":
    import uvicorn

    port = int(os.getenv("PORT", "8000"))
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=True)
