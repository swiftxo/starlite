"use client";
import React from 'react';
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";
import Tilt from 'react-parallax-tilt';
import AboutMe from './AboutMe';
import Link from 'next/link';
import '../globals.css';
import TextSwap from 'react-text-swap';

const scrollToAboutMe = () => {
  const aboutMeElement = document.getElementById('about');
  aboutMeElement.scrollIntoView({ behavior: 'smooth' });
};

const HeroSection = () => {
  return (
    <section className="lg:py-13">

      <motion.div initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="place-self-center text-center sm:text-left justify-self-start ">
        <div className="text-[#ffffff] mb-4 text-1xl sm:text-2xl lg:text-5xl lg:leading-normal font-body">
          <span>Hey there, my name is: </span>
          <h1 className="lg:-ml-3 lg:-mt-6 lg:-my-6  text-4xl sm:text-6xl lg:text-9xl lg:leading-normal font-header">Sohan Hossain</h1>
          <span className="text-xs md:text-xl lg:text-3xl lg:leading-normal font-body">
            And I am:&nbsp;
            <span className="italic  text-xs  md:text-xl lg:text-3xl lg:leading-normal font-body">
              <TextSwap
                strings={[
                  "Growing into a versatile software engineer.",
                  "Transforming ideas into immersive designs.",
                  "Blending creativity and precision into my work.",
                  "Continuously learning and refining my craft.",
                  "A believer in  removing barriers to knowledge."
                ]}
                animationType='slideDown'
                seconds={3}
              />
            </span>
          </span>

        </div>
        <div>
          
         
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }} className="place-self-center mt-4 lg:mt-0">

        {/* Scroll Down Icon */}

        <div className="flex justify-center mt-3">
          <button onClick={scrollToAboutMe} className=" flex justify-center mb-40 p-2 rounded-full border-2 border-white hover:bg-[#AEAEAE]">
            <ArrowDownCircleIcon className="h-14 w-14 text-white hover:text-white cursor-pointer" />
          </button>
        </div>
      </motion.div>

    </section>
  );
};

export default HeroSection;
