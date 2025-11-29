import React from "react";

interface TextProps {
  text: string;
}

export default function Text({ text }: TextProps) {
  return (
      <p className="font-normal text-[14px] sm:text-[16px] lg:text-[20px] leading-[1.6] text-[#3D3D3D]">
        {text}
      </p>
  );
}
