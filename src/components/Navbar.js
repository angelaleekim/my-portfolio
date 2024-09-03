import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "./Home.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <h1>AK</h1>
      </Link>

      <a
        className="navbar__link"
        href="https://drive.google.com/file/d/1iwoDyemC5nKidBf3N0lBMJ7NzBDdWRlX/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </a>
    </nav>
  );
}

export default Navbar;
