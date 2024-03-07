import React from "react";

interface ButtonProps {
  text: string;
  baseColor: string;
  hoverColor: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  baseColor,
  hoverColor,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl text-white transition duration-200 ease-in-out transform hover:scale-105 ${baseColor} hover:${hoverColor}`}
    >
      {text}
    </button>
  );
};

export default Button;
