import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import LenisScroll from "@/components/Lenis";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <div className="w-full ">
      <LenisScroll />
      <div className="max-w-[1210px] mx-auto px-5 pt-[50px] md:pt-[108px]">
        <Hero />
        {/* <HeroSection />
        <Services />
        <Testimonials /> */}
      </div>
    </div>
  );
}
