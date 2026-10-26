import {
  getFitGuideBodyMetrics,
  isFitGuide,
  productContexts,
  type FitGuide,
  type FitGuideRequest,
  type ProductMeasurement,
  type UserBodyMetrics,
} from "./fitGuidePrompt";

export type { FitGuide, ProductType } from "./fitGuidePrompt";
export { getFitGuideBodyMetrics } from "./fitGuidePrompt";

export const requestGeminiFitGuide = async ({
  productType,
  selectedSize,
  height,
  weight,
  bodyType,
  signal,
}: FitGuideRequest): Promise<FitGuide> => {
  // Gemini API 키는 서버(api/fit-guide.ts)에만 있다. 브라우저는 프록시만 호출한다.
  const endpoint = import.meta.env.VITE_FIT_API_URL;

  if (!endpoint) {
    throw new Error("Missing VITE_FIT_API_URL");
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productType, selectedSize, height, weight, bodyType }),
    signal,
  });

  if (!response.ok) {
    throw new Error(`Fit guide request failed: ${response.status}`);
  }

  const parsed = await response.json();

  if (!isFitGuide(parsed)) {
    throw new Error("Fit guide response did not match the schema");
  }

  return parsed;
};

export const createFallbackFitGuide = ({
  productType,
  selectedSize,
  height,
  weight,
  bodyType,
}: Omit<FitGuideRequest, "signal">): FitGuide => {
  const context = productContexts[productType];
  const selectedMeasurement =
    context.measurements.find((measurement) => measurement.size === selectedSize) ??
    context.measurements[0];
  const userBodyMetrics = getFitGuideBodyMetrics({ productType, height, weight, bodyType });
  const alternative = findAlternativeSize(context.measurements, selectedMeasurement, userBodyMetrics);
  const selectedFit = summarizeSelectedFit(selectedMeasurement, userBodyMetrics);
  const alternativeFit = summarizeAlternativeFit(alternative, userBodyMetrics);

  return {
    recommended_size_guide: [
      `${selectedMeasurement.size} 사이즈는 ${selectedFit} 느껴질 수 있어요.`,
      `${alternative.size} 사이즈는 ${alternativeFit} 추천드려요.`,
    ],
    part_fit_guide: {
      waist: describeWidthFit("허리는", selectedMeasurement.waist, metricNumber(userBodyMetrics.waist_circumference) / 2),
      hip: describeWidthFit("엉덩이는", selectedMeasurement.hip, metricNumber(userBodyMetrics.hip_circumference) / 2),
      thigh: describeWidthFit("허벅지는", selectedMeasurement.thigh, metricNumber(userBodyMetrics.thigh_circumference) / 2),
      length: describeLengthFit(selectedMeasurement, userBodyMetrics),
    },
  };
};

const metricNumber = (value: string): number => {
  const parsed = Number.parseFloat(value.replace(/[^\d.]/g, ""));
  return Number.isFinite(parsed) ? parsed : 0;
};

const findAlternativeSize = (
  measurements: ProductMeasurement[],
  selectedMeasurement: ProductMeasurement,
  userBodyMetrics: UserBodyMetrics,
): ProductMeasurement => {
  const scored = measurements
    .filter((measurement) => measurement.size !== selectedMeasurement.size)
    .map((measurement) => ({
      measurement,
      score: scoreMeasurement(measurement, userBodyMetrics),
    }))
    .sort((a, b) => a.score - b.score);

  return scored[0]?.measurement ?? selectedMeasurement;
};

const scoreMeasurement = (measurement: ProductMeasurement, userBodyMetrics: UserBodyMetrics): number => {
  const waistEase = measurement.waist - metricNumber(userBodyMetrics.waist_circumference) / 2;
  const hipEase = measurement.hip - metricNumber(userBodyMetrics.hip_circumference) / 2;
  const thighEase = measurement.thigh - metricNumber(userBodyMetrics.thigh_circumference) / 2;
  const desired = { waist: 2.5, hip: 3.5, thigh: 4 };
  const tightPenalty = [waistEase, hipEase, thighEase].filter((ease) => ease < 0).length * 20;

  return (
    Math.abs(waistEase - desired.waist) * 1.4 +
    Math.abs(hipEase - desired.hip) +
    Math.abs(thighEase - desired.thigh) * 0.8 +
    tightPenalty
  );
};

const summarizeSelectedFit = (measurement: ProductMeasurement, userBodyMetrics: UserBodyMetrics): string => {
  const waistEase = measurement.waist - metricNumber(userBodyMetrics.waist_circumference) / 2;
  const hipEase = measurement.hip - metricNumber(userBodyMetrics.hip_circumference) / 2;
  const thighEase = measurement.thigh - metricNumber(userBodyMetrics.thigh_circumference) / 2;
  const tightestEase = Math.min(waistEase, hipEase, thighEase);

  if (tightestEase < -2) return "몸에 꽤 붙는 타이트한 핏으로";
  if (tightestEase < 0.75) return "딱 맞거나 살짝 슬림한 핏으로";
  if (tightestEase < 4) return "안정감 있게 맞는 핏으로";
  return "전체적으로 여유 있는 핏으로";
};

const summarizeAlternativeFit = (measurement: ProductMeasurement, userBodyMetrics: UserBodyMetrics): string => {
  const waistEase = measurement.waist - metricNumber(userBodyMetrics.waist_circumference) / 2;

  if (waistEase < 0) return "허리와 힙 라인이 조금 더 슬림하게 잡히는 대체 핏으로";
  if (waistEase < 3) return "허리는 편안하고 실루엣은 깔끔한 균형 핏으로";
  return "움직임이 편하고 자연스럽게 떨어지는 여유 핏으로";
};

const describeWidthFit = (label: string, garmentWidth: number, bodyHalfWidth: number): string => {
  const ease = Number((garmentWidth - bodyHalfWidth).toFixed(1));
  const absoluteEase = Math.abs(ease).toFixed(1);

  if (ease < -2) return `${label} 신체 단면보다 ${absoluteEase}cm 작아 많이 타이트할 수 있어요.`;
  if (ease < 0.5) return `${label} 신체 단면과 거의 비슷해서 딱 맞는 느낌이에요.`;
  if (ease < 3) return `${label} ${absoluteEase}cm 정도 여유가 있어 안정적으로 맞아요.`;
  if (ease < 6) return `${label} ${absoluteEase}cm 여유가 있어 편안하게 맞아요.`;
  return `${label} ${absoluteEase}cm 이상 여유가 있어 넉넉하게 느껴질 수 있어요.`;
};

const describeLengthFit = (measurement: ProductMeasurement, userBodyMetrics: UserBodyMetrics): string => {
  const expectedOutseam =
    metricNumber(userBodyMetrics.leg_length) + metricNumber(userBodyMetrics.crotch_length);
  const difference = Number((measurement.length - expectedOutseam).toFixed(1));
  const absoluteDifference = Math.abs(difference).toFixed(1);

  if (difference < -2) return `총장은 예상 바지 길이보다 ${absoluteDifference}cm 짧아 발목이 드러나는 기장감이에요.`;
  if (difference <= 2) return "총장은 신체 기준과 가까워 발등 근처에 자연스럽게 떨어져요.";
  if (difference <= 7) return `총장은 ${absoluteDifference}cm 정도 길어 살짝 여유 있게 떨어져요.`;
  return `총장은 ${absoluteDifference}cm 정도 길어 신발 위로 넉넉하게 내려올 수 있어요.`;
};
