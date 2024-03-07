"use client";
import React, { useState, useEffect, useRef } from "react";
import BalanceStaticCard from "./BalanceStatistic";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Dashboard: React.FC = () => {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node) &&
        iconRef.current &&
        !iconRef.current.contains(event.target as Node)
      ) {
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row justify-between items-center">
        <div>
          <h4 className="text-4xl font-bold pb-2">Hello, Jhon .D</h4>
          <div className="text-slate-500">
            View and control your finances here!
          </div>
        </div>
        <div className="flex flex-row gap-2 justify-center items-center">
          {showSearch && (
            <div
              ref={searchRef}
              className="left-0 top-full w-64 bg-white rounded-full shadow-lg transition-opacity duration-200 ease-in-out transform -translate-x-0"
            >
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 border-none rounded-full focus:outline-none"
              />
            </div>
          )}
          <div
            className="flex items-center justify-center text-center rounded-full hover:cursor-pointer hover:bg-slate-300 bg-white w-10 h-10 p-2"
            ref={iconRef}
            onClick={() => setShowSearch(!showSearch)}
          >
            <MagnifyingGlassIcon />
          </div>
        </div>
      </div>
      <div className="flex h-59 w-full">
        <BalanceStaticCard />
        <BalanceStaticCard />
      </div>
    </div>
  );
};

export default Dashboard;
