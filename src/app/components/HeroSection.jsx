"use client";
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";
import Link from 'next/link';
import TextTransition, { presets } from 'react-text-transition';

const phrases = [
  <span className='text-shadow'>
    a Technical Systems Analyst @&nbsp;    
    <a href="https://www.rbc.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline magnify">
      RBC
    </a>
  </span>,
  <span className='text-shadow-md'>
    a Computer Science Student @&nbsp;  
    <a href="https://www.wlu.ca" target="_blank" rel="noopener noreferrer" className="underline text-[#ff51ce] magnify">
      Laurier
    </a>
  </span>, 
  <span className='text-shadow'>growing into a versatile software engineer </span>,
  <span className='text-shadow'>well-versed in design, development, and implementation</span>,
  <span className='text-shadow'>excited to share my knowledge and insights with others</span>,  // Adjusted for length consistency
  <span className='text-shadow'>always eager to learn from others too</span>,
];

const scrollToAboutMe = () => {
  const aboutMeElement = document.getElementById('about');
  aboutMeElement.scrollIntoView({ behavior: 'smooth' });
};

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="lg:py-5 -mt-32 flex flex-col items-center justify-center min-h-screen min-w-0">

      <h1 className="lg:-mb-5 text-white text-xl sm:text-3xl lg:text-2xl space-mono">
        Hi, my name is
      </h1>
      <h2 className=" text-transparent bg-text-gradient bg-clip-text text-4xl sm:text-5xl lg:text-8xl lg:-mb-5  lg:leading-normal font-extrabold magnify">
  Sohan Hossain
</h2>

      <div className="text-[white] mb-5 text-2xl sm:text-2xl lg:text-4xl lg:leading-normal font-semibold flex flex-col sm:flex-row items-center justify-center sm:min-w-full">
        <span className="mr-2  text-shadow text-sm sm:text-2xl lg:text-4xl text-center sm:text-left">I am:</span>
        <div className="text-xs sm:text-2xl lg:text-4xl text-center sm:inline">
        <TextTransition
            springConfig={presets.default}
            direction="up" // Set the direction to 'up'
            className="text-center sm:text-left sm:inline"
          >
            {phrases[index]}
          </TextTransition>
        </div>
      </div>

      {/* Scroll Down Icon */}
      <div className="flex justify-center mt-13 w-full">
        <button onClick={scrollToAboutMe} className="flex justify-center mb-40 p-2 rounded-full border-2 border-primary-text hover:bg-custom-gradient">
          <ArrowDownCircleIcon className="h-14 w-14 text-primary-text hover:text-white cursor-pointer" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

