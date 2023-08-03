import React from "react";
import Navbar from "./Navbar";
import "./ProjectPage.css";

const ProjectPage = ({
  title,
  date,
  description,
  technologies,
  images,
  code,
  demo,
}) => {
  return (
    <div className="container">
      <Navbar />
      <div className="project-page">
        <div className="media">
          <div className="image-container">
            <img src={images[0]} alt="" />
          </div>
        </div>
        <h2>{title}</h2>
        <p className="subheading">{date}</p>
        <p className="description">{description}</p>
        <div className="technologies">
          <h3>Technologies Used:</h3>
          <ul>
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="resource-buttons">
          <div className="project-links">
            <a className="demo" href={demo} target="_blank" rel="noreferrer">
              Project Demo
            </a>
            <a className="code" href={code} target="_blank" rel="noreferrer">
              Git Repo
            </a>
          </div>
        </div>
      </div>
      <div className="image-container-2">
        {images.slice(1).map((image) => (
          <img className="sub-image" src={image} alt="" />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
