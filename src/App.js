import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import projects from "./components/Projects";
import ProjectPage from "./components/ProjectPage.js";

function App() {
  projects.map((project) => console.log(project.route, project.id));
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {projects.map((project) => (
          <Route
            key={project.id}
            path={`${project.route}`}
            element={
              <ProjectPage
                title={project.title}
                date={project.date}
                description={project.description}
                technologies={project.technologies}
                images={project.images}
                code={project.code}
                demo={project.demo}
              />
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
