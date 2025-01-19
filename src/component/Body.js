import React from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer';
import Contact from './Contact';

const Body = () => {
  return (
    <div>
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="Skills">
        <Skills />
      </div>
     
      <div id="Projects">
        <Projects />
      </div>
      <div id="Contact">
        <Contact />
      </div>
    </div>
  );
};

export default Body;
