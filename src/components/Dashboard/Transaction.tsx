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
    name: "Bessie Cooper",
    date: "02 July, 2023",
  },
  {
    avatar: "/images/user/user-02.png",
    name: "Guy Hawkins",
    date: "02, July, 2023",
  },
  {
    avatar: "/images/user/user-03.png",
    name: "James Wang",
    date: "02, July, 2023",
  },
  {
    avatar: "/images/user/user-04.png",
    name: "Beck Ruy",
    date: "02, July, 2023",
  },
  {
    avatar: "/images/user/user-05.png",
    name: "Slovin Ka",
    date: "02, July, 2023",
  },
  {
    avatar: "/images/user/user-06.png",
    name: "Dominique Team",
    date: "02, July, 2023",
  },
];

const TransactionCard = () => {
  const [showAll, setShowAll] = useState<boolean>(false);

  const maxItems = showAll ? spendingData.length : 3;

  return (
    <div className="col-span-12 rounded-2xl border border-stroke bg-white px-4 py-4 dark:border-strokedark dark:bg-boxdark xl:col-span-8">
      <div className="justify-between gap-4 sm:flex pb-3">
        <h4 className="text-sm font-semibold text-black dark:text-white">
          Last transactions
        </h4>
        <div className="flex gap-1">
          <div className="flex justify-center items-center text-center hover:underline hover:cursor-pointer rounded-full">
            Newest
          </div>
          <div className="flex justify-center items-center text-center hover:underline hover:cursor-pointer rounded-full">
            Oldest
          </div>
        </div>
      </div>
      <div>
        {spendingData.slice(0, maxItems).map((chat, key) => (
          <Link
            href="/"
            className="flex items-center border-b border-t border-slate-300 gap-5 py-1 hover:bg-gray-3 dark:hover:bg-meta-4"
            key={key}
          >
            <div className="flex justify-between w-full">
              <div className="flex">
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
                      <span className="text-xs text-slate-300">
                        {chat.date}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center gap-15 font-semibold">
                -$3,000
                <EllipsisVerticalIcon width={20} height={20} />
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

export default TransactionCard;
