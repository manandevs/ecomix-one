import { Role } from '@/types';
import { HiHome, HiUser, HiCog, HiShoppingCart, HiGlobe } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import { FaUserShield, FaStore, FaBoxes } from 'react-icons/fa';

export interface NavigationItem {
  icon: React.ComponentType<{ size?: number }>;
  text: string;
  href: string;
  alert?: boolean;
  allowedRoles: Role[];
  category: string;
}

export const navigationItems: NavigationItem[] = [
  // === GENERAL (All Users) ===
  {
    icon: HiHome,
    text: "Home",
    href: "/",
    allowedRoles: ['user', 'seller', 'moderator', 'manager', 'admin'],
    category: "General"
  },
  {
    icon: MdDashboard,
    text: "Dashboard",
    href: "/dashboard",
    allowedRoles: ['user', 'seller', 'moderator', 'manager', 'admin'],
    category: "General"
  },
  {
    icon: HiUser,
    text: "My Profile",
    href: "/user-profile",
    allowedRoles: ['user', 'seller', 'moderator', 'manager', 'admin'],
    category: "General"
  },
  // {
  //   icon: HiBell,
  //   text: "Notifications",
  //   href: "/notifications",
  //   alert: true,
  //   allowedRoles: ['user', 'seller', 'moderator', 'manager', 'admin'],
  //   category: "General"
  // },
  // {
  //   icon: HiMail,
  //   text: "Messages",
  //   href: "/messages",
  //   allowedRoles: ['user', 'seller', 'moderator', 'manager', 'admin'],
  //   category: "General"
  // },

  // === SELLER SECTION ===
  {
    icon: FaStore,
    text: "My Store",
    href: "/seller/store",
    allowedRoles: ['seller', 'manager', 'admin'],
    category: "Seller"
  },
  // {
  //   icon: MdInventory,
  //   text: "Inventory",
  //   href: "/seller/inventory",
  //   allowedRoles: ['seller', 'manager', 'admin'],
  //   category: "Seller"
  // },
  {
    icon: HiShoppingCart,
    text: "Orders",
    href: "/seller/orders",
    allowedRoles: ['seller', 'manager', 'admin'],
    category: "Seller"
  },
  {
    icon: FaBoxes,
    text: "Products",
    href: "/seller/products",
    allowedRoles: ['seller', 'manager', 'admin'],
    category: "Seller"
  },
  // {
  //   icon: HiTag,
  //   text: "Pricing",
  //   href: "/seller/pricing",
  //   allowedRoles: ['seller', 'manager', 'admin'],
  //   category: "Seller"
  // },
  // {
  //   icon: HiTruck,
  //   text: "Shipping",
  //   href: "/seller/shipping",
  //   allowedRoles: ['seller', 'manager', 'admin'],
  //   category: "Seller"
  // },
  // {
  //   icon: FaFileInvoice,
  //   text: "Invoices",
  //   href: "/seller/invoices",
  //   allowedRoles: ['seller', 'manager', 'admin'],
  //   category: "Seller"
  // },
  // {
  //   icon: HiChartBar,
  //   text: "Sales Analytics",
  //   href: "/seller/analytics",
  //   allowedRoles: ['seller', 'manager', 'admin'],
  //   category: "Seller"
  // },
  // {
  //   icon: HiCube,
  //   text: "Stock Alerts",
  //   href: "/seller/stock-alerts",
  //   allowedRoles: ['seller', 'manager', 'admin'],
  //   category: "Seller"
  // },
  // {
  //   icon: HiClipboardList,
  //   text: "Order History",
  //   href: "/seller/order-history",
  //   allowedRoles: ['seller', 'manager', 'admin'],
  //   category: "Seller"
  // },

  // === MODERATOR SECTION ===
  // {
  //   icon: FaGavel,
  //   text: "Content Moderation",
  //   href: "/moderator/content",
  //   allowedRoles: ['moderator', 'manager', 'admin'],
  //   category: "Moderation"
  // },
  // {
  //   icon: HiFlag,
  //   text: "Reported Items",
  //   href: "/moderator/reports",
  //   alert: true,
  //   allowedRoles: ['moderator', 'manager', 'admin'],
  //   category: "Moderation"
  // },
  // {
  //   icon: HiUserGroup,
  //   text: "User Management",
  //   href: "/moderator/users",
  //   allowedRoles: ['moderator', 'manager', 'admin'],
  //   category: "Moderation"
  // },
  // {
  //   icon: HiChat,
  //   text: "Review Comments",
  //   href: "/moderator/comments",
  //   allowedRoles: ['moderator', 'manager', 'admin'],
  //   category: "Moderation"
  // },
  // {
  //   icon: HiEye,
  //   text: "Activity Monitor",
  //   href: "/moderator/activity",
  //   allowedRoles: ['moderator', 'manager', 'admin'],
  //   category: "Moderation"
  // },
  // {
  //   icon: HiFilter,
  //   text: "Content Filters",
  //   href: "/moderator/filters",
  //   allowedRoles: ['moderator', 'manager', 'admin'],
  //   category: "Moderation"
  // },
  // {
  //   icon: HiDocumentText,
  //   text: "Moderation Logs",
  //   href: "/moderator/logs",
  //   allowedRoles: ['moderator', 'manager', 'admin'],
  //   category: "Moderation"
  // },

  // === MANAGER SECTION ===
  // {
  //   icon: FaChartLine,
  //   text: "Business Analytics",
  //   href: "/manager/analytics",
  //   allowedRoles: ['manager', 'admin'],
  //   category: "Management"
  // },
  // {
  //   icon: MdReport,
  //   text: "Reports",
  //   href: "/manager/reports",
  //   allowedRoles: ['manager', 'admin'],
  //   category: "Management"
  // },
  // {
  //   icon: FaWarehouse,
  //   text: "Warehouse",
  //   href: "/manager/warehouse",
  //   allowedRoles: ['manager', 'admin'],
  //   category: "Management"
  // },
  // {
  //   icon: HiCurrencyDollar,
  //   text: "Revenue",
  //   href: "/manager/revenue",
  //   allowedRoles: ['manager', 'admin'],
  //   category: "Management"
  // },
  // {
  //   icon: MdLocalShipping,
  //   text: "Logistics",
  //   href: "/manager/logistics",
  //   allowedRoles: ['manager', 'admin'],
  //   category: "Management"
  // },
  // {
  //   icon: HiClipboardList,
  //   text: "Operations",
  //   href: "/manager/operations",
  //   allowedRoles: ['manager', 'admin'],
  //   category: "Management"
  // },
  // {
  //   icon: HiCalendar,
  //   text: "Schedule",
  //   href: "/manager/schedule",
  //   allowedRoles: ['manager', 'admin'],
  //   category: "Management"
  // },
  // {
  //   icon: HiDocumentText,
  //   text: "Documentation",
  //   href: "/manager/docs",
  //   allowedRoles: ['manager', 'admin'],
  //   category: "Management"
  // },
  // {
  //   icon: HiUserGroup,
  //   text: "Team Management",
  //   href: "/manager/team",
  //   allowedRoles: ['manager', 'admin'],
  //   category: "Management"
  // },
  // {
  //   icon: HiDesktopComputer,
  //   text: "Performance",
  //   href: "/manager/performance",
  //   allowedRoles: ['manager', 'admin'],
  //   category: "Management"
  // },

  // === ADMIN SECTION ===
  {
    icon: FaUserShield,
    text: "Admin Dashboard",
    href: "/admin",
    allowedRoles: ['admin'],
    category: "Administration"
  },
  {
    icon: HiCog,
    text: "System Settings",
    href: "/admin/settings",
    allowedRoles: ['admin'],
    category: "Administration"
  },
  // {
  //   icon: MdSecurity,
  //   text: "Security",
  //   href: "/admin/security",
  //   allowedRoles: ['admin'],
  //   category: "Administration"
  // },
  {
    icon: FaUserShield,
    text: "Roles & Permissions",
    href: "/admin/roles",
    allowedRoles: ['admin'],
    category: "Administration"
  },
  // {
  //   icon: HiDatabase,
  //   text: "Database",
  //   href: "/admin/database",
  //   allowedRoles: ['admin'],
  //   category: "Administration"
  // },
  {
    icon: HiGlobe,
    text: "API Management",
    href: "/admin/api",
    allowedRoles: ['admin'],
    category: "Administration"
  },
  // {
  //   icon: HiLightningBolt,
  //   text: "Integrations",
  //   href: "/admin/integrations",
  //   allowedRoles: ['admin'],
  //   category: "Administration"
  // },
  // {
  //   icon: HiCloud,
  //   text: "Backups",
  //   href: "/admin/backups",
  //   allowedRoles: ['admin'],
  //   category: "Administration"
  // },
  // {
  //   icon: HiCode,
  //   text: "Developer Tools",
  //   href: "/admin/dev-tools",
  //   allowedRoles: ['admin'],
  //   category: "Administration"
  // },
  // {
  //   icon: HiLockClosed,
  //   text: "Audit Logs",
  //   href: "/admin/audit-logs",
  //   allowedRoles: ['admin'],
  //   category: "Administration"
  // },

  // === FINANCE ===
  // {
  //   icon: MdPayment,
  //   text: "Payments",
  //   href: "/finance/payments",
  //   allowedRoles: ['manager', 'admin'],
  //   category: "Finance"
  // },
  // {
  //   icon: HiCreditCard,
  //   text: "Billing",
  //   href: "/finance/billing",
  //   allowedRoles: ['seller', 'manager', 'admin'],
  //   category: "Finance"
  // },
  // {
  //   icon: HiDocumentText,
  //   text: "Transactions",
  //   href: "/finance/transactions",
  //   allowedRoles: ['seller', 'manager', 'admin'],
  //   category: "Finance"
  // },
  // {
  //   icon: FaFileInvoice,
  //   text: "Financial Reports",
  //   href: "/finance/reports",
  //   allowedRoles: ['manager', 'admin'],
  //   category: "Finance"
  // },

  // === SUPPORT & RESOURCES ===
  // {
  //   icon: HiSupport,
  //   text: "Help Center",
  //   href: "/support",
  //   allowedRoles: ['user', 'seller', 'moderator', 'manager', 'admin'],
  //   category: "Support"
  // },
  // {
  //   icon: HiAcademicCap,
  //   text: "Training",
  //   href: "/training",
  //   allowedRoles: ['seller', 'moderator', 'manager', 'admin'],
  //   category: "Support"
  // },
  // {
  //   icon: HiBookmark,
  //   text: "Resources",
  //   href: "/resources",
  //   allowedRoles: ['user', 'seller', 'moderator', 'manager', 'admin'],
  //   category: "Support"
  // },
];
