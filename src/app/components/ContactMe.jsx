import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import github_icon from '../../../public/images/github_icon.svg';
import linkedin_icon from '../../../public/images/linkedin_icon.svg';
import discord_icon from '../../../public/images/discord_icon.svg';
import '../globals.css';

const ContactMe = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen mt-40 relative">
      <div className="relative z-10 text-center">
        <h5 className="text-8xl text-white font-header">Let's Connect!</h5>
        <p className='font-body text-[#ffffff] mb-8 text-2xl max-w-lg mx-auto'>
          I am currently seeking internships and other work opportunities for this upcoming Fall Semester!
          If you would like to reach out for questions or even just to say hi, feel free to connect with me on my socials!
        </p>
        <div className="socials flex flex-row gap-4 justify-center">
          <Link href="https://www.github.com/swiftxo" target="_blank">
            <Image src={github_icon} alt="Github Icon" width={250} height={250} />
          </Link>
          <Link href="https://www.linkedin.com/in/sohanhossain2004/" target="_blank">
            <Image src={linkedin_icon} alt="LinkedIn Icon" width={250} height={250} />
          </Link>
          <Link href="https://www.discordapp.com/users/476464850630082580/" target="_blank">
            <Image src={discord_icon} alt="Discord Icon" width={250} height={250} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ContactMe;
