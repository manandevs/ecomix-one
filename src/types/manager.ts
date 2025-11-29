import { User } from "./user";

export interface TeamMember extends User {
  department: 'Sales' | 'Support' | 'Logistics' | 'Marketing';
  permissions: string[];
  reportsTo?: string; // Manager ID
}

export interface Warehouse {
  id: string;
  name: string;
  location: string;
  capacity: number;
  utilization: number;
  managerId: string;
}