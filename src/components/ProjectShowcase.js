import React from "react";
import "./ProjectShowcase.css";

const ProjectShowcase = ({ project }) => {
  return (
    <div className="project-container">
      <a href="#">
        <img
          className="project-image"
          src={project.image}
          alt={project.title}
        />
      </a>

      <div className="project-info">
        <h2 className="project-title">{project.title}</h2>
        <p className="project-description">{project.description}</p>
        <ul className="project-technologies">
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <div className="project-links">
          <a href={project.code} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
