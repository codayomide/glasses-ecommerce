import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-darkBlue text-white">
      <div>
        <div>
          <Link href={`/`}>Mission</Link>
          <Link href={`/`}>Sunglasses</Link>
          <Link href={`/`}>Eyeglasses</Link>
          <Link href={`/`}>Find store</Link>
        </div>

        <div>
          <Link href={`/`}>FAQ</Link>
          <Link href={`/`}>Retailer login</Link>
          <Link href={`/`}>Jobs</Link>
          <Link href={`/`}>Contact</Link>
        </div>
      </div>

      <div>
        <h1>Subscribe to our mailing list</h1>
        <form>
          <input type="text" />
          <button>Subscribe</button>
        </form>
        <div>
          <h1>Follow us</h1>
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
