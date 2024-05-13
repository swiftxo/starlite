"use client";
import React from 'react';
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";
import AboutMe from './AboutMe';
import Link from 'next/link';

const scrollToAboutMe = () => {
    const aboutMeElement = document.getElementById('about');
    aboutMeElement.scrollIntoView({ behavior: 'smooth' });
};

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
          <motion.div initial= {{opacity: 0, scale:0.5}} 
          animate={{opacity:1, scale:1}}
          transition={{duration:0.5}}
          className="col-span-8 place-self-center text-center-on-phone sm:text-left justify-self-start">
              <h1 className= "text-[#ffffff] mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                  <span className="text-transparent bg-clip-text bg-custom-gradient">Hello, I&apos;m {" "}
                  </span>
                  <br></br>
                  <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'Sohan',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          'a Full Stack Dev',
          1000,
          'an UX Designer',
          1000,
          'open to work',
          1000,
          
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
              </h1>
              <div>
              <Link href="mailto:hoss1529@mylaurier.ca"target="_blank">
                  <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-custom-gradient hover:bg-slate-200 text-[#ffffff] font-bold">
                      Hire me
                  </button>
                  </Link>
                  <Link href="https://drive.google.com/file/d/132iX7LC6RNzzwO_VHCLlDwO7uwauV7Ko/view?usp=sharing"target="_blank">
                  <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4  bg-custom-gradient  hover:bg-slate-800 text-primary-text hover:text-white font-bold mt-3">
                  
                      <span className = "block bg-main-background hover:bg-custom-gradient rounded-full px-5 py-2">
                          Download CV
                      </span>
                  </button>
                  </Link>
              </div>
          </motion.div>
          <motion.div initial= {{opacity: 0, scale:0.5}} 
              animate={{opacity:1, scale:1}}
              transition={{duration:0.5}} className="col-span-4 place-self-center mt-4 lg:mt-0">
              <div className="rounded-full bg-[#18181800] w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] relative mx-auto-on-phone">
                  <Image
                  src = "/images/AVATAR.png"
                  alt = "avatar"
                  className="place-self-center absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  width = {500}
                  height = {500}
                  />
              </div>
              {/* Scroll Down Icon */}
              
          <div className="flex justify-center-on-phone mt-3">
            <button onClick={scrollToAboutMe} className="flex justify-center mb-40 p-2 rounded-full border-2 border-primary-text hover:bg-custom-gradient">
              <ArrowDownCircleIcon className="h-14 w-14 text-primary-text hover:text-white cursor-pointer"/>
            </button>
          </div>
          </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
