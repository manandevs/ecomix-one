"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Badge from '../shared/Badge';
import { FaOpencart } from 'react-icons/fa6';
import { ProductCard } from '@/types/product';

type ProductProps = {
  card: ProductCard;
  index: number;
};

const Product: React.FC<ProductProps> = ({ card }) => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(prev => prev + 1);
  const decrement = () => setCounter(prev => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="relative bg-white shadow-[0px_8px_30px_rgba(0,0,0,0.05)] h-48 max-w-[550px] w-full rounded-[24px] p-[24px] border border-black/10 mx-auto flex gap-4">
      
      {card.isPro && (
        <Image
          src="/icon/dimaind.svg"
          alt=""
          width={77}
          height={77}
          className="absolute z-[10] size-[40px] lg:size-[60px] hover:rotate-[360deg] hover:scale-[1.04] transition-all duration-300 ease-in-out -top-2 lg:-top-4 -right-3 lg:-right-4"
        />
      )}

      {/* Product Image */}
      <div className="max-w-[150px] w-full aspect-square rounded-[16px] overflow-hidden bg-gray-100">
        <Image
          src={card.img}
          alt={card.title}
          width={900}
          height={900}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Product Content */}
      <div className="flex flex-col gap-1 justify-between flex-1">
        <div className="w-full">
          <h3 className="text-[18px] font-semibold text-black">{card.title}</h3>
          <p className="text-[14px] text-[#555] leading-[1.4]">{card.description}</p>
        </div>

        <div className="flex flex-row justify-between items-center">
          {/* Cart & Buy Now */}
          <div className="flex justify-start items-center gap-4 relative">
            <Badge className={`relative ${card.isCart ? "bg-green-100 text-green-600" : ""}`}>
              <FaOpencart className="w-4 h-4" />
              {card.isCart && (
                <>
                  <div
                    onClick={decrement}
                    className="absolute -left-3 w-5 h-5 flex items-center justify-center bg-white rounded-full text-sm border border-gray-200 cursor-pointer"
                  >
                    -
                  </div>
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 text-[12px] px-1 rounded-full text-green-600 font-bold">{counter}</span>
                  <div
                    onClick={increment}
                    className="absolute -right-3 w-5 h-5 flex items-center justify-center bg-white rounded-full text-sm border border-gray-200 cursor-pointer"
                  >
                    +
                  </div>
                </>
              )}
            </Badge>
            <Badge>Buy Now</Badge>
          </div>

          {/* Price & Discount */}
          <div className="flex items-center gap-3 mt-2">
            <span className="text-[18px] font-bold text-black">{card.price}</span>
            {card.discount && (
              <span className="text-[13px] font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                {card.discount}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
