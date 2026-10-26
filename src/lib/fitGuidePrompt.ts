export type ProductType = "male" | "female" | "female2";

export interface FitGuide {
  recommended_size_guide: string[];
  part_fit_guide: {
    waist: string;
    hip: string;
    thigh: string;
    length: string;
  };
}

export interface ProductMeasurement {
  size: number;
  length: number;
  waist: number;
  hip: number;
  thigh: number;
  crotch: number;
}

export interface UserBodyMetrics {
  gender: "male" | "female";
  height: string;
  weight: string;
  head_circumference: string;
  shoulder_width: string;
  arm_length: string;
  chest_circumference: string;
  waist_circumference: string;
  hip_circumference: string;
  thigh_circumference: string;
  crotch_length: string;
  leg_length: string;
  foot_size: string;
  bodyType: string;
}

export interface ProductContext {
  targetGender: "male" | "female";
  productName: string;
  measurements: ProductMeasurement[];
  defaultMetrics: UserBodyMetrics;
}

export interface FitGuideRequest {
  productType: ProductType;
  selectedSize: number;
  height?: string;
  weight?: string;
  bodyType?: string;
  signal?: AbortSignal;
}

export const GEMINI_ENDPOINT =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent";

export const productContexts: Record<ProductType, ProductContext> = {
  male: {
    targetGender: "male",
    productName: "스트레이트 치노 팬츠 [베이지]",
    measurements: [
      { size: 30, length: 104, waist: 40, hip: 50, thigh: 29.75, crotch: 28 },
      { size: 32, length: 104, waist: 42.5, hip: 52.5, thigh: 31, crotch: 28.5 },
      { size: 34, length: 105, waist: 45, hip: 55, thigh: 32.25, crotch: 29.5 },
      { size: 36, length: 105, waist: 47.5, hip: 57.5, thigh: 33.5, crotch: 30.5 },
    ],
    defaultMetrics: {
      gender: "male",
      height: "173cm",
      weight: "85kg",
      head_circumference: "58.5cm",
      shoulder_width: "47cm",
      arm_length: "60cm",
      chest_circumference: "108cm",
      waist_circumference: "99cm",
      hip_circumference: "101.5cm",
      thigh_circumference: "57cm",
      crotch_length: "28cm",
      leg_length: "75cm",
      foot_size: "268mm",
      bodyType: "타원형",
    },
  },
  female: {
    targetGender: "female",
    productName: "[한소희 PICK]우먼즈 커브드 데님 팬츠 [미디엄 인디고]",
    measurements: [
      { size: 25, length: 104.5, waist: 36.25, hip: 47.5, thigh: 33.35, crotch: 31 },
      { size: 26, length: 105, waist: 37.5, hip: 48.75, thigh: 34, crotch: 31.5 },
      { size: 27, length: 105.5, waist: 38.75, hip: 50, thigh: 34.65, crotch: 32 },
      { size: 28, length: 106, waist: 40, hip: 51.25, thigh: 35.3, crotch: 32.5 },
      { size: 29, length: 106.5, waist: 41.25, hip: 52.5, thigh: 35.95, crotch: 33 },
    ],
    defaultMetrics: {
      gender: "female",
      height: "161cm",
      weight: "53.5kg",
      head_circumference: "54.5cm",
      shoulder_width: "37.5cm",
      arm_length: "53.5cm",
      chest_circumference: "85cm",
      waist_circumference: "67cm",
      hip_circumference: "91cm",
      thigh_circumference: "50cm",
      crotch_length: "23.5cm",
      leg_length: "72cm",
      foot_size: "238mm",
      bodyType: "사각형",
    },
  },
  female2: {
    targetGender: "female",
    productName: "[한소희 PICK]우먼즈 커브드 데님 팬츠 [미디엄 인디고]",
    measurements: [
      { size: 25, length: 104.5, waist: 36.25, hip: 47.5, thigh: 33.35, crotch: 31 },
      { size: 26, length: 105, waist: 37.5, hip: 48.75, thigh: 34, crotch: 31.5 },
      { size: 27, length: 105.5, waist: 38.75, hip: 50, thigh: 34.65, crotch: 32 },
      { size: 28, length: 106, waist: 40, hip: 51.25, thigh: 35.3, crotch: 32.5 },
      { size: 29, length: 106.5, waist: 41.25, hip: 52.5, thigh: 35.95, crotch: 33 },
    ],
    defaultMetrics: {
      gender: "female",
      height: "161cm",
      weight: "60kg",
      head_circumference: "54.5cm",
      shoulder_width: "36.5cm",
      arm_length: "53.5cm",
      chest_circumference: "83.5cm",
      waist_circumference: "72cm",
      hip_circumference: "100cm",
      thigh_circumference: "57.5cm",
      crotch_length: "26cm",
      leg_length: "71cm",
      foot_size: "238mm",
      bodyType: "삼각형",
    },
  },
};

