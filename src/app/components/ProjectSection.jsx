import React from 'react'
import ProjectCard from './ProjectCard'


const projectsInfo = [
    {
        id:1,
        title:"My Portfolio",
        description: "I'll expand",
        image:"/images/placeholder.jpg",
        tag:["All", "Web"],
    },
    {
        id:2,
        title:"Futurebound: A web blog",
        description: "I'll expand",
        image:"/images/placeholder.jpg",
        tag:["All", "Web","Data"],
    },
    {
        id:3,
        title:"Connect 4 with AI",
        description: "I'll expand",
        image:"/images/placeholder.jpg",
        tag:["All", "Python","AI"],
    },
    {
        id:4,
        title:"Analyzing Average Canadian Wage",
        description: "I'll expand",
        image:"/images/placeholder.jpg",
        tag:["All", "Python","Data"],
    },
    {
        id:5,
        title:"Student Sphere DB",
        description: "I'll expand",
        image:"/images/placeholder.jpg",
        tag:["All", "Python","Data"],
    }

];

const ProjectSection = () => {
  return (
    <>
    <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsInfo.map((project) => (
        <ProjectCard 
        key={project.id}
         title ={project.title} 
         description={project.description} 
         imgUrl={project.image}
         tags = {project}/>
         ))}
    </div>
    </>
  )
}

export default ProjectSection