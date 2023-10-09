import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Typewriter from "typewriter-effect/dist/core";
import Spiderman from "../assets/spiderman.png";
import "../styles/sectionone.css";

const SectionOne = () => {
  const imageRef = useRef(null);
  const typewriterRef = useRef(null); // Define typewriterRef

  useEffect(() => {
    const imageElement = imageRef.current;

    gsap.set(imageElement, { opacity: 0, rotate: 180 });

    gsap.to(imageElement, {
      opacity: 1,
      duration: 1,
      rotate: 0,
      ease: "power1.inOut",
    });

    const typewriter = new Typewriter(typewriterRef.current, {
      loop: false,
      delay: 80,
      cursor: "",
    });

    typewriter.typeString("Spider-man").start();
  }, []);

  return (
    <div className="header">
      <h1 ref={typewriterRef}></h1>
      <img ref={imageRef} src={Spiderman} alt="Spiderman" className="fade-in" />
    </div>
  );
};

export default SectionOne;
