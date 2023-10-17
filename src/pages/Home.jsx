import React from "react";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
import BackgroundMusic from "../components/BackgroundMusic"; 
import SectionFour from "../components/SectionFour"; 
import "../styles/home.css";

const Home = () => {
  return (
    <header>
      {/* <BackgroundMusic />  */}
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour/>
    </header>
  );
};

export default Home;
