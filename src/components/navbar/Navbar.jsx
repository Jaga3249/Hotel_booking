import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">hotel booking</span>
        <div className="navItem">
          <button className="navBtn">Resister</button>
          <button className="navBtn">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
