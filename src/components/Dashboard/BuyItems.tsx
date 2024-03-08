import React, { useState } from "react";
import {
  ChevronRightIcon,
  PlusIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";

const BuyItemsCard: React.FC = () => {
  const [shoppingList, setShoppingList] = useState([
    { id: 1, name: "Item 1", checked: false },
    { id: 2, name: "Item 2", checked: false },
    { id: 3, name: "Item 3", checked: false },
    { id: 4, name: "Item 4", checked: false },
  ]);

  const handleCheckboxChange = (id: number) => {
    setShoppingList(
      shoppingList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleThreeDotClick = (id: number) => {
    console.log(`Three-dot icon clicked for item with id: ${id}`);
  };

  return (
    <div className="col-span-12 sm:rounded-2xl md:rounded-2xl lg:rounded-2xl xl:rounded-l-2xl xl:rounded-r-none border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-6">
      <div className="justify-between gap-4 sm:flex pb-3">
        <h4 className="text-sm font-semibold text-black dark:text-white">
          List of items to buy
        </h4>
      </div>
      <div className="flex pb-3">
        <div className="flex flex-col">
          <h4 className="text-title-md font-semibold">02:00</h4>
          <h4 className="text-slate-300">Sat, August 12</h4>
        </div>
        <div className="flex justify-center text-slate-300 items-center pl-5 pr-5">
          <ChevronRightIcon width={20} height={20} />
        </div>
        <div className="flex flex-col">
          <h4 className="text-title-md font-semibold">05:00</h4>
          <h4 className="text-slate-300">Sat, September 12</h4>
        </div>
      </div>
      <div className="flex justify-between pb-3">
        <div className="flex flex-row gap-1">
          <h4 className="text-slate-300">0/3</h4>
          Shopping list
        </div>
        <div className="flex flex-row p-1 justify-center items-center hover:cursor-pointer hover:bg-slate-200 hover:rounded-lg">
          <PlusIcon width={15} height={15} />
          Add an item
        </div>
      </div>
      <div className="grid grid-cols-12 gap-3 items-center justify-center">
        {shoppingList.map((item, index) => (
          <div
            className="flex col-span-12 xl:col-span-6 justify-between items-center bg-slate-100 dark:bg-slate-900 p-2 rounded-xl"
            key={index}
          >
            <div className="flex justify-center items-center">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheckboxChange(item.id)}
                className="form-checkbox h-5 w-5 text-blue-600 hover:cursor-pointer"
              />
              <span className="ml-2">{item.name}</span>
            </div>
            <EllipsisVerticalIcon
              width={20}
              height={20}
              className="hover:cursor-pointer hover:bg-slate-200 rounded-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyItemsCard;
