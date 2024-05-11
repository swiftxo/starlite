import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar"; 
import AboutMe from "./components/AboutMe";
import ProjectSection from "./components/ProjectSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container">
      <Navbar/>
      <div class="container mx-auto px-12 py-4"><HeroSection/>
      <AboutMe/>
      <ProjectSection/>
      </div>
    </main>
  );
}
