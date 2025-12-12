// src/App.jsx
import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Skills from './Components/skills';
import Schema from './Components/Validations';
import './index.css';
import './App.css'; // Import the main CSS

function App() {
    // Note: The ScrollReveal logic from the original JS is typically replaced 
    // in React by libraries like 'react-scroll-reveal' or 'react-intersection-observer'.
    // For this conversion, we're focusing on the core component structure.

    return (
        <>
            <Navbar></Navbar>
            <main>
                <Home></Home>
                <About></About>
                <Services></Services>
                <Skills></Skills>
                <Portfolio></Portfolio>
                <Contact></Contact>
            </main>
            <Footer></Footer>
        </>
    );
}

export default App;