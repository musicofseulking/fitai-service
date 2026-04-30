import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface MeasurementGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MeasurementGuideModal = ({ isOpen, onClose }: MeasurementGuideModalProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  if (!isOpen) return null;

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndHandler = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentPage === 0) {
      setCurrentPage(1);
    }
    if (isRightSwipe && currentPage === 1) {
      setCurrentPage(0);
    }
  };

  const pages = [
    {
      image: "Measurement Guide_1.png",
      items: [
        { title: "1. 머리 둘레", desc: "이마와 뒤통수를 따라 머리의 둘레가 가장 넓은 부분으로 측정해주세요." },
        { title: "2. 어깨 너비", desc: "양쪽 어깨 끝에서 끝까지의 가로 길이를 측정해주세요." },
        { title: "3. 팔 길이", desc: "어깨 끝에서 손목까지 팔을 편 상태의 길이를 측정해주세요." },
        { title: "4. 가슴 둘레", desc: "가슴의 가장 넓은 부분을 기준으로 둘레를 측정해주세요." },
        { title: "5. 허리 둘레", desc: "허리에서 가장 가는 부분의 둘레를 측정해주세요." }
      ]
    },
    {
      image: "Measurement Guide_2.png",
      items: [
        { title: "6. 엉덩이 둘레", desc: "엉덩이에서 가장 튀어나온 부분의 둘레를 측정해주세요." },
        { title: "7. 허벅지 둘레", desc: "허벅지의 가장 두꺼운 부분의 둘레를 측정해주세요." },
        { title: "8. 밑위 길이", desc: "바지 앞 단추 위치에서 가랑이까지의 길이를 측정해주세요." },
        { title: "9. 다리 길이", desc: "가랑이에서 발목까지의 길이를 측정해주세요." },
        { title: "10. 발 사이즈", desc: "뒤꿈치부터 가장 긴 발가락 끝까지의 길이를 측정해주세요." }
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      <div className="relative w-full max-w-[390px] bg-white rounded-t-[24px] animate-in slide-in-from-bottom duration-300 h-auto flex flex-col">
        {/* Top Handle */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#e0e0e0] rounded-full"></div>

        {/* Header */}
        <div className="px-5 pt-7 pb-2 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="font-bold text-black text-[17px]">사이즈 측정 안내</h2>
              <span className="text-[#a0a0a0] text-xs font-medium mt-0.5">(선택)</span>
            </div>
            <button
              onClick={onClose}
              className="p-0 bg-transparent border-none cursor-pointer"
            >
              <X className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div 
          className="px-5 pb-5 pt-1 overflow-y-auto flex-1 flex flex-col"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEndHandler}
        >
          <div className="relative w-full flex items-center justify-center mb-5">
            {currentPage === 1 && (
              <button 
                onClick={() => setCurrentPage(0)}
                className="absolute left-0 p-2 bg-transparent border-none cursor-pointer text-[#888] hover:text-black transition-colors"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
            )}

            <div className="relative w-full max-w-[130px] h-[165px] flex items-center justify-center">
              <img
                src={pages[currentPage].image}
                alt={`Measurement guide ${currentPage + 1}`}
                className="w-full h-full object-contain transition-opacity duration-300"
              />
            </div>

            {currentPage === 0 && (
              <button 
                onClick={() => setCurrentPage(1)}
                className="absolute right-0 p-2 bg-transparent border-none cursor-pointer text-[#888] hover:text-black transition-colors"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            )}
          </div>

          <div className="flex flex-col gap-2.5 mb-4">
            {pages[currentPage].items.map((item, idx) => (
              <div key={idx} className="text-[12.5px] leading-relaxed">
                <span className="font-bold text-black">{item.title}</span>
                <span className="font-bold text-black"> : </span>
                <span className="text-[#333333] font-medium tracking-tight">{item.desc}</span>
              </div>
            ))}
          </div>

          {/* Pagination Indicators */}
          <div className="flex items-center justify-center gap-2 pt-1 pb-1">
            <div 
              onClick={() => setCurrentPage(0)}
              className={`rounded-full cursor-pointer transition-all ${currentPage === 0 ? 'w-2 h-2 bg-[#cfcfcf]' : 'w-2 h-2 border-[1.5px] border-[#cfcfcf] bg-transparent'}`} 
            />
            <div 
              onClick={() => setCurrentPage(1)}
              className={`rounded-full cursor-pointer transition-all ${currentPage === 1 ? 'w-2 h-2 bg-[#cfcfcf]' : 'w-2 h-2 border-[1.5px] border-[#cfcfcf] bg-transparent'}`} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};
