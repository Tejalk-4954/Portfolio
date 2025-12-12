// src/components/About.jsx
import React from 'react';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-img">
                <img src="src/assets/2.jpg" alt="About Anjali Barkule" />
            </div>

            <div className="about-content">
                <h2 className="heading">About <span>Me</span></h2>
                <h3>Full Stack Developer</h3>
                <p>I'm a passionate Full Stack Developer with hands-on experience in building scalable web applications using Java, Spring Boot, MySQL, HTML, CSS, and JavaScript. I specialize in developing robust backend APIs and creating responsive, user-friendly frontend interfaces. I enjoy working across the full development lifecycle—from designing databases and writing clean, efficient backend code to crafting engaging user interfaces. I'm always eager to learn new technologies and take on challenges that help me grow as a developer</p>
                <a href="#" className="btn">Read More</a>
            </div>
        </section>
    );
};

export default About;