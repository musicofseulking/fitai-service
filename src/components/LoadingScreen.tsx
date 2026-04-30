import { ArrowLeft, Home } from "lucide-react";
import { useEffect } from "react";

interface LoadingScreenProps {
  onClose?: () => void;
  onComplete?: () => void;
  onHome?: () => void;
}

export const LoadingScreen = ({ onClose, onComplete, onHome }: LoadingScreenProps): JSX.Element => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);
  return (
    <div className="w-full max-w-[390px] mx-auto flex flex-col bg-white relative min-h-screen">
      {/* Status Bar */}
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

      {/* Navigation Bar */}
      <div className="flex z-[3] w-full h-[52px] items-center justify-between px-4 py-0 fixed top-[52px] left-1/2 -translate-x-1/2 max-w-[390px] bg-white border-b border-gray-100">
        <button
          onClick={onClose}
          className="flex items-center gap-2 p-0 bg-transparent border-none"
        >
          <ArrowLeft className="w-6 h-6 text-black" />
          <span className="font-bold text-black text-base tracking-[0] leading-[normal]">
            AI 피팅하기
          </span>
        </button>

        <button
          onClick={() => {/* onHome?.() */}}
          className="p-0 bg-transparent border-none cursor-pointer"
        >
          <Home className="w-6 h-6 text-black" />
        </button>
      </div>

      {/* Loading Spinner */}
      <div className="flex flex-col items-center justify-center flex-1 mt-[104px]">
        <div className="relative h-20 w-20">
          {/* Gray circle background */}
          <div className="absolute top-[13px] left-[13px] w-[54px] h-[54px] rounded-full border-[6px] border-solid border-[#dedede]" />
          {/* Spinning arc - using a simple gradient instead of SVG */}
          <div className="absolute top-[13px] left-[13px] w-[54px] h-[54px] rounded-full border-[6px] border-solid border-transparent border-t-black animate-spin" />
        </div>

        {/* Loading Text */}
        <p className="mt-[18px] w-auto px-4 font-normal text-base tracking-[0] leading-8 text-black text-center">
          입력된 체형 정보를 기준으로
          <br/>
          아바타를 생성 중입니다.
        </p>
      </div>
    </div>
  );
};
