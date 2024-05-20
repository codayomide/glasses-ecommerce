import Image from "next/image";
import Link from "next/link";
import fbIcon from "@/images/icons/facebook-brands.svg"
import twitterIcon from "@/images/icons/twitter-brands.svg"

const Footer = () => {
  return (
    <footer className="bg-darkBlue text-white pt-14">
      <div className="flex mb-16 px-4 mo-sm:px-8 md:px-14">
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

      <div className="border-y-[1.5px] px-4 mo-sm:px-8 md:px-14 pt-12 pb-8 flex flex-col">
        <h1 className="text-xl font-medium mb-4">Subscribe to our mailing list</h1>
        <form className="flex justify-between">
          <input type="text" placeholder="Your email address" className="p-3 text-black" />
          <button className="rounded-full border-2 border-white px-6 py-3">Subscribe</button>
        </form>
        <div className="w-fit self-center mt-6">
          <h1 className="text-center text-xl mb-4">Follow us</h1>
          <div className="flex">
            <Image src={fbIcon} alt="Facebook Icon" width={50} height={50} className="mr-6 w-[30px]" />
            <Image src={twitterIcon} alt="X Icon" width={50} height={50} className="w-[30px]"/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
