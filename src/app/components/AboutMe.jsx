"use client";
import React, { useTransition, useState } from "react";
import { motion }   from "framer-motion"
import Image from "next/image";
import TabButton from "./TabButton";
import EducationTab from "./EducationTab";
import ExperienceTab from "./CourseWorkTab";

const TAB_INFO = [
    {
        title: "Skills",
        id: "skills",
        content:(
            <div>
                <div className="flex flex-wrap justify-start mx-3">
                    <img src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white" alt="C Badge" />
                    <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript Badge" />
                    <img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java Badge" />
                    <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5 Badge" />
                    <img src="https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white" alt="Markdown Badge" />
                    <img src="https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap Badge" />
                    <img src="https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white" alt="Django Badge" />
                    <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js Badge" />
                    <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJS Badge" />
                    <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next JS Badge" />
                    <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router Badge" />
                    <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React Badge" />
                    <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS Badge" />
                    <img src="https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34" alt="Firebase Badge" />
                    <img src="https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL Badge" />
                    <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB Badge" />
                    <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="Postgres Badge" />
                    <img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" alt="Figma Badge" />
                    <img src="https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white" alt="Canva Badge" />
                    <img src="https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white" alt="NumPy Badge" />
                    <img src="https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white" alt="Pandas Badge" />
                    <img src="https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black" alt="Matplotlib Badge" />
                    <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Badge" />
                    <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" alt="Git Badge" />
                    <img src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase" alt="Firebase Badge" />
                    <img src="https://img.shields.io/badge/PowerShell-%235391FE.svg?style=for-the-badge&logo=powershell&logoColor=white" alt="PowerShell Badge" />
                    <img src="https://img.shields.io/badge/Windows%20Terminal-%234D4D4D.svg?style=for-the-badge&logo=windows-terminal&logoColor=white" alt="Windows Terminal Badge" />
                    <img src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="C++ Badge" />
                    <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3 Badge" />
                    <img src="https://img.shields.io/badge/adobe-%23FF0000.svg?style=for-the-badge&logo=adobe&logoColor=white" alt="Adobe Badge" />
                    <img src="https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white" alt="Flask Badge" />
                    <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" alt="Prisma Badge" />
                </div>
            </div>
        )
    },
    {
        title: "Education ",
        id:"education",
        content: <EducationTab/>
    },
    {
        title:"Relevant Course-Work",
        id:"coursework",
        content: <ExperienceTab/>
    }
]
const AboutMe = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    return <section className="text-white ">
        <motion.div initial= {{opacity: 0, scale:0.5}} 
        animate={{opacity:1, scale:1}}
        transition={{duration:0.5}} className ="md:grid md:grid-cols-2 gap-8 align-items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src = "/images/laptop.png" width = {600} height = {600} className="-mt-20" />
            <div className="mt-5 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-5xl font-bold text-white mb-4">About me</h2>
                <p className = "text-[#283a4d] lg:text-lg">
                    👋 Hey there, I'm Sohan! Iam a third-year Computer Science student at Wilfrid Laurier University.
                     I specialize in Full Stack Development and AI but I am also interested in Data Analysis & UX Design. 
                     I am a huge fan of MMA and other combat sports! My favourite thing about coding is being able to build something about seemingly nothing. 
                     Isn’t it weird how a bunch of words and numbers combined together somehow can make a functioning website like this? 
                     I also love being able to create compelling stories out of raw data, as once more it’s fascinating how a sheet full of numbers can really tell you alot about a subject.  
                     If you find any of my projects interesting and would like to talk more, feel free to email me, add me on discord or connect with me on my LinkedIn!
                </p>
                <div className="flex flex-row mt-8">
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>{" "} Technologies</TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
                    <TabButton selectTab={() => handleTabChange("coursework")} active={tab === "coursework"}>Relevant Courses</TabButton>
                </div>
                <div className="mt-8">
                    {TAB_INFO.find((t) => t.id ===tab).content}
                </div>
            </div>
        </motion.div>
    </section>
};

export default AboutMe;