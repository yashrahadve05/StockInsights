import { Inngest } from "inngest";

export const inngest = new Inngest({
    id: 'stockinsights',
    ai: { gemini: {
        apiKey: process.env.GEMINI_API_KEY!,
    }}
})