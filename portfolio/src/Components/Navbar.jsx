// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import {  FaXmark, FaAngleUp } from 'react-icons/fa6'; 


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

   
    useEffect(() => {
        const handleScroll = () => {
            let currentActive = 'home';
            const sections = document.querySelectorAll('section');
            const header = document.querySelector('.header');
            
            
            header.classList.toggle('sticky', window.scrollY > 100);

            
            sections.forEach(sec => {
                const top = window.scrollY;
                const offset = sec.offsetTop - 150; 
                const height = sec.offsetHeight;
                const id = sec.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    currentActive = id;
                }
            });
            setActiveSection(currentActive);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    
    const handleNavLinkClick = (e) => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <a href="#home" className="logo">Portfolio</a>
            <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
                <a href="#home" onClick={handleNavLinkClick} className={activeSection === 'home' ? 'active' : ''}>Home</a>
                <a href="#about" onClick={handleNavLinkClick} className={activeSection === 'about' ? 'active' : ''}>About</a>
                <a href="#services" onClick={handleNavLinkClick} className={activeSection === 'services' ? 'active' : ''}>Services</a>
                <a href="#skills" onClick={handleNavLinkClick} className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
                <a href="#portfolio" onClick={handleNavLinkClick} className={activeSection === 'portfolio' ? 'active' : ''}>Projects</a>
                <a href="#contact" onClick={handleNavLinkClick} className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
            </nav>
        </header>
    );
};

export default Navbar;