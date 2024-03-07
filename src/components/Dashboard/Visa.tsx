import React from "react";

const VisaCard: React.FC = () => {
  return (
    <div
      className="col-span-12 rounded-2xl border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-5"
      style={{
        backgroundImage: 'url("/images/dashboard/visa.png")',
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <div className="flex justify-between text-center items-center">
        <h4 className="text-title-xl font-bold text-white">S.</h4>
        <h4 className="text-title-lg font-bold text-white">Visa</h4>
      </div>
      <div className="flex flex-col h-full pb-12 justify-end">
        <h4 className="text-sm font-bold text-white">****9838</h4>
        <div className="flex justify-between">
          <h4 className="text-sm font-bold text-white">Jhon Demon</h4>
          <h4 className="text-sm font-bold text-white">08/12</h4>
        </div>
      </div>
    </div>
  );
};

export default VisaCard;
