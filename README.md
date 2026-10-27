finale

## Gemini API 키 보관 방식

Gemini 키는 브라우저 번들에 넣지 않고 Vercel 서버리스 함수(`api/fit-guide.ts`)에만 둡니다.

- **Vercel 환경 변수:** `GEMINI_API_KEY`, `ALLOWED_ORIGINS`(예: `https://musicofseulking.github.io`)
- **GitHub Pages 빌드 변수:** 저장소 Settings → Variables → `FIT_API_URL` = `https://<vercel-project>.vercel.app/api/fit-guide`
- 프롬프트와 응답 스키마는 서버에서 만들기 때문에, 프록시로 임의의 프롬프트를 보낼 수 없습니다.
