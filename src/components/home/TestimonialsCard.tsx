import React from "react";
import Image from "next/image";

interface TestimonialsCardProps {
  heading: string;
  text: string;
  src: string;
  name: string;
  address: string;
  className?: string;
}

const TestimonialsCard = ({
  heading,
  text,
  src,
  name,
  address,
  className,
}: TestimonialsCardProps) => {
  return (
    <div
      className={`bg-white w-full h-auto p-8 border-[2px] border-[#3D3D3D1A] rounded-[24px] ${className}`}
    >
      <div className="md:max-w-[295px] w-full gap-[8px] text-[18px] tracking-[0.016rem]">
        <p className="font-semibold text-black inline-block">{heading}</p>
        {text}
      </div>

      <div className="flex justify-start items-center gap-4 mt-[26px]">
        <Image
          src={src}
          alt="/images/man.png"
          width={640}
          height={640}
          className="w-[64px] h-[64px]"
        />
        <div className="flex flex-col justify-start items-start">
          <span className="font-semibold text-black text-[18px]">{name}</span>
          <span className="font-medium text-[#484747] text-[18px]">
            {address}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
