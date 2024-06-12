import { useState } from "react";
import { PiCaretDownBold } from "react-icons/pi";

const DeskDropdown = ({ children, DropdownContent }) => {
  const [open, setOpen] = useState(false);
  const showDropdown = open && DropdownContent;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative"
    >
      <button className="flex items-center relative py-4">
        {children}
        <PiCaretDownBold
          style={{
            transform: showDropdown ? "rotate(180deg)" : "rotate(0deg)",
          }}
          className="ml-2 transition-transform duration-300 ease-out"
        />
      </button>
      {showDropdown && <DropdownContent />}
    </div>
  );
};

export default DeskDropdown;
