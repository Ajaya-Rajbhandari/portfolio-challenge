import React from "react";
import styles from "../Styles/About.module.css";
import profileImage from "../Assets/ChangeIsComing.jpg";
const About = () => {
  return (
    <div className={styles.about}>
      <h1>About Me</h1>
      <div className={styles.content}>
        <img src={profileImage} alt="Profile" className={styles.profileImage} />
        <div className={styles.bio}>
          <p>
            Hello! I'm [Your Name], a passionate web developer with [X] years of
            experience in creating responsive and user-friendly websites.
          </p>
          <p>
            My journey in web development started [brief background]. I
            specialize in [your main skills/technologies], and I'm always eager
            to learn new technologies and improve my skills.
          </p>
          <p>When I'm not coding, you can find me [your hobbies/interests].</p>
        </div>
      </div>
    </div>
  );
};

export default About;
