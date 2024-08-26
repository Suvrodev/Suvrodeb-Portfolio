import React, { useEffect, useState } from "react";
import "./Banner.css";
import "./BannerText.css";
import bgImage from "../../../assets/bgImage/Bg-4.jpg";
const Banner = () => {
  const droplets = 70;
  const [rainDrops, setRainDrops] = useState([]);

  useEffect(() => {
    const drops = [];
    for (let r = 0; r < droplets; r++) {
      drops.push({
        x: Math.floor(Math.random() * 100),
        y: Math.floor(Math.random() * 100),
        o: Math.random(),
        a: Math.random() + 0.5,
        d: Math.random() * 2 - 1,
        s: Math.random(),
      });
    }
    setRainDrops(drops);
  }, []);

  return (
    <div className="bgImage">
      <div className="rain-container  ">
        <div className="rain">
          {rainDrops.map((drop, index) => (
            <svg
              key={index}
              className="rain__drop"
              preserveAspectRatio="xMinYMin"
              viewBox="0 0 5 50"
              style={{
                "--x": drop.x,
                "--y": drop.y,
                "--o": drop.o,
                "--a": drop.a,
                "--d": drop.d,
                "--s": drop.s,
              }}
            >
              <path
                stroke="none"
                d="M 2.5,0 C 2.6949458,3.5392017 3.344765,20.524571 4.4494577,30.9559 5.7551357,42.666753 4.5915685,50 2.5,50 0.40843152,50 -0.75513565,42.666753 0.55054234,30.9559 1.655235,20.524571 2.3050542,3.5392017 2.5,0 Z"
                fill="#a1c6cc"
                opacity={drop.o}
                transform={`scaleY(${drop.s * 1.5})`}
              />
            </svg>
          ))}
        </div>

        {/* Text start */}
        <div className="absolute">
          <h1 class="heading-primary">
            <span class="heading-primary-main">
              Frontend
              <span class="animate-text">javascript react </span>Development
            </span>
            <span class="heading-primary-sub">
              Specializing in custom web development. If you are a business
              seeking a web presence or are looking to hire, contact me
              <span>
                <a href="https://sharmin-portfolio.netlify.app/#contact">
                  here.
                </a>
              </span>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;

/**
 * urls: https://codepen.io/jh3y/pen/WyNdMG
 */
