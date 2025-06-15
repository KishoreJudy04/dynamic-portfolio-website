import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import "./index.css";

const Projects = () => {
  const projects = [
    {
      title: "Dynamic Portfolio Website",
      description:
        "A personal portfolio website showcasing my projects, skills, and experience. Built with React and styled-components.",
      image: "https://i.ibb.co/qY1rczw1/istockphoto-682084406-612x612.jpg",
      techStack: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      ],
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2 className="section-title">
          My <span className="accent-text">Projects</span>
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img
                className="project-image"
                src={project.image}
                alt={project.title}
              />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-stack">
                  {project.techStack.map((tech, i) => (
                    <div className="stack-icon" key={i}>
                      <img src={tech} alt={`tech-${i}`} />
                    </div>
                  ))}
                </div>
                <div className="project-buttons">
                  <button
                    className="project-button"
                    onClick={() =>
                      window.open(
                        "https://github.com/KishoreJudy04/fullstack-project",
                        "_blank"
                      )
                    }
                  >
                    Live Preview <BsBoxArrowUpRight size={14} />
                  </button>
                  <button
                    className="project-button"
                    onClick={() =>
                      window.open(
                        "https://github.com/KishoreJudy04/fullstack-project",
                        "_blank"
                      )
                    }
                  >
                    GitHub
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                      alt="GitHub"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
