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
  return (
    <div className="sticky top-0 po">
      <div className="bg-[#F3F9FF] h-[100vh] w-full flex flex-col items-center justify-start text-black  gap-5 relative  py-10">
        <div className=" bg-[#94a2b1] h-[80vh] w-full flex flex-col items-center justify-start text-black  gap-5 relative my-auto">
          {/* Image and Name start */}
          <div className=" ">
            <Link to={"banner"} smooth={true} className="cursor-pointer">
              <div>
                <img
                  src={logoImage}
                  alt=""
                  className="w-[150px] h-[150px] rounded-full"
                />
              </div>
            </Link>
            <h1 className="text-center mt-2 font-bold text-[24px] animate-text resizeForHeader">
              Suvrodeb
            </h1>
          </div>
          {/* Link Start */}
          <div className="flex flex-col gap-1  ">
            <div className="flex gap-2 items-center ">
              <HomeIcon className="opacity-50 hIcon" />

              <Link
                to="banner"
                smooth={true}
                className="cursor-pointer u-line-effect hLink"
              >
                Home
              </Link>
            </div>

            <div className="flex gap-2 items-center">
              <InfoIcon className="opacity-50 hIcon" />
              <Link
                to="about"
                smooth={true}
                className="cursor-pointer u-line-effect hLink"
              >
                About me
              </Link>
            </div>

            <div className="flex gap-2 items-center">
              <ManageAccountsIcon className="opacity-50 hIcon" />

              <Link
                to="service"
                smooth={true}
                className="cursor-pointer u-line-effect hLink"
              >
                Service
              </Link>
            </div>

            <div className="flex gap-2 items-center hLink">
              <TungstenIcon className="opacity-50 rotate-180 hIcon" />
              <Link
                to="skill"
                smooth={true}
                className="cursor-pointer u-line-effect"
              >
                Skill
              </Link>
            </div>

            <div className="flex gap-2 items-center  hLink">
              <EventNoteIcon className="opacity-50 hIcon" />
              <Link
                to="testimonial"
                smooth={true}
                className="cursor-pointer u-line-effect"
              >
                Testimonial
              </Link>
            </div>

            <div className="flex gap-2 items-center hLink">
              <AttachMoneyIcon className=" opacity-50 hIcon" />
              <Link
                to="price"
                smooth={true}
                className="cursor-pointer u-line-effect"
              >
                Price
              </Link>
            </div>

            <div className="flex gap-2 items-center hLink">
              <RssFeedIcon className="opacity-50 hIcon" />
              <Link
                to="blog"
                smooth={true}
                className="cursor-pointer  u-line-effect"
              >
                Blog
              </Link>
            </div>

            <div className="flex gap-2 items-center hLink">
              <EmailIcon className="opacity-50 hIcon" />
              <Link
                to="contact"
                smooth={true}
                className="cursor-pointer  u-line-effect"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* social icon and contact Start */}
          <div>
            {/* Icon start */}
            <div className="flex gap-4 items-center justify-center ">
              <Link
                to=""
                onClick={() => goLink("https://www.facebook.com/suvrodev.1122")}
              >
                <FaFacebookF />
              </Link>
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

              <Link
                to=""
                onClick={() => goLink("https://wa.me/message/V3FSQYVKY6HQL1")}
              >
                <FaWhatsapp />
              </Link>
            </div>
            {/* Icon end */}

            {/* Contact end */}
            <div className="pt-5">
              <div className=" text-black text-[15px]">
                <p>
                  <span className="font-bold">Email: </span>{" "}
                  <span onClick={() => sendEmail()}>
                    {" "}
                    suvrodeb.cse@gmail.com
                  </span>
                </p>
                <p>
                  <span className="font-bold">Phone: </span>{" "}
                  <span onClick={() => goCall()}> +88 01951912997</span>
                </p>
              </div>
            </div>
            {/* Contact end */}
          </div>
          {/* social icon and contact Start */}
        </div>

        <h1 className="z-20 px-10 bottom-2 absolute text-white text-[14px] text-center w-full ">
          Copyright © 2024 Suvrodeb All <br /> rights reserved.
        </h1>

        <div class="oceanHeader  absolute bottom-0 h-[50px]  w-full">
          <div className="relative h-full">
            <div class="waveHeader"></div>
            <div class="waveHeader"></div>
            <div class="waveHeader"></div>
          </div>
        </div>

        {/* <div className="wrapperParent">
          <div className="wrapper">
            <ul className="bg-bubbles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Header;

/**
 * urls: https://www.npmjs.com/package/react-lazy-load-image-component
 */
