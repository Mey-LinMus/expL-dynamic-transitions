import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Typewriter from "typewriter-effect/dist/core";
import Spiderman from "../assets/spiderman.png";
import Web from "../assets/web.png";
import "../styles/section.css";

const SectionOne = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const webRef = useRef(null);

  useEffect(() => {
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

    const startWebAnimation = async () => {
      const webElement = webRef.current;

      gsap.set(webElement, { opacity: 0, scale: 0, rotate: 0 });

      setTimeout(async () => {
        await gsap.to(webElement, {
          opacity: 1,
          scale: 1.5,
          duration: 1,
          rotate: 90,
          ease: "power3.out",
        });
      }, 1000);
    };

    const startTextAnimation = async () => {
      const textElement = textRef.current;

      const typewriter = new Typewriter(textElement, {
        loop: false,
        delay: 90,
        cursor: "",
      });

      await typewriter.typeString("Spider-man").start();
    };

    startImageAnimation();
    startWebAnimation();
    startTextAnimation();
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
      <div className="web-container">
        <img ref={webRef} src={Web} alt="Spider web" className="web" />
      </div>
    </div>
  );
};

export default SectionOne;
