"use client";
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';
import { motion, useInView, userInView } from "framer-motion";



const projectsInfo = [
    {
        id:1,
        title:"My Portfolio",
        description: "This is website you're currently at! Built with Next.JS and TailWindCSS. This website's color palette was inspired by the album \"Vertigo\" by EDEN.",
        image:"/images/projects/portfolio.png",
        tag:["All", "Web"],
        gitUrl: "https://github.com/swiftxo/starlite",
        previewUrl:"/",
    },
    {
        id:2,
        title:"Futurebound: A web blog",
        description: "A full-stack web application that was built using Django and Python. Still a WIP, when deployed it will be used for dev updates. Name also inspired by EDEN.",
        image:"/images/projects/futurebound.png",
        tag:["All", "Web","Data"],
        gitUrl: "https://github.com/swiftxo/Django-Blog",
        previewUrl:"/",
    },
    {
        id:3,
        title:"Connect 4 with AI",
        description: "Connect 4 with AI Opponent made using Python, Numpy Pygame, implementing the Minimax algorithm with alpha-beta pruning. The AI has a 97% win rate.",
        image:"/images/projects/connect4.png",
        tag:["All", "Python","AI"],
        gitUrl: "https://github.com/swiftxo/ConnectFour",
        previewUrl:"/",
    },
    {
        id:4,
        title:"Canadian Wage Analysis",
        description: "A detailed analysis of the weekly wage of Canadians from 2013-2019. Analysis done in Jupyter Notebook using Python, pandas and MatPlotLib.",
        image:"/images/projects/WAGEANALYSIS.png",
        tag:["All", "Python","Data"],
        gitUrl: "https://github.com/swiftxo/CP321",
        previewUrl:"/",
    },
    {
        id:5,
        title:"Student Sphere DB",
        description: "A comprehensive relational database system  for academic institutions using MySQL. Designed & implemented a detailed SQL schema  with 3NF.",
        image:"/images/projects/studentspheredb.png",
        tag:["All", "Python","Data"],
        gitUrl: "https://github.com/swiftxo/StudentSphereDB",
        previewUrl:"/",
    },
    {
        id:6,
        title:"Hands-On-Local",
        description: "A high-fidelity prototype for an community volunteer portal. Design process involved user interviews, journey maps & numerous design iterations.",
        image:"/images/projects/volunteer.png",
        tag:["All", "UX"],
        gitUrl: "https://www.figma.com/file/B02PckMgBwl1rvKpmMPFFO/VOLUNTEER?type=design&node-id=0%3A1&mode=design&t=syrEtknnARmaW00W-1",
        previewUrl:"https://www.figma.com/proto/B02PckMgBwl1rvKpmMPFFO/VOLUNTEER?type=design&t=7hk6eFvKBbDYblas-0&scaling=min-zoom&page-id=0%3A1&node-id=1-2",
    },
    {
        id:7,
        title:"CogniVision",
        description: "Developed a detailed prototype for a gamified UX educational app, focusing on user-centered design principles and extensive UX research.",
        image:"/images/projects/Cognivision.png",
        tag:["All", "UX"],
        gitUrl: "https://www.figma.com/design/rziv0E15Khge2I1VgVrMQJ/UX103-Deliverable-3?node-id=0%3A1&t=OwQq1lT52fkA8v9O-1",
        previewUrl:"https://www.figma.com/proto/rziv0E15Khge2I1VgVrMQJ?node-id=0-1&t=OwQq1lT52fkA8v9O-6",
    },
    {
        id:8,
        title:"CoConnect",
        description: "Developed during a 24-hour designathon, CoConnect is an extension of MyLS, designed as a low-pressure, social platform for students to connect easily.",
        image:"/images/projects/coconnect.png",
        tag:["All", "UX"],
        gitUrl: "https://www.figma.com/design/5mQqRjcoqZRz0wzaqTt6Bg/UXL-designathon?node-id=0%3A1&t=OwQq1lT52fkA8v9O-1",
        previewUrl:"https://www.figma.com/proto/5mQqRjcoqZRz0wzaqTt6Bg/UXL-designathon?node-id=64-1088&t=OwQq1lT52fkA8v9O-0&scaling=scale-down&page-id=40%3A481&starting-point-node-id=64%3A1088",
    },
    {
        id:9,
        title:"Wayfindr",
        description: "A medium-fidelity prototype of a hospital wayfinding app designed to help patients navigate complex hospital layouts in a stress-free manner.",
        image:"/images/projects/Wayfindr.png",
        tag:["All", "UX"],
        gitUrl: "https://www.figma.com/file/p57p32MWV8dXeDiEVTahNh/High-Fidelity-Prototype?type=design&node-id=0%3A1&mode=design&t=wPJWGOIuVruFvevK-1",
        previewUrl:"https://www.figma.com/proto/p57p32MWV8dXeDiEVTahNh/High-Fidelity-Prototype?node-id=1-2&starting-point-node-id=1%3A2&mode=design&t=v7Z5SM3h5oiqB2eS-1",
    }

];

const ProjectSection = () => {
    const[tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once:true });

    const handleTag = (newTag) => {
        setTag(newTag);
    };

const filterProject = projectsInfo.filter((project) => project.tag.includes(tag));
const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate:{ y:0, opacity:1 }
};
  return (
    <section>
    <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
    <div className="text-white flex flex-row justify-center items-center gap-2  py-6">
        <ProjectTag onClick={handleTag} name="All" isSelected={tag ==="All"}/>
        <ProjectTag onClick={handleTag} name="Web" isSelected={tag ==="Web"}/>
        <ProjectTag onClick={handleTag} name="Python" isSelected={tag ==="Python"}/>
        <ProjectTag onClick={handleTag} name="Data" isSelected={tag ==="Data"}/>
        <ProjectTag onClick={handleTag} name="UX" isSelected={tag ==="UX"}/>

    </div>
    <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filterProject.map((project, index) => (
        <motion.li 
        key = {index}
        variants={cardVariants}
         initial="initial" 
         animate={isInView ? "animate" : "initial"}
         transition={{ duration:0.4,delay: index*0.3}}
         >

        <ProjectCard 
        key={project.id}
         title ={project.title} 
         description={project.description} 
         imgUrl={project.image}
         tags = {project}
         gitUrl ={project.gitUrl}
         previewUrl={project.previewUrl}/>
        </motion.li>

         ))}
    </ul>
    </section>
  )
}

export default ProjectSection