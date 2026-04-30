import { useState } from "react";
import { X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPurchaseClick?: (quantity: number) => void;
  onCartClick?: (quantity: number) => void;
  selectedSize?: number;
  height?: string;
  weight?: string;
  productType?: "male" | "female" | "female2";
}

export const PurchaseModal = ({
  isOpen,
  onClose,
  onPurchaseClick,
  onCartClick,
  selectedSize = 28,
  productType = "female",
}: PurchaseModalProps): JSX.Element | null => {
  const [quantity, setQuantity] = useState(1);
  const unitPrice = productType === "male" ? 20900 : 15990;

  const handleDecrement = () => {
    if (quantity > 1) setQuantity((q) => q - 1);
  };

  const handleIncrement = () => {
    setQuantity((q) => q + 1);
  };

  const formatPrice = (price: number) => price.toLocaleString("ko-KR") + "원";

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center">
      <div
        className="absolute inset-0 bg-[#5a5a5a] bg-opacity-40"
        onClick={onClose}
      />

      <div className="relative flex flex-col w-full max-w-[390px] mx-auto items-center justify-end gap-6 pt-4 pb-6 px-4 bg-white rounded-[16px_16px_0px_0px]">
        <div className="w-10 h-1 bg-[#dfdfdf] rounded-[32px]" />

        <div className="flex flex-col w-full items-center gap-3">
          <div className="flex w-full items-center justify-between px-2 py-3 bg-white rounded border border-solid border-[#e8e8e8]">
            <span className="font-normal text-[#838383] text-sm tracking-[0] leading-[normal]">
              사이즈
            </span>
            <ChevronDown className="w-4 h-4 text-[#838383]" />
          </div>

          <div className="flex w-full items-center px-0 py-0">
            <p className="font-normal text-sm tracking-[0] leading-[normal]">
              {productType === "male" && (
                <>
                  <span className="text-[#838383]">비슷한 체형(173cm ・85kg)은</span>
                  <span className="text-[#0f4fff]"> 34</span>
                  <span className="text-[#838383]">를 많이 구매했어요</span>
                </>
              )}
              {productType === "female" && (
                <>
                  <span className="text-[#838383]">비슷한 체형(161cm ・53.5kg)은</span>
                  <span className="text-[#0f4fff]"> 26</span>
                  <span className="text-[#838383]">을 많이 구매했어요</span>
                </>
              )}
              {productType === "female2" && (
                <>
                  <span className="text-[#838383]">비슷한 체형(161cm ・60kg)은</span>
                  <span className="text-[#0f4fff]"> 28</span>
                  <span className="text-[#838383]">을 많이 구매했어요</span>
                </>
              )}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-3 p-4 self-stretch w-full bg-neutral-100 rounded border border-solid border-[#e8e8e8]">
          <div className="flex items-start justify-between self-stretch w-full">
            <div className="flex flex-col items-start gap-0.5 flex-1">
              <span className="font-normal text-[#838383] text-sm tracking-[0] leading-[normal]">
                {selectedSize}
              </span>
              <span className="font-normal text-[#0f4fff] text-sm tracking-[0] leading-[normal]">
                내일(금) 도착보장
              </span>
            </div>
            <button
              onClick={onClose}
              className="flex-[0_0_auto] p-0 bg-transparent border-none cursor-pointer"
            >
              <X className="w-5 h-5 text-[#838383]" />
            </button>
          </div>

          <div className="flex items-center justify-between self-stretch w-full">
            <div className="inline-flex items-center border-[0.5px] border-solid border-[#cbcbcb]">
              <button
                onClick={handleDecrement}
                className="w-7 h-6 bg-neutral-100 flex items-center justify-center font-normal text-[#444444] text-sm tracking-[0] leading-[normal] border-none cursor-pointer"
              >
                -
              </button>

              <div className="w-[42px] h-6 bg-white border-r-[0.5px] border-r-[#cbcbcb] border-l-[0.5px] border-l-[#cbcbcb] flex items-center justify-center font-normal text-[#444444] text-sm tracking-[0] leading-[normal]">
                {quantity}
              </div>

              <button
                onClick={handleIncrement}
                className="w-7 h-6 bg-white flex items-center justify-center font-normal text-[#444444] text-sm tracking-[0] leading-[normal] border-none cursor-pointer"
              >
                +
              </button>
            </div>

            <span className="font-semibold text-black text-[15px] text-center whitespace-nowrap tracking-[0] leading-[normal]">
              {formatPrice(unitPrice)}
            </span>
          </div>
        </div>

        <div className="flex w-full items-center justify-between px-0 py-0">
          <span className="font-semibold text-black text-[13px] text-center tracking-[0] leading-[normal]">
            총 {quantity}개
          </span>
          <span className="font-semibold text-black text-[13px] text-center tracking-[0] leading-[normal]">
            {formatPrice(unitPrice * quantity)}
          </span>
        </div>

        <div className="flex w-full h-[43px] items-center justify-center gap-2">
          <Button
            onClick={() => onCartClick?.(quantity)}
            variant="outline"
            className="flex-1 h-[43px] bg-white rounded border border-solid border-[#eaeaea] font-semibold text-black text-sm tracking-[0] leading-[normal] hover:bg-gray-50"
          >
            장바구니
          </Button>

          <Button
            onClick={() => onPurchaseClick?.(quantity)}
            className="flex-1 h-[43px] bg-black rounded font-semibold text-white text-sm tracking-[0] leading-[normal] hover:bg-gray-900"
          >
            구매하기
          </Button>
        </div>
      </div>
    </div>
  );
};
