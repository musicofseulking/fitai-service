import { Button } from "./ui/button";

interface OrderCompleteScreenProps {
  onMainClick?: () => void;
  orderNumber?: string;
  orderDate?: string;
}

export const OrderCompleteScreen = (_props: OrderCompleteScreenProps): JSX.Element => {
  return (
    <div className="w-full max-w-[390px] mx-auto h-screen flex flex-col bg-white relative overflow-hidden">
      <header className="w-full h-[52px] z-[2] flex bg-neutral-100 shrink-0">
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
      </header>

      <main className="flex-1 flex items-center justify-center px-4">
        <div className="flex flex-col items-center gap-12 w-full">
          <div className="flex flex-col items-center gap-4 w-full py-4 text-center">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <p className="text-black text-[22px] font-bold leading-[1.3] tracking-tight">
                  🎉 <strong>AI 피팅 기능</strong> 체험을<br />완료하셨습니다. 🎉
                </p>
                <div className="h-px w-8 bg-neutral-200 mx-auto my-1" />
                <p className="text-black text-[17px] leading-[1.3]">
                  마지막으로,<br /><strong>간단한 설문조사</strong>에 참여해 주세요.
                </p>
              </div>

              <div className="flex flex-col gap-2 text-neutral-500 text-[14px] leading-snug bg-neutral-50 p-5 rounded-xl border border-neutral-100/50">
                <p>• 설문은 <strong>약 2~3분 정도</strong> 소요됩니다.</p>
                <p>• 여러분의 소중한 의견은 <strong>추후 서비스 개선에<br />적극 반영될 예정</strong>입니다.</p>
              </div>

              <p className="text-neutral-700 text-sm leading-relaxed">
                직접 사용해보신 뒤 느끼신 점을<br />
                <strong>편하게, 솔직하게</strong> 남겨주시면 큰 도움이 됩니다.
              </p>

              <div className="flex flex-col items-center gap-[100px]">
                <p className="text-black font-extrabold text-xl">
                  감사합니다. 😊
                </p>

                <Button
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeMRoJqqhxHAVRweN6aQYRpEP5kIxT6A8bpBIt9jR500CYoZQ/viewform', '_blank')}
                  className="flex items-center justify-center gap-2 py-4 px-12 bg-black hover:bg-neutral-800 text-white rounded-xl font-bold h-auto shadow-lg text-lg transition-all active:scale-[0.98] w-full max-w-[280px]"
                >
                  설문조사하러 가기
                </Button>
              </div>
            </div>
          </div>


        </div>
      </main>
    </div>
  );
};
