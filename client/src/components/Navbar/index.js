import { useState, useEffect } from "react";
import {
  NavContainer,
  NavContent,
  Logo,
  NavLinks,
  NavLink,
  ContactButton,
  MobileToggle,
} from "./styledComponents";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavContainer>
      <NavContent>
        <Logo to="home">KISHORE</Logo>
        <NavLinks isOpen={isOpen}>
          <NavLink
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={activeSection === "home" ? "active" : ""}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={activeSection === "about" ? "active" : ""}
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={activeSection === "experience" ? "active" : ""}
            onClick={() => setIsOpen(false)}
          >
            Experience
          </NavLink>
          <NavLink
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={activeSection === "projects" ? "active" : ""}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </NavLink>
        </NavLinks>
        <ContactButton
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={() => setIsOpen(false)}
        >
          Contact Me
        </ContactButton>
        <MobileToggle onClick={() => setIsOpen(!isOpen)}>☰</MobileToggle>
      </NavContent>
    </NavContainer>
  );
};

export default Navbar;
