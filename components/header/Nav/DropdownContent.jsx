import Link from "next/link";

const SunglassesContent = () => {
  return (
    <div
      className={`nav-dropdown bg-white w-max px-10 py-5 absolute top-14`} 
    >
      <Link href="/">{`Men's`}</Link>
      <Link href="/">{`Women's`}</Link>
      <Link href="/">All Sunglasses</Link>
    </div>
  );
};

export default SunglassesContent;
