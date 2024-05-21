import Image from "next/image";
import heroImageMobile from "@/images/hero-section/hero-section-img-mobile.webp";
import heroImageDesktop from "@/images/hero-section/hero-section-img-desktop.webp";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="h-[calc(100vh-9.5rem)] overflow-hidden relative">
      <Image
        src={heroImageMobile}
        alt="Guy with Glasses"
        className="md:hidden w-full h-screen"
      />
      <Image
        src={heroImageDesktop}
        alt="Guy with Glasses"
        className="hidden md:inline w-full h-screen"
      />

      <div className="absolute bg-transparent top-0 right-0 bottom-0 left-0 center flex flex-col items-center justify-center">
        <div className="text-white font-bold text-4xl mo-sm:text-5xl mo-md:text-7xl text-center">
          <h1 className="mb-8">{`Spring,`}</h1>
          <h1>{`it's coming!`}</h1>
        </div>
        
        <Link href={`/`} className="text-white bg-green hover:bg-white hover:text-green text-xl font-medium mt-20 mo-sm:mt-12 px-9 mo-sm:px-14 py-6 mo-sm:py-7 rounded-full transition-all duration-500">Shop Sunglasses</Link>
      </div>
    </section>
  );
};

export default HeroSection;
