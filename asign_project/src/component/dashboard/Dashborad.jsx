import React from "react";
import {
  FaHome,
  FaBell,
  FaCog,
  FaStar,
  FaEllipsisH,
  FaRobot,
  FaSignOutAlt,
  FaChartLine,
  FaSignInAlt,
  FaUserPlus,
  FaPlus,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex h-screen shadow-lg shadow-black">
      <aside className="text-gray-800 bg-white w-64 flex flex-col ">
        <div className="p-4 text-lg font-bold border-b border-gray-100">
          <div className="flex flex-row gap-2">
            <div className="border rounded-2xl shadow-md bg-blue-500 h-9 w-9"></div>
            <div>
              <span className="text-slate-400 text-sm font-[]">
                Product designer
              </span>
            </div>
          </div>
        </div>
        <nav className="flex-grow">
          <ul className=" p-4">
            <li className="flex items-center space-x-2 p-2 hover:bg-blue-700 active:bg-red-200 hover:text-white rounded">
              <FaHome />
              <Link to="/home" className="flex-1">
                Home
              </Link>
            </li>

            <li className="flex items-center space-x-2 p-2 hover:bg-blue-700 active:bg-blue-700 hover:text-white rounded">
              <FaBell />
              <span>Notification</span>
            </li>

            {/* Analytics */}
            <li className="flex items-center space-x-2 p-2 hover:bg-blue-700 active:bg-blue-700 hover:text-white rounded">
              <FaChartLine />
              <Link to="analytics">
                <span>Analytics</span>
              </Link>
            </li>
            <li className="flex items-center space-x-2 p-2 hover:bg-blue-700 active:bg-blue-700 hover:text-white rounded">
              <FaRobot />

              <Link to="/activebot">Activebot</Link>
            </li>
            <li className="flex items-center space-x-2 p-2 hover:bg-blue-700 active:bg-blue-700 hover:text-white rounded">
              <FaEllipsisH />

              <Link to="/dashboard">Dashboard</Link>
            </li>
            {/* Login */}
            <li className="flex items-center space-x-2 p-2 hover:bg-blue-700 active:bg-blue-700 hover:text-white rounded">
              <FaSignInAlt />
              <Link to="/login" className="flex-1">
                Login
              </Link>
            </li>

            {/* Signup */}
            <li className="flex items-center space-x-2 p-2 hover:bg-blue-700 active:bg-blue-700 hover:text-white rounded">
              <FaUserPlus />
              <Link to="/signup" className="flex-1">
                SignUp
              </Link>
            </li>
          </ul>

          {/* Add New Bots Section */}
          <div className="border-t border-gray-100">
            <div className="m-4 p-4 border border-blue-700 rounded-xl bg-blue-700 text-white">
              <div className="text-center">
                <h4>Let's Get Started!</h4>
                <p>Creating or adding new tasks couldn't be easier</p>
                <div className="flex items-center space-x-2 text-center bg-slate-50 text-black justify-center rounded-2xl p-3">
                  <FaPlus className="text-blue-600" />
                  <span className="text-blue-600 font-bold hover:text-blue-700 hover:cursor-pointer">
                    Add New Bots
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Settings and Logout */}
          <div className="border-t border-gray-100">
            <ul>
              <li className="flex items-center space-x-2 p-2 hover:bg-blue-700 active:bg-blue-700 hover:text-white rounded">
                <FaCog />
                <span>Settings</span>
              </li>
              <li className="flex items-center space-x-2 p-2 hover:bg-blue-700 active:bg-blue-700 hover:text-white rounded">
                <FaSignOutAlt />
                <span>Logout</span>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default Dashboard;
