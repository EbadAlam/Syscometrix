import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import "./Menu.css";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if(!isOpen){
      const t1 = gsap.timeline();
      t1.to(".anotherBg", {
        y: "100%",
        duration:1.5,
      }).to("nav", {
        y: "0%",
      });
    } else {
      const t2 = gsap.timeline();
      t2.to("nav", {
        y: "-200%",
        stagger: 1,
      }).to(".anotherBg", {
        y: "-100%",
      });
    }
  };
  return (
    <div>
      <button onClick={toggleMenu} className="menu-toggle">
        {isOpen ? "Close" : "Menu"}
      </button>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <nav>
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={toggleMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="anotherBg"></div>
        </div>
    </div>
  );
};

export default Menu;
