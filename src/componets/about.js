/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

export default function About({ AboutRef }) {
    return (
        <div ref={AboutRef} className=' px-10 w-full animate-[fadeIn_1s_forwards]  text-white pt-[100px] flex flex-col max-md:px-5 '>
            <div className=' w-full  flex items-start max-md:flex-col '>
                <div className='w-[60%] max-md:w-[100%] text-left flex flex-col gap-10'>
                    <p className='text-4xl font-bold'>
                        <span className='text-4xl font-bold  border-b-8 border-b-p-300'>About</span> Me</p>
                    <p>
                        Welcome to my web portfolio! I'm Yogesh Malkani, a passionate B.Tech IT graduate with a deep interest in software development. Over the past 3 years, I have dedicated myself to Web and Mobile app development and have had the opportunity to work with 3 startups, gaining valuable experience and expanding my knowledge in various technologies.
                        <br />
                        <br />

                        As a full-stack developer, my tech stack is primarily based on JavaScript, which allows me to seamlessly work on both the front end and back end of web applications. While my strength lies in front-end development, I am continuously striving to enhance my skills in backend technologies.Currently, i am exploring android and ios development using flutter and Swift.

                    </p>
                </div>
                <div className='w-[40%] m-auto max-sm:w-[60%]'>
                    <img loading='lazy' alt='my-image' src="https://static.vecteezy.com/system/resources/previews/011/153/369/original/3d-web-developer-working-on-project-illustration-png.png" className='h-full object-contain'></img>
                </div>
            </div>
        </div >
    )
}
