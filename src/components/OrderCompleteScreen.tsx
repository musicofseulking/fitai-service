import { Button } from "./ui/button";

interface OrderCompleteScreenProps {
  onMainClick?: () => void;
}

export const OrderCompleteScreen = ({ onMainClick }: OrderCompleteScreenProps): JSX.Element => {
  return (
    <div className="w-full max-w-[390px] mx-auto h-screen flex flex-col bg-white relative overflow-hidden">
      <header className="w-full h-[52px] z-[2] flex bg-neutral-100 shrink-0">
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
      </header>

      <main className="flex-1 flex items-center justify-center px-5">
        <div className="flex flex-col items-center gap-10 w-full text-center">
          <div className="flex flex-col items-center gap-4 w-full">
            <p className="text-black text-[24px] font-extrabold leading-[1.3] tracking-tight">
              AI 피팅 기능 체험을<br />완료했어요
            </p>
            <div className="h-px w-8 bg-neutral-200 mx-auto" />
            <p className="text-neutral-700 text-[15px] leading-[1.55]">
              홈으로 돌아가면 다른 상품과 사이즈로<br />
              AI 피팅을 다시 체험해볼 수 있어요.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-neutral-500 text-[14px] leading-snug bg-neutral-50 p-5 rounded-xl border border-neutral-100/50 w-full">
            <p>상품을 다시 선택하고 AI 피팅 버튼을 눌러보세요.</p>
            <p>체형 정보를 수정하면 다른 핏 안내도 확인할 수 있어요.</p>
          </div>

          <Button
            onClick={onMainClick}
            className="flex items-center justify-center py-4 px-12 bg-black hover:bg-neutral-800 text-white rounded-xl font-bold h-auto shadow-lg text-lg transition-all active:scale-[0.98] w-full max-w-[280px]"
          >
            홈으로 돌아가기
          </Button>
        </div>
      </main>
    </div>
  );
};
