import React, { useContext } from "react";
import "./MobileHeaderOption.css";

import { NavLink } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "react-scroll";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import VpnKeyOffIcon from "@mui/icons-material/VpnKeyOff";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ImageIcon from "@mui/icons-material/Image";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import EmailIcon from "@mui/icons-material/Email";
import TungstenIcon from "@mui/icons-material/Tungsten";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const MobileHeaderOption = ({ handleClick }) => {
  return (
    <div className=" bg-[#130f49] text-white py-5">
      <div className="flex gap-2 justify-around  ">
        <div className="flex flex-col  justify-center items-center ">
          <Link
            to="banner"
            smooth={true}
            className="cursor-pointer u-line-effect "
          >
            <div className="flex flex-col  justify-center items-center  ">
              <HomeIcon className="mhI" />
              <p className="text-[10px]"> Home</p>
            </div>
          </Link>
        </div>

        <div className="flex flex-col  justify-center items-center ">
          <Link
            to="about"
            smooth={true}
            className="cursor-pointer u-line-effect text-[10px]"
          >
            <div className="flex flex-col  justify-center items-center  ">
              <InfoIcon className=" mhI" />
              <p className="text-[10px]"> About me</p>
            </div>
          </Link>
        </div>

        <div className="flex flex-col  justify-center items-center  ">
          <Link
            to="service"
            smooth={true}
            className="cursor-pointer u-line-effect text-[10px]"
          >
            <div className="flex flex-col  justify-center items-center  ">
              <ManageAccountsIcon className=" mhI" />
              <p className="text-[10px]"> Service</p>
            </div>
          </Link>
        </div>

        <div className="flex flex-col  justify-center items-center  ">
          <Link
            to="skill"
            smooth={true}
            className="cursor-pointer u-line-effect text-[10px] "
          >
            <div className="flex flex-col  justify-center items-center ">
              <TungstenIcon className=" rotate-180 mhI" />
              <p className="text-[10px]"> Skill</p>
            </div>
          </Link>
        </div>

        <div className="flex flex-col  justify-center items-center  ">
          <Link
            to="testimonial"
            smooth={true}
            className="cursor-pointer u-line-effect text-[10px]"
          >
            <div className="flex flex-col  justify-center items-center">
              <EventNoteIcon className=" mhI" />
              <p className="text-[10px]"> Testimonial</p>
            </div>
          </Link>
        </div>

        <div className="flex flex-col  justify-center items-center  ">
          <Link
            to="blog"
            smooth={true}
            className="cursor-pointer  u-line-effect text-[10px]"
          >
            <div className="flex flex-col  justify-center items-center">
              <RssFeedIcon className="mhI" />
              <p className="text-[10px]"> Blog</p>
            </div>
          </Link>
        </div>

        <div className="flex flex-col  justify-center items-center  ">
          <Link
            to="contact"
            smooth={true}
            className="cursor-pointer  u-line-effect text-[10px] "
          >
            <div className="flex flex-col  justify-center items-center ">
              <EmailIcon className="mhI" />
              <p className="text-[10px]"> Contact</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileHeaderOption;
