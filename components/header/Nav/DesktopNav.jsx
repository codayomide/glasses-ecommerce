import Link from "next/link";
import { useEffect, useState } from "react";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { PiCaretDownBold } from "react-icons/pi";
import DropdownLink from "./DropdownLink";

const DesktopNav = () => {
  return (
    <nav className="bg-offWhite hidden lg:flex w-full justify-between py-4 px-12">
      <h1 className="font-bold text-2xl">GLASSES</h1> 

      <div className="flex nav-links-desk">
        <Link href={`/`}>Mission</Link>

        <DropdownLink href={`/`} DropdownContent>Sunglasses</DropdownLink>

        <div className="relative">
          <button className="flex items-center">
            Eyeglasses <PiCaretDownBold className="ml-1" />
          </button>
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


// const DesktopNav = () => {
//   const [sunglassesIsOpen, setSunglassesIsOpen] = useState(false);
//   const [eyeglassesIsOpen, setEyeglassesIsOpen] = useState(false);

//   const openSunglasses = () => {
//     setSunglassesIsOpen(true);
//   };
//   const openEyeglasses = () => {
//     setEyeglassesIsOpen(true);
//   };
//   const closeSunglasses = () => {
//     setSunglassesIsOpen(false);
//   };
//   const closeEyeglasses = () => {
//     setEyeglassesIsOpen(false);
//   };

//   useEffect(() => {
//     if (eyeglassesIsOpen) {
//       setSunglassesIsOpen(false);
//     }

//     if (sunglassesIsOpen) {
//       setEyeglassesIsOpen(false);
//     }
//   }, [eyeglassesIsOpen, sunglassesIsOpen]);

//   return (
//     <nav className="bg-offWhite hidden lg:flex w-full justify-between py-4 px-12">
//       <h1 className="font-bold text-2xl">GLASSES</h1> 

//       <div className="flex nav-links-desk">
//         <Link href={`/`}>Mission</Link>

//         <div className="relative" onMouseOver={openSunglasses}>
//           <button className="flex items-center">
//             Sunglasses <PiCaretDownBold className="ml-1" />
//           </button>

//           <div
//             onMouseOver={openSunglasses}
//             onMouseOut={closeSunglasses}
//             className={`nav-dropdown bg-white w-max px-10 py-5 absolute top-14 ${
//               sunglassesIsOpen ? "flex" : "hidden"
//             } flex-col border`}
//           >
//             <Link href="/">{`Men's`}</Link>
//             <Link href="/">{`Women's`}</Link>
//             <Link href="/">All Sunglasses</Link>
//           </div>
//         </div>

//         <div className="relative" onMouseOver={openEyeglasses}>
//           <button className="flex items-center">
//             Eyeglasses <PiCaretDownBold className="ml-1" />
//           </button>

//           <div
//             onMouseOver={openEyeglasses}
//             onMouseOut={closeEyeglasses}
//             className={`nav-dropdown bg-white w-max px-10 py-5 absolute top-14 ${
//               eyeglassesIsOpen ? "flex" : "hidden"
//             } flex-col border`}
//           >
//             <Link href="/">{`Men's`}</Link>
//             <Link href="/">{`Women's`}</Link>
//             <Link href="/">All Eyeglasses</Link>
//           </div>
//         </div>

//         <Link href={`/`}>Stockists</Link>
//       </div>

//       <div className="navIcons-container">
//         <Link href="/">Contact</Link>
//         <Link href="/">
//           <IoSearchOutline />
//         </Link>
//         <Link href="/">
//           <GoHeart />
//         </Link>
//         <Link href="/">
//           <HiOutlineShoppingBag />
//         </Link>
//       </div>
//     </nav>
//   );
// };

export default DesktopNav;
