import Link from "next/link";
import { useState } from "react";
import { PiCaretRightBold } from "react-icons/pi";

const MobDropdownLink = ({ children, href, DropdownContent }) => {
  const [open, setOpen] = useState(false);
  const showDropdown = open && DropdownContent;

  return (
    <div
      onClick={() => open ? setOpen(false) : setOpen(true)}
      className="relative"
    >
      <Link href={href} className="flex items-center relative py-4">
        {children}
        <PiCaretRightBold
          style={{
            transform: showDropdown ? "rotate(90deg)" : "rotate(0deg)",
          }}
          className="ml-2 transition-transform duration-300 ease-out"
        />
      </Link>
      {showDropdown && <DropdownContent />}
    </div>
  );
};

export default MobDropdownLink;
