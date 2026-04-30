import { useState } from "react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

const navTabs = [
  { id: "contents", label: "콘텐츠", multiLine: false },
  { id: "recommend", label: "추천", multiLine: false },
  { id: "ranking", label: "랭킹", multiLine: false },
  { id: "sale", label: "세일", multiLine: false },
  { id: "release", label: "발매", multiLine: false },
  { id: "mutendard", label: "무탠다드\n26 신상", multiLine: true },
  { id: "nike", label: "나이키\n에어맥스", multiLine: true },
];

export const SearchAndUserActionsSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("recommend");

  return (
    <nav className="flex flex-col w-full items-start">
      <ScrollArea className="w-full bg-black">
        <div className="flex h-10 items-center gap-[15px] px-4 py-2 bg-black w-max">
          {navTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const isMultiLine = tab.multiLine;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={[
                  "relative w-fit text-center tracking-[0] leading-[normal] whitespace-pre cursor-pointer bg-transparent border-none p-0",
                  isMultiLine
                    ? "text-sm mt-[-6.00px] mb-[-4.00px]"
                    : "text-base",
                  isActive
                    ? "font-semibold text-white"
                    : isMultiLine
                      ? "font-normal text-[#969696]"
                      : "font-normal text-[#757575]",
                  tab.id === "nike" && isActive ? "text-white" : "",
                ].join(" ")}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        <ScrollBar orientation="horizontal" className="hidden" />
      </ScrollArea>

      <div className="relative self-stretch w-full h-px bg-black">
        <div className="absolute top-0 left-[70px] w-9 h-px bg-white" />
      </div>
    </nav>
  );
};
