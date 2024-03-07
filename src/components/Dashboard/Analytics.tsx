import React from "react";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

const AnalyticsCard: React.FC = () => {
  const options: ApexOptions = {
    series: [76],
    chart: {
      type: "radialBar",
      offsetY: -20,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#e7e7e7",
          strokeWidth: "97%",
          margin: 5, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            color: "#999",
            opacity: 1,
            blur: 2,
          },
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: "22px",
          },
        },
      },
    },
    grid: {
      padding: {
        top: -10,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91],
      },
    },
    labels: ["Average Results"],
  };

  return (
    <div className="col-span-12 rounded-2xl border border-stroke bg-white px-4 py-4 dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="justify-between gap-4 sm:flex pb-3">
        <h4 className="text-sm font-semibold text-black dark:text-white">
          Analytics
        </h4>
      </div>
      <div className="flex h-full pb-5 w-full">
        <div className="flex flex-col flex-grow h-full w-35">
          <div id="chartTwo" className="-mb-9 w-full h-full">
            <ReactApexChart
              options={options}
              series={options.series}
              type="radialBar"
              height={"100%"}
              width={"100%"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;
