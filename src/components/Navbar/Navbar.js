import React, { useState } from "react";
import { motion } from "framer-motion"
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg"

import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
            >
    <Link to="/" className="title"> 
    <img src={logo} width={60} title="ESTACION CAFE"></img>
    </Link>
    </motion.div>
    <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <ul className={menuOpen ? "open" : ""}>
      <li>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
            >
        <NavLink to="/">Home</NavLink>
        </motion.div>
      </li>
      <li>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
            >
        <NavLink to="/menu">Menu</NavLink>
        </motion.div>
      </li>
      <li>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
            >
        <NavLink to="/contact">Contact</NavLink>
        </motion.div>
      </li>
    </ul>

  </nav>
);
};


export default Navbar;
