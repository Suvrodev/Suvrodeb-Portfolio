import React from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import AboutMe from "../AboutMe/AboutMe";
import Experience from "../Experience/Experience";
import Pricing from "../Pricing/Pricing";
import MyService from "../MyService/MyService";
import Skill from "../Skill/Skill/Skill";

const Home = () => {
  return (
    <div className="w-full">
      <Banner />
      <div className="p-10 aboutmeBgColor">
        <AboutMe />
      </div>
      <div className="p-10 aboutmeBgColor">
        <Experience />
      </div>
      <div className="p-10 aboutmeBgColor">
        <MyService />
      </div>
      <div className="p-10 aboutmeBgColor">
        <Skill />
      </div>
      <div className="p-10 aboutmeBgColor">
        <Pricing />
      </div>
    </div>
  );
};

export default Home;
