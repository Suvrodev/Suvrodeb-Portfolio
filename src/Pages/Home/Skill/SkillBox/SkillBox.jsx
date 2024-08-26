import React from "react";

const SkillBox = ({ skill }) => {
  console.log("Skill: ", skill);
  const { title, image } = skill;
  return (
    <div className="w-[150px] h-[150px] bg-[#1A1443] rounded-lg flex flex-col items-center justify-center gap-4">
      <img src={image} alt="" className="w-[50px] h-[50px]" />
      <h1 className="text-white font-bold text-xl">{title}</h1>
    </div>
  );
};

export default SkillBox;
