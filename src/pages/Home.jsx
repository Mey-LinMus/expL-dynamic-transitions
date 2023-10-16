import React from "react";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionTree from "../components/SectionTree";
import BackgroundMusic from "../components/BackgroundMusic"; 
import SectionFour from "../components/SectionFour"; 
import "../styles/home.css";

const Home = () => {
  return (
    <header>
      <BackgroundMusic /> 
      <SectionOne />
      <SectionTwo />
      <SectionTree />
      <SectionFour/>
    </header>
  );
};

export default Home;
