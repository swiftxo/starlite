"use client";
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';
import { motion, useInView, userInView } from "framer-motion";



const projectsInfo = [
    {
        id:1,
        title:"My Portfolio",
        description: "I'll expand",
        image:"/images/placeholder.jpeg",
        tag:["All", "Web"],
        gitUrl: "/",
        previewUrl:"/",
    },
    {
        id:2,
        title:"Futurebound: A web blog",
        description: "I'll expand",
        image:"/images/placeholder.jpeg",
        tag:["All", "Web","Data"],
        gitUrl: "/",
        previewUrl:"/",
    },
    {
        id:3,
        title:"Connect 4 with AI",
        description: "I'll expand",
        image:"/images/placeholder.jpeg",
        tag:["All", "Python","AI"],
        gitUrl: "/",
        previewUrl:"/",
    },
    {
        id:4,
        title:"Analyzing Average Canadian Wage",
        description: "I'll expand",
        image:"/images/placeholder.jpeg",
        tag:["All", "Python","Data"],
        gitUrl: "/",
        previewUrl:"/",
    },
    {
        id:5,
        title:"Student Sphere DB",
        description: "I'll expand",
        image:"/images/placeholder.jpeg",
        tag:["All", "Python","Data"],
        gitUrl: "/",
        previewUrl:"/",
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