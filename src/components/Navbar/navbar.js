import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="main-nav">
      <ul className="nav-ul">
        <li className="no-mar">
          <a href="#">Home </a>
        </li>
        <li>
          <a href="#">About </a>
        </li>
        <li>
          <a href="#projects">Projects </a>
        </li>
        <li>
          <a href="#research">Research</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
