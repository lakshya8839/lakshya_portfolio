# LakshyaBot RAG Backend

RAG-based portfolio assistant backend for Lakshya Chalana's portfolio.

## Prerequisites

- **Python 3.10+**
- **One of these LLM providers:**
  - **OpenRouter** (default, cloud): Get a free API key from [openrouter.ai](https://openrouter.ai)
  - **Ollama** (local fallback): Install from [ollama.com](https://ollama.com), then run `ollama pull llama3.2`
  - **OpenAI-compatible**: Any endpoint following the OpenAI chat completions format

## Quick Start

### 1. Install Dependencies

```bash
cd rag-backend
pip install -r requirements.txt
```

### 2. Configure Environment

```bash
# Copy the example env file
cp .env.example .env

# Edit .env and set your provider + API key
# Default: OpenRouter (free tier)
```

### 3. Build the Index

```bash
python build_index.py
```

This reads `portfolio_data.json`, generates embeddings, and stores them in `./chroma_db/`.
Takes ~3-5 seconds on first run.

### 4. Start the Server

```bash
python main.py
```

Server starts at `http://localhost:8000`.

### 5. Test

```bash
# Health check
curl http://localhost:8000/api/health

# Ask a question
curl -X POST http://localhost:8000/api/chat \
  -H "Content-Type: application/json" \
  -d "{\"message\": \"What projects does Lakshya have?\"}"
```

## Switching LLM Providers

Edit your `.env` file:

```bash
# Option 1: OpenRouter (default, cloud, free tier)
AI_PROVIDER=openrouter
OPENROUTER_API_KEY=sk-or-v1-...
OPENROUTER_MODEL=meta-llama/llama-3.2-3b-instruct:free

# Option 2: Ollama (local, free, no API key)
AI_PROVIDER=ollama
OLLAMA_BASE_URL=http://localhost:11434
OLLAMA_MODEL=llama3.2

# Option 3: OpenAI-compatible
AI_PROVIDER=openai
OPENAI_API_KEY=sk-...
OPENAI_BASE_URL=https://api.openai.com/v1
OPENAI_MODEL=gpt-3.5-turbo
```

Restart the server after changing providers.

## Updating Portfolio Data

1. Edit `portfolio_data.json` with new/updated data
2. Re-run `python build_index.py` (~3 seconds)
3. Restart the server

The chatbot will immediately use the updated data.

## Deployment

### Using Docker

```bash
cd rag-backend
docker build -t lakshyabot-rag .
docker run -p 8000:8000 --env-file .env lakshyabot-rag
```

### On Railway / Render

1. Point the service to the `rag-backend/` directory
2. Set build command: `pip install -r requirements.txt && python build_index.py`
3. Set start command: `python main.py`
4. Add environment variables from `.env.example`

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `POST` | `/api/chat` | Send a message, get RAG response |
| `GET` | `/api/health` | Health check with provider info |

### POST /api/chat

```json
// Request
{ "message": "What skills does Lakshya have?" }

// Response
{ "reply": "Lakshya has skills in:\n• Programming: Python, C, C++, JavaScript\n• Web: HTML5, CSS3, Flask, React\n..." }
```

## Architecture

```
portfolio_data.json → build_index.py → ChromaDB (./chroma_db/)
                                              ↓
User Question → FastAPI → ChromaDB Retriever → Context Assembly → LLM → Response
```
