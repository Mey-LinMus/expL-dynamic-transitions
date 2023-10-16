import React from "react";
import { Parallax } from "react-parallax";
import SnippedOne from "../assets/Artboard1.png";
import SnippedTwo from "../assets/Artboard2.png";
import SnippedThree from "../assets/Artboard3.png";
import SnippedFour from "../assets/Artboard4.png";
import SnippedSix from "../assets/Artboard6.png";
import "../styles/section.css";

const SectionTree = () => {
  return (
    <div className="parallax-container">
      <div className="parallax-image">
        <Parallax bgImage={SnippedOne} strength={300}>
          <div style={{ height: 800 }}></div>
        </Parallax>
      </div>
      <div className="parallax-image">
        <Parallax bgImage={SnippedTwo} strength={400}>
          <div style={{ height: 800 }}></div>
        </Parallax>
      </div>
      <div className="parallax-image">
        <Parallax bgImage={SnippedThree} strength={500}>
          <div style={{ height: 800 }}></div>
        </Parallax>
      </div>
      <div className="parallax-image">
        <Parallax bgImage={SnippedFour} strength={600}>
          <div style={{ height: 800 }}></div>
        </Parallax>
      </div>
      <div className="parallax-image">
        <Parallax bgImage={SnippedSix} strength={800}>
          <div style={{ height: 800 }}></div>
        </Parallax>
      </div>
    </div>
  );
};

export default SectionTree;
