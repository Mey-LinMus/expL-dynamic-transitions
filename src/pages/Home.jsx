import React from "react";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
import SectionFour from "../components/SectionFour";
import SectionFive from "../components/SectionFive";
import CustomCursor from "../components/CustomCursor";
import BackgroundMusic from "../components/BackgroundMusic";
import ParticleBackground from "../components/Particles"; 
import "../styles/home.css";

const Home = () => {
  return (
    <header>
      <CustomCursor />
      <ParticleBackground />
      {/* <BackgroundMusic /> */}
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive/>
    </header>
  );
};

export default Home;
