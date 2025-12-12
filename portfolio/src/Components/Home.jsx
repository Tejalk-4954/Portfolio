// src/components/Home.jsx
import React, { useEffect } from 'react';
import Typed from "typed.js";
import SocialMedia from './SocialMedia';

const Home = () => {
    useEffect(() => {
        const options = {
            strings: ['Backend Developer', 'Frontend Developer', 'Full Stack Developer'],
            typeSpeed: 70,
            backSpeed: 70,
            backDelay: 1000,
            loop: true,
        };

        const typed = new Typed('.multiple-text', options);

        return () => {
            typed.destroy();
        };
    }, []); 

    return (
        <section className="home" id="home">
            <div className="home-content">
                <h3>Hi, I Am</h3>
                <h1>Tejal Kavthe</h1>
                <h3>And I'm a <span className="multiple-text"></span></h3>
                <p>I'm a passionate Full Stack Developer with hands-on experience in building scalable web applications using Java, Spring Boot, MySQL, HTML, CSS, and JavaScript. I specialize in developing robust backend APIs and creating responsive, user-friendly frontend interfaces. I enjoy working across the full development lifecycle—from designing databases and writing clean, efficient backend code to crafting engaging user interfaces. I'm always eager to learn new technologies and take on challenges that help me grow as a developer</p>
                <SocialMedia />
                <a href="/Tejal__kauthe_resume.pdf" download="tejal__kauthe_resume.pdf" className="btn">Download Resume</a>
            </div>
            
            <div className="home-img">
                <img src="src/assets/1.jpg" alt="Anjali Barkule" />
            </div>
        </section>
    );
};

export default Home;