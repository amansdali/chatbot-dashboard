def chunk_text(text: str, max_chars: int = 1200, overlap: int = 200) -> list[str]:
    """
    Simple, reliable chunker:
    - Splits by character length
    - Adds overlap so info near boundaries isn't lost
    """
    text = text.strip()
    if not text:
        return []

    chunks = []
    start = 0
    while start < len(text):
        end = min(len(text), start + max_chars)
        chunk = text[start:end].strip()
        if chunk:
            chunks.append(chunk)
        if end == len(text):
            break
        start = max(0, end - overlap)

    return chunks
