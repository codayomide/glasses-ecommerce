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
    <nav className="lg:hidden flex-grow flex flex-col">
      <div className="bg-offWhite flex justify-between items-center text-lg mo-sm:text-2xl px-1 mo-sm:px-4 pt-1 pb-2 mo-sm:pb-4">
        <div
          onClick={openNav}
          className="relative cursor-pointer h-5 w-7 transition-all duration-500 ease-in-out"
        >
          {/* Turn this into a reusable component later */}
          <span className={`absolute right-0 top-2 w-7 h-[3px] bg-darkBlue transition-all duration-500 ease-in-out before:content-normal before:absolute before:top-[-8px] before:w-7 before:h-[3px] before:bg-darkBlue before:transition-all before:duration-500 before:ease-in-out after:content-normal after:absolute after:top-[8px] after:w-5 after:h-[3px] after:bg-darkBlue after:transition-all after:duration-500 after:ease-in-out ${navOpen ? "rotate-[720deg] bg-transparent before:rotate-45 after:-rotate-45 after:translate-x-[3px] after:translate-y-[-7px]" : ""}`}></span>
          {/* {navOpen ? <IoMdClose /> : <RxHamburgerMenu />} */}
        </div>

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

      <div
        className={`bg-offWhite text-md h-full flex-grow flex-col px-8 pt-8 ${
          navOpen ? "flex" : "hidden"
        }`}
      >
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
            <Link href="/">All Sunglasses</Link>
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
            <Link href="/">All Eyeglasses</Link>
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
