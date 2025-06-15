import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import "./index.css";

const Home = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="content-wrapper">
          <div className="text-content">
            <img
              className="mobile-profile-image"
              src="https://i.ibb.co/ccxxH1Q9/20250328-173317-EDIT.jpg"
              alt="Kishore - Full Stack Developer"
            />
            <h1 className="main-heading">
              Hi, I'm <span className="accent-text">KISHORE</span>
            </h1>
            <h2 className="sub-heading">Full Stack Developer</h2>
            <p className="description"></p>
            <div className="button-group">
              <a className="resume-button" href="/resume.pdf" download>
                Download Resume
              </a>
            </div>
            <div className="social-links">
              <button
                className="social-icon-button"
                onClick={() =>
                  window.open("https://github.com/KishoreJudy04", "_blank")
                }
                aria-label="GitHub"
              >
                <FaGithub size={28} />
              </button>
              <button
                className="social-icon-button"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/kishorebk13042004/",
                    "_blank"
                  )
                }
                aria-label="LinkedIn"
              >
                <FaLinkedin size={28} />
              </button>
              <button
                className="social-icon-button"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/kishore_judy_04/?hl=en",
                    "_blank"
                  )
                }
                aria-label="Instagram"
              >
                <FaInstagram size={28} />
              </button>
              <button
                className="social-icon-button"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/profile.php?id=100040365094247&sk=about",
                    "_blank"
                  )
                }
                aria-label="Facebook"
              >
                <FaFacebook size={28} />
              </button>
            </div>
          </div>
          <div className="image-wrapper">
            <img
              className="profile-image"
              src="https://i.ibb.co/S4RTrB0y/IMG-9602-removebg-preview.png"
              alt="Kishore - Full Stack Developer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
