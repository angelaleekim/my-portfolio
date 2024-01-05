import React from "react";
import Navbar from "./Navbar";
import "./ProjectPage.css";
import "./Home.css";

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
          <video src={demo} autoPlay muted loop></video>
          {/* <div className="image-container">
            <img src={images[0]} alt={`Image`} />
          </div> */}
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
            <a className="code" href={code} target="_blank" rel="noreferrer">
              Git Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
