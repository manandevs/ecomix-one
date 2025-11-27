'use client';
import React, { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { motion } from 'framer-motion';

import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Button from '../shared/Button';

gsap.registerPlugin(ScrollToPlugin);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = useMemo(
    () => [
      { label: 'Home', href: '/#home' },
      { label: 'Services', href: '/#services' },
      { label: 'Our Values', href: '/#ourvalues' },
    ],
    []
  );

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.split('#')[1]);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: 0.2,
    });

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [navItems]);

  const scrollToSection = (id: string) => {
    gsap.to(window, {
      duration: 0.2,
      scrollTo: id === 'home' ? 0 : `#${id}`,
      ease: 'none',
    });
  };

  return (
    <div
      className={`fixed max-w-screen top-0 z-[99] w-full transition-all ${
        isScrolled || isOpen
          ? 'bg-white backdrop-blur-[40px]'
          : 'bg-transparent'
      }`}
    >
      <nav
        className={`max-w-[1210px] relative mx-auto w-full min-h-[70px] md:min-h-[98px] px-4 flex justify-between items-center`}
      >
        <div className='flex items-center gap-5'>
          {/* Logo + Brand Name */}
          <div className='flex items-center gap-2'>
            <Image
              src={'/Ecomix-Cone_Logo_Amber_Final.png'}
              alt='Ecomix-Cone Logo'
              width={34}
              height={39}
              className='w-[31px] h-[35px] md:w-[34px] md:h-[39px]'
            />
            <span className='font-semibold text-xl font-RecoletaMedium'>
              ecomixOne
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-8'>
            {navItems.map((item, index) => {
              const sectionId = item.href.split('#')[1];
              const isActive = activeSection === sectionId;

              return (
                <div
                  key={index}
                  onClick={() => scrollToSection(sectionId)}
                  className={`cursor-pointer font-medium text-xl transition-all ${
                    isActive ? 'text-black font-semibold' : 'text-[#535353]'
                  }`}
                >
                  {item.label}
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop Button */}
        <div className='hidden md:flex'>
          <Button text='Book a call' />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className='font-semibold md:hidden text-2xl'
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20, height: 0 }}
        animate={isOpen ? { opacity: 1, y: 0, height: 'auto' } : {}}
        exit={{ opacity: 0, y: -20, height: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className='fixed top-[70px] overflow-hidden w-full left-0 right-0 z-[55] md:hidden'
      >
        <div className='py-[32px] px-[24px] bg-white'>
          <div className='flex flex-col gap-[20px] w-full'>
            {navItems.map((item, index) => {
              const sectionId = item.href.split('#')[1];
              const isActive = activeSection === sectionId;

              return (
                <div
                  key={index}
                  onClick={() => {
                    scrollToSection(sectionId);
                    setIsOpen(false);
                  }}
                  className={`font-[600] cursor-pointer leading-[24px] border-b ${
                    index === navItems.length - 1
                      ? 'border-transparent'
                      : 'border-black/10 pb-[20px]'
                  } text-[18px] ${
                    isActive ? 'text-black font-semibold' : 'text-[#000]'
                  }`}
                >
                  {item.label}
                </div>
              );
            })}

            <Button text='Submit' />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
