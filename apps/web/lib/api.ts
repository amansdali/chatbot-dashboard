export async function chat(body: { sessionId: string; message: string }) {
    const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });

    const json = await res.json().catch(() => ({}));
    if (!res.ok) {
        throw new Error(json.detail ?? json.error ?? res.statusText);
    }
    return json;
}
