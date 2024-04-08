import Link from "next/link";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { PiCaretDownBold } from "react-icons/pi";

const DesktopNav = () => {
  return (
    <nav className="bg-offWhite hidden md:flex w-full justify-between py-4 px-12">
      <h1 className="font-bold text-2xl">DICK MOBY</h1>

      <div className="flex">
        <Link href={`/`}>Mission</Link>

        <div>
          <button>
            Sunglasses <PiCaretDownBold />
          </button>

          <div className="hidden">
            <Link href="/">{`Men's`}</Link>
            <Link href="/">{`Women's`}</Link>
            <Link href="/">All Sunglasses</Link>
          </div>
        </div>

        <div>
          <button>
            Eyeglasses <PiCaretDownBold />
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
