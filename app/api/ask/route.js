import { NextResponse } from "next/server";

/**
 * POST /api/ask
 * Body: { query: string, lang: "fr"|"en", articles: [{id, title}] }
 * Returns: { answer: string, articleId: string }
 *
 * Calls Groq's llama-3.3-70b-versatile model server-side so the API key
 * never reaches the browser. The key is read from the GROQ_API_KEY env var
 * (set in .env.local locally and in Vercel Project → Environment Variables).
 */
export async function POST(request) {
  try {
    const { query, lang, articles } = await request.json();

    if (!query || typeof query !== "string") {
      return NextResponse.json({ error: "Missing query" }, { status: 400 });
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      // Graceful degradation: no key configured → return empty so client falls back
      return NextResponse.json({ answer: "", articleId: "" }, { status: 200 });
    }

    const list = (articles || []).map((a) => `${a.id}: ${a.title}`).join("\n");

    const sys =
      lang === "fr"
        ? `Tu es Cosmo, l'assistant du Mag Magic Minds, un média bienveillant sur les enfants et les écrans. Réponds en français, de façon brève (2 à 3 phrases max), chaleureuse et concrète. Puis choisis l'article le plus pertinent dans cette liste:\n${list}\nRéponds UNIQUEMENT en JSON valide: {"answer":"...","articleId":"<id ou vide>"}`
        : `You are Cosmo, the Magic Minds Mag assistant, a caring media about children and screens. Answer in English, briefly (2-3 sentences max), warm and concrete. Then pick the most relevant article from this list:\n${list}\nReply ONLY with valid JSON: {"answer":"...","articleId":"<id or empty>"}`;

    const groqRes = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + apiKey,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          temperature: 0.4,
          response_format: { type: "json_object" },
          messages: [
            { role: "system", content: sys },
            { role: "user", content: query },
          ],
        }),
      }
    );

    if (!groqRes.ok) {
      throw new Error("Groq HTTP " + groqRes.status);
    }

    const data = await groqRes.json();
    const raw = data.choices?.[0]?.message?.content || "{}";

    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch {
      parsed = { answer: raw, articleId: "" };
    }

    return NextResponse.json({
      answer: parsed.answer || "",
      articleId: parsed.articleId || "",
    });
  } catch (err) {
    console.error("[/api/ask]", err);
    // Return empty — client will show keyword fallback
    return NextResponse.json({ answer: "", articleId: "" }, { status: 200 });
  }
}
