import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar-links">
      <div className="navbar-links_container">
        <p>
          <a href="#home">home</a>
        </p>
        <p>
          <a href="#about">about</a>
        </p>
        <p>
          <a href="#skills">skills</a>
        </p>
        <p>
          <a href="#projects">projects</a>
        </p>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="black"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="black"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu-container scale-up-center">
            <div className="navbar-menu-container-links">
              <p>
                <a href="#home">home</a>
              </p>
              <p>
                <a href="#about">about</a>
              </p>
              <p>
                <a href="#skills">skills</a>
              </p>
              <p>
                <a href="#projects">projects</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
