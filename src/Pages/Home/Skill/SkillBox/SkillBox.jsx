import React from "react";

const SkillBox = ({ skill }) => {
  console.log("Skill: ", skill);
  const { title, image } = skill;
  return (
    <div className="w-[75px] h-[75px] md:w-[150px] md:h-[150px] bg-[#1A1443] rounded-lg flex flex-col items-center justify-center gap-1 md:gap-4">
      <img
        src={image}
        alt=""
        className="w-[25px] h-[25px] md:w-[50px] md:h-[50px]"
      />
      <h1 className="text-white font-bold text-[14px] md:text-xl">{title}</h1>
    </div>
  );
};

export default SkillBox;
