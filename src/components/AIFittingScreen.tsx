import { ArrowLeft, Home } from "lucide-react";
import { Button } from "./ui/button";

interface AIFittingScreenProps {
  onClose?: () => void;
  onInputClick?: () => void;
  onHomeClick?: () => void;
}

export const AIFittingScreen = ({ onClose, onInputClick }: AIFittingScreenProps): JSX.Element => {
  return (
    <div className="w-full max-w-[390px] mx-auto flex flex-col bg-white relative min-h-screen">
      <div className="fixed w-full max-w-[390px] top-0 left-1/2 -translate-x-1/2 h-[52px] z-[4] flex bg-white border-b border-gray-100">
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

      <div className="flex z-[3] w-full h-[52px] items-center justify-between px-4 py-0 fixed top-[52px] left-1/2 -translate-x-1/2 max-w-[390px] bg-white border-b border-gray-100">
        <button
          onClick={onClose}
          className="flex items-center gap-2 p-0 bg-transparent border-none"
        >
          <ArrowLeft className="w-6 h-6 text-black" />
          <span className="font-normal text-black text-base tracking-[0] leading-[normal]">
            AI 피팅하기
          </span>
        </button>

        <button onClick={() => {/* onHomeClick?.() */}} className="p-0 bg-transparent border-none">
          <Home className="w-6 h-6 text-black" />
        </button>
      </div>

      <div className="mt-[104px] flex flex-col w-full flex-1 items-center justify-center px-6 pb-32">
        <div className="flex flex-col items-center gap-2">
          <p className="font-normal text-[#484848] text-base text-center tracking-[0] leading-[normal]">
            저장된 데이터가 없습니다
          </p>
          <p className="font-normal text-[#484848] text-base text-center tracking-[0] leading-[normal]">
            체형 정보를 입력해 주세요
          </p>
        </div>
      </div>

      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] flex items-center justify-center px-4 pt-2.5 pb-6 bg-white border-t border-[#0000001a] z-[2]">
        <Button
          onClick={onInputClick}
          className="w-full py-[18px] bg-black hover:bg-black/90 rounded text-white text-base font-semibold tracking-[0] leading-[normal] h-auto"
        >
          입력하기
        </Button>
      </div>
    </div>
  );
};
