import React, { useState } from "react";

const AboutImage = ({ image, number }) => {
  console.log("Number: ", number);
  console.log("Image: ", image);
  let imageBox;
  if (number == 0) {
    imageBox = (
      <div>
        <img
          src={image}
          alt=""
          className={`w-[250px] h-[200px] absolute left-0 top-0 `}
        />
      </div>
    );
  }
  if (number == 1) {
    imageBox = (
      <img
        src={image}
        alt=""
        className={`w-[250px] h-[200px] absolute top-14 right-0`}
      />
    );
  }
  if (number == 2) {
    imageBox = (
      <div>
        <img
          src={image}
          alt=""
          className={`w-[250px] h-[200px] absolute top-36 left-1/2 transform -translate-x-1/2`}
        />
      </div>
    );
  }

  const [isHover, setIsHover] = useState(false);
  console.log("Hover: ", isHover);
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`${number == 0 && "z-10"}`}
    >
      {imageBox}
    </div>
  );
};

export default AboutImage;
