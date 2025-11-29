import React from 'react';
import TestimonialsCard from './TestimonialsCard';
import FadeUp from '../motion/FadeUp';
import Badge from '../shared/Badge';
import Heading from '../shared/Heading';

type TestimonialCard = {
  heading: string;
  text: string;
  src: string;
  name: string;
  address: string;
};

const firstCardsColum: TestimonialCard[] = [
  {
    heading: "Outstanding Product Quality",
    text: "The headphones exceeded my expectations! Crystal-clear sound and super comfortable for long use.",
    src: '/images/man.png',
    name: "John Doe",
    address: "New York, USA",
  },
  {
    heading: "Highly Recommend!",
    text: "I love the smart speaker. Easy setup, great sound, and it integrates perfectly with my smart home.",
    src: '/images/man2.png',
    name: "Emily Smith",
    address: "Los Angeles, USA",
  },
];

const secondCardsColum: TestimonialCard[] = [
  {
    heading: "Perfect Fit and Sound",
    text: "The earbuds are lightweight and deliver excellent noise isolation. Great for travel and workouts!",
    src: '/images/man3.png',
    name: "Michael Johnson",
    address: "Chicago, USA",
  },
  {
    heading: "Motivation on My Wrist",
    text: "The fitness watch tracks everything I need. I can monitor my workouts and sleep effortlessly.",
    src: '/images/man5.png',
    name: "Sarah Lee",
    address: "San Francisco, USA",
  },
];

const thirdCardsColum: TestimonialCard[] = [
  {
    heading: "Excellent Customer Service",
    text: "Support was quick and helpful. The product works perfectly, and delivery was fast.",
    src: '/images/man4.png',
    name: "David Brown",
    address: "Houston, USA",
  },
  {
    heading: "Value for Money",
    text: "Great product lineup with innovative features. Definitely worth the investment.",
    src: '/images/man5.png',
    name: "Olivia Davis",
    address: "Seattle, USA",
  },
];

const mergedCards = [
  ...firstCardsColum,
  ...secondCardsColum,
  ...thirdCardsColum,
];

const renderCards = (cards: TestimonialCard[]) => (
  <div className="marquee--inner w-full flex flex-col gap-[20px] lg:absolute top-0 left-0">
    {cards.map((card, index) => (
      <TestimonialsCard key={index} {...card} />
    ))}
    {cards.map((card, index) => (
      <TestimonialsCard
        key={`dup-${index}`}
        {...card}
        className="md:block hidden"
      />
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section id="testimonials" className="overflow-hidden w-full h-auto mx-auto">
      <FadeUp>
        <div className="my-[72px] max-w-[700px] min-w-auto flex flex-col justify-center items-center mx-auto gap-4 mb-14 text-center">
          <Badge text="Testimonials" src="/icon/simpleStar.svg" />
          <Heading
            text="Hear From Our Satisfied Customers"
            className="text-[36px] leading-[44px] lg:text-[56px] lg:leading-[64px] text-center"
          />
        </div>
      </FadeUp>

      <FadeUp>
        <div className="w-full relative pb-[72px] min-h-[600px] max-h-[650px] lg:min-h-[650px] overflow-hidden grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
          <div className="marquee marquee-up lg:hidden block">
            {renderCards(mergedCards)}
          </div>
          <div className="marquee marquee-up lg:block hidden">
            {renderCards(firstCardsColum)}
          </div>
          <div className="marquee marquee-down lg:block hidden">
            {renderCards(secondCardsColum)}
          </div>
          <div className="marquee marquee-up lg:block hidden">
            {renderCards(thirdCardsColum)}
          </div>

          <div
            className="absolute w-full h-[200px] bottom-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(247, 247, 244, 0) 0%, rgba(247, 247, 244, 0.5) 34.8%, #F7F7F4 73.82%)',
            }}
          ></div>
          <div
            className="absolute w-full h-[200px] top-0"
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
