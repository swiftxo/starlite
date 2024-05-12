import React from 'react'

const ProjectTag = ({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected
    ? "text-white border-[#318CE7]" : "text-[#ADB7BE] border-slate-400 hover:border-white"
  return (
    <button className={`${buttonStyles} rounded-full border-2  px-6 py-3 text-xl cursor-pointer`}onClick= {() => onClick(name)}>
        {name}
    </button>
)
}
 
export default ProjectTag
