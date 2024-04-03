import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiCaretRightBold } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const MobileNav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [sunglassesOpen, setSunglassesOpen] = useState(false);
  const [eyeglassesOpen, setEyeglassesOpen] = useState(false);

  const openNav = () => {
    navOpen ? setNavOpen(false) : setNavOpen(true);
  };

  const openSunglasses = () => {
    !sunglassesOpen ? setSunglassesOpen(true) : setSunglassesOpen(false);
  };

  const openEyeglasses = () => {
    !eyeglassesOpen ? setEyeglassesOpen(true) : setEyeglassesOpen(false);
  };

  return (
    <nav className="md:hidden flex-grow flex flex-col">
      <div className="bg-offWhite flex justify-between items-center text-lg mo-sm:text-2xl px-1 mo-sm:px-4 pt-1 pb-2 mo-sm:pb-4">
        <button onClick={openNav}>
          {navOpen ? <IoMdClose /> : <RxHamburgerMenu />}
        </button>

        <h1 className="font-bold self-center">DICK MOBY</h1>

        <div className="navIcons-container">
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
      </div>

      <div className={`bg-offWhite text-md h-full flex-grow flex-col px-8 pt-8 ${navOpen ? "flex" : "hidden"}`}>
        <Link href="/" className="border-b-[1px] py-5">
          Mission
        </Link>

        <div>
          <button className="dropdown-btn" onClick={openSunglasses}>
            Sunglasses <PiCaretRightBold className="ml-5" />
          </button>

          <div className={`nav-dropdown ${sunglassesOpen ? "flex" : "hidden"}`}>
            <Link href="/">{`Men's`}</Link>
            <Link href="/">{`Women's`}</Link>
            <Link href="/">{`Materials`}</Link>
          </div>
        </div>

        <div>
          <button className="dropdown-btn" onClick={openEyeglasses}>
            Eyeglasses <PiCaretRightBold className="ml-5" />
          </button>

          <div
            className={`nav-dropdown transition-ease duration-[1000ms] ${
              eyeglassesOpen ? "flex" : "hidden"
            }`}
          >
            <Link href="/">{`Men's`}</Link>
            <Link href="/">{`Women's`}</Link>
            <Link href="/">{`Materials`}</Link>
          </div>
        </div>

        <Link href="/" className="border-b-[1px] py-5">
          Stockists
        </Link>
      </div>
    </nav>
  );
};

export default MobileNav;
