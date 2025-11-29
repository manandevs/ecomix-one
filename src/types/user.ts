import { Role } from "./auth";

export type UserStatus = 'Active' | 'Inactive' | 'Banned' | 'Pending';

export interface UserAddress {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface User {
  id: string;
  clerkId?: string;
  firstName?: string;
  lastName?: string;
  name: string; // Composite name for UI
  email: string;
  image: string;
  role: Role;
  status: UserStatus;
  lastActive: string | Date;
  createdAt: string | Date;
  phoneNumber?: string;
  address?: UserAddress;
}