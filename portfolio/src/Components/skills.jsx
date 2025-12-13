import React from 'react';
import './Skills.css'; // Make sure to import the CSS file

// --- 1. Linear Progress Bar Component (for Technical Skills) ---
const TechnicalSkillBar = ({ name, percent }) => {
    return (
        <div className="technical-skill-item">
            <div className="technical-skill-name">
                <span>{name}</span>
                <span>{percent}%</span>
            </div>
            <div className="progress-bar-container">
                <div
                    className="progress-bar"
                    style={{ width: '${percent}%' }}
                >
                    {/* The percentage text is handled by the name span to match the image */}
                </div>
            </div>
        </div>
    );
};

// --- 2. Circular Progress Bar Component (for Professional Skills) ---
const CircularSkillGauge = ({ name, percent }) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100) * circumference;

    return (
        <div className="circular-skill-item">
            <div className="circular-progress-bar">
                <svg width="100%" height="100%" viewBox="0 0 120 120">
                    {/* Background Circle */}
                    <circle
                        className="circle-bg"
                        cx="60"
                        cy="60"
                        r={radius}
                    />

                    {/* Progress Circle */}
                    <circle
                        className="circle-progress"
                        cx="60"
                        cy="60"
                        r={radius}
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                    />
                </svg>
                {/* Percentage Text */}
                <div className="progress-text">{percent}%</div>
            </div>
            <div className="circular-skill-name">{name}</div>
        </div>
    );
};

// --- 3. Main Skills Page Component ---
const Skills = () => {
    // Data structures matching the image
    const technicalSkills = [
        { name: "HTML5", percent: 90 },
        { name: "CSS3", percent: 80 },
        { name: "Javascript", percent: 85 },
        { name: "REACT.JS", percent: 80 },
        { name: "JAVA", percent: 90 },
    ];

    const professionalSkills = [
        { name: "Creativity", percent: 90 },
        { name: "Communication", percent: 85 },
        { name: "Problem Solving", percent: 75 },
        { name: "Teamwork", percent: 85 },
    ];

    return (
        <section className="skills" id="skills">
        <div className="skills-container">
            <h2 className="heading">My <span>Skills</span></h2>
            <div className="skills-content">
                {/* Technical Skills Section */}
                <div className="skills-section technical-skills-section">
                    <h2 className="section-title">Technical Skills</h2>
                    {technicalSkills.map((skill) => (
                        <TechnicalSkillBar
                            key={skill.name}
                            name={skill.name}
                            percent={skill.percent}
                        />
                    ))}
                </div>

                {/* Professional Skills Section */}
                <div className="skills-section professional-skills-section">
                    <h2 className="section-title">Professional Skills</h2>
                    <div className="professional-skills-grid">
                        {professionalSkills.map((skill) => (
                            <CircularSkillGauge
                                key={skill.name}
                                name={skill.name}
                                percent={skill.percent}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Skills;