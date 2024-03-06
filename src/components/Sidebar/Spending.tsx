import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Spending } from "@/types/spending";
import {
  ArrowLongRightIcon,
  ArrowLongLeftIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";

const spendingData: Spending[] = [
  {
    avatar: "/images/user/user-01.png",
    name: "Devid Heilo",
    date: "May 30, 2023 at 08:00 pm",
  },
  {
    avatar: "/images/user/user-02.png",
    name: "Henry Fisher",
    date: "May 28, 2023 at 10:00 pm",
  },
  {
    avatar: "/images/user/user-04.png",
    name: "Jhon Doe",
    date: "May 10, 2023 at 12:00 pm",
  },
  {
    avatar: "/images/user/user-05.png",
    name: "Jane Doe",
    date: "May 8, 2023 at 11:00 pm",
  },
  {
    avatar: "/images/user/user-01.png",
    name: "Jhon Doe",
    date: "May 5, 2023 at 10:00 pm",
  },
  {
    avatar: "/images/user/user-03.png",
    name: "Jhon Doe",
    date: "May 2, 2023 at 08:00 pm",
  },
];

const SpendingCard = () => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const maxItems = showAll ? spendingData.length : 3;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        iconRef.current &&
        !iconRef.current.contains(event.target as Node)
      ) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="col-span-12 rounded-2xl border border-stroke bg-white px-4 py-4 dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="flex flex-row justify-between">
        <h4 className="mb-2 text-title-xsm font-bold">Latest spending</h4>
        <div
          className="flex justify-center items-center text-center hover:bg-slate-200 hover:cursor-pointer rounded-full"
          ref={iconRef}
          onClick={() => setDropdownVisible(!dropdownVisible)}
        >
          <EllipsisVerticalIcon className="ml-2 mr-2 h-5 w-5" />
        </div>
        {dropdownVisible && (
          <div
            ref={dropdownRef}
            className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          >
            <ul
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <option
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                role="menuitem"
                onClick={handleOptionClick}
              >
                This Week
              </option>
              <option
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                role="menuitem"
                onClick={handleOptionClick}
              >
                Last Week
              </option>
            </ul>
          </div>
        )}
      </div>
      <div>
        {spendingData.slice(0, maxItems).map((chat, key) => (
          <Link
            href="/"
            className="flex items-center border-b border-gray gap-5 py-1 hover:bg-gray-3 dark:hover:bg-meta-4"
            key={key}
          >
            <div className="relative h-10 w-10 rounded-full">
              <Image
                width={56}
                height={56}
                src={chat.avatar}
                alt="User"
                style={{
                  width: "auto",
                  height: "auto",
                }}
              />
            </div>

            <div className="flex flex-1 items-center justify-between">
              <div>
                <h5 className="font-medium text-black dark:text-white">
                  {chat.name}
                </h5>
                <p>
                  <span className="text-xs text-slate-300">{chat.date}</span>
                </p>
              </div>
            </div>
          </Link>
        ))}
        <div className="flex items-center w-full justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex flex-row justify-center items-center mt-4 text-blue-500 hover:text-blue-700 w-full"
          >
            {showAll ? (
              <>
                View less
                <ArrowLongLeftIcon className="ml-2 h-5 w-5" />
              </>
            ) : (
              <>
                View all
                <ArrowLongRightIcon className="ml-2 h-5 w-5" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpendingCard;
