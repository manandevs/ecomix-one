// src/data/orders.ts

export const ordersData = [
  {
    id: "#ORD-7721",
    date: "Nov 28, 2025",
    status: "Delivered",
    total: "$129.00",
    items: [
      {
        name: "Premium Wireless Headphones",
        image: "/images/product.png", // Using existing image from context
      }
    ]
  },
  {
    id: "#ORD-7722",
    date: "Nov 15, 2025",
    status: "Processing",
    total: "$258.00",
    items: [
      {
        name: "Compact Smart Speaker",
        image: "/images/product.png",
      },
      {
        name: "Noise-Isolating Earbuds",
        image: "/images/product.png",
      }
    ]
  },
  {
    id: "#ORD-7723",
    date: "Oct 30, 2025",
    status: "Cancelled",
    total: "$59.00",
    items: [
      {
        name: "Noise-Isolating Earbuds",
        image: "/images/product.png",
      }
    ]
  }
];