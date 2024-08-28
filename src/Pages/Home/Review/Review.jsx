import React, { useEffect, useRef, useState } from "react";
import "./Review.css";
import TestimonialCard from "./TestimonialCard/TestimonialCard";

const images = [
  "https://i.ibb.co/xsV2S00/Brand-3-150x150.webp",
  "https://i.ibb.co/5BZM3hS/67a8a5ef-fc8e-4a99-93d8-e1cbf998a2f7-1.webp",
  "https://i.ibb.co/Z66m4s1/Brand-1-150x150.webp",
  "https://i.ibb.co/z74CwmY/ZS-150x150.webp",
  "https://i.ibb.co/H2bx8KP/JPEG-20210320-203703-5456959541357686078-150x150.webp",
];

const Review = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("/testimonial.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  //   console.log("Testimonials: ", testimonials);

  const [currentIndex, setCurrentIndex] = useState(0);
  const startX = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the interval time as needed

    return () => clearInterval(interval);
  }, []);

  const handleStart = (e) => {
    startX.current = e.clientX || e.touches[0].clientX;
  };

  const handleMove = (e) => {
    if (startX.current === null) return;

    const x = e.clientX || e.touches[0].clientX;
    const deltaX = x - startX.current;

    if (deltaX > 50) {
      // Swipe right
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      startX.current = null;
    } else if (deltaX < -50) {
      // Swipe left
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      startX.current = null;
    }
  };

  const handleEnd = () => {
    startX.current = null;
  };

  return (
    <div className="">
      <h1 className="text-2xl font-bold pText mb-10">Testimonial</h1>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-3xl font-bold pText text-center mb-10">
          OUR SATISFIED CUSTOMERS FEEDBACK
        </h1>
      </div>

      <div
        className="testimonial-container  "
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
      >
        <div
          className="testimonial-wrapper"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-slide">
              <TestimonialCard
                testimonial={testimonial}
                className="testimonial-image"
              ></TestimonialCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
