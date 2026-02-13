import os
import httpx

OPENROUTER_EMBEDDINGS_URL = "https://openrouter.ai/api/v1/embeddings"


async def embed_texts(texts: list[str]) -> list[list[float]]:
    api_key = os.getenv("OPENROUTER_API_KEY")
    if not api_key:
        raise RuntimeError("OPENROUTER_API_KEY is not set")

    # Pick an embeddings model on OpenRouter.
    # If you later want a different one, change OPENROUTER_EMBEDDINGS_MODEL in .env
    model = os.getenv("OPENROUTER_EMBEDDINGS_MODEL", "openai/text-embedding-3-small")

    async with httpx.AsyncClient(timeout=60) as client:
        r = await client.post(
            OPENROUTER_EMBEDDINGS_URL,
            headers={
                "Authorization": f"Bearer {api_key}",
                "Content-Type": "application/json",
            },
            json={"model": model, "input": texts},
        )
    r.raise_for_status()
    data = r.json()

    # OpenAI-style embeddings response: data["data"][i]["embedding"]
    return [item["embedding"] for item in data["data"]]
