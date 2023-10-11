import React from "react";
import { Parallax } from "react-parallax";
import SnippedOne from "../assets/Artboard1.png";
import SnippedTwo from "../assets/Artboard2.png";
import SnippedThree from "../assets/Artboard3.png";
import "../styles/section.css";

const SectionTree = () => {
  return (
    <div className="parallax-container">
      <div className="parallax-image">
        <Parallax bgImage={SnippedOne} strength={300}>
          <div style={{ height: 600 }}></div>
        </Parallax>
      </div>
      <div className="parallax-image">
        <Parallax bgImage={SnippedTwo} strength={300}>
          <div style={{ height: 600 }}></div>
        </Parallax>
      </div>
      <div className="parallax-image">
        <Parallax bgImage={SnippedThree} strength={300}>
          <div style={{ height: 600 }}></div>
        </Parallax>
      </div>
    </div>
  );
};

export default SectionTree;
