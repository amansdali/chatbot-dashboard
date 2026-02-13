import os
import asyncpg
from pgvector.asyncpg import register_vector

_pool: asyncpg.Pool | None = None


async def init_pool():
    global _pool
    if _pool is None:
        db_url = os.getenv("DATABASE_URL")
        if not db_url:
            raise RuntimeError("DATABASE_URL is not set")

        async def _init_conn(conn: asyncpg.Connection):
            await register_vector(conn)

        _pool = await asyncpg.create_pool(
            dsn=db_url,
            min_size=1,
            max_size=5,
            init=_init_conn,
        )


async def close_pool():
    global _pool
    if _pool is not None:
        await _pool.close()
        _pool = None


def get_pool() -> asyncpg.Pool:
    if _pool is None:
        raise RuntimeError("DB pool not initialized")
    return _pool
