# 🚀 Ecomix One

![Ecomix One Banner](public/images/hero-banner.png)

**Ecomix One** is a high-performance, enterprise-grade E-commerce Management System built with **Next.js 15**. It features a robust multi-role dashboard, real-time analytics, and a scalable **Feature-Slice Architecture**.

Designed to handle complex operations between Admins, Managers, Sellers, and Moderators, ensuring a seamless flow of data and permissions.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Authentication:** [Clerk](https://clerk.com/)
- **Database/Backend:** Server Actions & Firebase
- **UI Components:** [Radix UI](https://www.radix-ui.com/) / Custom Atomic Design
- **Animations:** [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/)
- **State Management:** React Hooks & Server State

---

## 🌟 Key Features

*   **🛡️ Role-Based Access Control (RBAC):** Secure routing and middleware protection for 5 distinct user roles.
*   **🏗️ Feature-Based Architecture:** Scalable folder structure separating business logic from UI.
*   **📊 Dynamic Dashboard:** Role-specific views (e.g., Sellers see inventory, Admins see system health).
*   **⚡ Server Actions:** Direct backend logic execution without API route overhead.
*   **🎨 Premium UI/UX:** Smooth transitions, glass-morphism effects, and responsive mobile layouts.

---

## 🔐 Roles & Permissions

The application is divided into specific zones based on user roles:

| Role | Access Level | Description |
| :--- | :--- | :--- |
| **Admin** | 🔴 High | Full system access. Can manage roles, security, database, and API settings. |
| **Manager** | 🟠 Medium | Oversees operations, logistics, revenue, warehouse, and team performance. |
| **Seller** | 🟡 Medium | Manages their own store, inventory, products, pricing, and orders. |
| **Moderator** | 🔵 Low | Reviews content, comments, user reports, and handles bans/suspensions. |
| **User** | 🟢 Public | Standard customer access (Browse, Cart, Profile, Purchase). |

---

## 📂 Project Architecture

We utilize a **Feature-Slice Design** to ensure maintainability and scalability.

```text
src/
├── app/                  # 🟢 Routing Layer (Thin files)
│   ├── (auth)/           # Sign-in / Sign-up
│   ├── (dashboard)/      # Protected App Logic (Sidebar + Header)
│   ├── (marketing)/      # Public Landing Pages
│   └── api/              # Webhooks only
│
├── components/           # 🟡 Shared UI Layer
│   ├── ui/               # Dumb/Atomic components (Button, Card, Badge)
│   ├── layout/           # Global Navbar, Footer
│   └── motion/           # Animation wrappers
│
├── features/             # 🔴 Business Logic (The "Brain")
│   ├── auth/             # Logic for authentication
│   ├── products/         # Product components, hooks, types
│   ├── orders/           # Order processing logic
│   └── admin/            # Admin-specific tables and charts
│
├── lib/                  # 🟠 Third-party configurations (Firebase, Stripe)
├── providers/            # ⚪ Context Providers (Theme, Auth, Toast)
└── server/               # ⚫ Server Actions & DB connections

details stecture

ecomix-one/
├── .env.local                    # Secrets (Clerk Keys, DB URL, Firebase Config)
├── .gitignore
├── eslint.config.mjs
├── middleware.ts                 # Route protection & RBAC middleware
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── components.json               # Shadcn UI configuration
│
├── public/                       # Static Assets
│   ├── fonts/
│   │   ├── Recoleta-Regular.otf
│   │   ├── Recoleta-Medium.otf
│   │   ├── Manrope-Variable.ttf
│   │   └── JetBrainsMono-Regular.ttf
│   ├── icons/
│   │   ├── logo.svg
│   │   ├── favicon.ico
│   │   ├── auth/
│   │   │   ├── google.svg
│   │   │   └── github.svg
│   │   └── dashboard/
│   │       ├── analytics.svg
│   │       └── inventory.svg
│   └── images/
│       ├── hero-banner.png
│       ├── product-placeholder.png
│       └── testimonials/
│           ├── user-1.jpg
│           └── user-2.jpg
│
├── scripts/
│   └── scaffold-routes.js        # Script to generate new dashboard pages
│
└── src/
    │
    ├── app/                      # 🟢 ROUTING LAYER
    │   │
    │   ├── (auth)/               # Authentication Routes
    │   │   ├── sign-in/[[...sign-in]]/
    │   │   │   └── page.tsx
    │   │   ├── sign-up/[[...sign-up]]/
    │   │   │   └── page.tsx
    │   │   ├── forgot-password/
    │   │   │   └── page.tsx
    │   │   └── layout.tsx        # Auth Center Layout
    │   │
    │   ├── (dashboard)/          # Application Internal Routes
    │   │   ├── _components/      # Layout components specific to Dashboard
    │   │   │   ├── dashboard-header.tsx
    │   │   │   ├── mobile-sidebar.tsx
    │   │   │   ├── sidebar-nav.tsx
    │   │   │   ├── sidebar-item.tsx
    │   │   │   └── user-nav.tsx
    │   │   │
    │   │   ├── admin/            # Admin Routes
    │   │   │   ├── api/page.tsx
    │   │   │   ├── audit-logs/page.tsx
    │   │   │   ├── backups/page.tsx
    │   │   │   ├── database/page.tsx
    │   │   │   ├── dev-tools/page.tsx
    │   │   │   ├── integrations/page.tsx
    │   │   │   ├── roles/page.tsx
    │   │   │   ├── security/page.tsx
    │   │   │   ├── settings/page.tsx
    │   │   │   └── page.tsx      # Admin Overview
    │   │   │
    │   │   ├── finance/          # Finance Routes
    │   │   │   ├── billing/page.tsx
    │   │   │   ├── payments/page.tsx
    │   │   │   ├── reports/page.tsx
    │   │   │   └── transactions/page.tsx
    │   │   │
    │   │   ├── manager/          # Manager Routes
    │   │   │   ├── analytics/page.tsx
    │   │   │   ├── docs/page.tsx
    │   │   │   ├── logistics/page.tsx
    │   │   │   ├── operations/page.tsx
    │   │   │   ├── performance/page.tsx
    │   │   │   ├── reports/page.tsx
    │   │   │   ├── revenue/page.tsx
    │   │   │   ├── schedule/page.tsx
    │   │   │   ├── team/page.tsx
    │   │   │   └── warehouse/page.tsx
    │   │   │
    │   │   ├── messages/         # Global Messages
    │   │   │   └── page.tsx
    │   │   │
    │   │   ├── moderator/        # Moderator Routes
    │   │   │   ├── activity/page.tsx
    │   │   │   ├── comments/page.tsx
    │   │   │   ├── content/page.tsx
    │   │   │   ├── filters/page.tsx
    │   │   │   ├── logs/page.tsx
    │   │   │   ├── reports/page.tsx
    │   │   │   └── users/page.tsx
    │   │   │
    │   │   ├── notifications/    # Global Notifications
    │   │   │   └── page.tsx
    │   │   │
    │   │   ├── resources/        # Shared Resources
    │   │   │   └── page.tsx
    │   │   │
    │   │   ├── seller/           # Seller Routes
    │   │   │   ├── analytics/page.tsx
    │   │   │   ├── inventory/page.tsx
    │   │   │   ├── invoices/page.tsx
    │   │   │   ├── order-history/page.tsx
    │   │   │   ├── orders/page.tsx
    │   │   │   ├── pricing/page.tsx
    │   │   │   ├── products/
    │   │   │   │   ├── [productId]/page.tsx  # Edit Product
    │   │   │   │   ├── new/page.tsx          # Create Product
    │   │   │   │   └── page.tsx              # List Products
    │   │   │   ├── shipping/page.tsx
    │   │   │   ├── stock-alerts/page.tsx
    │   │   │   └── store/page.tsx
    │   │   │
    │   │   ├── support/          # Help Center
    │   │   │   └── page.tsx
    │   │   │
    │   │   ├── training/         # Training
    │   │   │   └── page.tsx
    │   │   │
    │   │   ├── user-profile/     # Clerk Profile
    │   │   │   └── [[...user-profile]]/
    │   │   │       └── page.tsx
    │   │   │
    │   │   ├── layout.tsx        # Dashboard Shell (Sidebar + Header provider)
    │   │   ├── loading.tsx       # Dashboard Skeleton
    │   │   └── page.tsx          # General Dashboard Home
    │   │
    │   ├── (marketing)/          # Public Routes
    │   │   ├── about/page.tsx
    │   │   ├── contact/page.tsx
    │   │   ├── pricing/page.tsx
    │   │   ├── layout.tsx        # Marketing Layout
    │   │   └── page.tsx          # Landing Page
    │   │
    │   ├── api/                  # Edge Cases & Webhooks
    │   │   ├── uploadthing/      # File Uploads (if used)
    │   │   │   └── route.ts
    │   │   └── webhooks/
    │   │       ├── clerk/route.ts
    │   │       └── stripe/route.ts
    │   │
    │   ├── error.tsx             # Global Error UI
    │   ├── globals.css
    │   ├── layout.tsx            # Root HTML Layout
    │   └── not-found.tsx         # Global 404
    │
    ├── components/               # 🟡 SHARED UI LAYER
    │   │
    │   ├── ui/                   # ✨ Atomic Components (Shadcn/Radix)
    │   │   ├── accordion.tsx
    │   │   ├── alert-dialog.tsx
    │   │   ├── avatar.tsx
    │   │   ├── badge.tsx
    │   │   ├── button.tsx
    │   │   ├── card.tsx
    │   │   ├── checkbox.tsx
    │   │   ├── dialog.tsx        # Modal
    │   │   ├── dropdown-menu.tsx
    │   │   ├── form.tsx
    │   │   ├── input.tsx
    │   │   ├── label.tsx
    │   │   ├── popover.tsx
    │   │   ├── progress.tsx
    │   │   ├── scroll-area.tsx
    │   │   ├── select.tsx
    │   │   ├── separator.tsx
    │   │   ├── sheet.tsx         # Mobile Sidebar
    │   │   ├── skeleton.tsx
    │   │   ├── switch.tsx
    │   │   ├── table.tsx
    │   │   ├── tabs.tsx
    │   │   ├── textarea.tsx
    │   │   ├── toast.tsx
    │   │   └── tooltip.tsx
    │   │
    │   ├── layout/               # Global Site Layouts
    │   │   ├── footer.tsx
    │   │   ├── navbar.tsx
    │   │   ├── page-shell.tsx    # Wrapper for page content
    │   │   └── section-shell.tsx
    │   │
    │   └── motion/               # Animation Wrappers
    │       ├── fade-down.tsx
    │       ├── fade-in.tsx
    │       ├── fade-left.tsx
    │       ├── fade-up.tsx
    │       └── fade-up-title.tsx
    │
    ├── config/                   # 🔵 CONFIGURATION
    │   ├── dashboard.ts          # Dashboard specific constants
    │   ├── navigation.ts         # Sidebar definitions & RBAC
    │   └── site.ts               # Metadata, SEO, Social links
    │
    ├── features/                 # 🔴 BUSINESS LOGIC (Feature-Slice)
    │   │
    │   ├── admin/
    │   │   ├── components/
    │   │   │   ├── audit-log-table.tsx
    │   │   │   ├── role-editor-modal.tsx
    │   │   │   └── system-health-chart.tsx
    │   │   └── hooks/
    │   │       └── use-admin-stats.ts
    │   │
    │   ├── auth/
    │   │   ├── components/
    │   │   │   ├── forgot-password-form.tsx
    │   │   │   ├── oauth-buttons.tsx
    │   │   │   ├── sign-in-form.tsx
    │   │   │   └── sign-up-form.tsx
    │   │   └── hooks/
    │   │       └── use-current-user.ts
    │   │
    │   ├── manager/
    │   │   ├── components/
    │   │   │   ├── kpi-cards.tsx
    │   │   │   ├── revenue-chart.tsx
    │   │   │   └── team-performance-table.tsx
    │   │   └── utils/
    │   │       └── calculate-efficiency.ts
    │   │
    │   ├── marketing/
    │   │   ├── components/
    │   │   │   ├── features-showcase.tsx
    │   │   │   ├── hero.tsx
    │   │   │   ├── newsletter-cta.tsx
    │   │   │   ├── pricing-table.tsx
    │   │   │   └── testimonials-slider.tsx
    │   │   └── types.ts
    │   │
    │   ├── moderator/
    │   │   ├── components/
    │   │   │   ├── ban-user-dialog.tsx
    │   │   │   ├── content-report-card.tsx
    │   │   │   └── report-feed.tsx
    │   │   └── actions.ts
    │   │
    │   ├── orders/
    │   │   ├── components/
    │   │   │   ├── invoice-generator.tsx
    │   │   │   ├── order-details-view.tsx
    │   │   │   ├── order-status-badge.tsx
    │   │   │   └── orders-table.tsx
    │   │   └── utils/
    │   │       └── format-order-id.ts
    │   │
    │   ├── products/
    │   │   ├── components/
    │   │   │   ├── image-uploader.tsx
    │   │   │   ├── product-card.tsx
    │   │   │   ├── product-form.tsx
    │   │   │   └── products-table.tsx
    │   │   ├── hooks/
    │   │   │   └── use-product-filters.ts
    │   │   └── types.ts
    │   │
    │   └── seller/
    │       ├── components/
    │       │   ├── inventory-alerts.tsx
    │       │   ├── sales-graph.tsx
    │       │   └── store-settings-form.tsx
    │       └── hooks/
    │           └── use-inventory.ts
    │
    ├── hooks/                    # 🟣 GLOBAL HOOKS
    │   ├── use-click-outside.ts
    │   ├── use-debounce.ts
    │   ├── use-is-mobile.ts
    │   ├── use-local-storage.ts
    │   ├── use-media-query.ts
    │   ├── use-mounted.ts
    │   └── use-toast.ts
    │
    ├── lib/                      # 🟠 HELPERS & CONFIGS
    │   ├── clerk.ts
    │   ├── constants.ts          # Global constants (MAX_FILE_SIZE, etc)
    │   ├── firebase.ts
    │   ├── fonts.ts              # Font loader configuration
    │   ├── stripe.ts             # Stripe initialization
    │   ├── utils.ts              # cn() class merger
    │   └── validators.ts         # Zod schemas for forms
    │
    ├── providers/                # ⚪ CONTEXT PROVIDERS
    │   ├── app-provider.tsx      # Main wrapper
    │   ├── query-provider.tsx    # TanStack Query
    │   ├── theme-provider.tsx    # Dark/Light mode
    │   └── toast-provider.tsx    # Toaster notification
    │
    ├── server/                   # ⚫ SERVER-SIDE LOGIC
    │   ├── actions/
    │   │   ├── admin.ts
    │   │   ├── auth.ts
    │   │   ├── finance.ts
    │   │   ├── manager.ts
    │   │   ├── moderator.ts
    │   │   ├── orders.ts
    │   │   ├── products.ts
    │   │   ├── seller.ts
    │   │   └── users.ts
    │   └── db/
    │       ├── schema.ts         # DB Schema (Drizzle/Prisma)
    │       └── index.ts          # DB Connection
    │
    └── types/                    # 🏷️ GLOBAL TYPES
        ├── index.ts
        ├── admin.ts
        ├── analytics.ts
        ├── api.ts
        ├── auth.ts
        ├── component.ts
        ├── finance.ts
        ├── inventory.ts
        ├── invoice.ts
        ├── manager.ts
        ├── message.ts
        ├── moderation.ts
        ├── navigation.ts
        ├── notification.ts
        ├── order.ts
        ├── product.ts
        ├── support.ts
        └── user.ts