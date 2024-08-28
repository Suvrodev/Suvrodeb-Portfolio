import React, { useState } from "react";
import "./MobileHeader.css";
import logoImage from "../../../../assets/HeaderImage/Logo.png";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
// import logoImage from "../assets/HeaderImage/myLogo.png";
import me from "../../../../assets/HeaderImage/myLogo.png";
import MobileHeaderOption from "./MobileHeaderOption/MobileHeaderOption";

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
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" w-full flex justify-between items-center py-2 px-5 bg-[#0F172A] ">
      <img src={me} alt="Profile" className="w-[50px] h-[50px] rounded-full" />
      <div>
        <div
          className={`menu-icon ${isOpen ? "open" : ""}`}
          onClick={handleClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {isOpen && (
        <div className="fixed z-20 bottom-0 left-0 w-full transition-all duration-700">
          <MobileHeaderOption handleClick={handleClick} />
        </div>
      )}
    </div>
  );
};

export default MobileHeader;
