import React from "react";
import styles from "../Styles/SkillBar.module.css";
const SkillBar = ({ skill, level }) => (
  <div className={styles.skillBar}>
    <div className={styles.skillName}>{skill}</div>
    <div className={styles.skillLevel} style={{ width: `${level}%` }} />
  </div>
);

const Skills = () => {
  const skills = [
    { skill: "HTML", level: 95 },
    { skill: "CSS", level: 90 },
    { skill: "JavaScript", level: 85 },
    { skill: "React", level: 80 },
    { skill: "Node.js", level: 75 },
    { skill: "Express", level: 70 },
  ];
  return (
    <div className={styles.skills}>
      <h1>My Skills</h1>
      <div className={styles.skillsList}>
        {skills.map((skill, index) => (
          <SkillBar key={index} skill={skill.name} level={skill.level} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
