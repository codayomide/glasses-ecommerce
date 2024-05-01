import AboutUs from "@/components/home/AboutUs";
import BestSellersSection from "@/components/home/BestSellersSection";
import HeroSection from "@/components/home/HeroSection";
import MakeDifference from "@/components/home/MakeDifference";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <BestSellersSection />
      <MakeDifference />
    </div>
  )
}
