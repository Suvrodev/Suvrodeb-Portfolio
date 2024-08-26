import React from "react";
import "./Experience.css";
const Experience = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold pText mb-10">Experience</h1>
      <div class="experience u-margin-bottom-md">
        <div class="experience-card primary">
          <svg class="experience-shape" viewBox="0 0 375 283" fill="none">
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            ></rect>
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            ></rect>
          </svg>
          <div class="experience-gradient"></div>
          <div class="experience-info">
            <span class="experience-info-count">4+</span>
            <span class="experience-info-text">Year Of Experience</span>
          </div>
        </div>
        <div class="experience-card secondary">
          <svg class="experience-shape" viewBox="0 0 375 283" fill="none">
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            ></rect>
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            ></rect>
          </svg>
          <div class="experience-image">
            <div class="experience-gradient"></div>
          </div>
          <div class="experience-info">
            <span class="experience-info-count">80+</span>
            <span class="experience-info-text">Project Completed</span>
          </div>
        </div>
        <div class="experience-card tertiary">
          <svg class="experience-shape" viewBox="0 0 375 283" fill="none">
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            ></rect>
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            ></rect>
          </svg>
          <div class="experience-image">
            <div class="experience-gradient"></div>
          </div>
          <div class="experience-info">
            <span class="experience-info-count">100+</span>
            <span class="experience-info-text">happy Clint</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
