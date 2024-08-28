import React from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import AboutMe from "../AboutMe/AboutMe";
import Experience from "../Experience/Experience";
import Pricing from "../Pricing/Pricing";
import MyService from "../MyService/MyService";
import Skill from "../Skill/Skill/Skill";
import Review from "../Review/Review";
import SkillLoading from "../Skill/SkillLoading/SkillLoading";
import Contact from "../Contact/Contact";

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
        <div className="flex justify-center">
          <SkillLoading />
        </div>
      </div>
      <div className="p-10 aboutmeBgColor">
        <Review />
      </div>
      <div className="p-10 aboutmeBgColor">
        <Contact />
      </div>
      <div className="p-10 aboutmeBgColor">
        <Pricing />
      </div>
    </div>
  );
};

export default Home;
