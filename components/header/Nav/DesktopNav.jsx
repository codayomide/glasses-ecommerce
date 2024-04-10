import Link from "next/link";
import { useState } from "react";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { PiCaretDownBold } from "react-icons/pi";

const DesktopNav = () => {
  const [sunglassesIsOpen, setSunglassesIsOpen] = useState(false);

  const openSunglasses = () => {
    setSunglassesIsOpen(true);
  }
  const openEyeglasses = () => {
    setSunglassesIsOpen(true);
  }
  const closeSunglasses = () => {
    setSunglassesIsOpen(false);
  }
  const closeEyeglasses = () => {
    setSunglassesIsOpen(false);
  }

  return (
    <nav className="bg-offWhite hidden md:flex w-full justify-between py-4 px-12">
      <h1 className="font-bold text-2xl">DICK MOBY</h1>

      <div className="flex nav-links-desk">
        <Link href={`/`}>Mission</Link>

        <div className="relative">
          <button className="flex items-center" onMouseOver={openSunglasses}>
            Sunglasses <PiCaretDownBold className="ml-1" />
          </button>

          <div onMouseOver={openSunglasses} onMouseOut={closeSunglasses} className={`nav-dropdown bg-white w-max px-10 py-5 absolute top-14 ${sunglassesIsOpen ? 'flex' : 'hidden'} flex-col border`}>
            <Link href="/">{`Men's`}</Link>
            <Link href="/">{`Women's`}</Link>
            <Link href="/">All Sunglasses</Link>
          </div>
        </div>

        <div>
          <button className="flex items-center">
            Eyeglasses <PiCaretDownBold className="ml-1" />
          </button>

          <div className="hidden">
            <Link href="/">{`Men's`}</Link>
            <Link href="/">{`Women's`}</Link>
            <Link href="/">All Eyeglasses</Link>
          </div>
        </div>

        <Link href={`/`}>Stockists</Link>
      </div>

      <div className="navIcons-container">
          <Link href="/">Contact</Link>
          <Link href="/">
            <IoSearchOutline />
          </Link>
          <Link href="/">
            <GoHeart />
          </Link>
          <Link href="/">
            <HiOutlineShoppingBag />
          </Link>
        </div>
    </nav>
  );
};

export default DesktopNav;
