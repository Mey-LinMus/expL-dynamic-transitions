import React, { useEffect, useRef } from "react";
import anime from "animejs";
import Comic from "../assets/comic.jpg";
import { useInView } from "react-intersection-observer"; // Import the useInView hook
import "../styles/section.css";

const SectionTwo = () => {
  const comicRef = useRef(null);
  const [inViewRef, inView] = useInView({
    triggerOnce: true, // Trigger the animation once when it becomes visible
  });

  useEffect(() => {
    const comicElement = comicRef.current;

    // Define the animation properties
    const animation = anime({
      targets: comicElement,
      translateX: [-3000, 0],
      // opacity: [0, 1],
      duration: 900,
      easing: "easeOutSine",
      autoplay: false, // Don't auto-play the animation
    });

    if (inView) {
      animation.play(); // Play the animation when the component is in view
    } else {
      animation.pause(); // Pause the animation when the component is out of view
    }

    return () => {
      animation.pause();
    };
  }, [inView]);

  return (
    <div name="sectionTwo" ref={inViewRef}>
      <div className="comic" ref={comicRef}>
        <img src={Comic} alt="comic spiderman" />
      </div>
    </div>
  );
};

export default SectionTwo;
