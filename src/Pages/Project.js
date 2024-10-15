import React from "react";
import styles from "../Styles/Project.module.css";
const ProjectCard = ({ title, description, technologies, link }) => (
  <div className={styles.projectCard}>
    <h3>{title}</h3>
    <p>{description}</p>
    <p>Technologies:{technologies.join(", ")}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">
      View Project
    </a>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "This is a project",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://www.google.com",
    },
    {
      title: "Project 2",
      description: "This is a project",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://www.google.com",
    },
  ];
  return (
    <div className={styles.projects}>
      <h1>My Projects</h1>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
