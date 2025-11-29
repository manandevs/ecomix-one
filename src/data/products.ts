import { ProductCard } from "@/types/types";

export const productsData: ProductCard[] = [
  {
    img: "/images/product.png",
    price: "$129",
    title: "Premium Wireless Headphones",
    description: "Experience immersive sound, noise cancellation, and a 40-hour battery life.",
    discount: "15% OFF",
    isCart: false,
    isPro: true
  },
  {
    img: "/images/product.png",
    price: "$89",
    title: "Compact Smart Speaker",
    description: "Rich audio with deep bass and built-in smart home control.",
    discount: "10% OFF",
    isCart: false,
    isPro: false
  },
  {
    img: "/images/product.png",
    price: "$59",
    title: "Noise-Isolating Earbuds",
    description: "Lightweight and ergonomic design for superior sound anywhere.",
    isCart: true,
    isPro: true
  },
  {
    img: "/images/product.png",
    price: "$199",
    title: "Smart Fitness Watch",
    description: "Monitor steps, heart rate, sleep, and workouts with ease.",
    discount: "20% OFF",
    isCart: false,
    isPro: false
  }
];