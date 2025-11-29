import { User } from "./user";

export type OrderStatus = 
  | 'Pending' 
  | 'Processing' 
  | 'Shipped' 
  | 'Delivered' 
  | 'Cancelled' 
  | 'Refunded';

export interface OrderItem {
  productId: string;
  name: string;
  image: string;
  quantity: number;
  price: number;
  total: number;
}

export interface Order {
  id: string; // e.g., #ORD-7721
  customerId: string;
  customer?: User;
  date: string;
  status: OrderStatus;
  subtotal: number;
  tax: number;
  shippingCost: number;
  total: number; // String formatted or number
  items: OrderItem[];
  shippingAddress?: string;
  paymentMethod?: string;
}