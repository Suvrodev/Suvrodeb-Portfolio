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

const Header = () => {
  return (
    <div className="sticky top-0">
      <div className="bg-[#F3F9FF] h-[100vh] w-full flex flex-col items-center text-black  overflow-hidden relative  ">
        <div className="my-10 ">
          <Link to={"banner"} smooth={true} className="cursor-pointer">
            <div className="">
              <img
                src={logoImage}
                alt=""
                className="w-[180px] h-[180px] rounded-full"
              />
            </div>
          </Link>
          <h1 className="text-center mt-5 font-bold text-[24px] animate-text2">
            Suvrodeb
          </h1>
        </div>

        <div className="flex flex-col gap-1 pText font-semibold">
          <Link to="banner" smooth={true} className="cursor-pointer">
            Home
          </Link>

          <Link to="about" smooth={true} className="cursor-pointer">
            About me
          </Link>

          <Link to="service" smooth={true} className="cursor-pointer">
            Service
          </Link>

          <Link to="skill" smooth={true} className="cursor-pointer">
            Skill
          </Link>

          <Link to="testimonial" smooth={true} className="cursor-pointer">
            Testimonial
          </Link>

          <Link to="price" smooth={true} className="cursor-pointer">
            Price
          </Link>

          <Link to="blog" smooth={true} className="cursor-pointer">
            Blog
          </Link>

          <Link to="contact" smooth={true} className="cursor-pointer">
            Contact
          </Link>
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

        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;

/**
 * urls: https://www.npmjs.com/package/react-lazy-load-image-component
 */
