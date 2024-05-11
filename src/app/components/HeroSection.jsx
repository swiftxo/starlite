"use client";
import React from 'react';
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

   


const HeroSection = () => {
  return (
   <section>
    <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
            <h1 className= "text-[#ffffff] mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90">Hello, I'm  {" "}
                </span>
                <br></br>
                <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Sohan',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'a Full Stack Developer',
        1000,
        'an UX/UI Designer',
        1000,
        'unoriginal for this idea',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
            </h1>
            <p className="text-[#ffffff] text-base small:text-lg mb-6 lg:text-xl">
                I am a 3rd CS student studying at Wilfrid Laurier University. I am a huge fan of MMA and love anything combat sports related. I love listening to music and long walks on the beach
            </p>
            <div>
                <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90  hover:bg-slate-200 text-[#ffffff]">
                    Hire me
                </button>
                <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4  bg-gradient-to-br from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90  hover:bg-slate-800 text-[#ffffff] mt-3">
                    <span className = "block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                        Download CV
                    </span>
                </button>
            </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                <Image
                src = "/images/Soho.png"
                alt = "avatar"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
                width = {300}
                height = {300}
                />
            </div>
        </div>
    </div>
   </section>
  );
};

export default HeroSection