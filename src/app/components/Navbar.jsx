"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay  from './MenuOverlay';
const navLink = [
    {
        title:"About",
        path:"#about",
    },
    {
        title:"Projects",
        path:"#projects",
    },
    {
        title:"Contact",
        path:"#contact"
    },
]


const Navbar = () => {
    const [navbarOpen, setNavBarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto  border-custom-gradient top-0 left-0 right-0 z-10 bg-custom-gradient bg-opacity-100">
        <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                    <button onClick={() => {
                window.scrollTo({
                    top: 0, // Scroll to the top of the page
                    behavior: 'smooth' // Enable smooth scrolling
                });
            }} className="focus:outline-none">
                <span className='cursive-text text-5xl text-[#bed9ff]'>sohan.tech</span>
            </button>
        <div className = "mobile-menu block md:hidden">
            {
                !navbarOpen ? (
                    <button onClick={() => setNavBarOpen(true)} className = "flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                        <Bars3Icon className='h-5 w-5'/>
                    </button> 
                ) : (
                    <button onClick={() => setNavBarOpen(false)} className = "flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                    <XMarkIcon className='h-5 w-5'/>
                </button> 
                )
            }

        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className ="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                {
                    navLink.map((link, index) => (
                        <li key ={index}>
                            <NavLink href = {link.path} title = {link.title} />
                        </li>
                    ))
                }

            </ul>
        </div>
        </div>
        {navbarOpen ? <MenuOverlay links = {navLink} /> : null}
    </nav>
  )
}

export default Navbar