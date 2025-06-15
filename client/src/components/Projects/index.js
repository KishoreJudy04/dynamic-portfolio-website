import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import {
  ProjectsSection,
  Container,
  SectionTitle,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  TechStack,
  StackIcon,
  ProjectButtons,
  ProjectButton,
  AccentText,
} from "./styledComponents";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing my projects, skills, and experience. Built with React and styled-components.",
      image: "https://i.ibb.co/qY1rczw1/istockphoto-682084406-612x612.jpg",
      techStack: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        "https://raw.githubusercontent.com/styled-components/brand/master/styled-components.svg",
      ],
    },
  ];

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle>
          My <AccentText>Projects</AccentText>
        </SectionTitle>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.techStack.map((tech, techIndex) => (
                    <StackIcon key={techIndex}>
                      <img src={tech} alt={`Tech logo ${techIndex}`} />
                    </StackIcon>
                  ))}
                </TechStack>
                <ProjectButtons>
                  <ProjectButton
                    type="button"
                    onClick={() =>
                      window.open(
                        "https://github.com/KishoreJudy04/fullstack-project",
                        "_blank"
                      )
                    }
                    aria-label="GitHub"
                  >
                    Live Preview
                    <BsBoxArrowUpRight size={14} />
                  </ProjectButton>
                  <ProjectButton
                    type="button"
                    onClick={() =>
                      window.open(
                        "https://github.com/KishoreJudy04/fullstack-project",
                        "_blank"
                      )
                    }
                    aria-label="GitHub"
                  >
                    GitHub
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                      alt="GitHub"
                    />
                  </ProjectButton>
                </ProjectButtons>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
