import React from "react";
import Navbar from "./Navbar";
import ProjectSection from "./ProjectSection";
import AboutMe from "./AboutMe";
const Home = () => {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <ProjectSection />
    </div>
  );
};

export default Home;
