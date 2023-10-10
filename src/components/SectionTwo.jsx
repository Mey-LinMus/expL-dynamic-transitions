import React, { useEffect, useRef } from "react";
import anime from "animejs";
import Comic from "../assets/comic.jpg";
import { Element } from "react-scroll"; 
import "../styles/section.css";

const SectionTwo = () => {
  const comicRef = useRef(null);

  useEffect(() => {
    const comicElement = comicRef.current;

    // Define the animation properties
    const animation = anime({
      targets: comicElement,
      translateX: [-3000, 0], 
      // opacity: [0, 1], 
      duration: 900, 
      easing: "easeOutSine", 
      delay: 500, 
    });

  
    return () => {
      animation.pause();
    };
  }, []);

  return (
    <Element name="sectionTwo">
      <div className="comic" ref={comicRef}>
        <img src={Comic} alt="comic spiderman" />
      </div>
    </Element>
  );
};

export default SectionTwo;
