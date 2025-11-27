import React from 'react';
import Button2 from './Button2';
import Heading from './Heading';
import TestimonialsCard from './TestimonialsCard';
import FadeUp from './motion/FadeUp';

type TestimonialCard = {
  heading: string;
  text: string;
  src: string;
  name: string;
  address: string;
};

const firstCardsColum: TestimonialCard[] = [
  {
    heading: 'Your Goals, Our full Team',
    text: ' - Forget piecing together designers, marketers,',
    src: '/images/man.png',
    name: 'Abdul Monir Arab',
    address: '@monirarab.ma',
  },
  {
    heading: 'Your Goals, Our full Team',
    text: '  - Forget piecing together designers, marketers, .',
    src: '/images/man2.png',
    name: 'Ashley Grahem',
    address: '@grahem.ashley',
  },
];
const secondCardsColum: TestimonialCard[] = [
  {
    heading: 'Your Goals, Our full Team',
    text: ' - Forget piecing together designers, marketers, and SEO specialists. We’ve already built a dedicated in-house team of experts who collaborate daily. They’re not freelancers.',
    src: '/images/man3.png',
    name: 'Marvin Copper',
    address: '@copper.marvin',
  },
  {
    heading: 'Your Goals, Our full Team',
    text: ' - Forget piecing together designers, marketers, .',
    src: '/images/man5.png',
    name: 'Abdul Monir Arab',
    address: '@monirarab.ma',
  },
];
const thirdCardsColum: TestimonialCard[] = [
  {
    heading: 'Your Goals, Our full Team',
    text: ' - Forget piecing together designers, marketers, .',
    src: '/images/man4.png',
    name: 'Abdul Monir Arab',
    address: '@monirarab.ma',
  },
  {
    heading: 'Your Goals, Our full Team',
    text: ' - Forget piecing together designers, marketers, .',
    src: '/images/man5.png',
    name: 'Abdul Monir Arab',
    address: '@monirarab.ma',
  },
];

const mergedCards = [
  ...firstCardsColum,
  ...secondCardsColum,
  ...thirdCardsColum,
];

const renderCards = (cards: TestimonialCard[]) => (
  <div className='marquee--inner w-full flex flex-col gap-[20px]  lg:absolute top-0 left-0'>
    {cards.map((card, index) => (
      <TestimonialsCard key={index} {...card} />
    ))}
    {cards.map((card, index) => (
      <TestimonialsCard
        key={`dup-${index}`}
        {...card}
        className='md:block hidden'
      />
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section
      id='testimonials'
      className='overflow-hidden w-full h-auto mx-auto'
    >
      <FadeUp>
        <div className='my-[72px] max-w-[700px] min-w-auto flex flex-col justify-center items-center mx-auto gap-7 mb-14'>
          <Button2 text='Testimonials' src='/icon/simpleStar.svg' />
          <Heading
            text='We empower founders and owners operate ✨ faster'
            className='text-[36px] leading-[44px] lg:text-[56px] lg:leading-[64px] lg:text-left text-center'
          />
        </div>
      </FadeUp>

      <FadeUp>
        <div className='w-full relative pb-[72px] min-h-[600px] max-h-[650px] lg:min-h-[650px] overflow-hidden grid grid-cols-1 lg:grid-cols-3 gap-[20px]'>
          <div className='marquee marquee-up lg:hidden block'>
            {renderCards(mergedCards)}
          </div>
          <div className='marquee marquee-up lg:block hidden'>
            {renderCards(firstCardsColum)}
          </div>
          <div className='marquee marquee-down  lg:block hidden'>
            {renderCards(secondCardsColum)}
          </div>
          <div className=' marquee marquee-up lg:block hidden'>
            {renderCards(thirdCardsColum)}
          </div>
          <div
            className='absolute w-full h-[200px]  bottom-0'
            style={{
              background:
                'linear-gradient(180deg, rgba(247, 247, 244, 0) 0%, rgba(247, 247, 244, 0.5) 34.8%, #F7F7F4 73.82%)',
            }}
          ></div>
          <div
            className='absolute w-full h-[200px]  top-0'
            style={{
              background:
                'linear-gradient(180deg, #F7F7F4 0%, rgba(247,247,244,0.5) 34.8%, rgba(247,247,244,0) 73.82%)',
            }}
          ></div>
        </div>
      </FadeUp>
    </section>
  );
}
