import React from "react";
import "./Skills.css";

const skillsData = [
  { name: "JAVA", level: 95 },
  { name: "MYSQL", level: 90 },
  { name: "SPRINGBOOT", level: 80 },
  { name: "JAVASCRIPT", level: 85 },
  { name: "REACT.JS", level: 85 },
];

export default function Skills() {
  return (
       <section className="skills" id="skills">
    <div className="skills">
       <h2 className="heading">Skills</h2>

      {skillsData.map((skill, index) => (
        <div className="skill-row" key={index}>
          
          {/* LEFT — SKILL NAME */}
          <span className="skill-name">{skill.name}</span>

          {/* MIDDLE — BAR */}
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: '${skill.level}%' }}
            ></div>
          </div>

          {/* RIGHT — PERCENTAGE */}
          <span className="percent-tag">{skill.level}%</span>
        </div>
      ))}
    </div>
    </section>
  );
}