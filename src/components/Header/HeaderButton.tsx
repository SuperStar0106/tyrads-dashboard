import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface HeaderButtonProps {
  isActive?: boolean;
  icon: React.ReactNode;
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({
  isActive,
  icon,
  className,
  onClick,
  ...props
}) => {
  const trigger = useRef<any>(null);

  return (
    <li className="relative">
      <Link
        ref={trigger}
        onClick={onClick}
        href="#"
        className={`relative flex h-8.5 w-8.5 items-center p-1 justify-center rounded-full border-[0.5px] border-stroke ${
          isActive
            ? "bg-primary text-white hover:text-black"
            : "bg-gray hover:text-primary"
        } dark:border-strokedark dark:bg-meta-4 dark:text-white ${className}`}
        {...props}
      >
        {icon}
      </Link>
    </li>
  );
};

export default HeaderButton;
