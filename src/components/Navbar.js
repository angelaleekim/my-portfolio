import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">ALK</h1>
      <a
        className="navbar__link"
        href="https://drive.google.com/file/d/1CinHbPPfEjWt5UoIKLZG73-TvMHsSB_R/view?usp=sharing"
      >
        Resume
      </a>
    </nav>
  );
}

export default Navbar;
