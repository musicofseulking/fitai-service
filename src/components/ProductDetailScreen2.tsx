import { useState, useEffect } from "react";
import { ArrowLeft, Home, Search, ShoppingBag, Heart, X, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

interface ProductDetailScreen2Props {
  onClose?: () => void;
  onHomeClick?: () => void;
  onAIFittingClick?: () => void;
}

const productTags = [{ label: "무신사단독" }, { label: "아울렛" }];

const sizeTabOptions = [
  { id: "actual", label: "실측 사이즈" },
  { id: "standard", label: "기준표 사이즈" },
];

const columnHeaders = [
  { label: "총장", paddingLeft: "pl-5" },
  { label: "허리단면", paddingLeft: "pl-[9px]" },
  { label: "엉덩이단면", paddingLeft: "pl-1" },
  { label: "허벅지단면", paddingLeft: "pl-1" },
  { label: "밑위", paddingLeft: "pl-5" },
  { label: "밑단단면", paddingLeft: "pl-[9px]" },
];

const sizeRows = [
  { size: "25", values: ["104.5", "36.25", "47.5", "33.35", "31", "24.5"] },
  { size: "26", values: ["105", "37.5", "48.75", "34", "31.5", "25"] },
  { size: "27", values: ["105.5", "38.75", "50", "34.65", "32", "25.25"] },
  { size: "28", values: ["106", "40", "51.25", "35.3", "32.5", "25.5"] },
  { size: "29", values: ["106.5", "41.25", "52.5", "35.95", "33", "25.75"] },
];

export const ProductDetailScreen2 = ({
  onClose,
  onAIFittingClick,
}: ProductDetailScreen2Props): JSX.Element => {
  const [activeSizeTab, setActiveSizeTab] = useState("actual");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [showSizeInfo, setShowSizeInfo] = useState(true);

  return (
    <div className="relative w-full max-w-[390px] mx-auto bg-white flex flex-col min-h-screen">
      <div className="fixed w-full max-w-[390px] top-0 left-1/2 -translate-x-1/2 h-[52px] z-20 flex bg-white">
        <div className="w-full flex items-center justify-between px-3 h-[44px]">
          <div className="flex items-center ml-3">
            <span className="font-bold text-black text-[15px]">9:41</span>
          </div>

          <div className="flex items-center gap-3 h-[11px]">
            <img src="Mobile Signal(WhiteScreen).png" alt="Signal" className="h-full object-contain" />
            <img src="Wifi(WhiteScreen).png" alt="Wifi" className="h-full object-contain" />
            <img src="Battery(WhiteScreen).png" alt="Battery" className="h-full object-contain" />
          </div>
        </div>
      </div>

      <div className="flex w-full h-[52px] items-center justify-between px-4 py-0 fixed top-[52px] left-1/2 -translate-x-1/2 max-w-[390px] bg-white z-20">
        <button
          onClick={onClose}
          className="w-6 h-6 flex items-center justify-center p-0 bg-transparent border-none cursor-pointer"
        >
          <ArrowLeft className="w-6 h-6 text-black" />
        </button>

        <div className="inline-flex items-center gap-[19px] flex-[0_0_auto]">
          <button
            onClick={() => {/* onHomeClick?.() */}}
            className="w-[18px] h-[19.91px] flex items-center justify-center p-0 bg-transparent border-none cursor-pointer"
          >
            <Home className="w-[18px] h-[19.91px] text-black" />
          </button>

          <Search className="w-[19.5px] h-[19.5px] text-black" />

          <ShoppingBag className="w-5 h-[16.25px] text-black" />
        </div>
      </div>

      <div className="h-[104px] w-full flex-shrink-0" />

      <main className="flex flex-col w-full pb-24">
        <section className="flex flex-col w-full items-center relative">
          <div className="flex h-[470px] items-center gap-2 relative self-stretch w-full overflow-hidden bg-neutral-100">
            <img
              className="w-full h-[470px] object-cover"
              alt="데님 와이드 팬츠"
              src="IMG_6677_3.png"
            />

            <div className="flex w-[calc(100%-33px)] items-center justify-between absolute bottom-[20px] left-[12px]">
              <div className="p-[2px] bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 bg-[length:200%_200%] animate-[gradient-shift_3s_ease-in-out_infinite] rounded transition-all duration-300 hover:scale-105 hover:animate-[shimmer_1.5s_ease-in-out_infinite] shadow-lg">
                <Button
                  onClick={onAIFittingClick}
                  variant="outline"
                  className="h-8 px-3 bg-white hover:bg-white rounded-[2px] border-none font-bold text-black text-sm tracking-[0] leading-normal whitespace-nowrap shadow-none"
                >
                  AI 피팅하기
                </Button>
              </div>

              <div className="flex flex-col w-[50px] items-center justify-center gap-2 px-2.5 py-1 bg-[#0f0f0f80] rounded-2xl overflow-hidden">
                <div className="inline-flex items-center justify-center gap-1">
                  <span className="font-normal text-white text-[13px] leading-normal">
                    1
                  </span>
                  <span className="font-normal text-white text-[13px] leading-normal">
                    /
                  </span>
                  <span className="font-normal text-white text-[13px] leading-normal">
                    8
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-around gap-[69px] px-5 py-3 self-stretch w-full bg-[#00216d]">
            <span className="font-normal text-white text-[13px] tracking-[0] leading-[normal]">
              주 7일 언제나 당일발송, 전상품 무료배송
            </span>
            <span className="font-bold text-white text-[13px] tracking-[0] leading-[normal]">
              무배당발 &gt;
            </span>
          </div>

          <div className="flex items-center justify-between px-4 py-3 self-stretch w-full border-b border-solid border-[#0000001a]">
            <div className="inline-flex items-center gap-[15px]">
              <div className="w-8 h-8 bg-[#2e2e2e] rounded-[30px] flex-shrink-0" />

              <span className="font-normal text-black text-[13px] leading-normal">
                무신사 스탠다드 우먼
              </span>

              <Badge className="bg-[#989898] text-white text-[10px] font-normal px-0.5 py-0 rounded leading-normal h-auto hover:bg-[#989898]">
                단독
              </Badge>
            </div>

            <div className="flex flex-col w-[52px] items-start gap-2 px-[7px] py-0.5 bg-white rounded border border-solid border-[#cacaca]">
              <div className="flex items-center justify-center gap-0.5 self-stretch w-full">
                <svg
                  className="w-[11px] h-[9.16px]"
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.5 9.5L1.5 5.5L2.5 4.5L5.5 7.5L9.5 3.5L10.5 4.5L5.5 9.5Z"
                    fill="black"
                  />
                </svg>
                <span className="font-normal text-black text-[10px] text-center leading-normal whitespace-nowrap">
                  104만
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2.5 px-4 py-2.5 self-stretch w-full">
            <p className="self-stretch font-normal text-[#6b6b6b] text-[13px] leading-normal">
              바지 &gt; 데님 팬츠 (무신사 스탠다드 우먼)
            </p>

            <h1 className="self-stretch font-medium text-black text-base leading-normal overflow-hidden text-ellipsis line-clamp-2">
              [한소희 PICK] 우먼즈 커브드 데님 팬츠 [미디엄 인디고]
            </h1>

            <div className="inline-flex items-center gap-1.5">
              {productTags.map((tag) => (
                <Badge
                  key={tag.label}
                  className="bg-[#f2f2f2] text-[#7b7b7b] text-[10px] font-normal px-0.5 py-0 rounded leading-normal h-auto hover:bg-[#f2f2f2]"
                >
                  {tag.label}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start px-4 py-0 self-stretch w-full">
            <div className="flex items-center gap-3.5 px-0 py-1 self-stretch w-full">
              <div className="inline-flex items-center gap-0.5">
                <div className="relative w-4 h-4">
                  <svg
                    className="absolute top-0 left-px w-[13px] h-[13px]"
                    viewBox="0 0 13 13"
                    fill="#FFD700"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.5 0L8.5 4L13 4.5L9.5 8L10.5 13L6.5 10.5L2.5 13L3.5 8L0 4.5L4.5 4L6.5 0Z" />
                  </svg>
                </div>
                <span className="font-semibold text-black text-xs leading-normal whitespace-nowrap">
                  4.9
                </span>
              </div>

              <span className="font-normal text-[#919191] text-xs leading-normal underline whitespace-nowrap">
                후기 458개
              </span>

              <div className="inline-flex items-center justify-center gap-2 px-1.5 py-1 bg-white rounded-2xl border border-solid border-[#be8cff]">
                <span className="font-normal text-[#7f1eff] text-[10px] text-center leading-normal whitespace-nowrap">
                  AI 요약 보기
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 px-0 py-2 self-stretch w-full">
              <span className="font-semibold text-[#0f4fff] text-xs text-center leading-normal whitespace-nowrap">
                오늘 22시까지 결제 시 내일(일) 도착보장
              </span>
            </div>

            <div className="flex flex-col items-start justify-center gap-1.5 px-0 py-1.5 self-stretch w-full">
              <div className="flex items-center justify-around gap-2 self-stretch w-full">
                <span className="flex-1 font-semibold text-[#919191] text-xs leading-normal line-through">
                  22,900원
                </span>
              </div>

              <div className="flex items-center gap-2 self-stretch w-full">
                <span className="font-semibold text-[#ff0000] text-base leading-normal whitespace-nowrap">
                  30%
                </span>
                <span className="font-semibold text-black text-base leading-normal whitespace-nowrap">
                  15,990원
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 p-4 self-stretch w-full">
            <div className="flex flex-col items-start self-stretch w-full rounded border border-solid border-[#d9d9d9]">
              <div className="flex items-center justify-between px-4 py-3.5 self-stretch w-full border-b border-solid border-[#ececec]">
                <div className="inline-flex items-center gap-1.5">
                  <span className="font-semibold text-[#ff0000] text-base text-center leading-normal whitespace-nowrap">
                    15,990원
                  </span>
                  <span className="font-semibold text-[#ff0000] text-xs text-center leading-normal whitespace-nowrap">
                    최대혜택가
                  </span>
                </div>

                <div className="inline-flex items-center gap-1">
                  <span className="font-semibold text-[#919191] text-xs text-center leading-normal whitespace-nowrap">
                    자세히
                  </span>
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 4L10 8L6 12"
                      stroke="#919191"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex items-center gap-2 px-4 py-3.5 self-stretch w-full border-b border-solid border-[#ececec]">
                <span className="font-medium text-black text-[13px] text-center leading-normal">
                  1,500원 최대적립
                </span>
              </div>

              <div className="flex items-center justify-between px-4 py-3.5 self-stretch w-full bg-neutral-100">
                <span className="font-normal text-black text-[13px] text-center leading-normal">
                  후기 적립
                </span>
                <span className="font-semibold text-black text-xs text-center leading-normal whitespace-nowrap">
                  1,500원
                </span>
              </div>
            </div>
          </div>
        </section>

        <nav className="flex w-full items-stretch border-b border-neutral-200">
          {[
            { id: "info", label: "정보" },
            { id: "size", label: "사이즈" },
            { id: "recommend", label: "추천" },
            { id: "snap", label: "스냅・후기", subLabel: "173" },
            { id: "inquiry", label: "문의", subLabel: "12" },
          ].map((tab, index) => (
            <button
              key={tab.id}
              className={`flex items-center justify-center gap-2 px-6 py-1 flex-1 self-stretch ${
                index === 1 ? "bg-white" : "bg-[#ebebeb]"
              }`}
            >
              <span
                className={`w-fit text-sm text-center tracking-[0] leading-[normal] ${
                  index === 1
                    ? "font-semibold text-black"
                    : "font-normal text-[#8a8a8a]"
                }`}
              >
                {tab.label}
                {tab.subLabel && (
                  <>
                    <br />
                    {tab.subLabel}
                  </>
                )}
              </span>
            </button>
          ))}
        </nav>

        {showSizeInfo && (
          <section className="flex flex-col w-full items-start gap-2 p-4">
            <h2 className="self-stretch font-semibold text-black text-lg tracking-[0] leading-[normal]">
              사이즈 정보
            </h2>

            <Card className="self-stretch w-full bg-neutral-100 rounded-sm border border-solid border-[#e8e8e8] shadow-none">
              <CardContent className="flex flex-col items-center justify-center gap-3 p-4">
                <div className="flex items-start justify-between w-full">
                  <div className="flex flex-col items-start gap-0.5 flex-1">
                    <p className="font-normal text-sm text-center tracking-[0] leading-[normal]">
                      <span className="font-medium text-black">
                        회원님과 비슷한 체형이 구매한 사이즈
                      </span>
                      <span className="font-medium text-[#838383]">&nbsp;</span>
                      <span className="font-medium text-[#0f4fff]">29</span>
                    </p>

                    <div className="inline-flex items-center gap-2">
                      <span className="font-normal text-[#666666] text-[13px] text-center tracking-[0] leading-[normal]">
                        161cm・60kg
                      </span>
                      <button className="font-normal text-[#666666] text-[13px] text-center tracking-[0] leading-[normal] underline">
                        수정하기
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowSizeInfo(false)}
                    className="flex-shrink-0 p-0 bg-transparent border-none cursor-pointer"
                  >
                    <X className="w-5 h-5 text-[#666666]" />
                  </button>
                </div>

                <div className="flex flex-col items-start gap-2 w-full">
                  <div className="flex items-center justify-between w-full">
                    <span className="font-semibold text-black text-[13px] text-center tracking-[0] leading-[normal]">
                      28
                    </span>
                    <span className="font-semibold text-black text-[13px] text-center tracking-[0] leading-[normal]">
                      56% (5명 구매)
                    </span>
                  </div>

                  <div className="relative w-full h-1.5 bg-[#dfdfdf] rounded-lg overflow-hidden">
                    <div className="absolute top-0 left-0 w-[56%] h-full bg-[#0f4fff] rounded-lg" />
                  </div>
                </div>

                <div className="flex items-center w-full">
                  <p className="font-normal text-[#666666] text-xs text-center tracking-[0] leading-[normal] whitespace-nowrap">
                    개인의 체형은 다를 수 있으므로 참고 용도로만 활용해주세요.
                  </p>
                </div>
              </CardContent>
            </Card>

            <button className="flex h-[33px] items-center justify-center gap-1 p-2 w-full bg-white rounded border border-solid border-[#e8e8e8]">
              <span className="font-normal text-black text-sm text-center tracking-[0] leading-[normal]">
                비슷한 체형의 구매후기 15개
              </span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </section>
        )}

        <section className="flex flex-col w-full items-start gap-2">
          <div className="flex flex-col items-start w-full">
            <div className="flex items-center gap-[11px] px-4 py-1 w-full">
              {sizeTabOptions.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSizeTab(tab.id)}
                  className={`inline-flex items-center justify-center gap-2 px-2 py-1 rounded overflow-hidden border border-solid cursor-pointer ${
                    activeSizeTab === tab.id ? "border-black" : "border-[#dfdfdf]"
                  }`}
                >
                  <span
                    className={`font-normal text-[13px] tracking-[0] leading-[normal] ${
                      activeSizeTab === tab.id ? "text-black" : "text-[#cacaca]"
                    }`}
                  >
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>

            <div className="relative w-full h-[289px] bg-white flex items-center justify-center">
              <img
                className="w-[246px] h-[289px] object-contain"
                alt="Size guide diagram"
                src="PantsSize.png"
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-[22px] w-full">
            <button className="font-normal text-[#666666] text-[13px] tracking-[0] leading-[normal] underline">
              사이즈 실측 안내
            </button>
            <button className="font-normal text-[#666666] text-[13px] tracking-[0] leading-[normal] underline">
              바지 사이즈 측정법
            </button>
          </div>
        </section>

        <div className="flex flex-col w-full items-start gap-4 px-4 py-4">
          <div className="relative self-stretch w-full bg-white overflow-hidden">
            <div className="flex w-full overflow-x-auto">
              <div className="flex flex-col w-[60px] min-w-[60px] bg-white z-10">
                <div className="flex h-6 items-center justify-center gap-2 p-2 border-t border-r border-b border-[#ebebeb]">
                  <span className="font-semibold text-black text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                    cm
                  </span>
                </div>
                <div className="flex h-6 items-center justify-center gap-2 p-2 border-r border-b border-[#ebebeb]">
                  <span className="font-semibold text-black text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                    내 사이즈
                  </span>
                </div>
                {sizeRows.map((row) => (
                  <div
                    key={row.size}
                    className="flex h-6 items-center justify-center gap-2 p-2 border-r border-b border-[#ebebeb]"
                  >
                    <span className="font-semibold text-black text-xs whitespace-nowrap tracking-[0] leading-[normal]">
                      {row.size}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col flex-1 overflow-x-auto border-t border-r border-b border-[#ebebeb]">
                <div className="flex items-center">
                  {columnHeaders.map((col, idx) => (
                    <div
                      key={idx}
                      className="relative w-[60px] min-w-[60px] h-6 border-r border-b border-[#ebebeb]"
                    >
                      <span
                        className={`absolute top-[5px] ${col.paddingLeft} font-semibold text-black text-xs whitespace-nowrap tracking-[0] leading-[normal]`}
                      >
                        {col.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex h-6 items-center justify-center gap-2 p-2 border-r border-b border-[#ebebeb]">
                  <span className="font-normal text-black text-xs text-center tracking-[0] leading-[normal] whitespace-nowrap">
                    사이즈를 직접 입력해 주세요
                  </span>
                </div>

                {sizeRows.map((row) => (
                  <div key={row.size} className="flex items-center">
                    {row.values.map((val, idx) => (
                      <div
                        key={idx}
                        className="flex w-[60px] min-w-[60px] h-6 items-center justify-center gap-2 p-2 border-r border-b border-[#ebebeb]"
                      >
                        <span className="font-normal text-black text-xs whitespace-nowrap tracking-[0] leading-[normal]">
                          {val}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-[11px] px-0 py-1 self-stretch w-full">
            <Button
              variant="outline"
              className="flex items-center justify-center gap-2 p-2 flex-1 rounded overflow-hidden border border-solid border-[#ebebeb] h-auto bg-white hover:bg-white"
            >
              <span className="font-medium text-black text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                구매내역 실측 선택하기
              </span>
            </Button>

            <Button
              variant="outline"
              className="flex items-center justify-center gap-2 p-2 flex-1 rounded overflow-hidden border border-solid border-[#ebebeb] h-auto bg-white hover:bg-white"
            >
              <span className="font-medium text-black text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                실측 직접 입력하기
              </span>
            </Button>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] flex items-center justify-between pl-6 pr-4 pt-2.5 pb-6 bg-white border-t border-[#0000001a] z-20">
        <div className="flex flex-col w-[25px] items-center justify-between gap-1">
          <Heart className="w-[22px] h-[18.57px] text-black" />
          <span className="self-stretch font-normal text-black text-[10px] text-center tracking-[0] leading-[normal]">
            1.6천
          </span>
        </div>

        <Button className="flex-1 ml-4 py-[13px] bg-black hover:bg-black/90 rounded text-white font-semibold text-sm tracking-[0] leading-[normal] h-auto">
          구매하기
        </Button>
      </div>
    </div>
  );
};
