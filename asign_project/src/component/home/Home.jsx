import React from "react";
import robotimage from "../../images/robotimage.png";
import rectangleimage from "../../images/rectangleimage.png";
import reactangle2 from "../../images/reatangle2.png";
import { MdEmail } from "react-icons/md";
const Home = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 sm:grid-cols-2 md:gap-3 sm:gap-3 md:m-20 sm:m-20 ">
        <div className="flex flex-row sm:flex-row gap-2 sm:gap-2 border w-[100%]  rounded-xl p-3 bg-blue-700 text-white">
          <div className="">
            <h1 className=" font-bold text-center">
              Well come to Tech Support Agent
            </h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              ad unde explicabo expedita, aut laborum, ut dignissimos, assumenda
              laudantium odio error? Quasi, molestiae.
            </span>
          </div>
          <div className=" ">
            <img src={robotimage} alt="" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 sm:grid-cols-2 gap-1  ">
          <div className="flex md:flex-row sm:flex-row md:gap-3  sm:gap-3">
            <div>
              <div className="border   rounded-xl bg-[#b5e3f5]">
                <div className="p-3  sm:p-3">
                  <span className="text-sm">Total email </span>
                </div>
                <div className="flex md:gap-8 sm:gap-8">
                  <span className="border border-blue-800 border-t md:ml-3  sm:ml-3 h-4 sm:h-4"></span>

                  <span className=" font-bold  text-black">02</span>
                </div>
              </div>
            </div>
            <div>
              <div className="border   rounded-xl bg-[#b5e3f5]">
                <div className="p-3  sm:p-3">
                  <span className="text-sm">Total email </span>
                </div>
                <div className="flex md:gap-8 sm:gap-8">
                  <span className="border border-blue-800 border-t md:ml-3  sm:ml-3 h-4 sm:h-4"></span>

                  <span className=" font-bold  text-red-600">02</span>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="flex md:flex-row sm:flex-row md:gap-3 sm:gap-3">
            <div>
              <div className="border   rounded-xl bg-[#b5e3f5]">
                <div className="p-3  sm:p-3">
                  <span className="text-sm">Total email </span>
                </div>
                <div className="flex md:gap-8 sm:gap-8">
                  <span className="border border-blue-800 border-t md:ml-3  sm:ml-3 md:h-4 sm:h-4"></span>

                  <span className=" font-bold  text-yellow-300">02</span>
                </div>
              </div>
            </div>
            <div>
              <div className="border   rounded-xl bg-[#b5e3f5]">
                <div className="md:p-3  sm:p-3">
                  <span className="text-sm">Total email </span>
                </div>
                <div className="flex md:gap-8 sm:gap-8">
                  <span className="border border-blue-800 border-t md:ml-3  sm:ml-3 h-4 sm:h-4"></span>

                  <span className=" font-bold  text-green-600">02</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:flex-cols-2 md:gap-8 md:m-20 sm:flex-cols-2 sm:gap-8 sm:m-20 ">
        <div className="border  bg-white p-4  shadow-lg  rounded-3xl">
          <img src={rectangleimage} alt="" />
          <div className="mt-2">
            <h1 className="font-extrabold">Active Users</h1>
            <span className="font-bold text-gray-500">(+20%)</span>{" "}
            <span>than last weeks</span>
          </div>
          <div className="flex md:flex-row  sm:flex-row md:gap-8">
            <div className="flex md:flex-row  sm:flex-row md:gap-1">
              <span className=" text-white bg-gradient-to-r from-blue-500 to-blue-300 p-1 rounded-md">
                <MdEmail />
              </span>{" "}
              Email
            </div>
            <div className="flex md:flex-row  sm:flex-row md:gap-1">
              <span className=" text-white  bg-gradient-to-r from-red-500 to-red-300 rounded-md p-1">
                <MdEmail />
              </span>{" "}
              Email
            </div>
            <div className="flex md:flex-row  sm:flex-row md:gap-1">
              <span className=" text-white  bg-gradient-to-r from-purple-500 to-red-300 rounded-md p-1">
                <MdEmail />
              </span>{" "}
              Email
            </div>
            <div className="flex md:flex-row  sm:flex-row md:gap-1">
              <span className=" text-white  bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-md p-1">
                <MdEmail />
              </span>{" "}
              Email
            </div>
          </div>
          <div className="flex md:flex-row md:gap-10  sm:flex-row sm:gap-10 my-3">
            <div className="grid md:grid-cols-1  sm:grid-cols-1 md:gap-1 sm:gap-2">
              <span className=" text-black font-extrabold  rounded-md p-1">
                34.5%
              </span>{" "}
              <span className="border border-x-2 bg-black  rounded-md"></span>
            </div>
            <div className="grid md:grid-cols-1  sm:grid-cols-1 md:gap-1 sm:gap-2">
              <span className=" text-black font-extrabold  rounded-md p-1">
                34.5%
              </span>{" "}
              <span className="border border-x-2 bg-black  rounded-md"></span>
            </div>
            <div className="grid md:grid-cols-1  sm:grid-cols-1 md:gap-1 sm:gap-2">
              <span className=" text-black font-extrabold  rounded-md p-1">
                34.5%
              </span>{" "}
              <span className="border border-x-2 bg-black  rounded-md"></span>
            </div>
            <div className="grid md:grid-cols-1  sm:grid-cols-2 md:gap-1 sm:gap-2">
              <span className=" text-black font-extrabold  rounded-md p-1">
                34.5%
              </span>{" "}
              <span className="border border-x-[0.5] bg-black  rounded-md "></span>
            </div>
          </div>
        </div>
        <div className="  sm:w-[100%]">
          <img src={reactangle2} alt="" className="sm:w-[100%]  shadow-lg" />
        </div>
      </div>
    </>
  );
};

export default Home;
