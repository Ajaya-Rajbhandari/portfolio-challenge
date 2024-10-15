import React from "react";
import styles from "../Styles/Home.module.css";
const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Welcome to my portfolio</h1>
      <p>
        I am a software developer with a passion for creating beautiful and
        functional websites.
      </p>
      <p>
        I have a passion for creating beautiful and functional websites. I am a
        software developer with a passion for creating beautiful and functional
        websites.
      </p>
      <button className="cta-button">View my work</button>
    </div>
  );
};

export default Home;
