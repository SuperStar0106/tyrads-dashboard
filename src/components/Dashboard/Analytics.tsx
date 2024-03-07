import React from "react";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

const AnalyticsCard: React.FC = () => {
  const options: ApexOptions = {
    series: [76, 20, 60],
    chart: {
      type: "donut",
      offsetY: 0,
      sparkline: {
        enabled: true,
      },
    },
    legend: {
      show: true,
      position: "bottom",
    },
    yaxis: {
      show: true,
      min: 0,
      max: 100,
      labels: {
        show: true,
        formatter: function (val) {
          return val + "%";
        },
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "85%",
          labels: {
            show: true,
            total: {
              showAlways: true,
              show: true,
              label: "Total",
            },
          },
        },
        startAngle: -90,
        endAngle: 90,
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
    labels: ["Done", "In progress", "To do"],
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
              type="donut"
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
