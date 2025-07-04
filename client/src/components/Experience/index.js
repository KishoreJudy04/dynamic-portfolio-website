import { Chrono } from "react-chrono";
import React from "react";
import "./index.css";

const Experience = () => {
  const items = [
    {
      title: "2023 - Present",
      cardTitle: "Full Stack Development and DSA Trainee",
      cardSubtitle: "NxtWave CCBP 4.0 Academy",
      cardDetailedText:
        "Currently learning Full Stack Development and Data Structures & Algorithms.",
    },
    {
      title: "2023 - Present",
      cardTitle: "Bachelor of Engineering in Mechanical Engineering",
      cardSubtitle: "PSG College of Technology",
      cardDetailedText:
        "Currently pursuing a Bachelor's degree in Mechanical Engineering. Involved in projects related to design and automobile.",
    },
    {
      title: "2021 - 2023",
      cardTitle: "Diploma of Mechanical Engineering",
      cardSubtitle: "VSVN Polytechnic College",
      cardDetailedText:
        "Completed the Diploma of Mechanical Engineering with a focus on design and manufacturing. Developed skills in CAD software and mechanical systems analysis.",
    },
    {
      title: "2021",
      cardTitle: "Higher Secondary Certificate",
      cardSubtitle: "SBK Boys Higher Secondary School",
      cardDetailedText:
        "Completed the Higher Secondary Certificate with a focus on science and mathematics with 86.4%.",
    },
    {
      title: "2019",
      cardTitle: "Secondary School Leaving Certificate",
      cardSubtitle: "SBK Boys Higher Secondary School",
      cardDetailedText:
        "Completed the Secondary School Leaving Certificate with a focus on science and mathematics with 80%.",
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">
          My <span className="accent-text">Experience</span> &{" "}
          <span className="accent-text">Education</span>
        </h2>
        <div className="chrono-wrapper">
          <Chrono
            items={items}
            mode="VERTICAL"
            theme={{
              primary: "#00bcd4",
              secondary: "rgb(237, 241, 7)",
              cardBgColor: "white",
              cardForeColor: "#1F2937",
              titleColor: "#1F2937",
            }}
            fontSizes={{
              cardSubtitle: "0.95rem",
              cardText: "0.9rem",
              cardTitle: "1.1rem",
              title: "0.9rem",
            }}
            cardHeight={200}
            slideShow
            hideControls
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
