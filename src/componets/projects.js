import React from 'react'
import { PROJECTS } from './Constants'
import Project from './project'

export default function Projects() {
    return (
        <div className='px-10 w-full transition-all animate-[fadeIn_1s_forwards] text-white pt-[2rem] flex flex-col max-md:px-5 '>
            <p className='text-[3.5rem] font-bold'>
                <span className='text-[3rem] font-bold  border-b-8 border-b-p-300'>Projects</span>
            </p>

            <div className='flex flex-row flex-wrap w-full justify-center gap-5 items-center mt-10'>

                {
                    PROJECTS.map((project, idx) => {
                        return (
                            <Project project={project} />
                        )
                    })
                }
            </div>
        </div>

    )
}
