import { X } from "lucide-react";

interface AvatarDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  productType: "male" | "female" | "female2";
  height: string;
  weight: string;
  bodyType: string;
}

export const AvatarDetailsModal = ({ isOpen, onClose, productType, height, weight, bodyType }: AvatarDetailsModalProps) => {
  if (!isOpen) return null;

  // Mock data for AI avatar body conditions based on productType
  const getAvatarConditions = () => {
    switch(productType) {
      case "male":
        return [
          { title: "머리 둘레", value: "58 cm" },
          { title: "어깨 너비", value: "48 cm" },
          { title: "팔 길이", value: "62 cm" },
          { title: "가슴 둘레", value: "100 cm" },
          { title: "허리 둘레", value: "82 cm" },
          { title: "엉덩이 둘레", value: "98 cm" },
          { title: "허벅지 둘레", value: "56 cm" },
          { title: "밑위 길이", value: "26 cm" },
          { title: "다리 길이", value: "102 cm" },
          { title: "발 사이즈", value: "275 mm" }
        ];
      case "female":
        return [
          { title: "머리 둘레", value: "54 cm" },
          { title: "어깨 너비", value: "39 cm" },
          { title: "팔 길이", value: "56 cm" },
          { title: "가슴 둘레", value: "88 cm" },
          { title: "허리 둘레", value: "64 cm" },
          { title: "엉덩이 둘레", value: "92 cm" },
          { title: "허벅지 둘레", value: "48 cm" },
          { title: "밑위 길이", value: "24 cm" },
          { title: "다리 길이", value: "94 cm" },
          { title: "발 사이즈", value: "235 mm" }
        ];
      case "female2":
        return [
          { title: "머리 둘레", value: "55 cm" },
          { title: "어깨 너비", value: "41 cm" },
          { title: "팔 길이", value: "58 cm" },
          { title: "가슴 둘레", value: "85 cm" },
          { title: "허리 둘레", value: "68 cm" },
          { title: "엉덩이 둘레", value: "94 cm" },
          { title: "허벅지 둘레", value: "52 cm" },
          { title: "밑위 길이", value: "25 cm" },
          { title: "다리 길이", value: "98 cm" },
          { title: "발 사이즈", value: "245 mm" }
        ];
    }
  };

  const conditions = getAvatarConditions();

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />

      <div className="relative w-full max-w-[390px] bg-white rounded-t-[24px] animate-in slide-in-from-bottom duration-300 h-auto max-h-[85vh] flex flex-col">
        {/* Top Handle */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#e0e0e0] rounded-full"></div>

        {/* Header */}
        <div className="px-5 pt-7 pb-2 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="font-bold text-black text-[17px]">AI 아바타 체형 상세 치수</h2>
            </div>
            <button onClick={onClose} className="p-0 bg-transparent border-none cursor-pointer">
              <X className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="px-5 pb-8 pt-2 overflow-y-auto flex-1 flex flex-col">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="px-4 py-1.5 bg-[#f4f4f4] rounded-full text-sm font-medium">{height}</div>
            <div className="px-4 py-1.5 bg-[#f4f4f4] rounded-full text-sm font-medium">{weight}</div>
            <div className="px-4 py-1.5 bg-[#f4f4f4] rounded-full text-sm font-medium">{bodyType}</div>
          </div>

          <div className="bg-[#f9f9f9] rounded-xl p-5 flex flex-col gap-3.5">
            {conditions.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between border-b border-[#ececec] pb-2 last:border-0 last:pb-0">
                <span className="font-semibold text-[#555] text-sm">{item.title}</span>
                <span className="font-bold text-black text-sm">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
