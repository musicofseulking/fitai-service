import { ArrowLeft, Home, ChevronDown } from "lucide-react";

interface OrderScreenProps {
  onClose?: () => void;
  onHomeClick?: () => void;
  onPaymentComplete?: () => void;
  selectedSize?: number;
  quantity?: number;
  productName?: string;
  productBrand?: string;
  productImage?: string;
  unitPrice?: number;
  productType?: "male" | "female" | "female2";
}

export const OrderScreen = ({
  onClose,
  onHomeClick,
  onPaymentComplete,
  selectedSize,
  quantity = 1,
  productName,
  productBrand = "무신사 스탠다드",
  productImage,
  unitPrice,
  productType = "female",
}: OrderScreenProps): JSX.Element => {
  const getProductName = () => {
    if (productName) return productName;
    return "스트레이트 치노 팬츠 [베이지]";
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

  const formatPrice = (price: number) => price.toLocaleString("ko-KR") + "원";
  const computedUnitPrice = unitPrice ?? (productType === "male" ? 20900 : 15990);
  const totalPrice = computedUnitPrice * quantity;
  const points = Math.floor((totalPrice * 0.13) / 10) * 10;

  return (
    <div className="w-full max-w-[390px] mx-auto flex flex-col bg-white relative h-[100dvh] overflow-hidden">
      <div className="fixed w-full max-w-[390px] top-0 left-1/2 -translate-x-1/2 h-[52px] z-[50] flex bg-neutral-100">
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

      <div className="flex z-[40] w-full h-[52px] items-center justify-between px-2.5 fixed top-[52px] left-1/2 -translate-x-1/2 max-w-[390px] bg-neutral-100">
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 h-6 p-0 bg-transparent border-none cursor-pointer"
        >
          <ArrowLeft className="w-6 h-6 text-black" />
          <span className="font-bold text-black text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
            주문서
          </span>
        </button>
        <button
          onClick={() => {/* onHomeClick?.() */}}
          className="h-6 w-6 flex items-center justify-center mr-2 p-0 bg-transparent border-none cursor-pointer"
        >
          <Home className="w-[18px] h-[19.91px] text-black" />
        </button>
      </div>

      <div className="pt-[104px] pb-[135px] w-full h-full overflow-y-auto custom-scrollbar">
        <section className="flex flex-col w-full items-start gap-3 p-4">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-[15px] flex-1">
              <span className="font-medium text-black text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
                김무명
              </span>
              <div className="inline-flex items-center justify-center gap-2 p-px bg-[#e3e3e3]">
                <span className="font-normal text-black text-xs text-center tracking-[0] leading-[normal] whitespace-nowrap">
                  기본 배송지
                </span>
              </div>
            </div>
            <div className="inline-flex items-center justify-end gap-2 px-1.5 py-1 bg-white rounded overflow-hidden border border-solid border-[#d9d9d9] cursor-pointer">
              <span className="font-normal text-black text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                배송지 변경
              </span>
            </div>
          </div>
          <p className="font-normal text-black text-[13px] tracking-[0] leading-[normal] w-full">
            서울 종로구 종로3길17, 광화문D타워 D1동 16층, 17층
          </p>
        </section>

        <section className="flex flex-col w-full items-center gap-[15px] px-4 pb-4">
          <div className="flex flex-col items-start gap-2.5 w-full">
            <div className="flex items-center justify-between px-3 py-3 w-full bg-white rounded border border-solid border-[#e8e8e8] cursor-pointer">
              <span className="font-normal text-[#1a1a1a] text-[14px]">
                직접입력
              </span>
              <ChevronDown className="w-5 h-5 text-black" />
            </div>

            <div className="flex h-[111px] items-start px-3 py-3 w-full bg-white rounded border border-solid border-[#e8e8e8]">
              <span className="font-normal text-[#1a1a1a] text-[13.5px]">
                부재 시 문앞에 놓아주세요
              </span>
            </div>
          </div>

          <div className="font-normal text-[#353535] text-xs text-right w-full">
            14/50
          </div>
        </section>

        <section className="flex flex-col w-full items-center">
          <div className="flex items-center p-4 w-full bg-white">
            <div className="inline-flex items-center gap-2">
              <span className="font-medium text-black text-lg tracking-[0] leading-[normal] whitespace-nowrap">
                주문 상품 {quantity}개
              </span>
            </div>
          </div>

          <div className="flex items-start gap-[15px] px-4 py-1.5 w-full bg-white">
            <div className="flex items-start gap-3 flex-1">
              <div className="w-[75px] h-[95px] bg-[#f0f0f0] rounded overflow-hidden flex-shrink-0 relative">
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  alt={displayProductName}
                  src={displayImage}
                />
              </div>

              <div className="flex flex-col items-start gap-[5px] flex-1 mt-0.5">
                <span className="font-bold text-black text-[13px] tracking-[0] leading-[normal] w-full">
                  {productBrand}
                </span>
                <span className="font-medium text-[#222] text-[14px] tracking-[0] leading-[normal] w-full">
                  {displayProductName}
                </span>
                <span className="font-normal text-[#777] text-[13px] tracking-[0] leading-[normal] w-full">
                  {displaySize} / {quantity}개
                </span>
                <span className="font-bold text-black text-[16px] tracking-[0] leading-[normal] w-full mt-1">
                  {formatPrice(totalPrice)}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 px-4 py-4 w-full">
            <div className="flex items-center justify-center py-[11px] w-full bg-[#f4f4f4] rounded">
              <span className="font-normal text-[#333] text-[12.5px] tracking-tight">
                🚚 무배당발 오늘 22시까지 결제 시 내일(금) 도착보장
              </span>
            </div>

            <button className="flex items-center justify-center py-[11px] w-full bg-white rounded border border-solid border-[#d9d9d9] cursor-pointer">
              <span className="font-medium text-black text-[14px]">
                쿠폰 사용
              </span>
            </button>
          </div>

          <div className="w-full px-4 mt-2 mb-10">
            <div className="w-full bg-[#484848] rounded-[8px] p-[18px] flex items-center justify-between text-white cursor-pointer">
              <div className="flex flex-col gap-1.5">
                <span className="font-bold text-[15px] tracking-tight">뷰티 페스타 7%</span>
                <span className="text-[#b5b5b5] text-[12px] tracking-tight">7일 남음 · 50,000원 이상 구매 시 최대 1만원 할인</span>
              </div>
              <span className="font-bold text-[13.5px] tracking-tight">4장 더보기</span>
            </div>
          </div>
        </section>
      </div>

      <div className="flex flex-col w-full max-w-[390px] h-32 items-center justify-end gap-2 pt-4 pb-6 px-4 fixed left-1/2 -translate-x-1/2 bottom-0 bg-white z-40 border-t border-neutral-200">
        <div className="flex w-full items-center justify-between px-0 py-0">
          <span className="font-semibold text-black text-sm tracking-[0] leading-[normal]">
            카드 결제
          </span>
          <div className="inline-flex items-center justify-end gap-0.5">
            <span className="font-medium text-black text-sm tracking-[0] leading-[normal]">
              최대 {formatPrice(points)} 적립
            </span>
          </div>
        </div>

        <button
          onClick={onPaymentComplete}
          className="flex items-center justify-center gap-2 px-[124px] py-[13px] w-full bg-black rounded overflow-hidden cursor-pointer"
        >
          <span className="font-semibold text-white text-lg tracking-[0] leading-[normal] whitespace-nowrap">
            {formatPrice(totalPrice)} 결제하기
          </span>
        </button>
      </div>
    </div>
  );
};
