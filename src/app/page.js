"use client"
import Image from "next/image";;
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import FooterSec from "./components/FooterSec";
import ContactMe from "./components/ContactMe"
import ExperienceTimeline from "./components/ExperienceTimeline";
import './globals.css'


export default function Home() {
  return (
    <main className="background-svg">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
       
        <HeroSection />

        <div id="about">
          <AboutMe />
        </div>
        
        <div id="projects">
          <ProjectSection />
        </div>
        <div id="contact">
          <EmailSection />
        </div>
        <FooterSec />
      </div>
    </main>
  );
}

