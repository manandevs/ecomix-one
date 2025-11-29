import { Role } from "./auth";

export interface NavigationItem {
  icon: React.ComponentType<{ size?: number }>;
  text: string;
  href: string;
  alert?: boolean;
  allowedRoles: Role[];
  category: string;
  external?: boolean;
}

export interface NavigationSection {
  title: string;
  items: NavigationItem[];
}