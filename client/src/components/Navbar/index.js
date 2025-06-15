import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./index.css";

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
    <nav className="nav-container">
      <div className="nav-content">
        {/* Left: Logo */}
        <div className="logo" onClick={() => setActiveSection("home")}>
          KISHORE
        </div>

        {/* Center: Desktop Nav Links */}
        <div className="nav-links">
          {["home", "about", "experience", "projects"].map((section) => (
            <Link
              key={section}
              to={section}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`nav-link ${
                activeSection === section ? "active" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>

        {/* Right: Contact + Hamburger */}
        <div className="right-group">
          <Link
            to="contact"
            className="contact-button"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            Contact Me
          </Link>
          <button
            className={`mobile-toggle ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <div className={`mobile-nav-links ${isOpen ? "open" : ""}`}>
        {["home", "about", "experience", "projects"].map((section) => (
          <Link
            key={section}
            to={section}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`nav-link ${activeSection === section ? "active" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
