// src/components/SocialMedia.jsx
import React from 'react';
import { FaInstagram, FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';


const SocialMedia = () => {
    return (
        <div className="social-media">
            <a href="https://www.instagram.com/tejalll_4954/"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/contact-tejal-kauthe/"><FaLinkedinIn /></a>
            <a href="https://github.com/Tejalk-4954"><FaGithub /></a>
            <a href="mailto:tejalkauthe11@gmail.com"><FaEnvelope /></a>
        </div>
    );
};

export default SocialMedia;