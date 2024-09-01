import React, { useEffect, useState } from "react";
import "./LeftSocialIcon.css";

import GitHubIcon from "@mui/icons-material/GitHub";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import goLink from "../../../../JS-File/goLink";
import goCall from "../../../../JS-File/goCall";
const LeftSocialIcon = () => {
  const [showTopButton, setshowTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 700) {
        setshowTopButton(true);
      } else {
        setshowTopButton(false);
      }
    });
  }, []);

  return (
    <div className="fixed right-20 top-1/2 transform -translate-y-1/2  font-bold text-2x">
      {showTopButton && (
        <div>
          <div
            className="KarnofuliIcons"
            onClick={() => goLink(" https://github.com/Suvrodev")}
          >
            <GitHubIcon className="text-white text-[26px]" />
          </div>
          <div
            className="Baroawlia"
            onClick={() => goLink("https://web.facebook.com/suvrodev.1122")}
          >
            <FacebookIcon className="text-white text-[26px]" />
          </div>
          <div className="PhoneCall" onClick={() => goCall()}>
            <CallIcon />
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftSocialIcon;

/**
 * 
 *  <div class="KarnofuliIcons">
          <a href="https://github.com/SunthoDev" target="blank"
            ><i class="fa fa-github" aria-hidden="true"></i
          ></a>
        </div>
        <div class="Baroawlia">
          <a href="https://www.facebook.com/sunto.dab.9" target="blank"
            ><i class="fa fa-facebook" aria-hidden="true"></i
          ></a>
        </div>
        <div class="PhoneCall" target="blank">
          <a href="https://my-portfolio-shipon.web.app/"
            ><i class="fa fa-phone" aria-hidden="true"></i
          ></a>
        </div>
 */
