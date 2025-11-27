'use client';

import React, { useEffect, useRef, useState } from 'react';
import Button2 from './Button2';
import Heading from './Heading';
import Text from './Text';
import Button from './Button';
import Image from 'next/image';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card from './Card';
import FadeUp from './motion/FadeUp';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    icon: '/icon/pincle.svg',
    heading: 'Brand Identity Design',
    text: 'Memorable logos, visuals, and messaging that resonate with our client’s niche',
  },
  {
    icon: '/icon/treebox.svg',
    heading: 'Content Creation',
    text: 'Engaging storytelling ad copy, graphics, videos, and posts tailored to your brand',
  },
  {
    icon: '/icon/starCircle.svg',
    heading: 'Social Media Management',
    text: 'Strategic posting, community engagement, and growth to build loyal audiences',
  },
  {
    icon: '/icon/mic.svg',
    heading: 'PPC Advertising &  Digital Marketing',
    text: 'Data-driven campaigns (Google Ads, Meta Ads) to target high-intent customers.',
  },
  {
    icon: '/icon/webcode.svg',
    heading: 'Web Development & SEO',
    text: 'Data-driven campaigns (Google Ads, Meta Ads) to target high-intent customers.',
  },
];

export default function HeroSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const progressBarRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 860);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const ctx = gsap.context(() => {
      const scrollWidth =
        cardsRef.current!.scrollWidth - cardsRef.current!.clientWidth;

      gsap.to(cardsRef.current, {
        x: -scrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=' + scrollWidth,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            gsap.to(progressBarRef.current, {
              width: `${self.progress * 100}%`,
              ease: 'none',
              duration: 0,
            });
          },
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isDesktop]);

  return (
    <div
      id='services'
      ref={sectionRef}
      className='w-full overflow-hidden flex flex-col gap-[34px] py-12 md:py-16 pt-20 md:pt-36'
    >
      <FadeUp>
        <>
          <div className='inline-block'>
            <Button2 text='Range of our services' src='/icon/star.svg' />
          </div>

          <div className='flex flex-col md:flex-row justify-between gap-8 mt-10'>
            <div className='w-full max-w-[675px] flex flex-col gap-8'>
              <Heading
                text='We provide full-service digital expertise to elevate your brand, including:'
                className='text-[36px] leading-[44px] lg:text-[56px] lg:leading-[64px] tracking-tight'
              />
            </div>
            <div className='w-full max-w-[436px] flex flex-col justify-start items-start gap-4'>
              <Text text='From strategy to execution, our expert team is committed to delivering innovative, results-driven digital experiences tailored to your unique needs.' />
              <Button text='Book a call' />
            </div>
          </div>

          <div className='w-full h-auto mt-[45px] flex flex-col items-end overflow-hidden pt-[30px]'>
            <Image
              src={'/icon/scroll.svg'}
              alt='scroll.svg'
              width={500}
              height={500}
              className='w-[107px] h-[52px] scrollAnimation md:inline-block hidden mb-[20px] ml-2.5'
            />
            <div
              ref={cardsRef}
              className='flex md:flex-row flex-col gap-4 md:gap-6 pb-[60px] w-full'
            >
              {cards.map((items, index) => {
                return (
                  <Card
                    key={index}
                    icon={items.icon}
                    heading={items.heading}
                    text={items.text}
                  />
                );
              })}
            </div>

            <div className='w-full md:block hidden h-[1px] bg-black/6 relative'>
              <div
                ref={progressBarRef}
                className='absolute h-[3px] w-[0%] bottom-0 left-0 bg-[#7558FC]'
              ></div>
            </div>
          </div>
        </>
      </FadeUp>
    </div>
  );
}
