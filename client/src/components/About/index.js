import React from "react";
import {
  AboutSection,
  Container,
  SectionTitle,
  AboutContent,
  ImageSection,
  AboutImage,
  TextSection,
  Bio,
  SkillsTitle,
  SkillsGrid,
  SkillCard,
  SkillIcon,
  SkillName,
  Title,
  AccentText,
} from "./styledComponents";
const About = () => {
  const skills = [
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      name: "HTML5",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      name: "CSS3",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      name: "JavaScript",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      name: "React.js",
    },
    {
      icon: "https://img.icons8.com/?size=100&id=ucDmdolNWVSa&format=png&color=000000", // Example responsive icon
      name: "Responsive Design",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
      name: "Bootstrap",
    },
    {
      icon: "https://img.icons8.com/?size=100&id=c1mtVgVrrFg8&format=png&color=000000", // Example UI/UX icon
      name: "UI/UX Design",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      name: "Figma",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      name: "MongoDB",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      name: "Express.js",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      name: "Node.js",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
      name: "MySQL",
    },
    {
      icon: "https://img.icons8.com/?size=100&id=70667&format=png&color=000000",
      name: "Power BI",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      name: "Python",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      name: "C++",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      name: "Git",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      name: "GitHub",
    },
  ];

  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle>
          Why Do You <AccentText>Hire</AccentText> Me?
        </SectionTitle>
        <AboutContent>
          <ImageSection>
            <Title>About Me</Title>
            <Bio>
              I'm a Full Stack Developer who loves building clean, responsive
              web applications that solve real-world problems and deliver
              seamless user experiences.
            </Bio>
            <AboutImage
              src="https://portfolioprosite.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-image.464b6621.png&w=1920&q=100"
              alt="About"
            />
          </ImageSection>
          <TextSection>
            <SkillsTitle>Skills</SkillsTitle>
            <SkillsGrid>
              {skills.map((skill, index) => (
                <SkillCard key={index}>
                  <SkillIcon>
                    <img src={skill.icon} alt={skill.name} />
                  </SkillIcon>
                  <SkillName>{skill.name}</SkillName>
                </SkillCard>
              ))}
            </SkillsGrid>
          </TextSection>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About;
