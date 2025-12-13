// src/components/Portfolio/Portfolio.jsx

import React from 'react';
import { FaUpRightFromSquare } from 'react-icons/fa6'; // Assuming you kept this import

// --- 1. Project Data Structure ---
// 🛑 IMPORTANT: Update the 'imageSrc' and 'githubUrl' for YOUR projects
const projectsData = [
    { 
        id: 1,
        title: "Drainage Blockage Detection ", 
        description: "A smart drainage blockage detection and monitoring system integrated with a web application for real-time visualization and control. The web app displays sensor data, blockage alerts, and system status to enable efficient monitoring and timely maintenance actions.",
        imageSrc: "src/assets/drainage.jpg", 
        githubUrl: "http://localhost:8080/Drainage_Blockage/"
    },
    // { 
    //     id: 2,
    //     title: "Recipe Finder App", 
    //     description: "React application to search for and display various cooking recipes.",
    //     imageSrc: "src/assets/project-recipe.webp", 
    //     githubUrl: "https://github.com/yourusername/recipe-app-repo"
    // },
    // { 
    //     id: 3,
    //     title: "Personal Blog Site", 
    //     description: "A responsive blog developed with React and styled with modern CSS.",
    //     imageSrc: "src/assets/project-blog.webp", 
    //     githubUrl: "https://github.com/yourusername/blog-repo"
    // },
    // { 
    //     id: 4,
    //     title: "Task Management Tool", 
    //     description: "Simple to-do list and task tracker demonstrating state management.",
    //     imageSrc: "src/assets/project-todo.webp", 
    //     githubUrl: "https://github.com/yourusername/todo-repo"
    // },
    // Add more of your real-world projects here following the same structure
];


// --- 2. Portfolio Component ---
const Portfolio = () => {
    return (
        <section className="portfolio" id="portfolio">
            <h2 className="heading">Latest <span>Projects</span></h2>
            <div className="portfolio-container">
                
                {/* Loop through the structured project data */}
                {projectsData.map((project) => (

                    
                    <a 
                        key={project.id} // Unique key for React list rendering
                        href={project.githubUrl} // Links to the GitHub URL
                        target="_blank"          // Opens the link in a new tab
                        rel="noopener noreferrer" 
                        className="portfolio-box-link" // Class for styling the clickable area
                    >
                        <div className="portfolio-box">
                            
                            {/* Use the project's image source and title */}
                            <img src={project.imageSrc} alt={project.title} />
                            
                            <div className="portfolio-layer">
                                {/* Use the project's title and description */}
                                <h4>{project.title}</h4>
                                <p>{project.description}</p>
                                
                                {/* Visual cue that this is an external link */}
                                <FaUpRightFromSquare /> 
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;