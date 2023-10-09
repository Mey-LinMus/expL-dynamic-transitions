import Spiderman from "../assets/spiderman.png";
import "../styles/sectionone.css";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const SectionOne = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    gsap.set(imageElement, { opacity: 0, rotate: 180 });

    gsap.to(imageElement, {
      opacity: 1,
      duration: 1,
      rotate: 0,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="header">
      <img ref={imageRef} src={Spiderman} alt="Spiderman" className="fade-in" />
    </div>
  );
};

export default SectionOne;
