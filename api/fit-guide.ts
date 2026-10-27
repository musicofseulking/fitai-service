// Vercel serverless function: Gemini 호출을 대신 해 주는 프록시.
// GEMINI_API_KEY 는 Vercel 환경 변수에만 두고, 브라우저 번들에는 절대 넣지 않는다.
// 프롬프트·응답 스키마는 서버에서 만들기 때문에, 이 엔드포인트로 임의의 프롬프트를 보낼 수 없다.
import {
  GEMINI_ENDPOINT,
  PRODUCT_TYPES,
  buildGeminiRequestBody,
  isFitGuide,
  type ProductType,
} from "../src/lib/fitGuidePrompt.js";

const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS ?? "https://musicofseulking.github.io")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const corsHeaders = (origin: string | null): Record<string, string> => {
  const allowed = origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  };
};

const json = (status: number, body: unknown, origin: string | null) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
  });

const shortString = (value: unknown): string | undefined =>
  typeof value === "string" && value.length <= 20 ? value : undefined;

export function OPTIONS(request: Request) {
  return new Response(null, { status: 204, headers: corsHeaders(request.headers.get("origin")) });
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");

  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    return json(403, { error: "origin not allowed" }, origin);
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return json(500, { error: "server is missing GEMINI_API_KEY" }, origin);
  }

  let input: Record<string, unknown>;
  try {
    input = await request.json();
  } catch {
    return json(400, { error: "invalid JSON" }, origin);
  }

  const productType = input.productType as ProductType;
  const selectedSize = Number(input.selectedSize);
  if (!PRODUCT_TYPES.includes(productType) || !Number.isFinite(selectedSize)) {
    return json(400, { error: "invalid productType or selectedSize" }, origin);
  }

  const geminiResponse = await fetch(`${GEMINI_ENDPOINT}?key=${encodeURIComponent(apiKey)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(
      buildGeminiRequestBody({
        productType,
        selectedSize,
        height: shortString(input.height),
        weight: shortString(input.weight),
        bodyType: shortString(input.bodyType),
      }),
    ),
  });

  if (!geminiResponse.ok) {
    return json(502, { error: `Gemini request failed: ${geminiResponse.status}` }, origin);
  }

  const data = await geminiResponse.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

  try {
    const parsed = typeof text === "string" ? JSON.parse(text) : null;
    if (!isFitGuide(parsed)) throw new Error("schema mismatch");
    return json(200, parsed, origin);
  } catch {
    return json(502, { error: "Gemini response did not match the fit guide schema" }, origin);
  }
}
