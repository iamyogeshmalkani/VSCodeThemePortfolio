import React from 'react'
import { BsBell, BsGit, BsGithub } from 'react-icons/bs'

export default function Bottom() {
    let formatterText = "{} pretteir"
    return (
        <div className='pl-2 h-[2rem] fixed w-full bottom-0  flex flex-row gap-2  justify-start items-center  text-white border border-black bg-p-300'>
            <BsGithub />
            <a className='cursor-pointer text-[0.9rem]' href='https://github.com/iamyogeshmalkani/VSCodeThemePortfolio' target='_blank'>main</a>
            <BsGit className='absolute right-[22rem] font-extralight text-[0.9rem] max-md:opacity-0' />
            <p className='absolute right-[13rem] font-extralight text-[0.9rem] max-md:opacity-0'>You, 1 second ago</p>
            <p className=' absolute right-[5rem] font-extralight text-[0.9rem]'>{formatterText}</p>
            <BsBell className=' absolute right-[1rem]' />
        </div>
    )
}
