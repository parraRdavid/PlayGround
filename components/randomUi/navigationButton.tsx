// NavButton.tsx

import React from "react";
import Link from "next/link";

interface ButtonProps {
  buttonName: string;
  destination: string; // New prop to specify the destination route
}

const NavButton: React.FC<ButtonProps> = ({
  buttonName,
  destination,
}: ButtonProps) => {
  return (
    <Link href={destination}>
      <button className="rounded-full px-4 py-2 text-white bg-gradient-to-r from-red-500 to-blue-500">
        {buttonName}
      </button>
    </Link>
  );
};

export default NavButton;
