"use client";
import React from 'react';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import FooterSec from "./components/FooterSec";
import ContactMe from "./components/ContactMe";
import ExperienceTimeline from "./components/ExperienceTimeline";
import AnimatedCursor from "react-animated-cursor";

export default function Home() {
  return (
    <div className="App">
      {/* Custom Hollow Circle Cursor */}
      <AnimatedCursor
        innerSize={10} // Size of inner dot
        outerSize={35} // Increased size of outer circle
        innerScale={0}
        outerScale={2.5} // Increased scale on hover
        outerAlpha={1}
        hasBlendMode={false}
        innerStyle={{
          backgroundColor: 'white',
        }}
        outerStyle={{
          border: ' 2px  solid white',
          backgroundColor: 'transparent'
        }}
        trailingSpeed={5}
        clickables={[
          'a', 'input[type="text"]', 'input[type="email"]', 'input[type="number"]', 'input[type="submit"]', 
          'input[type="image"]', 'label[for]', 'select', 'textarea', 'button', '.link',
          'p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' // Add text elements to the clickables array
        ]}
      />

      {/* Main content */}
      <main className="relative flex min-h-screen flex-col bg-custom-gradient bg-cover bg-fixed scroll-smooth">
        <Navbar />
        <div className="container mt-10 mx-auto px-12">
          <HeroSection />
          <div id="about" className='mt-10'>
            <AboutMe />
          </div>
          <div id="experience">
            <ExperienceTimeline />
          </div>
          <div id="projects">
            <ProjectSection />
          </div>
          <div id="contact">
            <EmailSection />
          </div>
        </div>
        <FooterSec />
      </main>
    </div>
  );
}
