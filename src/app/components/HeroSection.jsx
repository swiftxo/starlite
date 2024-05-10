import React from 'react';
import Image from "next/image";
const HeroSection = () => {
  return (
   <section>
    <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
            <h1 className= "text-[#83cbff] mb-4  text-4xl lg:text-7xl font-extrabold">
                Hello, I'm Sohan
            </h1>
            <p className="text-[#ffffff] text-lg mb-6 lg:text-xl">
                I am a 3rd CS student studying at Wilfrid Laurier University. I am a huge fan of MMA and love anything combat sports related. I love listening to music and long walks on the beach
            </p>
            <div>
                <button className="px-6 py-3 rounded-full mr-4 bg-[#ffffff] hover:bg-slate-200 text-[#000000]">Hire me</button>
                <button className="px-6 py-3 rounded-full mr-4 bg-[#ffffff] hover:bg-slate-200 text-[#000000]">Download CV</button>
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