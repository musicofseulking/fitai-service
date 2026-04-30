import { Bell, ShoppingBag, Search, Home, Heart, User, ChevronDown } from "lucide-react";
import { useState } from "react";
import { DailyStyleRecommendationSection } from "./DailyStyleRecommendationSection";

interface MainScreenProps {
  onProductClick?: () => void;
  onProduct2Click?: () => void;
}

const navItems = [
  { id: "contents", label: "콘텐츠" },
  { id: "recommend", label: "추천" },
  { id: "ranking", label: "랭킹" },
  { id: "sale", label: "세일" },
  { id: "release", label: "발매" },
  { id: "mutandard", label: "무탠다드\n26 신상" },
  { id: "nike", label: "나이키\n에어맥스" },
];

export const MainScreen = ({ onProductClick, onProduct2Click }: MainScreenProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState("recommend");

  return (
    <div className="relative w-full max-w-[390px] mx-auto min-h-screen bg-white flex flex-col overflow-hidden pb-[72px]">
      <div className="fixed w-full max-w-[390px] top-0 left-1/2 -translate-x-1/2 z-50 flex flex-col bg-black grayscale">
        <div className="flex items-center justify-between px-3 pt-3 h-[44px]">
          <div className="flex items-center ml-3">
            <span className="font-bold text-white text-[15px]">9:41</span>
          </div>
          <div className="flex items-center gap-3 h-[11px]">
            <img src="/Mobile Signal(BlackScreen).png" alt="Signal" className="h-full object-contain" />
            <img src="/Wifi(BlackScreen).png" alt="Wifi" className="h-full object-contain" />
            <img src="/Battery(BlackScreen).png" alt="Battery" className="h-full object-contain" />
          </div>
        </div>

        <div className="flex items-center justify-between px-4 h-[50px]">
          <div className="flex items-center gap-1 cursor-pointer">
            <h1 className="text-white font-extrabold text-[22px] tracking-tighter">MUSINSA</h1>
            <div className="w-[14px] h-[14px] border border-white/40 flex items-center justify-center rounded-[2px]">
              <ChevronDown className="w-3 h-3 text-white" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">W</span>
            </div>
            <Bell className="w-6 h-6 text-white" />
            <ShoppingBag className="w-6 h-6 text-white" />
          </div>
        </div>

        <div className="px-4 pb-2">
          <div className="w-full h-[40px] bg-white rounded flex items-center justify-between px-3 cursor-pointer">
            <span className="text-[13px] text-[#888] tracking-tight">최저가 보상제 차액 적립금 보상제</span>
            <Search className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="w-full h-[46px] flex items-center px-4 overflow-x-auto scrollbar-hide gap-5 relative">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className="flex-shrink-0 flex flex-col items-center justify-center h-full relative border-none bg-transparent p-0"
              >
                <div className={`text-[14px] leading-tight text-center ${isActive ? 'text-white font-bold' : 'text-[#888] font-medium'}`}>
                  {item.label.split('\n').map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </div>
                {isActive && (
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col w-full pt-[182px] flex-1 overflow-y-auto custom-scrollbar">
        <div className="relative w-full h-[250px] bg-[#e1e2d2] grayscale">
          <img src="/IMG_6676_2.png" alt="Hero Banner" className="w-full h-full object-cover object-top" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

          <div className="absolute bottom-8 left-5 text-white flex flex-col gap-1.5 z-10 w-full">
            <span className="font-medium text-[28px] leading-[1.2] tracking-tight text-white/90">무신사 스탠다드<br />데일리 컬렉션 <span className="font-bold text-white">30% 할인</span></span>
            <span className="text-[14px] text-white/80 mt-1">무신사 스탠다드 맨</span>
          </div>

          <div className="absolute bottom-8 right-5 bg-black/40 backdrop-blur-md rounded-full px-3.5 py-1 z-10">
            <span className="text-white text-[12px] font-medium tracking-[2px]">1 / 6</span>
          </div>
        </div>

        <DailyStyleRecommendationSection onProductClick={onProductClick} onProduct2Click={onProduct2Click} />
      </div>

      <div className="fixed left-1/2 -translate-x-1/2 bottom-0 w-full max-w-[390px] h-[64px] bg-white border-t border-gray-100 z-50 flex items-center justify-between px-6 pb-2 grayscale">
        <button className="flex flex-col items-center justify-center gap-1 border-none bg-transparent p-0">
          <Search className="w-6 h-6 text-[#999]" />
          <span className="text-[10px] text-[#999] tracking-tight">브랜드</span>
        </button>
        <button className="flex flex-col items-center justify-center gap-1 border-none bg-transparent p-0">
          <div className="w-6 h-6 flex items-center justify-center text-[#999] font-bold text-lg leading-none">(S)</div>
          <span className="text-[10px] text-[#999] tracking-tight">스냅</span>
        </button>
        <button className="flex flex-col items-center justify-center gap-1 border-none bg-transparent p-0">
          <Home className="w-[26px] h-[26px] text-black" fill="currentColor" />
          <span className="text-[10px] text-black font-bold tracking-tight">홈</span>
        </button>
        <button className="flex flex-col items-center justify-center gap-1 border-none bg-transparent p-0">
          <Heart className="w-6 h-6 text-[#999]" />
          <span className="text-[10px] text-[#999] tracking-tight">좋아요</span>
        </button>
        <button className="flex flex-col items-center justify-center gap-1 border-none bg-transparent p-0">
          <User className="w-6 h-6 text-[#999]" />
          <span className="text-[10px] text-[#999] tracking-tight">마이</span>
        </button>
      </div>
    </div>
  );
};
