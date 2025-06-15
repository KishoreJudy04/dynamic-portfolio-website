import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ContactSection,
  Container,
  SectionTitle,
  ContactContent,
  ContactInfo,
  ContactForm,
  InfoTitle,
  InfoText,
  SocialLinks,
  SocialLink,
  FormGroup,
  Label,
  Input,
  TextArea,
  SubmitButton,
  Footer,
  AccentText,
} from "./styledComponents";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const templateParams = {
    from_name: formData.name,
    reply_to: formData.email,
    message: formData.message,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");

    emailjs
      .send(
        "service_midx4nq",
        "template_nthpzii",
        templateParams,
        "lz8Gw0ROQJUNWmf3h"
      )
      .then(
        (response) => {
          console.log("Success:", response.text);
          alert("Thank You! Message has been sent successfully!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle>
          Contact <AccentText>Me</AccentText>
        </SectionTitle>
        <ContactContent>
          <ContactInfo>
            <InfoTitle>Let's work together!</InfoTitle>
            <InfoText>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Whether you have a
              question or just want to say hi, feel free to reach out!
            </InfoText>
            <SocialLinks>
              <SocialLink
                type="button"
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
              </SocialLink>
              <SocialLink
                type="button"
                onClick={() => window.open("https://linkedin.com", "_blank")}
                aria-label="LinkedIn"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  alt="Logo"
                  width="30"
                />
              </SocialLink>
              <SocialLink
                type="button"
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
              </SocialLink>
              <SocialLink
                type="button"
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
              </SocialLink>
            </SocialLinks>
          </ContactInfo>
          <ContactForm
            id="contactForm"
            name="contactForm"
            onSubmit={handleSubmit}
          >
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
                autoFocus
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
                autoFocus
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                autoComplete="off"
                required
                rows="5"
              />
            </FormGroup>
            <SubmitButton type="submit">Send Message</SubmitButton>
          </ContactForm>
        </ContactContent>
        <Footer>
          <p>© 2025 Kishore. All rights reserved.</p>
        </Footer>
      </Container>
    </ContactSection>
  );
};

export default Contact;
