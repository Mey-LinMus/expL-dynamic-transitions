import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import TobeyMaguireImage from "../assets/actors/TobeyMaguire.jpg";
import AndrewGarfieldImage from "../assets/actors/AndrewGarfield.jpg";
import TomHollandImage from "../assets/actors/TomHolland.jpg";

const images = [
  { src: TobeyMaguireImage, text: "Tobey Maguire" },
  { src: AndrewGarfieldImage, text: "Andrew Garfield" },
  { src: TomHollandImage, text: "Tom Holland" },
];

const variants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

const SectionFour = () => {
  return (
    <div className="horizontal">
      <AnimatePresence>
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
            transition={{ duration: 1 }}
            style={{ marginRight: "20px" }}
          >
            <h1>{image.text}</h1>
            <img src={image.src} alt={image.text} className="horizontal-img" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default SectionFour;
