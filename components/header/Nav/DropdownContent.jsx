import Link from "next/link";

const DropdownLinks = ({glassesType}) => {
  return (
    <div
      className={`nav-dropdown bg-white w-max px-10 py-5`} 
    >
      <Link href="/">{`Men's`}</Link>
      <Link href="/">{`Women's`}</Link>
      <Link href="/">{`All ${glassesType}`}</Link>
    </div>
  );
};

export default DropdownLinks;