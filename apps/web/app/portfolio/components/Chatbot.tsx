'use client'

import { useState } from 'react'
import { chat } from '@/lib/api'

type ChatResponse = {
    messageId: string
    answer: string
    sources: any[]
    latencyMs: number
}

function getSessionId() {
    const key = 'chat_session_id'
    let id = localStorage.getItem(key)
    if (!id) {
        id = crypto.randomUUID()
        localStorage.setItem(key, id)
    }
    return id
}

export default function ChatBox() {
    const [input, setInput] = useState('')
    const [lines, setLines] = useState<string[]>([])
    const [loading, setLoading] = useState(false)

    async function send() {
        const msg = input.trim()
        if (!msg || loading) return

        setLines((p) => [...p, `You: ${msg}`])
        setInput('')
        setLoading(true)

        try {
            const sessionId = getSessionId()
            const data = (await chat({ sessionId, message: msg })) as ChatResponse
            setLines((p) => [...p, `Bot: ${data.answer}`])

            if (data.sources?.length) {
                const src = data.sources
                    .map((s: any) => `[chunk ${s.chunkId}]${s.metadata?.source ? ` (${s.metadata.source})` : ''}`)
                    .join('  ')
                setLines((p) => [...p, `Sources: ${src}`])
            }
        } catch (e: any) {
            setLines((p) => [...p, `Bot: Error — ${e?.message ?? 'unknown'}`])
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="chat-container">
            <div className="chat-messages">
                {lines.length === 0 ? (
                    <p className="body-small" style={{ opacity: 0.7 }}>
                        Ask me anything...
                    </p>
                ) : (
                    lines.map((l, i) => (
                        <p key={i} className="body-small" style={{ marginBottom: '8px' }}>
                            {l}
                        </p>
                    ))
                )}
            </div>

            <div className="chat-input-row">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && send()}
                    placeholder="Type a message..."
                    disabled={loading}
                    className="chat-input body"
                />
                <button onClick={send} disabled={loading} className="chat-button body-bold">
                    {loading ? '...' : 'Send'}
                </button>
            </div>
        </div>
    )
}
