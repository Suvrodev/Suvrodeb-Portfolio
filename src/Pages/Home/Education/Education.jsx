import React, { useEffect, useState } from "react";
import TimeLine from "./TimeLine/TimeLine";
import Lottie from "lottie-react";

import study from "../../../assets/lottie/study.json";
import study1 from "../../../assets/lottie/Study-1.json";
import study2 from "../../../assets/lottie/Study-2.json";
import study3 from "../../../assets/lottie/Study-3.json";

const Education = () => {
  const [educations, setEducation] = useState([]);

  useEffect(() => {
    fetch("/educations.json")
      .then((res) => res.json())
      .then((data) => setEducation(data));
  }, []);

  return (
    <div>
      <h1 className="text-white font-bold pText my-4">Education</h1>
      <div className="flex flex-col-reverse md:flex-row gap-4 items-center">
        <div className="flex  h-auto w-full md:w-1/2 ">
          <div className="w-[2px] pColor h-auto flex justify-center">
            {" "}
            <p className="h-full "></p>
          </div>
          <div className="w-[98%]  flex flex-col gap-10 ">
            {educations.map((education, idx) => (
              <TimeLine key={idx} education={education} />
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-start justify-center">
          <Lottie
            animationData={study2}
            loop={true}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
