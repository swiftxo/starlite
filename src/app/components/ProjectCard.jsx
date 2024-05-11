import React from 'react'

const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div>
        <div className="h-52 md:h-72 rounded-t-xl" style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}>
            <div className="text-white rounded-b-xl">
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard