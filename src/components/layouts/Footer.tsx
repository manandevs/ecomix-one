import React from "react";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Button from "../shared/Button";
import Heading from "../shared/Heading";
import Logo from "../shared/Logo";

export default function Footer() {
  const navItems = [
    { label: "Home", href: "/" },
  ];

  return (
    <footer className="max-w-[1210px] overflow-hidden w-full h-auto mx-auto px-5 py-12 pb-4">
      <div className="flex justify-between lg:items-center flex-col gap-10 lg:gap-0 lg:flex-row">
        <div className="max-w-[551px] w-full">
          {/* logo */}
          <Logo />
          <Heading
            text="Subscribe to our newsletter and get our weekly blogs"
            className="text-[32px] leading-[38px] lg:text-[40px] lg:leading-[46px] mt-6"
          />
          <div className="flex items-end gap-4 mt-5">
            <input
              type="text"
              placeholder="Youremail@example.com"
              className="w-full max-w-[278px] shadow-[0px_3px_0px_0px_#EEEEEE] font-[400] leading-6 text-[16px] bg-white py-3 outline-none px-3.5 placeholder:text-[#929292] rounded-[16px] border-[1px] border-[#3D3D3D1A]"
            />
            <Button text="Submit" />
          </div>
        </div>

        <div className="grid grid-cols-2 w-full md:w-auto gap-4 md:gap-6 ">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-[#535353] cursor-pointer font-medium text-[18px] leading-[1.6] md:text-xl active:text-black"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="py-14 flex md:flex-row flex-col justify-between gap-5 md:items-center">
        <p className="text-[14px] leading-6 text-[#707070] font-semibold ">
          © 2025 Growth agency global ( GAG ) All rights reserved
        </p>
        <div className="flex gap-3">
          <Link
            href={"/"}
            className="border border-[#E0E0DB] hover:text-[#000000] cursor-pointer transition-all duration-300 ease-in-out rounded-[12px] size-[32px] text-[20px] flex items-center justify-center text-[#5F5F69]"
          >
            <FaXTwitter className="" />
          </Link>
          <Link
            href={"/"}
            className="border border-[#E0E0DB] hover:text-[#E4405F] cursor-pointer transition-all duration-300 ease-in-out rounded-[12px] size-[32px] text-[20px] flex items-center justify-center text-[#5F5F69]"
          >
            <FaInstagram className="" />
          </Link>
          <Link
            href={"/"}
            className="border border-[#E0E0DB] hover:text-[#0077B5] cursor-pointer transition-all duration-300 ease-in-out rounded-[12px] size-[32px] text-[20px] flex items-center justify-center text-[#5F5F69]"
          >
            <FaLinkedin className="" />
          </Link>
        </div>
      </div>
    </footer>
  );
}