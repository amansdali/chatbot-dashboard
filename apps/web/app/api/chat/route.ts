import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const API_URL = process.env.API_URL;
    if (!API_URL) {
        return NextResponse.json({ error: "API_URL is not set" }, { status: 500 });
    }

    // Read what the browser sent to /api/chat
    const body = await req.json();

    // Forward it to FastAPI
    const upstream = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });

    // Return upstream response to the browser (pass-through)
    const contentType = upstream.headers.get("content-type") ?? "application/json";
    const text = await upstream.text();

    return new NextResponse(text, {
        status: upstream.status,
        headers: { "Content-Type": contentType },
    });
}
