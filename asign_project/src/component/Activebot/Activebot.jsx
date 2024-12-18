import React from "react";
import icon1 from "../../images/icon1.png";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaComment,
} from "react-icons/fa";
const Activebot = () => {
  return (
    <>
      <div className="flex md:flex-row sm:grid-cols-2 md:gap-2 sm:gap-2 md:mt-40  md:ml-40 sm:ml-40">
        <div className="  shadow-md shadow-white rounded-lg bg-[linear-gradient(to_bottom,#369fff,#2b95f6)] ">
          <div className="w-[190px] h-[90px] ">
            <span className="text-white p-3 font-bold">Bizsupport 01</span>
            <div>
              {" "}
              <span className="text-white p-3 text-sm">Email Services</span>
            </div>
            <div>
              <img src={icon1} alt="" className="p-3" />
            </div>
          </div>
        </div>
        <div className="">
          <div className="  shadow-md shadow-white rounded-lg bg-[linear-gradient(to_bottom,#ff8e26,#ff993a)] ">
            <div className="w-[190px] h-[90px] ">
              <span className="text-white p-3 font-bold">Bizsupport 02</span>
              <div>
                {" "}
                <span className="text-white p-3 text-sm">Social Services</span>
              </div>
              <div className="flex md:flex-row sm:flex-row gap-2 justify-center mt-3">
                <span className="bg-white p-1 rounded-xl text-blue-500">
                  <FaFacebook />
                </span>
                <span className="bg-white p-1 rounded-xl text-blue-600">
                  <FaTwitter />
                </span>
                <span className="bg-white p-1 rounded-xl text-orange-600">
                  <FaInstagram />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="  shadow-md shadow-white rounded-lg bg-[linear-gradient(to_bottom,#8ac53e,#7cbc3d)] ">
            <div className="w-[190px] h-[90px] ">
              <span className="text-white p-3 font-bold">Bizsupport 03</span>
              <div>
                {" "}
                <span className="text-white p-3 text-sm">Phone </span>
              </div>
              <div className="flex md:flex-row sm:flex-row gap-2 p-1 mt-2">
                <span className=" p-1 rounded-xl text-blue-400 bg-white">
                  <FaPhone />
                </span>
                <span className=" p-1 rounded-xl text-blue-400 bg-white">
                  <FaComment />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row sm:grid-cols-2 md:gap-2 sm:gap-2 md:ml-40 sm:ml-40  md:mt-2 sm:mt-2">
        <div className="">
          {" "}
          <div className="  shadow-md shadow-white rounded-lg bg-[linear-gradient(to_bottom,#ff2121,#ff4343)] ">
            <div className="w-[190px] h-[90px] ">
              <span className="text-white p-3 font-bold">Bizsupport 04</span>
              <div>
                {" "}
                <span className="text-white p-3 text-sm">Phone </span>
              </div>
            </div>
          </div>
        </div>{" "}
        <div>
          {" "}
          <div className="  shadow-md shadow-white rounded-lg bg-[linear-gradient(to_bottom,#ffc921,#ffd143)] ">
            <div className="w-[190px] h-[90px] ">
              <span className="text-white p-3 font-bold">Bizsupport 05</span>
              <div>
                {" "}
                <span className="text-white p-3 text-sm">Phone </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="  shadow-md shadow-white rounded-lg bg-[linear-gradient(to_bottom,#7e43ff,#ffd143)] ">
            <div className="w-[190px] h-[90px] ">
              <span className="text-white p-3 font-bold">Bizsupport 06</span>
              <div>
                {" "}
                <span className="text-white p-3 text-sm">Phone </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activebot;
