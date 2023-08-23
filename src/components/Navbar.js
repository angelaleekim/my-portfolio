import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">ALK</h1>
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
