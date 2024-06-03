import Link from "next/link";
import { useState } from "react";
import { PiCaretDownBold } from "react-icons/pi";

const DropdownLink = ({ children, href, DropdownContent }) => {
  const [open, setOpen] = useState(false);
  const showDropdown = open && DropdownContent;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative"
    >
      <Link href={href} className="flex items-center relative py-4">
        {children}
        <PiCaretDownBold
          style={{
            transform: showDropdown ? "rotate(180deg)" : "rotate(0deg)",
          }}
          className="ml-2 transition-transform duration-300 ease-out"
        />
      </Link>
      {showDropdown && <DropdownContent />}
    </div>
  );
};

export default DropdownLink;
