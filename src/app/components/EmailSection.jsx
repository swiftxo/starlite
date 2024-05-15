"use client";
import React, { useState } from 'react';
import github_icon from "../../../public/images/github_icon.svg";
import linkedin_icon from "../../../public/images/linkedin_icon.svg";
import discord_icon from "../../../public/images/discord_icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        };
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSONdata,
        };
        const response = await fetch(endpoint, options);
        const resData = await response.json();
        if (response.status === 200) {
            console.log('Message Sent.');
            setEmailSubmitted(true);
        }
    };

    return (
        <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div>
                <h5 className="text-4xl font-bold text-transparent bg-clip-text bg-custom-gradient my-2">Let&apos;s Connect!</h5>
                <p className='text-[#283a4d] mb-4 max-w-md'>
                    I am currently seeking internships and other work opportunities for this upcoming Fall Semester!
                    If you would like to reach out for questions or even just to say hi, feel free to shoot me an email with whatever inquiries or thoughts you may have!
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://www.github.com/swiftxo" target="_blank">
                        <Image src={github_icon} alt="Github Icon" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/sohanhossain2004/" target="_blank">
                        <Image src={linkedin_icon} alt="LinkedIn Icon" />
                    </Link>
                    <Link href="https://www.discordapp.com/users/476464850630082580/" target="_blank">
                        <Image src={discord_icon} alt="Discord Icon" />
                    </Link>
                </div>
            </div>
            <div>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="text-white block mb-2 text-md font-medium">Your Email</label>
                        <input name="email" type="email" id="email" required placeholder="type@your_email.here"
                            className="bg-[#6883a1] border border-[#e0dddd] placeholder-[#ffffffab]
                            text-gray-100 text-sm rounded-lg block w-full p-2.5" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="subject" className="text-white mb-2 block text-md font-medium">Subject</label>
                        <input name="subject" type="text" id="subject" required placeholder="Hello world! How are you?"
                            className="bg-[#6883a1] border border-[#e0dddd] placeholder-[#ffffffab]
                            text-gray-100 text-sm rounded-lg block w-full p-2.5" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor='message' className='text-white block text-md mb-2 font-medium'>
                            Message
                        </label>
                        <textarea name="message" id="message" placeholder="Sohan, I heard about your old pet ducks, tell me more!"
                            className="bg-[#6883a1] border border-[#e0dddd] placeholder-[#ffffffab]
                            text-gray-100 text-sm rounded-lg block w-full p-2.5" />

                    </div>
                    <button type="submit" className='bg-[#324f5b] hover:bg-custom-gradient text-white font-medium py-2.5 px-5 rounded-lg w-full'>
                        Send Message
                    </button>
                </form>
                {
                    emailSubmitted && (
                        <p className="text-primary-text text-2xl font-bold mt-2">Email sent successfully!</p>
                    )
                }
            </div>
        </section>
    );
};

export default EmailSection;
