import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">ALK</h1>
      <a
        className="navbar__link"
        href="https://drive.google.com/file/d/1pTc0tyOTbkGIgSAEJh5plFdf3O094uuN/view?usp=share_link"
      >
        Resume
      </a>
    </nav>
  );
}

export default Navbar;
