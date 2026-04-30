import { ArrowLeft, Home } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { MeasurementGuideModal } from "./MeasurementGuideModal";

interface BodyMeasurementsScreenProps {
  onClose?: () => void;
  onSaveClick?: (gender: "male" | "female" | "female2") => void;
  productType?: "male" | "female" | "female2";
  onHomeClick?: () => void;
  initialGender?: "male" | "female" | "female2" | null;
}

export const BodyMeasurementsScreen = ({ onClose, onSaveClick, productType = "male", initialGender }: BodyMeasurementsScreenProps): JSX.Element => {
  const [selectedGender, setSelectedGender] = useState<"male" | "female" | "female2" | null>(null);
  const [showGuideModal, setShowGuideModal] = useState(false);

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [headCircumference, setHeadCircumference] = useState("");
  const [shoulderWidth, setShoulderWidth] = useState("");
  const [armLength, setArmLength] = useState("");
  const [chestCircumference, setChestCircumference] = useState("");
  const [waistCircumference, setWaistCircumference] = useState("");
  const [hipCircumference, setHipCircumference] = useState("");
  const [thighCircumference, setThighCircumference] = useState("");
  const [inseam, setInseam] = useState("");
  const [legLength, setLegLength] = useState("");
  const [footSize, setFootSize] = useState("");

  const clearMeasurements = () => {
    setSelectedGender(null);
    setHeight("");
    setWeight("");
    setHeadCircumference("");
    setShoulderWidth("");
    setArmLength("");
    setChestCircumference("");
    setWaistCircumference("");
    setHipCircumference("");
    setThighCircumference("");
    setInseam("");
    setLegLength("");
    setFootSize("");
  };

  const populateGender = (gender: "male" | "female" | "female2") => {
    setSelectedGender(gender);
    if (gender === "male") {
      setHeight("173");
      setWeight("85");
      setHeadCircumference("58.5");
      setShoulderWidth("47");
      setArmLength("60");
      setChestCircumference("108");
      setWaistCircumference("99");
      setHipCircumference("101.5");
      setThighCircumference("57");
      setInseam("28");
      setLegLength("75");
      setFootSize("268");
    } else if (gender === "female") {
      setHeight("161");
      setWeight("53.5");
      setHeadCircumference("54.5");
      setShoulderWidth("37.5");
      setArmLength("53.5");
      setChestCircumference("85");
      setWaistCircumference("67");
      setHipCircumference("91");
      setThighCircumference("50");
      setInseam("23.5");
      setLegLength("72");
      setFootSize("238");
    } else if (gender === "female2") {
      setHeight("161");
      setWeight("60");
      setHeadCircumference("54.5");
      setShoulderWidth("36.5");
      setArmLength("53.5");
      setChestCircumference("83.5");
      setWaistCircumference("72");
      setHipCircumference("100");
      setThighCircumference("57.5");
      setInseam("26");
      setLegLength("71");
      setFootSize("238");
    }
  };

  const handleGenderChange = (gender: "male" | "female" | "female2") => {
    // If the selected button is clicked again, deselect it and clear the form
    if (selectedGender === gender) {
      clearMeasurements();
      return;
    }
    populateGender(gender);
  };

  useEffect(() => {
    if (initialGender) {
      populateGender(initialGender);
    }
  }, [initialGender]);

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
            나의 맞춤 정보
          </span>
        </button>

        <button
          onClick={() => {/* onHomeClick?.() */}}
          className="p-0 bg-transparent border-none cursor-pointer"
        >
          <Home className="w-6 h-6 text-black" />
        </button>
      </div>

      <div className="mt-[104px] flex flex-col w-full pb-32 px-4">
        <div className="flex items-center gap-4 mb-6 border-b border-gray-200">
          <button className="pb-2 border-b-2 border-black">
            <span className="font-semibold text-black text-sm">체형/피부/취향 정보</span>
          </button>
          <button className="pb-2">
            <span className="font-normal text-[#919191] text-sm">사이즈 추천</span>
          </button>
          <button className="pb-2">
            <span className="font-normal text-[#919191] text-sm">아이 정보</span>
          </button>
        </div>

        <div className="flex items-center justify-between mb-6">
          <h2 className="font-semibold text-black text-base">필수 입력</h2>
          <button onClick={clearMeasurements} className="text-[#0066ff] text-xs underline bg-transparent border-none cursor-pointer p-0">
            체형 정보 삭제
          </button>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-medium text-black text-sm">성별</label>
            <div className={`grid ${productType === "male" ? "grid-cols-1" : "grid-cols-2"} gap-2`}>
              {productType === "male" && (
                <button
                  onClick={() => handleGenderChange("male")}
                  className={`py-3 rounded border ${
                    selectedGender === "male"
                      ? "border-black bg-black"
                      : "border-[#e5e5e5] bg-white"
                  }`}
                >
                  <span
                    className={`text-sm ${
                      selectedGender === "male" ? "font-semibold text-white" : "font-normal text-[#919191]"
                    }`}
                  >
                    남성
                  </span>
                </button>
              )}
              {(productType === "female" || productType === "female2") && (
                <>
                  <button
                    onClick={() => handleGenderChange("female")}
                    className={`py-3 rounded border ${
                      selectedGender === "female"
                        ? "border-black bg-black"
                        : "border-[#e5e5e5] bg-white"
                    }`}
                  >
                    <span
                      className={`text-sm ${
                        selectedGender === "female" ? "font-semibold text-white" : "font-normal text-[#919191]"
                      }`}
                    >
                      여성1
                    </span>
                  </button>
                  <button
                    onClick={() => handleGenderChange("female2")}
                    className={`py-3 rounded border ${
                      selectedGender === "female2"
                        ? "border-black bg-black"
                        : "border-[#e5e5e5] bg-white"
                    }`}
                  >
                    <span
                      className={`text-sm ${
                        selectedGender === "female2" ? "font-semibold text-white" : "font-normal text-[#919191]"
                      }`}
                    >
                      여성2
                    </span>
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-medium text-black text-sm">키 (cm)</label>
              <input
                type="text"
                value={height ? `${height} cm` : ""}
                readOnly
                placeholder="키를 입력해주세요"
                className="w-full py-3 px-3 border border-[#e5e5e5] rounded text-sm placeholder:text-[#d0d0d0] bg-gray-50 cursor-not-allowed"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-black text-sm">몸무게 (kg)</label>
              <input
                type="text"
                value={weight ? `${weight} kg` : ""}
                readOnly
                placeholder="몸무게를 입력해주세요"
                className="w-full py-3 px-3 border border-[#e5e5e5] rounded text-sm placeholder:text-[#d0d0d0] bg-gray-50 cursor-not-allowed"
              />
            </div>
          </div>

          <div className="flex items-center gap-1">
            <h3 className="font-semibold text-black text-base">선택 입력</h3>
            <button
              onClick={() => setShowGuideModal(true)}
              className="w-4 h-4 rounded-full border border-[#d0d0d0] flex items-center justify-center p-0 bg-transparent"
            >
              <span className="text-[#d0d0d0] text-xs">i</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-medium text-black text-sm">머리 둘레 (cm)</label>
              <input
                type="text"
                value={headCircumference ? `${headCircumference} cm` : ""}
                readOnly
                className="w-full py-3 px-3 border border-[#e5e5e5] rounded text-sm bg-gray-50 cursor-not-allowed"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-black text-sm">어깨 너비 (cm)</label>
              <input
                type="text"
                value={shoulderWidth ? `${shoulderWidth} cm` : ""}
                readOnly
                className="w-full py-3 px-3 border border-[#e5e5e5] rounded text-sm bg-gray-50 cursor-not-allowed"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-medium text-black text-sm">팔 길이 (cm)</label>
              <input
                type="text"
                value={armLength ? `${armLength} cm` : ""}
                readOnly
                className="w-full py-3 px-3 border border-[#e5e5e5] rounded text-sm bg-gray-50 cursor-not-allowed"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-black text-sm">가슴 둘레 (cm)</label>
              <input
                type="text"
                value={chestCircumference ? `${chestCircumference} cm` : ""}
                readOnly
                className="w-full py-3 px-3 border border-[#e5e5e5] rounded text-sm bg-gray-50 cursor-not-allowed"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-medium text-black text-sm">허리 둘레 (cm)</label>
              <input
                type="text"
                value={waistCircumference ? `${waistCircumference} cm` : ""}
                readOnly
                className="w-full py-3 px-3 border border-[#e5e5e5] rounded text-sm bg-gray-50 cursor-not-allowed"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-black text-sm">엉덩이 둘레 (cm)</label>
              <input
                type="text"
                value={hipCircumference ? `${hipCircumference} cm` : ""}
                readOnly
                className="w-full py-3 px-3 border border-[#e5e5e5] rounded text-sm bg-gray-50 cursor-not-allowed"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-medium text-black text-sm">허벅지 둘레 (cm)</label>
              <input
                type="text"
                value={thighCircumference ? `${thighCircumference} cm` : ""}
                readOnly
                className="w-full py-3 px-3 border border-[#e5e5e5] rounded text-sm bg-gray-50 cursor-not-allowed"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-black text-sm">밑위 길이 (cm)</label>
              <input
                type="text"
                value={inseam ? `${inseam} cm` : ""}
                readOnly
                className="w-full py-3 px-3 border border-[#e5e5e5] rounded text-sm bg-gray-50 cursor-not-allowed"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-medium text-black text-sm">다리 길이 (cm)</label>
              <input
                type="text"
                value={legLength ? `${legLength} cm` : ""}
                readOnly
                className="w-full py-3 px-3 border border-[#e5e5e5] rounded text-sm bg-gray-50 cursor-not-allowed"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-black text-sm">발 사이즈 (mm)</label>
              <input
                type="text"
                value={footSize ? `${footSize} mm` : ""}
                readOnly
                className="w-full py-3 px-3 border border-[#e5e5e5] rounded text-sm bg-gray-50 cursor-not-allowed"
              />
            </div>
          </div>

          <p className="text-[#919191] text-xs text-center">개인정보 수집 및 이용 안내</p>
          <button className="text-[#0066ff] text-xs underline text-right">
            개인정보처리방침 보기
          </button>
        </div>
      </div>

      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] flex items-center justify-center px-4 pt-2.5 pb-6 bg-white border-t border-[#0000001a] z-[2]">
        <Button
          onClick={() => selectedGender && onSaveClick?.(selectedGender)}
          className={`w-full py-[18px] rounded text-base font-semibold tracking-[0] leading-[normal] h-auto ${
            selectedGender
              ? "bg-black hover:bg-gray-800 text-white"
              : "bg-[#e5e5e5] hover:bg-[#d0d0d0] text-white cursor-not-allowed"
          }`}
          disabled={!selectedGender}
        >
          저장 후 AI 피팅하기
        </Button>
      </div>

      <MeasurementGuideModal
        isOpen={showGuideModal}
        onClose={() => setShowGuideModal(false)}
      />
    </div>
  );
};
