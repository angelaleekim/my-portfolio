import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="logo" to="/">
        <h1>ALK</h1>
      </Link>

      <a
        className="navbar__link"
        href="https://drive.google.com/file/d/1cMupCXUnuOjIQLnE8fVwQg85Kolcwsz0/view?usp=share_link"
      >
        Resume
      </a>
    </nav>
  );
}

export default Navbar;
