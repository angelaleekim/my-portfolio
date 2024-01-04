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
        href="https://drive.google.com/file/d/1lpdDkiX2b0yPBH3usli6M0xWhWNXyo65/view?usp=sharing"
        target="_blank"
      >
        Resume
      </a>
    </nav>
  );
}

export default Navbar;
