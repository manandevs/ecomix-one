import React from "react";
import Image from "next/image";

interface BadgeProps {
  text: string;
  src: string;
}

export default function Badge({ text, src }: BadgeProps) {
  return (
    <button className="bg-white rounded-2xl text-black font-medium text-[14px] flex justify-center items-center gap-1.5 px-3.5 py-2 border border-[#3D3D3D1A]">
      <Image src={src} alt={src} width={15} height={14} />
      {text}
    </button>
  );
}
