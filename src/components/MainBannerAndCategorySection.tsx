import { ShoppingBag, Home, Package } from "lucide-react";

export const MainBannerAndCategorySection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-2 px-0 py-4">
      <div className="flex items-center justify-between px-4 py-0 self-stretch w-full">
        <h2 className="w-fit mt-[-1.00px] font-medium text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap">
          데일리 스타일 아이템 추천
        </h2>

        <a
          href="#"
          className="w-fit font-normal text-[#484848] text-sm tracking-[0] leading-[normal] underline"
        >
          더보기
        </a>
      </div>

      <div className="self-stretch w-full h-32 bg-gradient-to-br from-gray-100 to-gray-200 px-4 py-4">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
            <ShoppingBag className="w-8 h-8 text-gray-700" />
            <span className="text-xs text-gray-700 font-medium">상품 컬렉션</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
            <Home className="w-8 h-8 text-gray-700" />
            <span className="text-xs text-gray-700 font-medium">브랜드 홈</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
            <Package className="w-8 h-8 text-gray-700" />
            <span className="text-xs text-gray-700 font-medium">신상품</span>
          </div>
        </div>
      </div>
    </section>
  );
};
