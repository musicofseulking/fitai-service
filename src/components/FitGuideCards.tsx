import { useEffect, useMemo, useState } from "react";
import {
  createFallbackFitGuide,
  requestGeminiFitGuide,
  type FitGuide,
  type ProductType,
} from "../lib/fitGuide";

interface FitGuideCardsProps {
  productType: ProductType;
  selectedSize: number;
  height?: string;
  weight?: string;
  bodyType?: string;
}

type LoadStatus = "loading" | "ready" | "fallback";

const partFitItems = [
  { key: "waist", label: "허리" },
  { key: "hip", label: "엉덩이" },
  { key: "thigh", label: "허벅지" },
  { key: "length", label: "총장" },
] as const;

export const FitGuideCards = ({
  productType,
  selectedSize,
  height,
  weight,
  bodyType,
}: FitGuideCardsProps): JSX.Element => {
  const fallbackGuide = useMemo(
    () => createFallbackFitGuide({ productType, selectedSize, height, weight, bodyType }),
    [bodyType, height, productType, selectedSize, weight],
  );
  const [guide, setGuide] = useState<FitGuide | null>(null);
  const [status, setStatus] = useState<LoadStatus>("loading");

  useEffect(() => {
    const controller = new AbortController();

    setGuide(null);
    setStatus("loading");

    requestGeminiFitGuide({
      productType,
      selectedSize,
      height,
      weight,
      bodyType,
      signal: controller.signal,
    })
      .then((nextGuide) => {
        setGuide(nextGuide);
        setStatus("ready");
      })
      .catch((error) => {
        if (error instanceof DOMException && error.name === "AbortError") return;

        setGuide(fallbackGuide);
        setStatus("fallback");
      });

    return () => controller.abort();
  }, [bodyType, fallbackGuide, height, productType, selectedSize, weight]);

  const statusLabel =
    status === "loading" ? "AI 분석 중" : status === "ready" ? "AI 분석" : "기본 분석";
  const isLoading = status === "loading" || guide === null;

  return (
    <div className="px-4 py-2 space-y-2">
      <div className="border border-[#e6e6e680] rounded-lg p-4">
        <div className="mb-2 flex items-center justify-between gap-3">
          <h3 className="font-medium text-black text-base">추천 사이즈 / 핏 안내</h3>
          <span className="shrink-0 text-[11px] text-[#6f6f6f]">{statusLabel}</span>
        </div>
        {isLoading ? (
          <div className="space-y-2 py-1" aria-hidden="true">
            <div className="h-3 w-full animate-pulse rounded bg-neutral-200" />
            <div className="h-3 w-11/12 animate-pulse rounded bg-neutral-200" />
          </div>
        ) : (
          <ul className="space-y-1 text-xs text-black">
            {guide.recommended_size_guide.map((item) => (
              <li key={item} className="flex items-start">
                <span className="mr-1 mt-[1px]">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="border border-[#e6e6e680] rounded-lg p-4">
        <h3 className="font-medium text-black text-base mb-2">부위별 핏 안내</h3>
        {isLoading ? (
          <div className="space-y-2 py-1" aria-hidden="true">
            <div className="h-3 w-10/12 animate-pulse rounded bg-neutral-200" />
            <div className="h-3 w-full animate-pulse rounded bg-neutral-200" />
            <div className="h-3 w-9/12 animate-pulse rounded bg-neutral-200" />
            <div className="h-3 w-11/12 animate-pulse rounded bg-neutral-200" />
          </div>
        ) : (
          <ul className="space-y-1 text-xs text-black">
            {partFitItems.map(({ key, label }) => (
              <li key={key} className="flex items-start">
                <span className="mr-1 mt-[1px]">•</span>
                <span>
                  {label} : {guide.part_fit_guide[key]}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
