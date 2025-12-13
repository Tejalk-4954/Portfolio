// src/components/Services.jsx
import React from 'react';
import { FaDesktop, FaServer, FaDatabase } from 'react-icons/fa';


const servicesData = [
    {
        icon: FaDesktop,
        title: "Frontend Developement",
        description: "I build modern, responsive, and user-focused web interfaces that turn ideas into engaging digital experiences. As a frontend developer, I specialize in creating clean, efficient, and scalable UI solutions that look great and perform smoothly across all devices and browsers,I design and develop intuitive, responsive frontends that bring products to life. With a strong focus on usability, performance, and modern web standards, I create interfaces that not only look good but feel effortless to use."
    },
    {
        icon: FaServer,
        title: "Backend Developement",
        description: "I develop secure,scalable, and high-performance backend systems that power modern web applications. As a backend developer, I focus on building robust server-side architectures, efficient APIs, and reliable databases that ensure smooth data flow and application stability.I build secure, scalable, and high-performance backend systems using Spring Boot, designed to support modern web and enterprise applications.I focus on creating clean,maintainable server-side architectures with well-structured APIs and reliable data handling."
    },
    {
        icon: FaDatabase,
        title: "Database Management",
        description: "I design and manage efficient and reliable relational databases using MySQL. This includes creating optimized schemas, writing complex SQL queries, setting up relationships, performing data migrations, and ensuring secure data storage and access for backend applications.I follow best practices to ensure databases remain efficient, secure, and scalable as applications grow. Whether working with a small application or a large-scale system, I deliver database solutions that are reliable, maintainable, and performance-driven."
    },
];

const Services = () => {
    return (
        <section className="services" id="services">
            <h2 className="heading">My <span>Services</span></h2>
            <div className="services-container">
                {servicesData.map((service, index) => (
                    <div className="services-box" key={index}>
                        <service.icon />
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;