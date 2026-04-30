interface ProductItem {
  id: number;
  image: string;
  name: string;
}

const productItems: ProductItem[] = [
  {
    id: 1,
    image: "/man_pants.png",
    name: "남성 스트레이트 치노 팬츠 [베이지]",
  },
  {
    id: 2,
    image: "/IMG_6677_3.png",
    name: "[한소희 PICK] 우먼즈 커브드 데님 팬츠 [미디엄 인디고]",
  },
  {
    id: 3,
    image: "/Knit_1.png",
    name: "스트라이프 니트",
  },
];

const brandItems = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "성수를 점령한 에어맥스 95",
    brandLogo: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=100",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "폴로 랄프 로렌 겨울 재킷",
    brandLogo: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=100",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "내셔널 지오그래픽 여행 가방",
    brandLogo: "https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=100",
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "브란도 디자인 조끼",
    brandLogo: "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=100",
  },
];

interface DailyStyleRecommendationSectionProps {
  onProductClick?: () => void;
  onProduct2Click?: () => void;
}

export const DailyStyleRecommendationSection = ({ onProductClick, onProduct2Click }: DailyStyleRecommendationSectionProps): JSX.Element => {
  return (
    <div className="flex flex-col w-full gap-4 bg-white">
      <section className="flex flex-col w-full items-start gap-2 px-0 py-4">
        <div className="flex items-center justify-between px-4 py-0 self-stretch w-full grayscale">
          <h2 className="mt-[-1.00px] font-medium text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap">
            데일리 스타일 아이템 추천
          </h2>

          <span className="font-normal text-[#484848] text-sm tracking-[0] leading-[normal] underline cursor-pointer">
            더보기
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 px-4 w-full">
          {productItems.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col gap-2 ${item.id === 3 ? 'grayscale' : 'cursor-pointer group'}`}
              onClick={item.id === 3 ? undefined : (item.id === 2 ? onProduct2Click : onProductClick)}
            >
              <div className={`w-full aspect-square rounded overflow-hidden transition-all duration-300 ${item.id !== 3
                  ? 'p-[2px] bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 bg-[length:200%_200%] animate-[gradient-shift_3s_ease-in-out_infinite] group-hover:animate-[shimmer_1.5s_ease-in-out_infinite] group-hover:scale-105'
                  : 'bg-gray-200'
                }`}>
                {item.id !== 3 ? (
                  <div className="w-full h-full bg-white rounded-sm overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
                    />
                  </div>
                ) : (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <span className={`text-xs text-gray-700 line-clamp-2 transition-colors duration-300 ${item.id !== 3 ? 'group-hover:text-black group-hover:font-medium' : ''
                }`}>{item.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col w-full items-start gap-2 px-4 py-4 grayscale">
        <div className="grid grid-cols-2 gap-2 w-full">
          {brandItems.map((item) => (
            <div key={item.id} className="relative group cursor-pointer">
              <div className="w-full aspect-square rounded-lg overflow-hidden bg-gray-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-2 left-2 right-2">
                <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded px-2 py-1 transition-all duration-300 group-hover:bg-white">
                  <div className="w-6 h-6 bg-gray-300 rounded-full overflow-hidden">
                    <img
                      src={item.brandLogo}
                      alt="brand"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xs font-medium text-black line-clamp-1">
                    {item.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
