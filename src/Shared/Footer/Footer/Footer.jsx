import "./Footer.css";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer-section">
        <div className="footer">
          <h1>Footer Body</h1>
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
      </footer>
    </div>
  );
};

export default Footer;
