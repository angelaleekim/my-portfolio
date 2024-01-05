import React from "react";
import "./Section.css";
import "./Home.css";
import projects from "./Projects";
import ProjectShowcase from "./ProjectShowcase";
import "./Home.css";

const HeroSection = () => {
  return (
    <div className="section">
      <h1 className="title-1">my projects</h1>
      <div className="showcase-container">
        {projects.map((project, index) => (
          <ProjectShowcase key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
