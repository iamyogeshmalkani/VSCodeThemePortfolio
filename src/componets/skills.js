import React from 'react'
import { SKILLS } from './Constants'

export default function Skills() {


    function SkillRow(skill) {
        return (<div className='flex flex-row text-white gap-2 w-full'>
            <p className='w-[25%] text-xl overflow-hidden whitespace-normal truncate text-ellipsis'>{skill.label}</p>
            <div className="w-[75%]  bg-white relative">
                <p className={`w-[${skill.rating}0%] h-full bg-p-300 absolute top-0 left-0`}></p>
            </div>
        </div>)
    }
    return (
        <div className='w-[40%]  max-md:w-[100%] flex flex-col gap-10'>
            <p className='text-[5rem]  text-white font-bold text-left pr-4 border-b-8 border-b-p-300 w-fit'>Skills</p>
            <div className=' flex flex-row flex-wrap gap-4 mt-10 h-fit text-left '>

                {
                    SKILLS["languages"].map((lang) => {
                        return SkillRow(lang)
                    })
                }

                {
                    SKILLS["frontend"].map((lang) => {
                        return SkillRow(lang)

                    })
                }
                {
                    SKILLS["backend"].map((lang) => {
                        return SkillRow(lang)

                    })
                }
            </div>
        </div>
    )
}
