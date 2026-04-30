import { useState } from "react";
import { ArrowLeft, Home, ChevronLeft, ChevronRight, Ruler } from "lucide-react";
import { Button } from "./ui/button";
import { PurchaseModal } from "./PurchaseModal";
import { OrderScreen } from "./OrderScreen";
import { CartScreen } from "./CartScreen";
import { OrderCompleteScreen } from "./OrderCompleteScreen";
import { FitGuideCards } from "./FitGuideCards";

interface AIFittingResultScreenFemale2Props {
  onClose?: () => void;
  onHomeClick?: () => void;
  onPurchaseClick?: () => void;
  onEditMeasurements?: () => void;
  height?: string;
  weight?: string;
  bodyType?: string;
}

export const AIFittingResultScreenFemale2 = ({
  onClose,
  onHomeClick,
  onEditMeasurements,
  height = "168cm",
  weight = "53kg",
  bodyType = "역삼각형",
}: AIFittingResultScreenFemale2Props): JSX.Element => {
  const [selectedSize, setSelectedSize] = useState(28);
  const [currentViewIndex, setCurrentViewIndex] = useState(0);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const [isOrderScreenOpen, setIsOrderScreenOpen] = useState(false);
  const [isCartScreenOpen, setIsCartScreenOpen] = useState(false);
  const [isOrderCompleteOpen, setIsOrderCompleteOpen] = useState(false);
  const [orderQuantity, setOrderQuantity] = useState(1);
  const sizes = [25, 26, 27, 28, 29];

  const size26Images = [
    "female2_1.png",
    "female2_2.png",
    "female2_3.png",
    "female2_4.png"
  ];

  const size28Images = [
    "female2_5.png",
    "female2_6.png",
    "female2_7.png",
    "female2_8.png"
  ];

  const viewImages = selectedSize === 26 ? size26Images : size28Images;

  const handlePreviousView = () => {
    setCurrentViewIndex((prev) => (prev === 0 ? viewImages.length - 1 : prev - 1));
  };

  const handleNextView = () => {
    setCurrentViewIndex((prev) => (prev === viewImages.length - 1 ? 0 : prev + 1));
  };

  const handleSizeClick = (size: number) => {
    if (size === 25 || size === 27 || size === 29) return;
    setSelectedSize(size);
    setCurrentViewIndex(0);
  };

  const handlePurchaseFromModal = (quantity: number) => {
    setOrderQuantity(quantity);
    setIsPurchaseModalOpen(false);
    setIsOrderScreenOpen(true);
  };

  const handleCartFromModal = (quantity: number) => {
    setOrderQuantity(quantity);
    setIsPurchaseModalOpen(false);
    setIsCartScreenOpen(true);
  };

  const handlePurchaseFromCart = (quantity: number) => {
    setOrderQuantity(quantity);
    setIsCartScreenOpen(false);
    setIsOrderScreenOpen(true);
  };

  const handlePaymentComplete = () => {
    setIsOrderScreenOpen(false);
    setIsOrderCompleteOpen(true);
  };

  const handleMainClick = () => {
    setIsOrderCompleteOpen(false);
    onHomeClick?.();
  };

  return (
    <div className="w-full max-w-[390px] mx-auto flex flex-col bg-white relative min-h-screen">
      <div className="fixed w-full max-w-[390px] top-0 left-1/2 -translate-x-1/2 h-[52px] z-[51] flex bg-white border-b border-gray-100">
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

      <div className="flex z-[50] w-full h-[52px] items-center justify-between px-4 py-0 fixed top-[52px] left-1/2 -translate-x-1/2 max-w-[390px] bg-white border-b border-gray-100">
        <button
          onClick={onClose}
          className="flex items-center gap-2 p-0 bg-transparent border-none cursor-pointer"
        >
          <ArrowLeft className="w-6 h-6 text-black" />
          <span className="font-bold text-black text-base tracking-[0] leading-[normal]">
            AI 피팅하기
          </span>
        </button>

        <button onClick={() => {/* onHomeClick?.() */}} className="p-0 bg-transparent border-none cursor-pointer">
          <Home className="w-6 h-6 text-black" />
        </button>
      </div>

      <div className="mt-[104px] flex flex-col w-full pb-24">
        <div className="flex items-center justify-center gap-2 px-4 py-4">
          <div className="px-4 py-1.5 bg-[#d9d9d9] rounded-xl">
            <span className="font-medium text-black text-base">{height}</span>
          </div>
          <div className="px-4 py-1.5 bg-[#d9d9d9] rounded-xl">
            <span className="font-medium text-black text-base">{weight}</span>
          </div>
          <div className="px-4 py-1.5 bg-[#d9d9d9] rounded-xl">
            <span className="font-medium text-black text-base">{bodyType}</span>
          </div>
        </div>

        <div className="relative w-full flex items-center justify-center bg-[#f7f7f7] py-8">
          <div className="absolute top-4 right-4 px-3 py-1.5 bg-[#212121] text-white text-xs rounded-lg flex items-center gap-2 cursor-pointer z-[2]">
            <span className="whitespace-nowrap">수정하려면 줄자 클릭</span>
          </div>

          <button
            onClick={onEditMeasurements}
            className="absolute top-10 right-4 p-1.5 bg-transparent border-none cursor-pointer z-[2]"
            aria-label="Edit measurements"
          >
            <Ruler className="w-6 h-6 text-black" />
          </button>

          <button
            onClick={handlePreviousView}
            className="absolute left-4 p-2 bg-transparent border-none cursor-pointer z-10"
            aria-label="Previous view"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>

          <div className="relative flex flex-col items-center">
            <img
              src={viewImages[currentViewIndex]}
              alt="AI Fitting Result"
              className="w-[140px] h-[365px] object-cover"
            />
          </div>

          <button
            onClick={handleNextView}
            className="absolute right-4 p-2 bg-transparent border-none cursor-pointer z-10"
            aria-label="Next view"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-6 py-4">
          {sizes.map((size) => {
            const isDisabled = size === 25 || size === 27 || size === 29;
            return (
              <button
                key={size}
                onClick={() => handleSizeClick(size)}
                disabled={isDisabled}
                className={`w-8 h-[30px] rounded-[10px] flex items-center justify-center text-base font-medium border-none transition-colors ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : isDisabled
                    ? "bg-[#d9d9d9] text-white cursor-not-allowed opacity-60"
                    : "bg-[#d9d9d9] text-white cursor-pointer"
                }`}
              >
                {size}
              </button>
            );
          })}
        </div>

        <FitGuideCards
          productType="female2"
          selectedSize={selectedSize}
          height={height}
          weight={weight}
          bodyType={bodyType}
        />
      </div>
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] flex items-center justify-center px-4 pt-4 pb-6 bg-white z-[2]">
        <Button
          onClick={() => setIsPurchaseModalOpen(true)}
          className="w-full py-[13px] bg-black hover:bg-black/90 rounded text-white text-lg font-semibold tracking-[0] leading-[normal] h-auto"
        >
          구매하기
        </Button>
      </div>

      <PurchaseModal
        isOpen={isPurchaseModalOpen}
        onClose={() => setIsPurchaseModalOpen(false)}
        onPurchaseClick={handlePurchaseFromModal}
        onCartClick={handleCartFromModal}
        selectedSize={selectedSize}
        height={height}
        weight={weight}
        productType="female2"
      />

      {isCartScreenOpen && (
        <div className="fixed inset-0 z-[60] bg-white">
          <CartScreen
            onClose={() => setIsCartScreenOpen(false)}
            onHomeClick={onHomeClick}
            onPurchaseClick={handlePurchaseFromCart}
            selectedSize={selectedSize}
            quantity={orderQuantity}
            productType="female2"
          />
        </div>
      )}

      {isOrderScreenOpen && (
        <div className="fixed inset-0 z-[60] bg-white">
          <OrderScreen
            onClose={() => setIsOrderScreenOpen(false)}
            onHomeClick={onHomeClick}
            onPaymentComplete={handlePaymentComplete}
            selectedSize={selectedSize}
            quantity={orderQuantity}
            productType="female2"
          />
        </div>
      )}

      {isOrderCompleteOpen && (
        <div className="fixed inset-0 z-[70] bg-white">
          <OrderCompleteScreen onMainClick={handleMainClick} />
        </div>
      )}
    </div>
  );
};
