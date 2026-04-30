import { useState } from "react";
import { ArrowLeft, Home, X, ChevronUp } from "lucide-react";
import { Button } from "./ui/button";

interface CartScreenProps {
  onClose?: () => void;
  onHomeClick?: () => void;
  onPurchaseClick?: (quantity: number) => void;
  selectedSize?: number;
  quantity?: number;
  productName?: string;
  productBrand?: string;
  productImage?: string;
  unitPrice?: number;
  productType?: "male" | "female" | "female2";
}

export const CartScreen = ({
  onClose,
  onHomeClick,
  onPurchaseClick,
  selectedSize,
  quantity = 1,
  productName,
  productBrand = "무신사 스탠다드",
  productImage,
  unitPrice,
  productType = "female",
}: CartScreenProps): JSX.Element => {
  const getProductName = () => {
    if (productName) return productName;
    return productType === "male"
      ? "남성 스트레이트 치노 팬츠 [베이지]"
      : "여성 스트레이트 치노 팬츠 [베이지]";
  };

  const getSelectedSize = () => {
    if (selectedSize !== undefined) return selectedSize;
    if (productType === "male") return 34;
    if (productType === "female") return 26;
    return 28;
  };

  const getProductImage = () => {
    if (productImage) return productImage;
    return productType === "male" ? "/man_pants.png" : "/IMG_6677_3.png";
  };

  const displayProductName = getProductName();
  const displaySize = getSelectedSize();
  const displayImage = getProductImage();
  const [allSelected, setAllSelected] = useState(false);
  const formatPrice = (price: number) => price.toLocaleString("ko-KR") + "원";
  const computedUnitPrice = unitPrice ?? (productType === "male" ? 20900 : 15990);
  const totalPrice = computedUnitPrice * quantity;

  return (
    <div className="w-full max-w-[390px] mx-auto flex flex-col bg-white relative min-h-screen">
      <div className="sticky top-0 left-0 w-full h-[52px] flex bg-neutral-100 z-50">
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

      <div className="w-full h-[52px] flex items-center justify-between bg-neutral-100">
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 ml-2.5 p-0 bg-transparent border-none cursor-pointer"
        >
          <ArrowLeft className="w-6 h-6 text-black" />
          <span className="font-bold text-black text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
            장바구니
          </span>
        </button>

        <button
          onClick={() => {/* onHomeClick?.() */}}
          className="h-6 w-6 mr-4 flex items-center justify-center p-0 bg-transparent border-none cursor-pointer"
        >
          <Home className="w-[18px] h-[19.91px] text-black" />
        </button>
      </div>

      <div className="flex flex-col w-full pb-32">
        <div className="flex flex-col w-full items-start">
          <div className="flex items-center gap-[15px] px-4 py-2 self-stretch w-full bg-neutral-100">
            <span className="font-semibold text-black text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
              전체 1
            </span>
            <span className="font-normal text-[#757575] text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
              무배당발 1
            </span>
          </div>

          <div className="flex items-center px-4 self-stretch w-full bg-neutral-100 h-px">
            <div className="w-10 h-px bg-black" />
          </div>
        </div>

        <div className="flex w-full items-center justify-between px-4 py-3 bg-white border-b border-gray-100">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="select-all"
              checked={allSelected}
              onChange={(e) => setAllSelected(e.target.checked)}
              className="w-[18px] h-[18px]"
            />
            <label
              htmlFor="select-all"
              className="font-normal text-black text-sm tracking-[0] leading-[normal] cursor-pointer"
            >
              전체 선택
            </label>
          </div>

          <Button
            variant="outline"
            className="h-[26px] px-2 py-0 rounded border border-solid border-[#a7a7a7] bg-white hover:bg-gray-50 font-normal text-black text-sm tracking-[0] leading-[normal]"
          >
            선택 삭제
          </Button>
        </div>

        <div className="flex w-full items-center justify-between p-4 bg-white">
          <div className="inline-flex items-center gap-2 flex-[0_0_auto]">
            <input type="checkbox" className="w-[18px] h-[18px]" />
            <span className="font-bold text-black text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
              {productBrand}
            </span>
          </div>

          <span className="font-normal text-[#686868] text-sm text-center tracking-[0] leading-[normal] underline cursor-pointer">
            브랜드숍
          </span>
        </div>

        <div className="flex w-full items-start gap-[15px] px-4 py-1.5 bg-white">
          <input type="checkbox" className="w-[18px] h-[18px] flex-shrink-0 mt-0.5" />

          <div className="flex items-start gap-[9px] flex-1 min-w-0">
            <div className="w-20 h-[90px] bg-[#a2a2a2] rounded-lg overflow-hidden flex-shrink-0 relative">
              <img
                className="absolute top-0 left-0 w-20 h-[90px] object-cover"
                alt={displayProductName}
                src={displayImage}
              />
            </div>

            <div className="flex flex-col flex-1 min-w-0 items-start gap-1.5">
              <p className="self-stretch mt-[-1.00px] font-medium text-black text-[13px] tracking-[0] leading-[normal]">
                {displayProductName}
              </p>

              <p className="self-stretch font-normal text-[#777777] text-[13px] tracking-[0] leading-[normal]">
                {displaySize} / {quantity}개
              </p>

              <div className="relative w-[57px] h-4 bg-[#e3e3e3] flex items-center">
                <span className="absolute left-0.5 font-normal text-black text-xs text-center tracking-[0] leading-[normal] whitespace-nowrap">
                  무신사단독
                </span>
              </div>

              <p className="self-stretch font-semibold text-black text-base tracking-[0] leading-[normal]">
                {formatPrice(totalPrice)}
              </p>
            </div>
          </div>

          <button className="flex-shrink-0 mt-0.5 p-0 bg-transparent border-none cursor-pointer">
            <X className="w-3.5 h-3.5 text-black" />
          </button>
        </div>

        <div className="flex flex-col w-full items-center justify-center gap-1.5 px-4 py-2">
          <div className="flex w-full items-center justify-center rounded overflow-hidden bg-neutral-100 h-8">
            <span className="font-normal text-[#303030] text-xs tracking-[0] leading-[normal] whitespace-nowrap">
              🚚 무배당발 오늘 22시까지 결제 시 내일(금) 도착보장
            </span>
          </div>

          <div className="flex items-center gap-1.5 w-full">
            <Button
              variant="outline"
              className="flex-1 h-8 bg-white border border-solid border-[#d9d9d9] rounded font-normal text-black text-sm tracking-[0] leading-[normal] hover:bg-white hover:text-black px-4 py-0"
            >
              옵션 변경
            </Button>
            <Button
              variant="outline"
              className="flex-1 h-8 bg-white border border-solid border-[#d9d9d9] rounded font-normal text-black text-sm tracking-[0] leading-[normal] hover:bg-white hover:text-black px-4 py-0"
            >
              쿠폰 사용
            </Button>
          </div>
        </div>

        <div className="flex w-full items-center justify-between p-4 bg-white">
          <div className="flex items-center gap-2">
            <span className="font-medium text-black text-lg text-center tracking-[0] leading-[normal] whitespace-nowrap">
              결제 혜택
            </span>
          </div>

          <span className="font-normal text-[#686868] text-sm text-center tracking-[0] leading-[normal] underline cursor-pointer">
            전체보기
          </span>
        </div>

        <section className="flex flex-col w-full items-start gap-2 px-0 py-1 bg-white">
          <div className="flex flex-col items-start gap-3.5 px-4 py-0 w-full">
            <h2 className="self-stretch font-semibold text-black text-[13px] tracking-[0] leading-[normal]">
              무신사 현대카드 혜택
            </h2>

            <div className="flex items-center justify-between px-0 py-1 w-full rounded">
              <div className="inline-flex items-center gap-3.5">
                <div className="w-[27px] h-[27px] bg-black rounded-[30px] shrink-0" />
                <span className="font-normal text-black text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                  무신사 현대카드 즉시 할인 3만원
                </span>
              </div>

              <Button
                variant="outline"
                className="h-auto px-3 py-1 bg-white rounded border border-solid border-[#d9d9d9] font-normal text-black text-xs tracking-[0] leading-[normal] whitespace-nowrap hover:bg-gray-50"
              >
                할인 받기
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-start gap-[9px] px-4 py-0 w-full">
            <h2 className="self-stretch font-semibold text-black text-[13px] tracking-[0] leading-[normal]">
              즉시 할인
            </h2>

            <div className="flex items-center gap-[15px] px-0 py-1 w-full rounded">
              <div className="inline-flex items-center gap-1.5">
                <div className="w-[27px] h-[27px] bg-black rounded-[30px] shrink-0" />
                <span className="font-normal text-black text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                  토스페이 X 계좌
                </span>
                <span className="font-normal text-[#8f8f8f] text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                  6만원 이상 결제 시 6천원 즉시 할인
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="flex w-full h-[50px] items-center justify-between px-4 py-0 bg-[#454545] rounded-t-lg">
          <div className="flex flex-col items-start gap-[3px]">
            <p className="font-bold text-white text-sm tracking-[0] leading-[normal] m-0">
              뷰티 페스타 7%
            </p>
            <p className="font-normal text-[#ffffffcc] text-[11px] tracking-[0] leading-[normal] m-0">
              7일 남음 · 50,000원 이상 구매 시 최대 1만원 할인
            </p>
          </div>

          <span className="font-bold text-white text-xs text-right tracking-[0] leading-[normal] whitespace-nowrap">
            4장 더보기
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-end gap-2 pt-4 pb-6 px-4 w-full max-w-[390px] bg-white border-t border-border fixed bottom-0 left-1/2 -translate-x-1/2 z-40">
        <div className="flex w-full items-center justify-between">
          <span className="font-normal text-black text-sm tracking-[0] leading-[normal]">
            LV.1 웰컴
          </span>

          <div className="flex items-center justify-end gap-0.5">
            <span className="font-semibold text-black text-sm tracking-[0] leading-[normal]">
              무신사는 무료배송
            </span>
            <ChevronUp className="w-6 h-6 text-black" />
          </div>
        </div>

        <Button
          onClick={() => onPurchaseClick?.(quantity)}
          className="w-full bg-black hover:bg-black/90 text-white rounded py-[13px] h-auto font-semibold text-lg tracking-[0] leading-[normal] whitespace-nowrap"
        >
          {formatPrice(totalPrice)} 구매하기 ({quantity}개)
        </Button>
      </div>
    </div>
  );
};
