import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logoImage from "../../../assets/HeaderImage/myLogo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PinterestIcon from "@mui/icons-material/Pinterest";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FaDribbble, FaBehance } from "react-icons/fa";

import { LazyLoadImage } from "react-lazy-load-image-component";
import goLink from "../../../JS-File/goLink";
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
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import sendEmail from "../../../JS-File/sendEmail";
import goCall from "../../../JS-File/goCall";

const Header = () => {
  const handleCheck = (data) => {
    console.log("Pess: ", data);
  };
  return (
    <div className="sticky top-0">
      <div className="bg-[#F3F9FF] h-[100vh] w-full flex flex-col items-center text-black overflow-hidden relative">
        <div className="mt-10 mb-8">
          <Link to={"banner"} smooth={true} className="cursor-pointer z-10">
            <div>
              <img
                src={logoImage}
                alt=""
                className="w-[150px] h-[150px] rounded-full"
              />
            </div>
          </Link>
          <h1 className="text-center mt-2 font-bold text-[24px] animate-text resizeForHeader z-10">
            Suvrodeb
          </h1>
        </div>

        {/* Link start */}
        <div className="flex flex-col gap-1 z-10">
          {/* Link Items */}
          <div className="flex gap-2 items-center">
            <HomeIcon className="opacity-50" />
            <Link
              to="banner"
              smooth={true}
              className="cursor-pointer u-line-effect"
            >
              Home
            </Link>
          </div>

          <div className="flex gap-2 items-center">
            <InfoIcon className="opacity-50" />
            <Link
              to="about"
              smooth={true}
              className="cursor-pointer u-line-effect"
            >
              About me
            </Link>
          </div>

          <div className="flex gap-2 items-center">
            <InfoIcon className="opacity-50" />
            <Link
              to="skill"
              smooth={true}
              className="cursor-pointer u-line-effect"
            >
              Skill
            </Link>
          </div>

          <div className="flex gap-2 items-center">
            <ManageAccountsIcon className="opacity-50" />
            <Link
              to="service"
              smooth={true}
              className="cursor-pointer u-line-effect"
            >
              Service
            </Link>
          </div>

          <div className="flex gap-2 items-center">
            <RssFeedIcon className="opacity-50" />
            <Link
              to="blog"
              smooth={true}
              className="cursor-pointer u-line-effect"
            >
              Blog
            </Link>
          </div>
          <div className="flex gap-2 items-center">
            <EmailIcon className="opacity-50" />
            <Link
              to="contact"
              smooth={true}
              className="cursor-pointer u-line-effect"
            >
              Contact
            </Link>
          </div>

          {/* Other Links */}
          {/* ... */}
        </div>
        {/* Link End */}

        {/* <button
          className="btn btn-primary z-50"
          onClick={() => handleCheck("1st")}
        >
          Press
        </button> */}

        {/* Icon Start */}
        <div
          className="flex gap-4 items-center mt-8 z-40"
          onClick={() => handleCheck()}
        >
          <div onClick={() => goLink("https://www.facebook.com/suvrodev.1122")}>
            <FaFacebookF onClick={() => handleCheck()} />
          </div>

          <Link to="" onClick={() => goLink("https://x.com/suvrodev1408")}>
            <FaTwitter />
          </Link>

          <Link
            to=""
            onClick={() =>
              goLink("https://www.linkedin.com/in/suvrodeb-howlader/")
            }
          >
            <LinkedInIcon />
          </Link>
          <Link to="" onClick={() => goLink("https://github.com/Suvrodev")}>
            <GitHubIcon />
          </Link>

          <Link to="" onClick={() => goLink("https://Wa.me/+8801518748081")}>
            <FaWhatsapp />
          </Link>
        </div>
        {/* Icon End */}

        {/* Mail Number Start */}
        <div className="pt-10 text-black text-[15px] z-10 text-center">
          <p>
            <span className="font-bold">Email: </span>
            <span onClick={() => sendEmail()}> suvrodeb.cse@gmail.com</span>
          </p>
          <p>
            <span className="font-bold">Phone: </span>
            <span onClick={() => goCall()}> +880 1951912997</span>
          </p>
        </div>
        {/* Mail Number End */}

        {/* Footer */}
        <div className="absolute h-[100px] w-full bottom-0 flex justify-center z-0">
          <h1 className="z-20 bottom-1 absolute text-white text-center">
            Copyright © 2024 Suvrodeb <br /> All rights reserved.
          </h1>
          <div>
            <div className="waveHeader"></div>
            <div className="waveHeader"></div>
            <div className="waveHeader"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

/**
 * urls: https://www.npmjs.com/package/react-lazy-load-image-component
 */
