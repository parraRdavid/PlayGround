// Button.tsx

import React from "react";

interface ButtonProps {
  buttonName: string;
}

const Button: React.FC<ButtonProps> = ({ buttonName }: ButtonProps) => {
  return (
    <button className="bg-blue-500 rounded-full px-6 py-4 text-white overflow-hidden">
      {buttonName}
    </button>
  );
};

export default Button;
