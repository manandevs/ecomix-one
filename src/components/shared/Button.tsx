import { cn } from "@/lib/cn";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  children?: React.ReactNode;
}

export default function Button({ text, children, className = "", ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        `bg-amber-500 text-white flex items-center py-[12px]
        hover:scale-[0.99] hover:translate-y-[-3px] transition-all
        duration-300 ease-in-out cursor-pointer px-[20px]
        gap-[6px] border border-[#D1CED8] rounded-[16px]`,
        className
      )}
    >
      {children}
      {text}
    </button>
  );
}
