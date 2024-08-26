import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Shared/Header/Header/Header";
import Cursor from "./Cursor/Cursor";
import MobileHeader from "../../Shared/Header/Header/MobileHeader/MobileHeader";
import Footer from "../../Shared/Footer/Footer/Footer";

const Main = () => {
  return (
    <div className="cursoranim">
      <div className="flex">
        <div className="w-[20%] hidden md:block ">
          <Header />
        </div>
        <div className="w-full md:w-[80%] bg-[#333333] ">
          <div>
            <div className="hidden md:block z-50">{/* <Cursor /> */}</div>
            <div className="md:hidden">
              <MobileHeader />
            </div>
          </div>
          <div>
            <Outlet />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
