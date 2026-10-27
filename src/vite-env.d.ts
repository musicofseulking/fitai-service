/// <reference types="vite/client" />

interface ImportMetaEnv {
  // 예: https://<vercel-project>.vercel.app/api/fit-guide  (Gemini 키는 서버에만 있음)
  readonly VITE_FIT_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
