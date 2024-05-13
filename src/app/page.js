"use client"
import Image from "next/image";;
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import FooterSec from "./components/FooterSec";
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-main-background bg-cover bg-fixed scroll-smooth">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-24 py-4">
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

