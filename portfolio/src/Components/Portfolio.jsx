// src/components/Portfolio.jsx
import React from 'react';
import { FaUpRightFromSquare } from 'react-icons/fa6';


const projectImages = ["src/assets/7.webp", "src/assets/7.webp", "src/assets/7.webp", "src/assets/7.webp", "src/assets/7.webp", "src/assets/7.webp"];

const Portfolio = () => {
    return (
        <section className="portfolio" id="portfolio">
            <h2 className="heading">Latest <span>Projects</span></h2>
            <div className="portfolio-container">
                {projectImages.map((src, index) => (
                    <div className="portfolio-box" key={index}>
                        <img src={src} alt={`Project ${index + 1}`} />
                        <div className="portfolio-layer">
                            <h4>Web Design</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium molestias officia incidunt. Aliquid quae voluptatibus asperiores, nam molestias consectetur sequi laborum vel. Magni tempore ab, ex rerum quibusdam tempora veritatis?</p>
                            <a href="#"><FaUpRightFromSquare /></a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;