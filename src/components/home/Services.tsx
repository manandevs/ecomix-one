"use client"
import React from 'react';
import FadeUp from '../motion/FadeUp';
import Badge from '../shared/Badge';
import Heading from '../shared/Heading';
import Text from '../shared/Text';
import { productsData } from '@/data/products';
import Product from '../shared/Product';

export default function Services() {
  return (
    <section id="ourvalues" className="relative z-[10] w-full pt-20">
      <FadeUp>
        <div className="w-full gap-12 grid grid-cols-1">

          {/* LEFT SECTION */}
          <div className="flex flex-col justify-center items-center text-center">
            <div className="inline-block">
              <Badge text="Our Products" src="/icon/light.svg" />
            </div>

            <div className="max-w-full sm:max-w-[537px] flex flex-col mt-5 mb-8">
              <Heading className="text-[32px] sm:text-[36px] leading-[40px] sm:leading-[44px] lg:text-[56px] lg:leading-[64px] mb-4">
                Discover Innovation <br /> in Every Product
              </Heading>
              <Text text="Browse our carefully designed products that combine performance, comfort, and sustainability." />
            </div>
          </div>

          {/* RIGHT SECTION — PRODUCT CARDS */}
          <div className="grid grid-cols-1 w-full gap-5 md:gap-8 relative">
            <div className="relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-4 space-y-4">
              {productsData.map((card, index) => (
                <Product key={index} card={card} index={index} />
              ))}
            </div>
          </div>
        </div>
      </FadeUp>

      {/* Glow Background */}
      <div className="top-[400px] md:top-[250px] lg:right-[80px] bg-[#A2EA13]/50 blur-[200px] absolute z-[-1] size-[200px] md:size-[340px]"></div>
    </section>
  );
}
