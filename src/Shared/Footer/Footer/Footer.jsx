import "./Footer.css";
import React from "react";

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
// import { Link } from "react-router-dom";
import goLink from "../../../JS-File/goLink";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div>
      <div className="footer-section font-bold">
        <div className="py-20 px-10 grid grid-cols-1 md:grid-cols-4  ">
          <div className="">
            <h1 className="text-[24px]  footerTitle">Suvrodeb Howlader</h1>
            <div className="flex gap-4 items-center mt-8 text-white">
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
            <button
              className="btn btn-success text-white mt-4"
              onClick={() =>
                goLink(
                  "https://drive.google.com/drive/u/0/folders/1bOVEqEcZB69GKBeRsge35y0AUeBiY6iy"
                )
              }
            >
              Download CV
            </button>
          </div>

          <div>
            <h1 className="text-[24px] text-white font-bold mb-8">
              Contact Detail
            </h1>
            <div className="flex flex-col gap-2">
              <Link to="service">About me</Link>
              <Link to="service">Service</Link>
              <Link to="service">Skill</Link>
              <Link to="service">Price</Link>
            </div>
          </div>

          <div>
            <h1 className="text-[24px] text-white font-bold mb-8">
              Quick Links
            </h1>
            <div>
              <PhoneForwardedIcon /> <span>+880 1951912997</span>
            </div>
            <div className="mt-4">
              <EmailIcon /> <span>suvrodeb.cse@gmail.com</span>
            </div>
          </div>

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
  );
};

export default Footer;
