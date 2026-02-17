from db import get_pool


async def retrieve_chunks(query_embedding: list[float], k: int = 4):
    pool = get_pool()
    async with pool.acquire() as conn:
        rows = await conn.fetch(
            """
            SELECT
                id,
                document_id,
                chunk_index,
                content,
                metadata,
                (embedding <=> $1) AS distance
            FROM doc_chunks
            ORDER BY embedding <=> $1
                LIMIT $2;
            """,
            query_embedding,
            k,
        )
    return rows
