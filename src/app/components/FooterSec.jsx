import React from 'react'
import Image from 'next/image'

const FooterSec = () => {
  return (
    <footer className="footer border z-10 border-t-slate-200 border-l-transparent border-b-transparent border-r-transparent">
        <div className="container p-12 flex justify-between">
                  <button onClick={() => {
              window.scrollTo({
                  top: 0, // Scroll to the top of the page
                  behavior: 'smooth' // Enable smooth scrolling
              });
          }} className="focus:outline-none">
        <span className='cursive-text text-5xl text-[#2b3a4e]' >sohan.tech</span>
          </button>
            <p className="text-secondary-text">Sohan Hossain 2024 all rights reserved.</p>
        </div>
    </footer>
  )
}

export default FooterSec