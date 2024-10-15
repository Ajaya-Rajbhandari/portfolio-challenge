import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import styles from "../Styles/Header.module.css";
import { useTheme } from "../Context/ThemeContext";
const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <header className={`${styles.header} ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="logo">
        <Link to="/">Ajaya Rajbhandari</Link>
      </div>
      <Navigation />
      <button onClick={toggleTheme} className={styles.themeToggle}>
        {isDarkMode ? "☀️" : "🌙"}
      </button>
    </header>
  );
};

export default Header;
