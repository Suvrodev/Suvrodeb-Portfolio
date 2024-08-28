import React, { useEffect, useRef, useState } from "react";

const Progressbar = ({ title, percentage }) => {
  //   const title = "React";
  //   const percentage = 100;

  const progressBarRef = useRef(null);

  useEffect(() => {
    if (progressBarRef.current) {
      progressBarRef.current.style.width = `${percentage}%`;
    }
  }, [percentage]);

  /**
   * For Responsive
   */

  const [containerWidth, setContainerWidth] = useState("500px");

  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth <= 576) {
        setContainerWidth("1000px");
      } else {
        setContainerWidth("500px");
      }
    };

    window.addEventListener("resize", updateWidth);
    updateWidth(); // Set initial width

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const styles = {
    container: {
      width: containerWidth,
    },
    progressContainer: {
      width: "100%",
      height: "10px",
      backgroundColor: "#23263E",
      borderRadius: "5px",
      overflow: "hidden",
    },
    progressBar: {
      height: "100%",
      backgroundColor: "#30937E",
      borderRadius: "5px 0 0 5px",
      width: "0%",
      transition: "width 2s",
    },
  };

  return (
    <div>
      {percentage && (
        <div className="md:w-[450px]">
          <div className="flex justify-between">
            <div className="text-[18px] pText mb-4">{title}</div>
            <div>
              <div className="text-[18px] pText mb-4">{percentage}%</div>
            </div>
          </div>
          <div style={styles.progressContainer}>
            <div ref={progressBarRef} style={styles.progressBar}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Progressbar;
