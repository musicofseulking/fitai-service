interface CoachBubbleProps {
  text: string;
  // 꼬리가 가리키는 방향: up이면 말풍선 위쪽 요소를, down이면 아래쪽 요소를 가리킨다
  arrow?: "up" | "down";
  // 꼬리의 가로 위치
  align?: "left" | "center";
  className?: string;
}

// 처음 써 보는 사용자에게 다음에 누를 곳을 알려 주는 말풍선
export const CoachBubble = ({
  text,
  arrow = "down",
  align = "center",
  className = "",
}: CoachBubbleProps): JSX.Element => {
  const tailPosition = align === "left" ? "left-5" : "left-1/2 -translate-x-1/2";
  const tailEdge = arrow === "up" ? "-top-1" : "-bottom-1";

  return (
    <div className={`pointer-events-none z-[5] ${className}`}>
      {/* 위치(translate)와 흔들림 애니메이션이 서로 transform을 덮어쓰지 않도록 층을 나눈다 */}
      <div className="animate-[coach-bob_1.6s_ease-in-out_infinite]">
        <div className="relative w-max max-w-[300px] px-3 py-2 bg-[#212121] text-white text-xs leading-[1.4] rounded-lg shadow-lg">
          {text}
          <span className={`absolute ${tailEdge} ${tailPosition} w-2.5 h-2.5 bg-[#212121] rotate-45`} />
        </div>
      </div>
    </div>
  );
};
