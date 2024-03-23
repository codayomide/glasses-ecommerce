import Link from "next/link";

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <div>
        <button>
          <div></div>
        </button>

        <h1>DICK MOBY</h1>

        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>

      <div>
        <Link href="/">Mission</Link>

        <div>
          <button>Sunglasses</button>

          <div>
            <Link href="/">{`Men's`}</Link>
            <Link href="/">{`Women's`}</Link>
            <Link href="/">{`Materials`}</Link>
          </div>
        </div>
        
        <div>
          <button>Eyeglasses</button>

          <div>
            <Link href="/">{`Men's`}</Link>
            <Link href="/">{`Women's`}</Link>
            <Link href="/">{`Materials`}</Link>
          </div>
        </div>
        
        <Link href="/">Stockists</Link>
      </div>
    </nav>
  );
};

export default MobileNav;
