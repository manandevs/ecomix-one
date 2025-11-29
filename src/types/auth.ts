export type Role = "admin" | "moderator" | "user" | "seller" | "manager";

export type Permission = 
  | "view:dashboard"
  | "manage:users"
  | "manage:products"
  | "manage:orders"
  | "view:analytics"
  | "manage:system";

export interface SessionMetadata {
  role?: Role;
  permissions?: Permission[];
  onboardingCompleted?: boolean;
}