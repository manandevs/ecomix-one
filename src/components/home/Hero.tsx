"use client";

import React, { useEffect, useRef } from "react";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";
import gsap from "gsap";
import FadeUp from "../motion/FadeUp";
import Badge from "../shared/Badge";
import Text from "../Text";
import Button from "../shared/Button";
import Heading from "../shared/Heading";

const cards = [
  {
    img: "/images/customize-sound.png",
    text: "Choose Your AirBuds",
  },
  {
    img: "/images/buildingidea.png",
    text: "Customize Your Sound",
  },
  {
    img: "/images/launchgrowth.png",
    text: "Fast Delivery to Your Door",
  },
];

export default function Header() {
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 860) {
      cardRefs.current.forEach((card, index) => {
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "top top+=40",
            scrub: true,
          },
          ease: "none",
          scale: 1 - (cards.length - index) * 0.06,
        });
      });
    }
  }, []);

  return (
    <header id="home" className="w-full h-auto my-12 md:mb-24 relative z-[10]">
      <FadeUp>
        <>
          <div className="flex justify-baseline items-center">
            <div className="max-w-[858px] grid grid-cols-1 gap-5 md:gap-7">
              <div className="inline-block">
                <Badge text="Premium E-Commerce Experience" src="/icon/box.svg" />
              </div>

              <Heading
                text="Experience Sound Like Never Before with ecomixOne AirBuds"
                className="text-[48px] md:text-[64px] leading-[56px] md:leading-[72px] lg:text-[88px] lg:leading-[96px] tracking-tight"
              />

              <div className="max-w-[600px]">
                <Text text="Shop high-quality wireless AirBuds designed for crystal-clear audio, deep bass, and all-day comfort. Simple buying steps, fast delivery, and unmatched quality — just for you." />
              </div>

              <div className="flex items-center gap-[13px] mb-7 md:mb-10">
                <Button text="Shop Now" >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Airbuds-Charge--Streamline-Solar" height="24" width="24">
                    <g id="Bold Duotone/Electronic Devices/Airbuds Charge">
                      <path id="Vector" fill="#737374" d="M22 18c0 2.2091 -1.7909 4 -4 4 -2.2091 0 -4 -1.7909 -4 -4 0 -2.2091 1.7909 -4 4 -4 2.2091 0 4 1.7909 4 4Z" stroke-width="1"></path>
                      <path id="Vector_2" fill="#737374" d="M2 9.3V7.1875c0 -0.17401 0 -0.26116 0.00383 -0.3347 0.08016 -1.54111 1.38501 -2.77348 3.01678 -2.84919C5.09849 4 5.19066 4 5.375 4c0.30723 0 0.46084 0 0.59065 0.00602 2.71961 0.12619 4.89435 2.18012 5.02795 4.74864 0.0064 0.1226 0.0064 0.26768 0.0064 0.55784V19.75C11 20.9926 9.93338 22 8.61765 22c-1.31574 0 -2.38236 -1.0074 -2.38236 -2.25V13.3c0 -0.5523 -0.47405 -1 -1.05882 -1C3.42215 12.3 2 10.9569 2 9.3Z" stroke-width="1"></path>
                      <path id="Vector_3" fill="#000000" d="M18.416 15.876c0.3447 0.2298 0.4378 0.6955 0.208 1.0401l-0.2226 0.334H19c0.2766 0 0.5307 0.1522 0.6613 0.3961 0.1305 0.2439 0.1162 0.5398 -0.0373 0.7699l-1 1.5c-0.2297 0.3447 -0.6954 0.4378 -1.04 0.208 -0.3447 -0.2297 -0.4378 -0.6954 -0.208 -1.04l0.2226 -0.334H17c-0.2766 0 -0.5307 -0.1523 -0.6613 -0.3961 -0.1305 -0.2439 -0.1162 -0.5398 0.0373 -0.7699l1 -1.5c0.2297 -0.3447 0.6954 -0.4378 1.04 -0.2081Z" stroke-width="1"></path>
                      <path id="Vector_4" fill="#000000" fill-rule="evenodd" d="M22 7.3V5.1875c0 -0.17401 0 -0.26116 -0.0038 -0.3347 -0.0802 -1.54111 -1.385 -2.77348 -3.0168 -2.84919C18.9015 2 18.8093 2 18.625 2c-0.3072 0 -0.4608 0 -0.5907 0.00602 -2.7196 0.12619 -4.8943 2.18012 -5.0279 4.74864C13 6.87726 13 7.02234 13 7.3125v8.393c0.8387 -1.8247 2.6469 -3.1114 4.7647 -3.2006V11.3c0 -0.5523 0.4741 -1 1.0588 -1C20.5778 10.3 22 8.95685 22 7.3ZM20.25 5c0 -0.41421 -0.3358 -0.75 -0.75 -0.75s-0.75 0.33579 -0.75 0.75v2.5c0 0.41421 0.3358 0.75 0.75 0.75s0.75 -0.33579 0.75 -0.75V5Z" clip-rule="evenodd" stroke-width="1"></path>
                      <path id="Vector_5" fill="#000000" d="M11.0001 18.25H6.23535v1.5h4.76475v-1.5Z" stroke-width="1"></path>
                      <path id="Vector_6" fill="#000000" d="M4.5 6.25c-0.41421 0 -0.75 0.33579 -0.75 0.75v2.5c0 0.41421 0.33579 0.75 0.75 0.75s0.75 -0.33579 0.75 -0.75V7c0 -0.41421 -0.33579 -0.75 -0.75 -0.75Z" stroke-width="1"></path>
                    </g>
                  </svg>
                </Button>
                <button className="flex items-center py-[12px] hover:scale-[0.99] hover:translate-y-[-3px] transition-all duration-300 ease-in-out cursor-pointer pr-[20px] pl-[14px] gap-[6px] bg-white border border-[#D1CED8] rounded-[16px]">
                  <span className="bg-black text-white text-center size-[23px] text-[8px] flex items-center justify-center rounded-full">
                    <FaPlay className="mr-[-2.4px] mt-[0.5px]" />
                  </span>
                  <span className="text-[#3D3D3D] text-[18px] leading-[24px] font-[500]">
                    Watch Demo
                  </span>
                </button>
              </div>
            </div>
            <div className="max-w-md h-auto w-full overflow-hidden">
              <Image
                src={"/images/similar_earbuds.png"}
                alt="/images/similar_earbuds.png"
                width={2300}
                height={2300}
              />
            </div>
          </div>

          <div className="w-full flex flex-col gap-[15px] lg:gap-[20px] mt-5 md:mt-7">
            <div className="flex justify-between gap-4 font-jetBrains text-[#868686]/60 text-[16px] font-[700] uppercase">
              <p>3 Simple Steps</p>
              <p className="md:flex hidden">To Get Yours</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[15px] lg:gap-[20px] relative z-[10]">
              {cards.map((card, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    if (el) cardRefs.current[index] = el;
                  }}
                  className="bg-white w-full sticky top-[120px] md:static border border-[#C7C5C54D] rounded-[20px] p-[17px] lg:p-[24px]"
                >
                  <div className="w-full aspect-square flex justify-centerset ">
                    <Image
                    src={card.img}
                    alt={card.text}
                    width={1000}
                    height={1000}
                    className="w-full h-auto object-cover"
                  />
                  </div>

                  <div className="mt-[18px] lg:mt-[24px] flex items-center justify-center gap-[10px] text-[#777777] lg:px-[16px] font-caveat">
                    <div className="size-[20px] lg:size-[26px] rounded-full flex items-center justify-center text-center text-[16px] lg:text-[19px] border-[2px] border-[#777777]">
                      <span className="ml-[-4px] lg:ml-[-5px] font-[700]">
                        {index + 1}
                      </span>
                    </div>

                    <span className="text-[20px] lg:text-[28px] font-[700] leading-[1.3]">
                      {card.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      </FadeUp>

      {/* UPDATED BLOB COLORS → AMBER THEME */}
      <div className="bg-amber-600/60 size-[200px] lg:size-[320px] blur-[200px] md:blur-[300px] z-[-1] absolute top-0 md:top-[100px] left-0"></div>

      <div className="bg-amber-400/50 size-[200px] lg:size-[320px] blur-[200px] md:blur-[300px] z-[-1] absolute top-[330px] md:top-auto md:bottom-[100px] right-0"></div>
    </header>
  );
}
