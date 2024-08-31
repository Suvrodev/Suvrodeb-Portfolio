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
import NewPricing from "../NewPricing/NewPricing";
import AboutMe2 from "../AboutMe_Second/AboutMe2";

const Home = () => {
  return (
    <div className="w-full" id="banner">
      <Banner />
      <div className="p-2 md:p-10 aboutmeBgColor" id="about">
        {/* <AboutMe /> */}
        <AboutMe2 />
      </div>
      <div className="p-2 md:p-10 aboutmeBgColor">
        <Experience />
      </div>
      <div className="p-2 md:p-10 aboutmeBgColor" id="service">
        <MyService />
      </div>
      <div className="p-2 md:p-10 aboutmeBgColor" id="skill">
        <Skill />
      </div>
      <div className="p-2 md:p-10 aboutmeBgColor flex justify-start md:justify-center ">
        <SkillLoading />
      </div>

      <div className="p-2 md:p-10 aboutmeBgColor" id="testimonial">
        <Review />
      </div>

      <div className="p-2 md:p-10 aboutmeBgColor" id="price">
        <NewPricing />
      </div>
      <div className="p-2 md:p-10 aboutmeBgColor" id="contact">
        <Contact />
      </div>
      {/* <div className="p-10 aboutmeBgColor">
        <Pricing />
      </div> */}
    </div>
  );
};

export default Home;
