export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  isPrimary: boolean;
}

export interface ProductVariant {
  id: string;
  name: string;
  sku: string;
  price: number;
  stock: number;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPrice?: number;
  images: ProductImage[];
  category: string;
  tags: string[];
  sku: string;
  stock: number;
  status: 'draft' | 'published' | 'archived';
  rating?: number;
  reviewsCount?: number;
  createdAt: string;
  updatedAt: string;
  sellerId: string;
}

// UI Specific Type (from your existing code)
export type ProductCard = {
  id?: string;
  img: string;
  price: string;
  title: string;
  description: string;
  discount?: string;
  isCart?: boolean;
  isPro?: boolean;
};