"use client";
import React, { useTransition, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TabButton from "./TabButton";
import EducationTab from "./EducationTab";
import ExperienceTab from "./CourseWorkTab";
import TechTab from "./TechTab";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

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
    const [bioType, setBioType] = useState("short");  // Toggle state for bio type

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    const handleBioChange = (event, newBioType) => {
        if (newBioType !== null) {
            setBioType(newBioType);  // Update the bio type based on selection
        }
    };

    const fullBio = (
        <p className="text-[#cfdbff] lg:text-lg">
            👋 Hey there, I&apos;m Sohan! I am a third-year Computer Science student at Wilfrid Laurier University, currently completing my first-ever co-op at RBC, 
            where I&apos;m working on Mainframe systems. I specialize in Full Stack Development and UX Design, but lately, I&apos;ve been exploring more AI concepts, such as fine-tuning models that predict based on long time series data (not a big fan of the gen AI hype) as well as learning more about DevOps. <br /><br />
            I&apos;m very passionate about coding, especially the engineering and architecture part of it. I love the process of identifying problems, designing system architectures and solutions, determining their feasibility, 
            and breaking it all down into manageable components. The development and implementation part is the rewarding "cherry on top" 🍒 after all the problem-solving. <br /><br />
            Aside from work and tech, I&apos;m also the Vice President of Laurier Grappling 🥋, an athletic club, where we offer co-ed and women&apos;s-only grappling sessions at affordable prices for students. I&apos;m a huge fan of MMA and combat sports, always looking to push myself physically and mentally. 
            I also love music 🎶 and enjoy tracking my listening stats. I’d love to work on a project analyzing music data! <br /><br />
            I love being exposed to new experiences and learning from them 📚. I&apos;m always eager to connect with professionals, students, or anyone—whether they&apos;re in my field or not—I would love to hear your story. 
            Feel free to connect with me on LinkedIn 🔗, or reach out via email 📧 or Discord 💬. Let&apos;s chat about jobs, tech, or anything interesting!
        </p>
    );

    const shortBio = (
        <p className="text-[#cfdbff] lg:text-lg">
            Hey, I’m Sohan! I’m a third-year Computer Science student at Wilfrid Laurier University, doing my first co-op at RBC, where I work on Mainframe systems. I focus on Full Stack Development, UX Design, and have been recently started to work on DevOps @ RBC. In my free time, I've started to play around with AI models for analyzing time series data. <br /><br />
            Outside of tech, I’m the Vice President of Laurier Grappling 🥋 and a huge fan of MMA. I also love music 🎶 and enjoy tracking my listening stats. Feel free to connect with me on LinkedIn or reach out via email 📧 or Discord 💬!
        </p>
    );

    return (
        <section className="text-white ">
            <motion.div initial={{ opacity: 0, scale: 0.5 }} 
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }} 
                        className="md:grid md:grid-cols-2 gap-8 align-items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/laptop.png" width={600} height={600} className="-mt-20" />
                <div className="mt-5 md:mt-0 text-left flex flex-col h-full">
                    <div className="flex flex-row justify-between items-center mb-4">
                        <h2 className="text-5xl font-bold text-white">About me</h2>
                        {/* Toggle button for selecting bio type */}
                        <ToggleButtonGroup
                            value={bioType}
                            exclusive
                            onChange={handleBioChange}
                            aria-label="bio type"
                            color="#ffffff"
                        >
                            <ToggleButton 
                                value="short" 
                                aria-label="short bio"
                                sx={{
                                    border: '1px solid #fff',
                                    color: '#fff',
                                    '&.Mui-selected': {
                                        backgroundColor: '#A8BCFF', // Lime green for selected
                                        color: '#ffffff',
                                    },
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        color: '#ffffff'
                                    }
                                }}
                            >
                                Not reading all that
                            </ToggleButton>
                            <ToggleButton 
                            color = "#ffffff"
                                value="full" 
                                aria-label="full bio"
                                sx={{
                                    border: '1px solid #fff',
                                    color: '#fffff',
                                    '&.Mui-selected': {
                                        backgroundColor: '#A8BCFF', // Lime green for selected
                                        color: '#ffffff',
                                    },
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        color: '#ffffff'
                                    }
                                }}
                            >
                                Yap away
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                    {/* Display bio based on selected toggle */}
                    {bioType === "full" ? fullBio : shortBio}

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
