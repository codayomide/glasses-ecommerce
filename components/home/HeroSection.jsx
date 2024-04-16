import Image from 'next/image';
import heroImageMobile from '@/images/hero-section/hero-section-img-mobile.webp';
import heroImageDesktop from '@/images/hero-section/hero-section-img-desktop.webp';

const HeroSection = () => {
  return (
    <div className="h-[calc(100vh-9.5rem)] overflow-hidden">
      <Image src={heroImageMobile} alt='Guy with Glasses' className="sm:hidden w-full h-[calc(100vh)]" />
      <Image src={heroImageDesktop} alt='Guy with Glasses' className="hidden sm:inline w-full h-[calc(100vh)]" />
    </div>
  );
}
 
export default HeroSection;