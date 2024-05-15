import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import github_icon from '../../../public/images/github_icon.svg';
import linkedin_icon from '../../../public/images/linkedin_icon.svg';
import discord_icon from '../../../public/images/discord_icon.svg';

const ContactMe = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen mt-40 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="relative z-10 text-center">
        <h5 className="text-8xl font-bold text-transparent bg-clip-text bg-custom-gradient my-4">Let's Connect!</h5>
        <p className='text-[#283a4d] mb-8 text-2xl max-w-lg mx-auto'>
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
