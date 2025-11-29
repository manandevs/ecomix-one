'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Button from '../../shared/Button';
import Logo from '../../shared/Logo';
import Link from 'next/link';
import { UserButton, useUser } from '@clerk/nextjs';
import { FaOpencart } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

gsap.registerPlugin(ScrollToPlugin);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const { isSignedIn, isLoaded } = useUser();

  const pathname = usePathname();
  const isDashboard = pathname.includes('/dashboard');

  const navItems = useMemo(
    () => [
      { label: 'Home', href: '/#home', id: 'home' },
      { label: 'Products', href: '/#products', id: 'products' },
      { label: 'Testimonials', href: '/#testimonials', id: 'testimonials' },
    ],
    []
  );

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Section Observer (Only active on Home page)
  useEffect(() => {
    if (pathname !== '/') return;

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((s): s is HTMLElement => s !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.2, rootMargin: "-100px 0px 0px 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, [navItems, pathname]);

  const scrollToSection = (id: string, href: string) => {
    if (pathname !== '/') {
      window.location.href = href;
      return;
    }

    gsap.to(window, {
      duration: 0.8,
      scrollTo: { y: `#${id}`, offsetY: 100 },
      ease: 'power3.inOut',
    });
    setActiveSection(id);
    setIsOpen(false);
  };

  // If we are in dashboard, we might want a simpler navbar or hide specific links
  if (isDashboard) return null; // Let the Dashboard Layout handle its own Sidebar

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 inset-x-0 z-[99] w-full transition-all duration-300 border-b ${isScrolled || isOpen
          ? 'bg-white/80 backdrop-blur-xl border-[#3D3D3D1A] py-3'
          : 'bg-transparent border-transparent py-5'
          }`}
      >
        <div className="max-w-[1210px] mx-auto px-5 flex justify-between items-center">

          {/* 1. Logo */}
          <Link href="/" className="relative z-50">
            <Logo />
          </Link>

          {/* 2. Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-white/50 backdrop-blur-sm p-1.5 rounded-full border border-[#3D3D3D0D] shadow-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id && pathname === '/';

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id, item.href)}
                  className={`relative px-5 py-2 text-[15px] font-medium transition-colors duration-300 rounded-full ${isActive ? 'text-black' : 'text-[#666] hover:text-black'
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-white rounded-full shadow-sm border border-black/5"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* 3. Actions (Cart & Auth) */}
          <div className="hidden md:flex items-center gap-3">

            {/* Cart Button */}
            <button
              className="relative w-11 h-11 flex justify-center items-center rounded-xl border border-gray-200 hover:bg-gray-50"
            >
              <FaOpencart size={20} />
                <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
                  2
                </span>
            </button>

            {/* Auth Logic */}
            {!isLoaded ? (
              <div className="h-11 w-24 bg-gray-200/50 rounded-[14px] animate-pulse" />
            ) : isSignedIn ? (
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 flex justify-center items-center rounded-[14px] border border-[#3D3D3D1A] bg-white hover:bg-gray-50 transition-all hover:scale-105 active:scale-95">
                  <UserButton afterSignOutUrl="/" />
                </div>
                <Link href="/dashboard">
                  <Button className="h-11 px-6 bg-black text-white hover:bg-gray-800 border-none">
                    Dashboard
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link href="/sign-in" className="text-[15px] font-semibold text-[#535353] hover:text-black px-4 py-2 rounded-xl hover:bg-gray-100 transition-colors">
                  Log In
                </Link>
                <Link href="/sign-up">
                  <Button className="h-11 px-6 shadow-lg shadow-amber-500/20">Get Started</Button>
                </Link>
              </div>
            )}
          </div>

          {/* 4. Mobile Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative z-50 p-2 text-2xl text-[#3D3D3D] hover:bg-gray-100 rounded-xl transition-colors"
          >
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </motion.nav>

      {/* 5. Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[70px] left-0 right-0 z-[40] bg-white/95 backdrop-blur-xl border-b border-[#3D3D3D1A] md:hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {/* Mobile Nav Links */}
              {navItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => scrollToSection(item.id, item.href)}
                  className={`text-lg font-medium py-3 border-b border-gray-100 ${activeSection === item.id ? "text-amber-600 font-bold" : "text-[#535353]"
                    }`}
                >
                  {item.label}
                </div>
              ))}

              {/* Mobile Auth Actions */}
              <div className="mt-4 flex flex-col gap-3">
                {isSignedIn ? (
                  <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                    <Button className="w-full justify-center bg-black border-black text-white">Go to Dashboard</Button>
                  </Link>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    <Link href="/sign-in" onClick={() => setIsOpen(false)}>
                      <button className="w-full py-3 rounded-[16px] font-semibold border border-[#3D3D3D1A] text-[#535353] hover:bg-gray-50">
                        Log In
                      </button>
                    </Link>
                    <Link href="/sign-up" onClick={() => setIsOpen(false)}>
                      <Button className="w-full justify-center">Sign Up</Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}