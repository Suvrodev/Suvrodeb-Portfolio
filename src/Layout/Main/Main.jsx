import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Shared/Header/Header/Header";
import Cursor from "./Cursor/Cursor";
import MobileHeader from "../../Shared/Header/Header/MobileHeader/MobileHeader";
import Footer from "../../Shared/Footer/Footer/Footer";
import LeftSocialIcon from "../../Pages/Home/UtilitiesPages/LeftSocialIcon/LeftSocialIcon";
import GoToTop from "../../Pages/Home/UtilitiesPages/GoToTop/GoToTop";

const Main = () => {
  return (
    <div className="flex">
      <div className="w-[20%] hidden md:block ">
        <Header />
      </div>
      <div className="w-full  md:w-[80%] bg-[#333333] ">
        <div className="md:hidden sticky top-0 z-50">
          <MobileHeader />
        </div>

        <div>
          <Outlet />
        </div>

        <div className="sticky top-0">
          <Footer />
        </div>
      </div>

      <div>
        <LeftSocialIcon />
        <GoToTop />
      </div>
    </div>
  );
};

export default Main;
