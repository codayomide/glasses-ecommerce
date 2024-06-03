import Link from "next/link";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { PiCaretDownBold } from "react-icons/pi";
import DropdownLink from "./DropdownLink";
import SunglassesContent from "./SunglassesContent";
import EyeglassesContent from "./EyeglassesContent";

const DesktopNav = () => {
  return (
    <nav className="bg-offWhite hidden lg:flex w-full justify-between py-4 px-12">
      <h1 className="font-bold text-2xl">GLASSES</h1>

      <div className="flex nav-links-desk">
        <Link href={`/`}>Mission</Link>

        <DropdownLink
          href="/"
          DropdownContent={SunglassesContent}
        >
          Sunglasses
        </DropdownLink>
        
        <DropdownLink
          href="/"
          DropdownContent={EyeglassesContent}
        >
          Eyeglasses
        </DropdownLink>

        

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
