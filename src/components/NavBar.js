import React, { useState } from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";

// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");

function NavBar() {
  const [active1, setActive] = useState(false);
  // const [active2, setActive2] = useState(false);
  const mobileMenu = () => {
    // hamburger.classList.toggle("active");
    // navMenu.classList.toggle("active");
    setActive(!active1);
    console.log(active1);
  };

  const closeMenu = () => {
    // hamburger.classList.remove("active");
    // navMenu.classList.remove("active");
    setActive(false);
  };
  return (
    <div className="navbar">
      <div className="nav-menu">
        <div className={active1 ? "active1 link-list" : "link-list"}>
          <li onClick={() => closeMenu()}>
            <Link className="nav-links" to="/Bubble-Sort">
              Bubble
            </Link>
          </li>
          <li onClick={() => closeMenu()}>
            <Link className="nav-links" to="/Selection-Sort">
              Selection
            </Link>
          </li>
          <li onClick={() => closeMenu()}>
            <Link className="nav-links" to="/Insertion-Sort">
              Insertion
            </Link>
          </li>
          <li onClick={() => closeMenu()}>
            <Link className="nav-links" to="/Merge-Sort">
              Merge
            </Link>
          </li>
          <li onClick={() => closeMenu()}>
            <Link className="nav-links" to="/Quick-Sort">
              Quick
            </Link>
          </li>
        </div>
      </div>

      <div className="icons">
        <Link to="/">
          <img
            className="home-icon"
            id="hamburger"
            src={require("../Images/home.png")}
            alt="home-icon"
          />
        </Link>
        <div
          className={active1 ? "hamburger active" : "hamburger"}
          onClick={() => mobileMenu()}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
