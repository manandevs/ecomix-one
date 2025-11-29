'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { HiSearch, HiBell, HiCalendar } from 'react-icons/hi';

export default function Header() {
  const pathname = usePathname();

  // Helper to get readable title from path
  const getPageTitle = (path: string) => {
    // Remove query params and trailing slashes
    const cleanPath = path.split('?')[0].replace(/\/$/, '');
    
    // Specific overrides
    if (cleanPath === '/dashboard') return 'Dashboard';
    if (cleanPath === '/admin') return 'Admin Overview';
    
    // General logic: take the last segment, capitalize, remove hyphens
    const segments = cleanPath.split('/');
    const lastSegment = segments[segments.length - 1];
    
    if (!lastSegment) return 'Overview';
    
    return lastSegment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const title = getPageTitle(pathname);
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'short', 
    day: 'numeric' 
  });

  return (
    <header className="sticky top-0 z-40 w-full bg-[#f7f7f4]/80 backdrop-blur-md border-b border-[#3D3D3D1A] px-6 py-4 transition-all duration-300">
      <div className="max-w-[1210px] mx-auto flex flex-col md:flex-row gap-4 justify-between items-center">
        
        {/* Left: Page Title & Breadcrumb context */}
        <div className="flex flex-col items-start w-full md:w-auto">
          <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
            <span className="opacity-60">Analytics</span>
            <span>/</span>
            <span className="text-amber-600 capitalize">{title}</span>
          </div>
          <h1 className="text-2xl font-bold text-[#3D3D3D] font-RecoletaMedium mt-1">
            {title}
          </h1>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4 w-full md:w-auto justify-end">
          
          {/* Global Search */}
          <div className="relative hidden md:block group">
            <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-amber-500 transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search..." 
              className="pl-9 pr-4 py-2.5 rounded-[14px] bg-white border border-[#3D3D3D1A] text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all w-[240px]"
            />
          </div>

          {/* Date Badge */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-2 bg-white rounded-[14px] border border-[#3D3D3D1A] text-sm font-medium text-gray-600">
            <HiCalendar className="text-amber-500" size={18} />
            {currentDate}
          </div>

          {/* Notifications */}
          <button className="relative p-2.5 bg-white rounded-[14px] border border-[#3D3D3D1A] text-gray-600 hover:text-amber-600 hover:border-amber-200 transition-all group">
            <HiBell size={20} />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white group-hover:scale-110 transition-transform"></span>
          </button>

          {/* Mobile Menu Toggle (Optional if sidebar handles it, mostly for extra actions) */}
          <div className="md:hidden">
             {/* Mobile specific actions can go here */}
          </div>

        </div>
      </div>
    </header>
  );
}