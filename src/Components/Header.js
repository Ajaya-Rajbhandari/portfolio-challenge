import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import styles from "../Styles/Header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className="logo">
        <Link to="/">Ajaya Rajbhandari</Link>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
