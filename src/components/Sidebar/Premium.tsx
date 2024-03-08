import React from "react";
import Image from "next/image";
import Button from "../common/Button";

const PremiumCard: React.FC = () => {
  return (
    <div className="col-span-12 rounded-2xl border border-stroke bg-white px-4 py-4 dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="flex flex-col justify-between">
        <h4 className="mb-2 w-full text-title-xsm text-center">
          Go to premium
        </h4>
        <Image
          src="/images/premium/crown.png"
          alt="Premium"
          width={100}
          height={100}
        />
        <h4 className="w-full text-title-sm font-bold">Need more features?</h4>
        <h4 className="mb-2 w-full text-sm text-slate-300">
          Update your account to premium to get more features.
        </h4>
        <Button
          text="Get now"
          baseColor="bg-primary"
          hoverColor="bg-blue-700"
        />
      </div>
    </div>
  );
};

export default PremiumCard;
