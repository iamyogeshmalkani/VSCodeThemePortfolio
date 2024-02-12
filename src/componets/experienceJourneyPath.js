import React from 'react';

const JourneyBar = ({ job }) => {
    return (
        <div className={`mt-2 animate-[topToBottomSlide_1.5s_forwards] text-left justify-start w-[40%] max-md:w-full  cursor-pointer   rounded-xl text-black flex flex-row max-sm:flex-col  ease-linear delay-50 bg-g-500 hover:-translate-y-1  duration-300`} >
            <div className='flex flex-col max-sm:flex-row max-sm:text-xl gap-2 text-black break-words font-bold px-5 py-10 min-w-[40%]  rounded-tl-xl rounded-bl-xl max-md:rounded-tr-xl max-md:rounded-bl-none text-2xl bg-s'>
                <p>{job.duration.start}</p>
                <hr></hr>
                <p>{job.duration.end}</p>

            </div>
            <div className='flex flex-col px-5 py-10 rounded-br-xl rounded-tr-xl max-md:rounded-bl-xl max-md:rounded-tr-none  bg-p-300 w-[50%] max-md:w-full'>
                <p className='text-2xl max-sm:text-lg text-white'>{job.company}</p>
                <p className='text-gray-200 text-sm max-sm:text-xs'>{job.title}</p>
                <div className='flex flex-row flex-wrap gap-2 mt-4 text-gray-300 text-sm' >
                    {job.skills.map((skill) => {
                        return (
                            <p key={skill.label} className='rounded-xl max-sm:text-xs text-p-300 font-semibold bg-slate-200 px-2  py-1' >{skill}</p>
                        )
                    })}
                </div>
                <p>{job.skils}</p>
            </div>
        </div>
    );
};

export default JourneyBar;