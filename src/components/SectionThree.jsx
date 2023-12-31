import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Parallax } from "react-parallax";
import TobeyMaguireImage from "../assets/actors/TobeyMaguire.jpg";
import AndrewGarfieldImage from "../assets/actors/AndrewGarfield.jpg";
import TomHollandImage from "../assets/actors/TomHolland.jpg";
import NewImage1 from "../assets/actors/TobeySpiderman.jpg";
import NewImage2 from "../assets/actors/AndrewSpiderman.jpg";
import NewImage3 from "../assets/actors/TomSpiderman.jpg";
import "../styles/section.css";

const sharedBackgroundImage = require("../assets/city2.jpg");

const images = [
  { mainSrc: TobeyMaguireImage, hoverSrc: NewImage1, alt: "Tobey Maguire" },
  { mainSrc: AndrewGarfieldImage, hoverSrc: NewImage2, alt: "Andrew Garfield" },
  { mainSrc: TomHollandImage, hoverSrc: NewImage3, alt: "Tom Holland" },
];

const variants = {
  visible: { opacity: 1, x: 0, duration: 2 },
  hidden: { opacity: 0, x: -200, duration: 2 },
};

const SectionThree = () => {
  const [hoveredImages, setHoveredImages] = useState(
    Array(images.length).fill(false)
  );
  const [showHoverImages, setShowHoverImages] = useState(
    Array(images.length).fill(false)
  );

  const handleMouseEnter = (index) => {
    setHoveredImages((prev) => {
      const updatedHoveredImages = [...prev];
      updatedHoveredImages[index] = true;
      return updatedHoveredImages;
    });
    setShowHoverImages((prev) => {
      const updatedShowHoverImages = [...prev];
      updatedShowHoverImages[index] = true;
      return updatedShowHoverImages;
    });
  };

  const handleMouseLeave = (index) => {
    setHoveredImages((prev) => {
      const updatedHoveredImages = [...prev];
      updatedHoveredImages[index] = false;
      return updatedHoveredImages;
    });

    setTimeout(() => {
      setShowHoverImages((prev) => {
        const updatedShowHoverImages = [...prev];
        updatedShowHoverImages[index] = false;
        return updatedShowHoverImages;
      });
    }, 100);
  };

  useEffect(() => {
    return () => {
      setHoveredImages(Array(images.length).fill(false));
      setShowHoverImages(Array(images.length).fill(false));
    };
  }, []);

  return (
    <div className="section-three">
      <Parallax bgImage={sharedBackgroundImage} strength={300}>
        <AnimatePresence>
          <div className="images-container">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variants}
                className="section-three-item"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <h1 className="sectionThreefont">{image.alt}</h1>
                <motion.img
                  src={hoveredImages[index] ? image.hoverSrc : image.mainSrc}
                  alt={image.alt}
                  className={`section-three-img ${
                    showHoverImages[index] ? "show-hover" : ""
                  }`}
                  whileHover={{
                    opacity: 1,
                    duration: 5,
                    ease: "easeOut",
                    rotate: 360,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </Parallax>
    </div>
  );
};

export default SectionThree;
