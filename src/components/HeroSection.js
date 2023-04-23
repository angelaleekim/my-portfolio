import React from "react";
import "./HeroSection.css"; // import your CSS file
import projects from "./Projects";
import ProjectShowcase from "./ProjectShowcase";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <h1 className="intro">Hi! I'm Angela 👋</h1>
      <p>
        Here are a few of my projects, feel free to get in touch with me if you
        want to learn more about some of my work!
      </p>
      <div className="showcase-container">
        {projects.map((project, index) => (
          <ProjectShowcase key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
