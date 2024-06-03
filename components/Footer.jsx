import Image from "next/image";
import Link from "next/link";
import fbIcon from "@/images/icons/facebook-brands.svg"
import twitterIcon from "@/images/icons/twitter-brands.svg"

const Footer = () => {
  return (
    <footer className="bg-darkBlue text-white pt-14">
      <div className="flex lg:w-3/4 mb-16 px-4 mo-sm:px-8 md:px-14">
        <div className="footer-links">
          <Link href={`/`}>Mission</Link>
          <Link href={`/`}>Sunglasses</Link>
          <Link href={`/`}>Eyeglasses</Link>
          <Link href={`/`}>Find store</Link>
        </div>

        <div className="footer-links">
          <Link href={`/`}>FAQ</Link>
          <Link href={`/`}>Retailer login</Link>
          <Link href={`/`}>Jobs</Link>
          <Link href={`/`}>Contact</Link>
        </div>
      </div>

      <div className="border-t-[1.5px] px-4 mo-sm:px-8 md:px-14 pt-12 pb-8 flex flex-col lg:flex-row">
        <div className="mr-24">
          <h1 className="text-xl font-medium mb-4">Subscribe to our mailing list</h1>
          <form className="flex justify-between">
            <input type="text" placeholder="Your email address" className="p-3 text-black mr-8" />
            <button className="rounded-full border-2 border-white hover:text-darkBlue hover:font-semibold hover:bg-white transition-all duration-500 px-6 py-3">Subscribe</button>
          </form>
        </div>
        <div className="w-fit self-center mt-6 lg:mt-0 lg:self-start">
          <h1 className="text-center text-xl mb-4">Follow us</h1>
          <div className="flex">
            <Image src={fbIcon} alt="Facebook Icon" width={50} height={50} className="mr-6 w-[30px] lg:w-10" />
            <Image src={twitterIcon} alt="X Icon" width={50} height={50} className="w-[30px] lg:w-10"/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
