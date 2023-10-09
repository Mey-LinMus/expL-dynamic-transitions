import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Typewriter from "typewriter-effect/dist/core";
import Spiderman from "../assets/spiderman.png";
import "../styles/section.css";

const SectionOne = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const startTextAnimation = async () => {
      const textElement = textRef.current;

      const typewriter = new Typewriter(textElement, {
        loop: false,
        delay: 80,
        cursor: "",
      });

      await typewriter.typeString("Spider-man").start();
    };

    const startImageAnimation = async () => {
      const imageElement = imageRef.current;

      gsap.set(imageElement, { opacity: 0, scale: 0, rotate: 180 });
      await gsap.to(imageElement, {
        opacity: 1,
        scale: 1,
        duration: 1,
        rotate: 0,
        ease: "power1.inOut",
      });
    };

    startTextAnimation();
    startImageAnimation();
  }, []);

  return (
    <div className="header">
      <div className="text-container">
        <h1 ref={textRef}></h1>
      </div>
      <div className="image-container">
        <img
          ref={imageRef}
          src={Spiderman}
          alt="Spiderman"
          className="fade-in"
        />
      </div>
    </div>
  );
};

export default SectionOne;
