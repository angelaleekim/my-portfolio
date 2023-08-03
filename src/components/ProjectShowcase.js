import React from "react";
import { Link } from "react-router-dom";
import "./ProjectShowcase.css";

const ProjectShowcase = ({ project }) => {
  return (
    <div className="project-container">
      <Link to={project.route}>
        <img className="project-image" src={project.images[0]} alt={`Image}`} />
      </Link>

      <div className="project-info">
        <h2 className="project-title">{project.title}</h2>
        <ul className="project-technologies">
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <div className="project-links">
          <Link to={`${project.route}`}>View Project</Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
