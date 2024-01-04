import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/home" className="logo">
        <h1>ALK</h1>
      </Link>

      <a
        className="navbar__link"
        href="https://drive.google.com/file/d/1hYg0jwzV0bldlyfeu90wRCJtkjMFdzeJ/view?usp=sharing"
      >
        Resume
      </a>
    </nav>
  );
}

export default Navbar;
