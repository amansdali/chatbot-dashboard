"use client";

import { useState } from "react";
import { chat } from "@/lib/api";

type ChatResponse = {
    messageId: string;
    answer: string;
    sources: any[];
    latencyMs: number;
};

function getSessionId() {
    const key = "chat_session_id";
    let id = localStorage.getItem(key);
    if (!id) {
        id = crypto.randomUUID();
        localStorage.setItem(key, id);
    }
    return id;
}

export default function ChatPage() {
    const [input, setInput] = useState("");
    const [lines, setLines] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    async function send() {
        const msg = input.trim();
        if (!msg || loading) return;

        setLines((p) => [...p, `You: ${msg}`]);
        setInput("");
        setLoading(true);

        try {
            const sessionId = getSessionId();
            const data = (await chat({ sessionId, message: msg })) as ChatResponse;
            setLines((p) => [...p, `Bot: ${data.answer} (${data.latencyMs}ms)`]);
        } catch (e: any) {
            setLines((p) => [...p, `Bot: Error — ${e?.message ?? "unknown"}`]);
        } finally {
            setLoading(false);
        }
    }

    return (
        <main style={{ maxWidth: 780, margin: "40px auto", padding: 16 }}>
            <h1 style={{ fontSize: 24, marginBottom: 12 }}>Chat</h1>

            <div style={{ border: "1px solid #ddd", borderRadius: 10, padding: 12, minHeight: 320 }}>
                {lines.length === 0 ? (
                    <div style={{ opacity: 0.7 }}>Type a message to test Next → Route Handler → FastAPI.</div>
                ) : (
                    lines.map((l, i) => <div key={i} style={{ marginBottom: 8 }}>{l}</div>)
                )}
            </div>

            <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && send()}
                    placeholder="Say something…"
                    style={{ flex: 1, padding: 10, borderRadius: 10, border: "1px solid #ddd" }}
                />
                <button onClick={send} disabled={loading} style={{ padding: "10px 14px", borderRadius: 10 }}>
                    {loading ? "Sending…" : "Send"}
                </button>
            </div>
        </main>
    );
}
