// src/components/Services.jsx
import React from 'react';
import { FaDesktop, FaServer, FaDatabase } from 'react-icons/fa';


const servicesData = [
    {
        icon: FaDesktop,
        title: "Frontend Developement",
        description: "As a fresh Bachelor of Computer Applications graduate with hands-on internship experience, I specialize in creating visually appealing and responsive websites. My skills in HTML, CSS, JavaScript, ReactJS enable me to build dynamic user interfaces that enhance user engagement and satisfaction."
    },
    {
        icon: FaServer,
        title: "Backend Developement",
        description: "I build secure, scalable, and high-performance backends using Java(Spring Boot). From RESTful APIs and database integration to authentication, business logic, and server-side validations - I ensure your application runs smoothly behind the scenes."
    },
    {
        icon: FaDatabase,
        title: "Database Management",
        description: "I design and manage efficient and reliable relational databases using MySQL. This includes creating optimized schemas, writing complex SQL queries, setting up relationships, performing data migrations, and ensuring secure data storage and access for backend applications."
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
                        <a href="#" className="btn">Read More</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;