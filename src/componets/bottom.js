import React from 'react'
import { BsGit, BsGithub } from 'react-icons/bs'

export default function Bottom() {
    return (
        <div className='pl-2 h-[2rem] fixed w-full bottom-0 bg-[#24292E] flex flex-row gap-2  justify-start items-center  text-white border border-black'>
            <BsGithub />
            <a className='cursor-pointer' href='https://github.com/iamyogeshmalkani/VSCodeThemePortfolio' target='_blank'>main</a>
        </div>
    )
}
