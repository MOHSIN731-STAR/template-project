import React from "react";
import icon1 from "../../images/icon1.png";
import l2esoloition from "../../images/l2esoloitions.png";
import proceed from "../../images/proceed State.png";
import services from "../../images/services.png";
import training from "../../images/training.png";

const Analytics = () => {
  return (
    <>
      <div className="bg-[#fffdfc] ">
        <div className="grid grid-cols-1 ">
          <div className="mt-10">
            <img src={icon1} alt="" />
          </div>
          <div>
            Bot Name:{" "}
            <span className="text-slate-300 md:ml-9 sm:ml-9">Bot1</span>
          </div>
          <div>
            Business Name:<span className="text-slate-300 md:ml-2">XYZ</span>
          </div>
          <div className="flex gap-5">
            Service:
            <span className="text-slate-300 md:ml-9 sm:ml-9">SERVICES</span>
            <span className="md:ml-80 sm:ml-80 space-x-5">
              {" "}
              <button className=" text-blue-500 bg-white shadow-md p-2  space-x-2 rounded-md">
                manage
              </button>
              <button className=" text-blue-500  bg-white shadow-md p-2  space-x-2 rounded-md">
                credetentional
              </button>
              <button className=" text-blue-500  bg-white shadow-md p-2  space-x-2 rounded-md">
                support
              </button>
            </span>
          </div>
        </div>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 md:gap-6 sm:gap-4 md:mt-12 sm:mt-12">
          <div className="border rounded-lg shadow-lg ">
            <img src={proceed} alt="" />
          </div>
          <div className="border rounded-lg shadow-lg">
            <img src={l2esoloition} alt="" />
          </div>
          <div className="border rounded-lg shadow-lg">
            <img src={training} alt="" />
          </div>
          <div className="border rounded-lg shadow-lg">
            <img src={services} alt="" />
          </div>
        </div>
        <div className="flex md:flex-row  sm:flex-row md:gap-3 sm:gap-3 sm:mt-4 md:mt-4">
          <div>
            <button className="border bg-blue-600 p-2 text-white rounded-md shadow-lg">
              Honlded Conversion
            </button>
          </div>
          <div className="space-x-12">
            <button className="border shadow-lg  rounded-md bg-white text-blue-500 p-2 sm:w-36 md:w-36">
              Scalations
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
