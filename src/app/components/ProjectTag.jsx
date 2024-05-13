import React from 'react';

const ProjectTag = ({ name, onClick, isSelected }) => {
    // Define classes for both selected and unselected states.
    const buttonStyles = isSelected
        ? "bg-custom-gradient hover:bg-slate-800 text-white hover:text-white font-bold border-transparent"
        : "bg-main-background hover:bg-custom-gradient text-primary-text hover:text-white font-bold border-slate-400 hover:border-transparent";

    return (
        <button 
            className={`rounded-full border-2 px-6 py-3 text-xl cursor-pointer w-full sm:w-fit mt-3 ${buttonStyles}`}
            onClick={() => onClick(name)}
        >
            <span className="block rounded-full px-5 py-2">
                {name}
            </span>
        </button>
    );
}

export default ProjectTag;
