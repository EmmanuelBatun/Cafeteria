import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.jpg"
import { motion } from "framer-motion";

import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if(window.scrollY >= 50) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener("scroll", changeColor);

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <div className={color ? "header header-bg" : 'header'}>
      <div className="container">
        <div className="nav-bar">
          <Link to="/">
          <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.1,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
            >
            <img src={logo} alt="logo" width={50} />
            </motion.div>
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li onClick={handleClick}>
            <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
            > <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              </motion.div>
            </li>
            <li onClick={handleClick}>
            <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
            ><NavLink className="nav-link" to="/menu">
                Menu
              </NavLink></motion.div>
            </li>
            <li onClick={handleClick}>
            <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
            ><NavLink className="nav-link" to="/delivery">
                Delivery
              </NavLink></motion.div>
            </li>
            <li onClick={handleClick}>
            <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
            ><NavLink className="nav-link" to="/about">
                About
              </NavLink></motion.div>
            </li>
            <li onClick={handleClick}>
            <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
            ><NavLink className="nav-link" to="/contact">
                Contact
              </NavLink></motion.div>
            </li>

          </ul>

          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={20} style={{ color: "#fff" }} />
            ) : (
              <FaBars size={20} style={{ color: "#fff" }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
