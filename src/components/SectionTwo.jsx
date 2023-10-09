import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Web from "../assets/web.png";
import "../styles/section.css";

const SectionTwo = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const startImageAnimation = async () => {
      const imageElement = imageRef.current;

      gsap.set(imageElement, { opacity: 0, scale: 0 }); // Set initial position properties
      await gsap.to(imageElement, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
      });
    };

    startImageAnimation();
  }, []);

  return (
    <div className="web-container">
      <img ref={imageRef} src={Web} alt="Spider web" className="web" />
    </div>
  );
};

export default SectionTwo;