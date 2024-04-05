import Link from "next/link";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { PiCaretDownBold } from "react-icons/pi";

const DesktopNav = () => {
  return (
    <nav className="hidden md:flex">
      <h1>DICK MOBY</h1>

      <div>
        <Link href={`/`}>Mission</Link>

        <div>
          <button>
            Sunglasses <PiCaretDownBold />
          </button>

          <div>
            <Link href="/">{`Men's`}</Link>
            <Link href="/">{`Women's`}</Link>
            <Link href="/">All Sunglasses</Link>
          </div>
        </div>

        <div>
          <button>
            Eyeglasses <PiCaretDownBold />
          </button>

          <div>
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
