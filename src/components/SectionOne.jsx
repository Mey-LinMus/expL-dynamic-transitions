import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import Typewriter from "typewriter-effect/dist/core";
import Spiderman from "../assets/spiderman.png";
import Web from "../assets/web.png";
import { Parallax } from "react-parallax";
import { useSpring, animated } from "react-spring";
import "../styles/section.css";

const sharedBackgroundImage = require("../assets/city2.jpg");

const SectionOne = () => {
  const textRef = useRef(null);
  const webRef = useRef(null);
  const parallaxRef = useRef(null);
  const spidermanRef = useRef(null);

  const [mouseX, setMouseX] = useState(0);

  const spidermanSpring = useSpring({
    transform: `translateX(${mouseX / 50}px)`,
    config: { tension: 170, friction: 12 },
  });

  useEffect(() => {
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

    const startSpidermanAnimation = async () => {
      const spidermanElement = spidermanRef.current;

      gsap.set(spidermanElement, { scale: 0, rotate: 90 });

      await gsap.to(spidermanElement, {
        scale: 1,
        rotate: 360,
        duration: 1.5,
        delay: 1.5,
        ease: "power3.out",
      });
    };

    startWebAnimation();
    startTextAnimation();
    startSpidermanAnimation();
  }, []);

  const handleMouseMove = (e) => {
    setMouseX(e.clientX);
  };

  return (
    <div name="sectionOne" onMouseMove={handleMouseMove}>
      <Parallax
        bgImage={sharedBackgroundImage}
        strength={300}
        ref={parallaxRef}
      >
        <div className="header">
          <div className="text-container">
            <h1 ref={textRef}></h1>
          </div>
          <div className="web-container">
            <img ref={webRef} src={Web} alt="Spider web" className="web" />
          </div>
          <animated.div
            className="image-container"
            style={{ ...spidermanSpring }}
          >
            <img
              ref={spidermanRef}
              src={Spiderman}
              alt="Spiderman"
              className="fade-in"
            />
          </animated.div>
        </div>
      </Parallax>
    </div>
  );
};

export default SectionOne;
