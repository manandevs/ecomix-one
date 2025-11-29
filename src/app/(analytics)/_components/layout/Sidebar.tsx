'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/shared/Logo';

interface SidebarProps {
  children: ReactNode;
}

interface SidebarItemProps {
  icon: ReactNode;
  text: string;
  href: string;
  alert?: boolean;
}

interface SidebarContextType {
  expanded: boolean;
}

const SidebarContext = createContext<SidebarContextType>({ expanded: true });

export default function Sidebar({ children }: SidebarProps) {
  const [expanded, setExpanded] = useState(true);
  const { user, isLoaded } = useUser();

  return (
    <aside className="h-screen sticky top-0 z-50">
      <nav className={`h-full flex flex-col bg-white border-r border-[#3D3D3D1A] shadow-sm transition-all duration-300 ${expanded ? 'w-64' : 'w-20'}`}>

        {/* Header: Logo & Toggle */}
        <div className="p-4 pb-2 flex justify-between items-center h-[80px]">
          <div className={`overflow-hidden transition-all duration-300 ${expanded ? 'w-40' : 'w-0 opacity-0'}`}>
            <Logo />
          </div>
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="p-2 rounded-[12px] bg-gray-50 hover:bg-gray-100 text-[#535353] border border-[#3D3D3D1A] transition-colors"
          >
            {expanded ? <HiChevronDoubleLeft size={20} /> : <HiChevronDoubleRight size={20} />}
          </button>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#3D3D3D1A] my-2"></div>

        {/* Navigation Items */}
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3 flex flex-col gap-2 pt-4 overflow-y-scroll overflow-x-hidden">{children}</ul>
        </SidebarContext.Provider>

        {/* Footer: Clerk User Profile */}
        <div className="border-t border-[#3D3D3D1A] p-3 flex items-center justify-center bg-gray-50/50">
          {isLoaded && user ? (
            <div className={`flex items-center transition-all duration-300 ${expanded ? 'gap-3 w-full' : 'justify-center'}`}>
              <div className="w-11 h-11 flex justify-center items-center rounded-[14px] border border-[#3D3D3D1A] bg-white hover:bg-gray-50 transition-all hover:scale-105 active:scale-95">
                <UserButton afterSignOutUrl="/" />
              </div>

              <div
                className={`flex flex-col overflow-hidden transition-all duration-300 ${expanded ? 'w-40 opacity-100' : 'w-0 opacity-0'
                  }`}
              >
                <h4 className="font-bold text-sm text-[#3D3D3D] truncate font-RecoletaMedium">
                  {user.fullName}
                </h4>
                <span className="text-xs text-[#777] truncate">
                  {user.primaryEmailAddress?.emailAddress}
                </span>
              </div>
            </div>
          ) : (
            <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse" />
          )}
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, href, alert }: SidebarItemProps) {
  const { expanded } = useContext(SidebarContext);
  const pathname = usePathname();

  // Determine if this item is active
  const isActive = pathname === href;

  return (
    <li className="list-none">
      <Link
        href={href}
        className={`
            relative flex items-center justify-center py-3 px-3
            font-medium rounded-[16px] cursor-pointer
            transition-all duration-300 group
            ${isActive
            ? 'bg-amber-50 text-amber-700 border border-amber-200 shadow-sm'
            : 'text-[#535353] hover:bg-gray-50 hover:text-black border border-transparent'
          }
        `}
      >
        {/* Icon */}
        <span className="text-xl">{icon}</span>

        {/* Text Label */}
        <span
          className={`overflow-hidden transition-all duration-300 whitespace-nowrap ${expanded ? 'w-52 ml-3' : 'w-0'
            }`}
        >
          {text}
        </span>

        {/* Alert Dot */}
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded-full bg-amber-500 ${expanded ? '' : 'top-2 right-2'
              }`}
          />
        )}

        {/* Tooltip for collapsed state */}
        {!expanded && (
          <div
            className={`
                absolute left-full rounded-md px-2 py-1 ml-6
                bg-black text-white text-xs z-50
                invisible opacity-0 -translate-x-3 transition-all
                group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
                whitespace-nowrap
            `}
          >
            {text}
          </div>
        )}
      </Link>
    </li>
  );
}