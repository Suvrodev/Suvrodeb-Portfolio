import React from "react";
import "./AboutMe.css";
import { Typewriter } from "react-simple-typewriter";
import AboutImage from "./AboutImage/AboutImage";

const image1 =
  "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1470";
const image2 =
  "https://plus.unsplash.com/premium_photo-1661281345831-72aac72beb52?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1469";
const image3 =
  "https://images.unsplash.com/photo-1557425529-b1ae9c141e7d?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1470";

const AboutMe = () => {
  const images = [image1, image2, image3];
  return (
    <div className="h-[800px] md:h-auto">
      <p> NICE TO MEET YOU!</p>
      <h1 className="text-2xl font-bold pText uppercase my-10 md:my-4">
        everything about me!
      </h1>

      <div className="flex flex-col md:flex-row gap-36 md:gap-24  h-[450px]">
        <div className="w-full md:w-1/2 p-0 md:p-20 ">
          <div className="relative h-full">
            <img
              src={image1}
              alt=""
              className={`w-[150px] md:w-[250px] h-[100px] md:h-[200px] absolute left-0 top-0 ab1 transition-all duration-700`}
            />
            <img
              src={image2}
              alt=""
              className={`w-[150px] md:w-[250px] h-[100px] md:h-[200px] absolute top-0 md:top-14 right-0 ab2 transition-all duration-700`}
            />
            <img
              src={image3}
              alt=""
              className={`hidden md:block w-[150px] md:w-[250px] h-[100px] md:h-[200px] absolute -bottom-10 left-1/2 transform -translate-x-1/2 ab3 transition-all duration-700`}
            />

            <img
              src={image3}
              alt=""
              className={` md:hidden w-[150px] md:w-[250px] h-[100px] md:h-[200px] absolute  -top-4 left-1/2 transform -translate-x-1/2 ab3 transition-all duration-700`}
            />

            {/* {images.map((image, idx) => (
              <AboutImage key={idx} image={image} number={idx} />
            ))} */}
          </div>
        </div>
        <div className="w-full md:w-1/2 ">
          <div>
            <span className="subTitle">Welcome to my world</span>
            <h1 className="aboutTitle">
              Hi I'm <span>Suvrodeb</span>{" "}
            </h1>
            <div className="flex gap-4">
              <h1 className="aboutTitleDesc">a </h1>
              {
                <span className="aboutTitleDesc">
                  {/* Style will be inherited from the parent element */}
                  <Typewriter
                    words={[
                      "Mern Stack Developer",
                      "FullStact Developer",
                      "Specialist in Front end",
                    ]}
                    loop={Infinity}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              }
            </div>
          </div>
          <h1 className="text-2xl font-bold pText uppercase my-4">-About Me</h1>
          <p>
            I’m a web designer and developer with a great passion for building
            things with code. I live in beautiful Barisal in the southwest of
            Bangladesh, where I create amazing websites design and develope.
            just like you are gonna see in one of my portfolio website.
          </p>
          <p className="mt-4">
            I have a lot of skills Html5, Css3, Sass, Bootstrap, Tailwind,
            JavaScript, React.js and Redux, and i also familiar with Vue.js
            Node.js, and MongoDB.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
