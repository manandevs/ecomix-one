"use client";

import React from "react";
import Card from "../shared/Card";
import Badge from "../shared/Badge";
import Heading from "../shared/Heading";
import Text from "../shared/Text";
import Button from "../shared/Button";

// CARD CONTENT
const cards = [
  {
    icon: "/icon/pincle.svg",
    heading: "Premium Design Quality",
    text: "Crafted with precision and modern aesthetics to deliver an elegant experience.",
  },
  {
    icon: "/icon/treebox.svg",
    heading: "Eco-Friendly Packaging",
    text: "We use sustainable materials that protect the planet—and your product.",
  },
  {
    icon: "/icon/starCircle.svg",
    heading: "5-Star Rated Performance",
    text: "Loved by thousands of users for reliability, durability, and performance.",
  },
  {
    icon: "/icon/mic.svg",
    heading: "Crystal-Clear Audio",
    text: "Experience studio-grade clarity designed for creators and professionals.",
  },
  {
    icon: "/icon/webcode.svg",
    heading: "Smart & Intuitive Tech",
    text: "Powered by seamless integrations and intelligent features.",
  },
];

export default function FeaturesShowcase() {
  return (
    <div className="w-full overflow-hidden flex flex-col gap-[34px] py-12 md:py-16 pt-20 md:pt-36">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mt-10">
        <div className="w-full max-w-[675px] block space-y-4">
          <Badge text="Why Choose Us" src="/icon/star.svg" />
          <Heading
            text="Quality, Innovation & Experience — All in One Place"
            className="text-[36px] leading-[44px] lg:text-[56px] lg:leading-[64px] tracking-tight"
          />
        </div>

        <div className="w-full max-w-[436px] flex flex-col justify-start items-start gap-4">
          <Text text="From world-class sound to sustainable materials and smart features — explore everything that makes our product stand out from the rest." />
          <Button text="Learn More" />
        </div>
      </div>

      {/* Cards (Normal, No Animation) */}
      <div className="w-full mt-[45px] flex flex-col items-end pt-[30px]">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pb-[60px] w-full">
          {cards.map((item, index) => (
            <Card
              key={index}
              icon={item.icon}
              heading={item.heading}
              text={item.text}
            />
          ))}
        </div>

        {/* Static line (optional) */}
        <div className="w-full md:block hidden h-[1px] bg-amber-500 relative" />
      </div>
    </div>
  );
}
