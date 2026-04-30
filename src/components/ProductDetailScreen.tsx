import { useState, useEffect } from "react";
import { ArrowLeft, Home, Search, ShoppingBag, Heart, Star, ChevronDown, ChevronRight, X } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

const productTags = ["무신사단독", "아울렛"];

const sizeHeaders = ["총장", "허리단면", "엉덩이단면", "허벅지단면", "밑위", "밑단단면"];
const sizeDataRows = [
  ["103", "37.5", "47.5", "28.5", "27.5", "21"],
  ["104", "40", "50", "29.75", "28", "21.5"],
  ["104", "42.5", "52.5", "31", "28.5", "22"],
  ["105", "45", "55", "32.25", "29.5", "22.5"],
  ["105", "47.5", "57.5", "33.5", "30.5", "23"],
];

interface ProductDetailScreenProps {
  onClose?: () => void;
  onAIFittingClick?: () => void;
  onEditMeasurements?: () => void;
  onPurchaseClick?: () => void;
}

export const ProductDetailScreen = ({ onClose, onAIFittingClick, onEditMeasurements, onPurchaseClick }: ProductDetailScreenProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState<string>("actual");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full max-w-[390px] mx-auto flex flex-col bg-white relative min-h-screen">
      <div className="fixed w-full max-w-[390px] top-0 left-1/2 -translate-x-1/2 h-[52px] z-[4] flex bg-white">
        <div className="w-full flex items-center justify-between px-3 h-[44px]">
          <div className="flex items-center ml-3">
            <span className="font-bold text-black text-[15px]">9:41</span>
          </div>

          <div className="flex items-center gap-3 h-[11px]">
            <img src="/Mobile Signal(WhiteScreen).png" alt="Signal" className="h-full object-contain" />
            <img src="/Wifi(WhiteScreen).png" alt="Wifi" className="h-full object-contain" />
            <img src="/Battery(WhiteScreen).png" alt="Battery" className="h-full object-contain" />
          </div>
        </div>
      </div>

      <div className="flex w-full h-[52px] items-center justify-between px-4 py-0 fixed top-[52px] left-1/2 -translate-x-1/2 max-w-[390px] bg-white z-[3]">
        <button onClick={onClose} className="p-0 bg-transparent border-none">
          <ArrowLeft className="w-6 h-6 text-black" />
        </button>

        <div className="inline-flex items-center gap-[19px]">
          <Home onClick={() => {/* onHomeClick?.() */}} className="w-[18px] h-[19px] text-black cursor-pointer" />
          <Search className="w-[19px] h-[19px] text-black" />
          <ShoppingBag className="w-5 h-4 text-black" />
        </div>
      </div>

      <div className="mt-[104px] flex flex-col w-full pb-20">
        <section className="flex w-full flex-col items-center">
          <div className="relative flex h-[470px] items-center self-stretch w-full overflow-hidden bg-gray-100">
            <img
              className="w-full h-[470px] object-cover"
              alt="Product"
              src="/man_pants.png"
            />

            <div className="flex w-[calc(100%_-_33px)] items-center justify-between absolute bottom-[17px] left-[17px]">
              <div className="p-[2px] bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 bg-[length:200%_200%] animate-[gradient-shift_3s_ease-in-out_infinite] rounded transition-all duration-300 hover:scale-105 hover:animate-[shimmer_1.5s_ease-in-out_infinite] shadow-lg">
                <Button
                  onClick={onAIFittingClick}
                  variant="outline"
                  className="h-8 px-3 bg-white hover:bg-white rounded-[2px] border-none font-bold text-black text-sm tracking-[0] leading-[normal] whitespace-nowrap shadow-none"
                >
                  AI 피팅하기
                </Button>
              </div>

              <div className="flex flex-col w-[50px] items-center justify-center gap-2 px-2.5 py-1 bg-[#0f0f0f80] rounded-2xl overflow-hidden">
                <div className="inline-flex items-center justify-center gap-1">
                  <span className="font-normal text-white text-[13px] tracking-[0] leading-[normal]">
                    1
                  </span>
                  <span className="font-normal text-white text-[13px] tracking-[0] leading-[normal]">
                    /
                  </span>
                  <span className="font-normal text-white text-[13px] tracking-[0] leading-[normal]">
                    8
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-around gap-[69px] px-5 py-3 self-stretch w-full bg-[#00216d]">
            <div className="flex w-full items-center justify-between">
              <span className="font-normal text-white text-[13px] tracking-[0] leading-[normal]">
                주 7일 언제나 당일발송, 전상품 무료배송
              </span>
              <span className="font-bold text-white text-[13px] tracking-[0] leading-[normal]">
                무배당발 &gt;
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between px-4 py-3 self-stretch w-full border-b border-solid border-[#0000001a]">
            <div className="inline-flex items-center gap-[15px]">
              <div className="w-8 h-8 bg-[#2e2e2e] rounded-full flex-shrink-0" />
              <span className="font-normal text-black text-[13px] tracking-[0] leading-[normal]">
                무신사 스탠다드
              </span>
              <Badge className="bg-[#989898] text-white text-[10px] font-normal px-1.5 py-0 rounded hover:bg-[#989898]">
                단독
              </Badge>
            </div>

            <div className="flex flex-col w-[52px] items-start gap-2 px-[7px] py-0.5 bg-white rounded border border-solid border-[#cacaca]">
              <div className="flex items-center justify-center gap-0.5 self-stretch w-full">
                <Heart className="w-[11px] h-[9px] fill-current text-black" />
                <span className="font-normal text-black text-[10px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                  104만
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2.5 px-4 py-2.5 self-stretch w-full">
            <p className="self-stretch font-normal text-[#6b6b6b] text-[13px] tracking-[0] leading-[normal]">
              하의 &gt; 치노팬츠 (무신사 스탠다드)
            </p>

            <h1 className="self-stretch font-medium text-black text-base tracking-[0] leading-[normal]">
              남성 스트레이트 치노 팬츠 [베이지]
            </h1>

            <div className="inline-flex items-center gap-1.5">
              {productTags.map((tag) => (
                <div
                  key={tag}
                  className="inline-flex items-center justify-center gap-2 p-0.5 bg-[#f2f2f2] rounded"
                >
                  <span className="font-normal text-[#7b7b7b] text-[10px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start px-4 py-0 self-stretch w-full">
            <div className="flex items-center gap-3.5 px-0 py-1 self-stretch w-full">
              <div className="inline-flex items-center gap-0.5">
                <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                <span className="font-semibold text-black text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                  4.9
                </span>
              </div>

              <span className="font-normal text-[#919191] text-xs tracking-[0] leading-[normal] underline whitespace-nowrap">
                후기 458개
              </span>

              <div className="inline-flex items-center justify-center gap-2 px-1.5 py-1 bg-white rounded-2xl border border-solid border-[#be8cff]">
                <span className="font-normal text-[#7f1eff] text-[10px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                  AI 요약 보기
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 px-0 py-2 self-stretch w-full">
              <span className="font-semibold text-[#0f4fff] text-xs text-center tracking-[0] leading-[normal] whitespace-nowrap">
                오늘 22시까지 결제 시 내일(일) 도착보장
              </span>
            </div>

            <div className="flex flex-col items-start justify-center gap-1.5 px-0 py-1.5 self-stretch w-full">
              <div className="flex items-center justify-around gap-2 self-stretch w-full">
                <span className="flex-1 font-semibold text-[#919191] text-xs tracking-[0] leading-[normal] line-through">
                  29,900원
                </span>
              </div>

              <div className="flex items-center gap-2 self-stretch w-full">
                <span className="font-semibold text-[#ff0000] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                  30%
                </span>
                <span className="font-semibold text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                  20,900원
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 p-4 self-stretch w-full">
            <Card className="self-stretch w-full rounded border border-solid border-[#d9d9d9] shadow-none">
              <CardContent className="p-0">
                <div className="flex items-center justify-between px-4 py-3.5 self-stretch w-full border-b border-solid border-[#ececec]">
                  <div className="inline-flex items-center gap-1.5">
                    <span className="font-semibold text-[#ff0000] text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
                      20,900원
                    </span>
                    <span className="font-semibold text-[#ff0000] text-xs text-center tracking-[0] leading-[normal] whitespace-nowrap">
                      최대혜택가
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1">
                    <span className="font-semibold text-[#919191] text-xs text-center tracking-[0] leading-[normal] whitespace-nowrap">
                      자세히
                    </span>
                    <ChevronDown className="w-4 h-4 text-[#919191]" />
                  </div>
                </div>

                <div className="flex items-center gap-2 px-4 py-3.5 self-stretch w-full border-b border-solid border-[#ececec]">
                  <span className="font-medium text-black text-[13px] text-center tracking-[0] leading-[normal]">
                    1,500원 최대적립
                  </span>
                </div>

                <div className="flex items-center justify-between px-4 py-3.5 self-stretch w-full bg-neutral-100">
                  <span className="font-normal text-black text-[13px] text-center tracking-[0] leading-[normal]">
                    후기 적립
                  </span>
                  <span className="font-semibold text-black text-xs text-center tracking-[0] leading-[normal] whitespace-nowrap">
                    1,500원
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <nav className="flex w-full items-stretch border-b border-neutral-200">
          {[
            { id: "info", label: "정보" },
            { id: "size", label: "사이즈" },
            { id: "recommend", label: "추천" },
            { id: "snap", label: "스냅・후기", subLabel: "221" },
            { id: "inquiry", label: "문의", subLabel: "24" },
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

        <section className="flex flex-col w-full items-start gap-2 p-4">
          <h2 className="self-stretch font-semibold text-black text-lg tracking-[0] leading-[normal]">
            사이즈 정보
          </h2>

          <Card className="self-stretch w-full bg-neutral-100 rounded-sm border border-solid border-[#e8e8e8] shadow-none">
            <CardContent className="flex flex-col items-center justify-center gap-3 p-4">
              <div className="flex items-start justify-between self-stretch w-full">
                <div className="flex flex-col items-start gap-0.5 flex-1">
                  <p className="w-fit font-normal text-transparent text-sm text-center tracking-[0] leading-[normal]">
                    <span className="font-medium text-black">
                      회원님과 비슷한 체형이 구매한 사이즈
                    </span>
                    <span className="font-medium text-[#838383]">&nbsp;</span>
                    <span className="font-medium text-[#0f4fff]">34</span>
                  </p>

                  <div className="inline-flex items-center gap-2">
                    <span className="font-normal text-[#666666] text-[13px] text-center tracking-[0] leading-[normal]">
                      173cm・85kg
                    </span>
                    <button
                      onClick={onEditMeasurements}
                      className="font-normal text-[#666666] text-[13px] text-center tracking-[0] leading-[normal] underline bg-transparent border-none cursor-pointer p-0"
                    >
                      수정하기
                    </button>
                  </div>
                </div>

                <X className="w-5 h-5 flex-shrink-0 text-black" />
              </div>

              <div className="flex flex-col items-start gap-2 self-stretch w-full">
                <div className="flex items-center justify-between self-stretch w-full">
                  <span className="font-semibold text-black text-[13px] text-center tracking-[0] leading-[normal]">
                    34
                  </span>
                  <span className="font-semibold text-black text-[13px] text-center tracking-[0] leading-[normal]">
                    56% (5명 구매)
                  </span>
                </div>

                <div className="self-stretch w-full h-1.5 bg-[#dfdfdf] rounded-lg overflow-hidden">
                  <div className="h-full w-[56%] bg-[#0f4fff] rounded-lg" />
                </div>
              </div>

              <div className="flex items-center self-stretch w-full">
                <p className="font-normal text-[#666666] text-xs text-center tracking-[0] leading-[normal]">
                  개인의 체형은 다를 수 있으므로 참고 용도로만 활용해주세요.
                </p>
              </div>
            </CardContent>
          </Card>

          <button className="flex h-[33px] items-center justify-center gap-1 p-2 self-stretch w-full bg-white rounded border border-solid border-[#e8e8e8]">
            <span className="font-normal text-black text-sm text-center tracking-[0] leading-[normal]">
              비슷한 체형의 구매후기 15개
            </span>
            <ChevronRight className="w-4 h-4 text-black" />
          </button>
        </section>

        <section className="flex flex-col w-full items-start gap-2">
          <div className="flex flex-col items-start w-full">
            <div className="flex items-center gap-[11px] px-4 py-1 w-full">
              {[
                { id: "actual", label: "실측 사이즈" },
                { id: "standard", label: "기준표 사이즈" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center justify-center gap-2 px-2 py-1 rounded overflow-hidden border border-solid cursor-pointer ${
                    activeTab === tab.id ? "border-black" : "border-[#dfdfdf]"
                  }`}
                >
                  <span
                    className={`font-normal text-[13px] tracking-[0] leading-[normal] ${
                      activeTab === tab.id ? "text-black" : "text-[#cacaca]"
                    }`}
                  >
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>

            <div className="relative w-full h-[289px] bg-white flex items-center justify-center overflow-hidden">
              <img
                className="w-[246px] h-[289px] object-contain"
                alt="Size guide diagram"
                src="/PantsSize.png"
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-[22px] w-full pb-4">
            <a
              href="#"
              className="font-normal text-[#666666] text-[13px] tracking-[0] leading-[normal] underline"
            >
              사이즈 실측 안내
            </a>
            <a
              href="#"
              className="font-normal text-[#666666] text-[13px] tracking-[0] leading-[normal] underline"
            >
              바지 사이즈 측정법
            </a>
          </div>
        </section>

        <div className="flex flex-col w-full items-start gap-4 px-4 py-0 mb-4">
          <div className="relative w-full bg-white overflow-hidden">
            <ScrollArea className="w-full whitespace-nowrap">
              <div className="flex flex-row">
                <div className="flex flex-col w-[60px] shrink-0 bg-white z-10">
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
                  {["28", "30", "32", "34", "36"].map((size) => (
                    <div
                      key={size}
                      className="flex h-6 items-center justify-center gap-2 p-2 border-r border-b border-[#ebebeb]"
                    >
                      <span className="font-semibold text-black text-xs whitespace-nowrap tracking-[0] leading-[normal]">
                        {size}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col min-w-0 border-t border-r border-b border-[#ebebeb]">
                  <div className="flex items-center">
                    {sizeHeaders.map((header) => (
                      <div
                        key={header}
                        className="flex w-[60px] h-6 items-center justify-center border-r border-b border-[#ebebeb] px-1"
                      >
                        <span className="font-semibold text-black text-xs whitespace-nowrap tracking-[0] leading-[normal]">
                          {header}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div
                    className="flex h-6 items-center justify-center gap-2 p-2 border-r border-b border-[#ebebeb]"
                    style={{ width: `${60 * sizeHeaders.length}px` }}
                  >
                    <span className="font-normal text-black text-xs text-center tracking-[0] leading-[normal] whitespace-nowrap">
                      사이즈를 직접 입력해 주세요
                    </span>
                  </div>

                  {sizeDataRows.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex items-center">
                      {row.map((cell, cellIndex) => (
                        <div
                          key={cellIndex}
                          className="flex w-[60px] h-6 items-center justify-center gap-2 p-2 border-r border-b border-[#ebebeb]"
                        >
                          <span className="font-normal text-black text-xs whitespace-nowrap tracking-[0] leading-[normal]">
                            {cell}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>

          <div className="flex items-center justify-center gap-[11px] px-0 py-1 w-full">
            <Button
              variant="outline"
              className="flex-1 h-auto p-2 rounded border border-solid border-[#ebebeb] font-medium text-black text-xs tracking-[0] leading-[normal] whitespace-nowrap bg-white hover:bg-gray-50"
            >
              구매내역 실측 선택하기
            </Button>
            <Button
              variant="outline"
              className="flex-1 h-auto p-2 rounded border border-solid border-[#ebebeb] font-medium text-black text-xs tracking-[0] leading-[normal] whitespace-nowrap bg-white hover:bg-gray-50"
            >
              실측 직접 입력하기
            </Button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] flex items-center justify-between pl-6 pr-4 pt-2.5 pb-6 bg-white border-t border-[#0000001a] z-[2]">
        <div className="flex flex-col w-[25px] items-center justify-between gap-1">
          <Heart className="w-[22px] h-[19px] text-black" />
          <span className="self-stretch font-normal text-black text-[10px] text-center tracking-[0] leading-[normal]">
            1.6천
          </span>
        </div>

        <Button
          onClick={onPurchaseClick}
          className="flex-1 ml-4 py-[13px] bg-black hover:bg-black/90 rounded text-white text-sm font-semibold tracking-[0] leading-[normal] h-auto"
        >
          구매하기
        </Button>
      </div>
    </div>
  );
};
