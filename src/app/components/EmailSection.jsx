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
        <section className="flex flex-col py-24 gap-4 relative">
            <div>
                <h5 className="font-header text-4xl font-bold text-white my-2">Let&apos;s Connect!</h5>
                <p className='font-body text-[#ffffff] mb-4 max-w-md'>
                    I am currently seeking internships and other work opportunities for this upcoming Winter Semester!
                    If you would like to reach out for questions or even just to say hi, feel free to shoot me an email with whatever inquiries or thoughts you may have!
                </p>
                <div className="socials flex flex-row  gap-2">
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
           
        </section>
    );
};

export default EmailSection;
