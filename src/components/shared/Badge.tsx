import React, { ButtonHTMLAttributes } from "react";
import Image from "next/image";

interface BadgeProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  text?: string;
  src?: string;
  className?: string;
  bg?: string;
}

export default function Badge({ text, src, className, children, bg = 'white' }: BadgeProps) {
  return (
    <button className={`bg-[${bg}] rounded-2xl text-black font-medium text-[14px] flex justify-center items-center gap-1.5 px-3.5 py-2 border border-[#3D3D3D1A] ${className}`}>
      {children}

      {src && (
        <Image
          src={src}
          alt={text || "badge icon"}
          width={15}
          height={14}
        />
      )}

      {text && <span>{text}</span>}
    </button>
  );
}
