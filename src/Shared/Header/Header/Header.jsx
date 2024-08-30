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

const Header = () => {
  return (
    <div className="sticky top-0">
      <div className="bg-[#F3F9FF] h-[100vh] w-full flex flex-col items-center text-black  overflow-hidden relative  ">
        <div className="my-10 ">
          <Link to={"banner"} smooth={true} className="cursor-pointer">
            <div>
              <img
                src={logoImage}
                alt=""
                className="w-[180px] h-[180px] rounded-full"
              />
            </div>
          </Link>
          <h1 className="text-center mt-5 font-bold text-[24px] animate-text resizeForHeader">
            Suvrodeb
          </h1>
        </div>

        <div className="flex flex-col gap-1  ">
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
            <TungstenIcon className="opacity-50 rotate-180" />
            <Link
              to="skill"
              smooth={true}
              className="cursor-pointer u-line-effect"
            >
              Skill
            </Link>
          </div>

          <div className="flex gap-2 items-center">
            <EventNoteIcon className="opacity-50" />
            <Link
              to="testimonial"
              smooth={true}
              className="cursor-pointer u-line-effect"
            >
              Testimonial
            </Link>
          </div>

          <div className="flex gap-2 items-center">
            <AttachMoneyIcon className=" opacity-50" />
            <Link
              to="price"
              smooth={true}
              className="cursor-pointer u-line-effect"
            >
              Price
            </Link>
          </div>

          <div className="flex gap-2 items-center">
            <RssFeedIcon className="opacity-50" />
            <Link
              to="blog"
              smooth={true}
              className="cursor-pointer  u-line-effect"
            >
              Blog
            </Link>
          </div>

          <div className="flex gap-2 items-center">
            <EmailIcon className="opacity-50" />
            <Link
              to="contact"
              smooth={true}
              className="cursor-pointer  u-line-effect"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Icon Start */}
        <div className="flex gap-4 items-center mt-8">
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

        <div className="">
          <div className="pt-10 text-black text-[15px]">
            <p>
              <span className="font-bold">Email: </span>{" "}
              <span> suvrodeb.cse@gmail.com</span>
            </p>
            <p>
              <span className="font-bold">Phone: </span>{" "}
              <span> +88 01951912997</span>
            </p>
          </div>

          {/* <div className="mt-[20px] text-black text-[15px]">
          <p>
            Copyright ©2024 <strong>Suvrodeb</strong> <br /> All Rights
            Reserved.
          </p>
        </div> */}
        </div>

        {/* Wave Animation */}
        <div className="footer-section font-bold">
          <div className="py-20 px-10 grid grid-cols-1 md:grid-cols-4  ">
            <div>
              <h1 className="text-[24px] text-white font-bold mb-8">
                Our Services
              </h1>
              <h1>Responsive Web Design</h1>
              <h1>Mern Stack Development</h1>
              <h1>MongoDB Service</h1>
              <h1>My Sql Service</h1>
            </div>
          </div>

          <div className="footer__waveWrapper bottom-wave waveAnimation">
            <div className="waveInner bgOne">
              <div className="wave waveOne"></div>
            </div>
            <div className="waveInner bgTwo">
              <div className="wave waveTwo"></div>
            </div>
            <div className="waveInner bgThree">
              <div className="wave waveThree"></div>
            </div>
            <div className="waveInner bgFour">
              <div className="wave waveFour"></div>
            </div>
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
