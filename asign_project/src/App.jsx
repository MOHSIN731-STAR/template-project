import React from "react";
import Dashborad from "./component/dashboard/Dashborad";
import { createBrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/loginpage/Login.jsx";
import Signup from "./component/signup/Signup.jsx";
import Home from "./component/home/Home.jsx";
import Activebot from "./component/Activebot/Activebot.jsx";
import Analytics from "./component/analytics/Analytics.jsx";
import Dashoard2 from "./component/dashboard/Dashoard2.jsx";
const App = () => {
  return (
    <div className=" bg-[#fffdfc]">
      <div className="flex md:flex-row md:gap-2">
        <div className="fixed ">
          <Dashborad />
        </div>
        <div className="md:ml-72 sm:ml-72 ">
          <Routes>
            {/* <Route path="/" element={<Dashborad />} /> */}
            <Route path="/activebot" element={<Activebot />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/dashboard" element={<Dashoard2 />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
