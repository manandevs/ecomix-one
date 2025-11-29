
import FeaturesShowcase from "@/components/home/FeaturesShowcase";
import Hero from "@/components/home/Hero";
import ProductSection from "@/components/home/ProductSection";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/home/Navbar";

export default function Home() {
  return (
    <div className="w-full ">
      <div className="max-w-[1210px] mx-auto px-5 pt-[50px] md:pt-[108px]">
        <Navbar />
        <Hero />
        <ProductSection />
        <FeaturesShowcase />
        <Services />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}
