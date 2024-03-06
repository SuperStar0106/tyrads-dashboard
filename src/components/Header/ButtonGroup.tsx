import React, { useState } from "react";
import HeaderButton from "./HeaderButton";

interface ButtonProps {
  [key: string]: any;
}

interface Button {
  props: ButtonProps;
}

interface ButtonGroupProps {
  buttons: Button[];
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttons }) => {
  const [activeButton, setActiveButton] = useState<number | null>(0);

  const handleButtonClick = (buttonId: number) => {
    setActiveButton(buttonId);
  };

  return (
    <ul className="flex flex-col items-center gap-5 bg-slate-200 p-1 rounded-full">
      {buttons.map((button, index) => (
        <HeaderButton
          key={index}
          isActive={activeButton === index}
          icon={button.props.icon}
          onClick={() => handleButtonClick(index)}
          {...button.props}
        />
      ))}
    </ul>
  );
};

export default ButtonGroup;
