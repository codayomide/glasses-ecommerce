import Link from "next/link";

const EyeglassesContent = () => {
  return (
    <div
      className={`nav-dropdown bg-white w-max px-10 py-5 flex flex-col absolute z-50 top-[60px]`} 
    >
      <Link href="/">{`Men's`}</Link>
      <Link href="/">{`Women's`}</Link>
      <Link href="/">{`All Eyeglasses`}</Link>
    </div>
  );
};

export default EyeglassesContent;