import React from "react";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import BackgroundMusic from "../components/BackgroundMusic"; 
import "../styles/home.css";

const Home = () => {
  return (
    <header>
      <BackgroundMusic /> 
      <SectionOne />
      <SectionTwo />
    </header>
  );
};

export default Home;
