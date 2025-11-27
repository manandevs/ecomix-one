import React from "react";

interface ButtonProps {
  text: string;
  children?: React.ReactNode;
}

export default function Button({ text, children }: ButtonProps) {
  return (
    <button
      className="
        bg-amber-600 text-white flex items-center py-[12px] hover:scale-[0.99] hover:translate-y-[-3px] transition-all duration-300 ease-in-out cursor-pointer pr-[20px] pl-[14px] gap-[6px] border border-[#D1CED8] rounded-[16px]"
    >
      {children}
      {text}
    </button>
  );
}
