import { useState } from "react";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "./ui/toggle-group";

const navItems = [
  { value: "남성", label: "남성" },
  { value: "여성1", label: "여성1" },
  { value: "여성2", label: "여성2" },
];

export const BottomNavigationSection = (): JSX.Element => {
  const [selected, setSelected] = useState("남성");

  return (
    <nav className="flex w-full items-center rounded-2xl overflow-hidden border border-solid border-[#b1b1b1] bg-white">
      <ToggleGroup
        type="single"
        value={selected}
        onValueChange={(val) => {
          if (val) setSelected(val);
        }}
        className="flex w-full"
      >
        {navItems.map((item) => (
          <ToggleGroupItem
            key={item.value}
            value={item.value}
            className="flex items-center justify-center gap-2 px-3 py-1.5 bg-white data-[state=on]:bg-white hover:bg-gray-50 font-semibold text-black text-[15px] tracking-[0] leading-[normal] whitespace-nowrap rounded-none"
          >
            {item.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </nav>
  );
};
