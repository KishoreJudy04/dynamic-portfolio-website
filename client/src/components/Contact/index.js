import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./index.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      from_message: message,
    };

    emailjs
      .send(
        "service_44khg3s",
        "template_te4csr8",
        templateParams,
        "lz8Gw0ROQJUNWmf3h"
      )
      .then((response) => {
        alert("Thank You! Message has been sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">
          Contact <span className="accent-text">Me</span>
        </h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="info-title">Let's work together!</h3>
            <p className="info-text">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Whether you have a
              question or just want to say hi, feel free to reach out!
            </p>
            <div className="social-links">
              <button
                type="button"
                className="social-button"
                onClick={() =>
                  window.open("https://github.com/KishoreJudy04", "_blank")
                }
                aria-label="GitHub"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="Logo"
                  width="30"
                />
              </button>
              <button
                type="button"
                className="social-button"
                onClick={() => window.open("https://linkedin.com", "_blank")}
                aria-label="LinkedIn"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  alt="Logo"
                  width="30"
                />
              </button>
              <button
                type="button"
                className="social-button"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/kishore_judy_04/",
                    "_blank"
                  )
                }
                aria-label="Instagram"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
                  alt="Logo"
                  width="30"
                />
              </button>
              <button
                type="button"
                className="social-button"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/profile.php?id=100040365094247&sk=about",
                    "_blank"
                  )
                }
                aria-label="Facebook"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                  alt="Logo"
                  width="30"
                />
              </button>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Enter Your Message"
                required
                rows="5"
              />
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
            <p className="form-note">
              Note: If the form doesn't work, feel free to contact me directly
              via LinkedIn.
            </p>
          </form>
        </div>
        <footer className="footer">
          <p>© 2025 Kishore. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
