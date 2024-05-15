import Image from "next/image";
import Link from "next/link";

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

      <div className="border-t-2 px-4 mo-sm:px-8 md:px-14 flex flex-col">
        <h1>Subscribe to our mailing list</h1>
        <form className="flex justify-between">
          <input type="text" />
          <button>Subscribe</button>
        </form>
        <div className="w-fit self-center">
          <h1 className="text-center">Follow us</h1>
          {/* Add Social Media Icons */}
        </div>
      </div>

      <div>
        <p>
          Dick Moby, Herengracht 493, 1017 BT, Amsterdam The Netherlands, Planet
          Earth.
        </p>
        <div>1234567890</div>
        <Link href={`/`}>glasses@glasses.com</Link>
      </div>
    </footer>
  );
};

export default Footer;
