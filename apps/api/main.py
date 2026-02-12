import time
import uuid
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
import httpx
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Chatbot API", version="0.1.0")

# Very simple in-memory chat history:
# { session_id: [ {"role": "user"/"assistant", "content": "..."} , ... ] }
CHAT_HISTORY: dict[str, list[dict[str, str]]] = {}

MAX_TURNS = 12  # keep last 12 messages total (6 user+assistant pairs)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Next dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ChatRequest(BaseModel):
    sessionId: str = "local-dev"
    message: str


class ChatResponse(BaseModel):
    messageId: str
    answer: str
    sources: list
    latencyMs: int


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/chat", response_model=ChatResponse)
async def chat(req: ChatRequest):
    t0 = time.time()
    msg = req.message.strip()
    if not msg:
        raise HTTPException(status_code=400, detail="message is required")

    # answer
    api_key = os.getenv("OPENROUTER_API_KEY")
    model = os.getenv("OPENROUTER_MODEL", "openai/gpt-4o-mini")
    app_url = os.getenv("OPENROUTER_APP_URL", "http://localhost:3000")
    app_name = os.getenv("OPENROUTER_APP_NAME", "Local Dev")

    if not api_key:
        raise HTTPException(status_code=500, detail="OPENROUTER_API_KEY is not set")

    # Build prompt/message
    system_prompt = "You are a helpful assistant in a sci-fi dashboard UI."
    history = CHAT_HISTORY.get(req.sessionId, [])
    messages = [{"role": "system", "content": system_prompt}]
    messages.extend(history)
    messages.append({"role": "user", "content": msg})

    async with httpx.AsyncClient(timeout=30) as client:
        r = await client.post(
            "https://openrouter.ai/api/v1/chat/completions",
            headers={
                "Authorization": f"Bearer {api_key}",
                "HTTP-Referer": app_url,   # optional attribution
                "X-Title": app_name,       # optional attribution
                "Content-Type": "application/json",
            },
            json={
                "model": model,
                "messages": messages,
                "temperature": 0.7,
                "max_tokens": 200,
            },
        )

    if r.status_code >= 400:
        raise HTTPException(status_code=502, detail=f"OpenRouter error: {r.text}")

    data = r.json()
    answer = data["choices"][0]["message"]["content"]

    # Update memory
    new_history = history + [
        {"role": "user", "content": msg},
        {"role": "assistant", "content": answer},
    ]

    # Trim old history (keep only most recent MAX_TURNS messages)
    CHAT_HISTORY[req.sessionId] = new_history[-MAX_TURNS:]

    return ChatResponse(
        messageId=str(uuid.uuid4()),
        answer=answer,
        sources=[],
        latencyMs=int((time.time() - t0) * 1000),
    )
