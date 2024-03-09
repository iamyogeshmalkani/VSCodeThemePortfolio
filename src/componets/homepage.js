import React from 'react'
import { AiFillInstagram, AiFillLinkedin, AiOutlineWhatsApp } from "react-icons/ai"
import Typewriter from 'typewriter-effect';

export default function Homepage({ SwitchTabs, HomeRef }) {

    return (
        <div ref={HomeRef} className='flex flex-row justify-between max-sm:justify-start max-sm:flex-col'>
            <div className='px-10 max-sm:px-5  flex flex-row max-sm:flex-col   justify-between max-sm:justify-start max-sm:gap-[50px]  animate-[fadeIn_1s_forwards]  pt-[100px] max-sm:py-[20px]  max-md:mt-[5vh] max-md:mb-[5vh]'>
                <div className=' text-white w-[100%]  max-md:px-[5%] flex flex-col gap-4 text-left max-sm:w-[100%] '>
                    <p>Hi, my name is</p>
                    <p className='text-[3.5rem] font-bold  animate-[leftToRight_1.5s_forwards] '>Yogesh {''}
                        <span className='text-p-300   pt-2 overflow-x-hidden '>Malkani.</span></p>
                    <p className='text-[2.5rem] max-sm:text-2xl max-md:w-full flex flex-row  text-gray-600 animate-[leftToRight_3.5s_forwards] '>
                        <Typewriter
                            options={{
                                strings: ['Web Developer', 'Mobile Developer', 'Backend Developer'],
                                autoStart: true,
                                loop: true,
                                skipAddStyles: true
                            }}
                        />
                    </p>
                    <div className='flex gap-4'>
                        <button onClick={() => { SwitchTabs('About') }} className='p-2 flex-auto border rounded-lg text-white font-bold text-[1.2rem] hover:text-black hover:bg-white hover:delay-100' >About Me</button>

                    </div>
                    <div className='flex flex-row gap-5 mt-5 max-md:mt-3'>
                        <AiFillInstagram className='text-4xl text-gray-400 hover:text-gray-200 cursor-pointer ' onClick={() => { window.open("https://www.linkedin.com/in/yogesh-malkani/", "_blank") }} />
                        <AiFillLinkedin className='text-4xl text-gray-400 hover:text-gray-200 cursor-pointer ' onClick={() => { window.open("https://www.linkedin.com/in/yogesh-malkani/", "_blank") }} />
                        <AiOutlineWhatsApp className='text-4xl text-gray-400 hover:text-gray-200 cursor-pointer ' onClick={() => { window.open("https://api.whatsapp.com/send?phone=8860417666", "_blank") }} />
                    </div>
                </div>

            </div>
            <div className='w-[45%] max-sm:w-[100%] p-5'>
                <img loading='lazy' alt='my-pic' src='/Yogesh.jpeg' className=' p-2 mt-10 rounded-[50%] border-2 object-contain float-right max-sm:float-none max-sm:m-auto'></img>
            </div>
        </div>
    )
}
