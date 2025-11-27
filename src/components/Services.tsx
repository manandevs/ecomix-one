import React from 'react';
import Button2 from './Button2';
import Heading from './Heading';
import Text from './Text';
import Button from './Button';
import Image from 'next/image';
import FadeUp from './motion/FadeUp';

type Card = {
  boldText: string;
  text: string;
};

const textCards: Card[] = [
  {
    boldText: 'Exclusive Attention, Not Agency Overload',
    text: ' - We cap our client roster to ensure your team gets the focus you deserve. You’re not just another account—you’re a partner we’recommitted to impressing, every step of the way.',
  },
  {
    boldText: 'No DIY Stress, No Hiring Hassles',
    text: ' - Other agencies make you figure out what you need. We don’t. Share your goals, and we’ll map out the exact strategy and services to achieve them—no guesswork, no juggling freelancers.',
  },
  {
    boldText: 'Your Goals, Our full Team',
    text: ' - Forget piecing together designers, marketers, and SEO specialists. We’ve already built a dedicated in-house team of experts who collaborate daily. They’re not freelancers—they’re your behind-the-scenes crew, working together to make your brand shine',
  },
  {
    boldText: 'Custom Plans, Not Cookie-Cutter Solutions',
    text: ' - We don’t recycle the same strategy for every client. Your business is unique, so we build a plan around your audience, your niche, and your vision—then execute it with precision.',
  },
];

const renderCards = (cards: Card[]) => (
  <div className='marquee--inner w-full flex flex-col gap-[20px]  md:absolute top-0 left-0'>
    {cards.map((card, index) => (
      <div
        key={index}
        className='bg-white max-w-[550px] w-full  gap-[8px] rounded-[24px] p-[36px] border-[2px] border-[#3D3D3D1A] text-[16px] sm:text-[20px] tracking-[0.030rem] mx-auto'
      >
        <span className='font-semibold text-black md:inline-block'>
          {card.boldText}
        </span>
        {card.text}
      </div>
    ))}
    {cards.map((card, index) => (
      <div
        key={`dup-${index}`}
        className='bg-white max-w-[550px] w-full  gap-[8px] rounded-[24px] p-[36px] border-[2px] border-[#3D3D3D1A] text-[16px] sm:text-[20px] tracking-[0.030rem] mx-auto'
      >
        <span className='font-semibold text-black md:inline-block'>
          {card.boldText}
        </span>
        {card.text}
      </div>
    ))}
  </div>
);

export default function Services() {
  return (
    <section id='ourvalues' className='relative z-[10] w-full pt-20'>
      <FadeUp>
        <div className='w-full gap-12 grid grid-cols-1 lg:grid-cols-2'>
          <div className='flex flex-col'>
            <div className='inline-block'>
              <Button2 text='why work with us' src='/icon/light.svg' />
            </div>
            <div className='max-w-full sm:max-w-[437px] flex flex-col mt-5 mb-8'>
              <Heading
                text='Exceptional services tailored to your business'
                className='text-[32px] sm:text-[36px] leading-[40px] sm:leading-[44px] lg:text-[56px] lg:leading-[64px] mb-4'
              />
              <Text text='From strategy to execution, our expert team is committed to delivering innovative, results-driven digital experiences tailored to your unique needs.' />
            </div>
            <span className='inline-block'>
              <Button text='Book a call' />
            </span>
          </div>

          <div className='grid grid-cols-1 max-w-[550px]  gap-5 md:gap-8  relative'>
            <Image
              src={'/icon/dimaind.svg'}
              alt='dimaind'
              width={77}
              height={77}
              className='absolute z-[10] size-[60px] lg:size-[77px] hover:rotate-[360deg] hover:scale-[1.04] transition-all duration-300 ease-in-out -top-6 lg:-top-10 -right-3 lg:-right-4'
            />

            <div className='relative w-full overflow-hidden min-h-[600px] max-h-[700px] md:min-h-[800px] marquee marquee-up'>
              {renderCards(textCards)}
            </div>

            <div
              className='w-full  h-[215px]  absolute left-0  right-0 bottom-0'
              style={{
                background:
                  'linear-gradient(180deg, rgba(247, 247, 244, 0) 0%, #F7F7F4 100%)',
              }}
            ></div>
            <div
              className='w-full  h-[215px] absolute left-0 right-0 top-0'
              style={{
                background:
                  'linear-gradient(180deg, #F7F7F4 0%,  rgba(247, 247, 244, 0) 100%)',
              }}
            ></div>
          </div>
        </div>
      </FadeUp>

      <div className='top-[400px] md:top-[250px] lg:right-[80px] bg-[#A2EA13]/50 blur-[200px] absolute z-[-1]   size-[200px] md:size-[340px]'></div>
    </section>
  );
}
