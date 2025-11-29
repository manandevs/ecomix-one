import Sidebar, { SidebarItem } from '@/app/(analytics)/_components/layout/Sidebar';
import React from 'react';
import { auth } from '@clerk/nextjs/server';
import { navigationItems } from '@/config/navigation';
import { Role } from '@/types';
import Header from './_components/layout/header';

interface AnalyticsLayoutProps {
    children: React.ReactNode;
}

const AnalyticsLayout: React.FC<AnalyticsLayoutProps> = async ({ children }) => {
    const { sessionClaims } = await auth();
    const userRole = (sessionClaims?.metadata?.role as Role) || 'user';

    // Filter navigation items based on user role
    const allowedNavItems = navigationItems.filter(item =>
        item.allowedRoles.includes(userRole)
    );

    // Group items by category
    const groupedItems = allowedNavItems.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {} as Record<string, typeof navigationItems>);

    return (
        <div className='flex h-screen w-full bg-[#f7f7f4]'>
            <Sidebar>
                {Object.entries(groupedItems).map(([category, items]) => (
                    <React.Fragment key={category}>
                        <li className="list-none px-3 pt-4 pb-2">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                                {category}
                            </span>
                        </li>
                        {items.map((item) => (
                            <SidebarItem
                                key={item.href}
                                icon={<item.icon size={20} />}
                                text={item.text}
                                href={item.href}
                                alert={item.alert}
                            />
                        ))}
                    </React.Fragment>
                ))}
            </Sidebar>

            {/* Main Content Area */}
            <main className='flex-1 h-full overflow-y-auto relative flex flex-col'>
                <Header />
                {children}
            </main>
        </div>
    );
};

export default AnalyticsLayout;