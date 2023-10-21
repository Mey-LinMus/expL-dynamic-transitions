import React from "react";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
import BackgroundMusic from "../components/BackgroundMusic"; 
import SectionFour from "../components/SectionFour"; 
import CustomCursor from "../components/CustomCursor"; 
import "../styles/home.css";

const Home = () => {
  return (
    <header>
      <CustomCursor />
      <BackgroundMusic /> 
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </header>
  );
};

export default Home;