export const systemInstruction = `
[Role: Gemini 3 Flash Personal Shopper]
너는 최신 Gemini 3 Flash 엔진을 탑재한 전문 패션 사이즈 분석가이자 코디네이터야. 너의 목표는 사용자가 선택한 사이즈 버튼에 맞춰 실시간으로 정교한 피팅 가이드를 생성하는 것이다.

[Interaction Workflow]
1. 사용자가 특정 사이즈를 클릭할 때마다 이 프롬프트가 실행된다.
2. 결과물은 반드시 아래와 같은 JSON 형식으로만 반환해야 한다. 마크다운 백틱 등 기타 텍스트는 금지한다.

[의류 실측 데이터베이스, 단위: cm]
${JSON.stringify(
  [
    {
      category: "남성",
      product: productContexts.male.productName,
      measurements: productContexts.male.measurements,
    },
    {
      category: "여성",
      product: productContexts.female.productName,
      measurements: productContexts.female.measurements,
    },
  ],
  null,
  2,
)}

[출력 가이드라인 - 필수 동적 추론]
1. "추천 사이즈 / 핏 안내"는 recommended_size_guide 배열로 저장한다.
- 첫 번째 항목: 현재 selected_size가 사용자 체형에 어떻게 맞는지 먼저 평가한다.
- 두 번째 항목: selected_size 외에 가장 이상적인 추천 사이즈 또는 대체 사이즈 1개를 숫자와 함께 제안한다.

2. "부위별 핏 안내"는 part_fit_guide 객체로 저장한다.
- selected_size의 의류 실측과 사용자 신체 치수의 둘레/2를 비교한다.
- waist, hip, thigh, length 각각을 다정한 코디네이터 말투로 설명한다.

[Tone & Analysis Policy]
- 예시 텍스트를 복사하지 말고 치수 차이를 계산해 동적으로 답변한다.
- 사용자가 클릭한 사이즈를 가장 먼저 평가한다.
- 톤앤매너는 친절하고 다정한 코디네이터 말투로 한다.
`;

export const responseSchema = {
  type: "OBJECT",
  properties: {
    recommended_size_guide: {
      type: "ARRAY",
      items: { type: "STRING" },
    },
    part_fit_guide: {
      type: "OBJECT",
      properties: {
        waist: { type: "STRING" },
        hip: { type: "STRING" },
        thigh: { type: "STRING" },
        length: { type: "STRING" },
      },
      required: ["waist", "hip", "thigh", "length"],
    },
  },
  required: ["recommended_size_guide", "part_fit_guide"],
};

export const getFitGuideBodyMetrics = ({
  productType,
  height,
  weight,
  bodyType,
}: Pick<FitGuideRequest, "productType" | "height" | "weight" | "bodyType">): UserBodyMetrics => {
  const defaults = productContexts[productType].defaultMetrics;

  return {
    ...defaults,
    height: height || defaults.height,
    weight: weight || defaults.weight,
    bodyType: bodyType || defaults.bodyType,
  };
};

export const PRODUCT_TYPES: ProductType[] = ["male", "female", "female2"];

export const buildGeminiRequestBody = ({
  productType,
  selectedSize,
  height,
  weight,
  bodyType,
}: Omit<FitGuideRequest, "signal">) => {
  const context = productContexts[productType];
  const userBodyMetrics = getFitGuideBodyMetrics({ productType, height, weight, bodyType });

  return {
    system_instruction: {
      parts: [{ text: systemInstruction }],
    },
    contents: [
      {
        parts: [
          {
            text: JSON.stringify({
              target_gender: context.targetGender,
              product_name: context.productName,
              selected_size: String(selectedSize),
              user_body_metrics: userBodyMetrics,
            }),
          },
        ],
      },
    ],
    generationConfig: {
      temperature: 0.1,
      topP: 0.8,
      topK: 40,
      maxOutputTokens: 8192,
      responseMimeType: "application/json",
      responseSchema,
    },
  };
};

export const isFitGuide = (value: unknown): value is FitGuide => {
  if (!value || typeof value !== "object") return false;

  const guide = value as FitGuide;
  const partGuide = guide.part_fit_guide;

  return (
    Array.isArray(guide.recommended_size_guide) &&
    guide.recommended_size_guide.every((item) => typeof item === "string") &&
    !!partGuide &&
    typeof partGuide.waist === "string" &&
    typeof partGuide.hip === "string" &&
    typeof partGuide.thigh === "string" &&
    typeof partGuide.length === "string"
  );
};
