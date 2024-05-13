import React from 'react'
import Image from 'next/image'

const FooterSec = () => {
  return (
    <footer className="footer border z-10 border-t-slate-200 border-l-transparent border-b-transparent border-r-transparent">
        <div className="container p-12 flex justify-between">
            <Image src = {"/images/LOGO.png"} width={100} height={100}/>
            <p className="text-slate-300">Sohan Hossain 2024 all rights reserved.</p>
        </div>
    </footer>
  )
}

export default FooterSec