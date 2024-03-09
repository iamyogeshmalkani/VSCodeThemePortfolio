/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import JourneyBar from './experienceJourneyPath'
import { JOBS } from './Constants'

export default function Experiences({ ExperienceRef }) {
    return (
        <div ref={ExperienceRef} className='px-10 max-sm:px-5 animate-[fadeIn_1s_forwards] transition-all  flex flex-col gap-20 max-sm:gap-10 pt-[2rem] max-sm:pt-0 overflow-y-scroll' >
            <div className='flex max-md:flex-col max-sm:gap-[50px] justify-between'>
                {/* <Skills /> */}
                <div className=' flex flex-col flex-wrap gap-10 max-md:gap-4 w-[100%] max-md:w-[100%] float-right justify-center py-5 '>
                    <p className=' font-bold text-white'>
                        <span className='text-[2.5rem] font-bold  border-b-8 border-b-p-300'>Experiences</span>
                    </p>
                    <div className=' flex flex-row flex-wrap gap-10'>
                        {JOBS.map((job, ind) => {
                            return (
                                <>
                                    <JourneyBar ind={ind} isleft={(ind % 2) === 0} job={job} />
                                </>
                            )
                        })}
                    </div>

                </div>
            </div>


        </div >
    )
}
