"use client";
import React, { useTransition, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TabButton from "./TabButton";
import EducationTab from "./EducationTab";
import ExperienceTab from "./CourseWorkTab";

const TAB_INFO = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <div className="flex flex-wrap justify-start mx-3">
                {/* Badges listed here */}
            </div>
        )
    },
    {
        title: "Education",
        id: "education",
        content: <EducationTab />
    },
    {
        title: "Relevant Course-Work",
        id: "coursework",
        content: <ExperienceTab />
    }
];

const AboutMe = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white ">
            <motion.div initial={{ opacity: 0, scale: 0.5 }} 
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }} 
                        className="md:grid md:grid-cols-2 gap-8 align-items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/laptop.png" width={600} height={600} className="-mt-20" />
                <div className="mt-5 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-5xl font-bold text-white mb-4">About me</h2>
                    <p className="text-[#283a4d] lg:text-lg">
                        👋 Hey there, I&apos;m Sohan! I am a third-year Computer Science student at Wilfrid Laurier University.
                        I specialize in Full Stack Development and AI but I am also interested in Data Analysis & UX Design. 
                        I am a huge fan of MMA and other combat sports! My favourite thing about coding is being able to build something from seemingly nothing.
                        Isn&apos;t it weird how a bunch of words and numbers combined together can make a functioning website like this? 
                        I also love being able to create compelling stories out of raw data, as once more it&apos;s fascinating how a sheet full of numbers can really tell you a lot about a subject.
                        If you find any of my projects interesting and would like to talk more, feel free to email me, add me on discord or connect with me on my LinkedIn!
                    </p>
                    <div className="flex flex-row mt-8">
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}> Technologies </TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}> Education </TabButton>
                        <TabButton selectTab={() => handleTabChange("coursework")} active={tab === "coursework"}> Relevant Courses </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_INFO.find((t) => t.id === tab).content}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutMe;
