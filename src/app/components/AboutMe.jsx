"use client";
import React, { useTransition, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TabButton from "./TabButton";
import EducationTab from "./EducationTab";
import ExperienceTab from "./CourseWorkTab";
import TechTab from "./TechTab"
import ExperienceTimeline from "./ExperienceTimeline";
const TAB_INFO = [
    {
        title: "Skills",
        id: "skills",
        content: <TechTab />
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
                <div id="experience">
                    <ExperienceTimeline />
                </div>                <div className="mt-5 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-5xl font-bold text-white mb-4">About me</h2>
                    <p className="text-[#CCCCCC] lg:text-lg font-body">
                        Hi, I am <span className="text-white">Sohan</span>, and I&apos;m currently working my first co-op as a <span className="text-white">Technical Systems Analyst </span>
                        at <span className="text-white"> RBC</span>, where I am working on <span className="text-white">mainframe systems</span>.
                        My specialty lies in designing the <span className="text-white">user experience</span> and <span className="text-white">architecture</span> of software.
                        I find it fascinating how seemingly <span className="text-white">random bits of information can come together to form a complete story</span>.
                        I&apos;m always eager to learn and share insights with others. I believe that <span className="text-white">every conversation holds value</span>,
                        and I&apos;d love to connect. You can reach out to me on LinkedIn, email, or Discord.
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
