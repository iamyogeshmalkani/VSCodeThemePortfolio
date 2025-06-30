/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

export default function About({ AboutRef }) {
    return (
        <div ref={AboutRef} className=' px-10 w-full animate-[fadeIn_1s_forwards]  text-white pt-[2rem] max-sm:pt-0 flex flex-col max-md:px-5 '>
            <div className=' w-full  flex items-start max-md:flex-col '>
                <div className='w-[60%] max-md:w-[100%] text-left flex flex-col gap-10 z-1'>
                    <p className='text-[2.8rem] font-bold'>
                        <span className='text-[2.5rem] font-bold  border-b-8 border-b-p-300'>About</span> Me</p>
                    <p>
                        Hey, I’m Yogesh Malkani — a software engineer with over 2 years of experience working on both web and mobile applications.
                        <br /><br />
                        I’ve been involved in building user-friendly products from scratch and enjoy every part of the process — from solving complex problems to polishing the final user experience. Lately, I’ve been exploring iOS development, and it's been an exciting journey learning how to build for Apple’s ecosystem.
                        <br /><br />
                        I’m always curious, always learning, and love turning ideas into things people can actually use.

                    </p>
                </div>
                <div className='w-[30%] m-auto max-md:w-[60%] max-md:fixed max-md:left-[15%] max-md:opacity-30 z-0'>
                    <img loading='lazy' alt='my-image' src="about.webp" className='h-full object-contain rounded-lg'></img>
                </div>
            </div>
        </div >
    )
}
