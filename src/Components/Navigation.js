import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Styles/Navigation.module.css";
const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/project">Project</NavLink>
      <NavLink to="/skill">Skill</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
};

export default Navigation;
