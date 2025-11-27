import Image from "next/image";
import React from "react";
import Heading from "./Heading";
import Text from "./Text";

interface CardProps {
  icon: string;
  heading: string;
  text: string;
}

export default function Card({ icon, heading, text }: CardProps) {
  return (
    <div className="w-full md:min-w-[375px] bg-white border-[1px] md:border-[2px] border-[#3D3D3D1A] rounded-[14px] md:rounded-[20px] px-[17px] md:px-6 py-[20px] md:py-7 flex flex-col gap-[15px] md:gap-5">
      <div
        className={`w-[33px] md:w-12 h-[33px] md:h-12 flex justify-center items-center rounded-[6px] md:rounded-[10px]`}
      >
        <Image
          src={icon}
          alt={heading}
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-[7.5px] md:gap-2.5">
        <Heading
          text={heading}
          className="text-[18px] md:text-[22px] leading-[1.5] font-[500]"
        />
        <Text text={text} />
      </div>
    </div>
  );
}
