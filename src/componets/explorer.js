import React, { useState } from 'react'
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai"
import { ASSETS, FILES } from './Constants';
import { BsImage } from "react-icons/bs"

export default function Explorer({ refs, SwitchTabs, activeSection }) {
    const [isopen, setIsOpen] = useState(true);

    return (
        <div className='bg-[#1F2428] min-w-[16%] overflow-clip max-sm:w-[100%] max-sm:text-center max-sm:relative border-r-[1px]  max-sm:h-fit max-sm:border-none border-r-gray-500  flex flex-col  items-left px-5 max-sm:px-0 max-md:px-2 text-[white]'>
            <p
                className={`py-[0.5]  max-sm:w-[100%] text-[1.1rem] hover:bg-white hover:bg-opacity-10 cursor-pointer flex flex-row gap-2 items-center w-full `} onClick={() => setIsOpen(!isopen)}>
                {isopen ? <AiOutlineDown className='animate-[fadeIn_1s_forwards] text-white text-[1.2rem] max-md:text-white' />
                    : <AiOutlineRight className='animate-[fadeIn_1s_forwards] text-white text-[1.2rem] max-md:text-white' />}Explorer
            </p>
            <div className='animate-[fadeIn_1s_forwards] ml-2  flex flex-col flex-wrap max-sm:flex-row max-md:gap-2 max-sm:mt-2 max-sm:ml-4 text-left w-[80%] max-sm:w-[90%] '>

                {isopen &&
                    ASSETS.map((asset) => {
                        return (
                            <div className='flex flex-row gap-1 items-center'>
                                <BsImage className='h-[0.9rem] text-purple-200' />
                                <p className={`flex flex-row gap-2 items-center cursor-pointer break-words overflow-x-clip hover:bg-white hover:bg-opacity-10 text-[0.9rem] px-2 ${activeSection === asset ? 'bg-[white] bg-opacity-10' : ''} `}
                                    onClick={() => { SwitchTabs(asset) }
                                    }>{asset}
                                </p>
                            </div>

                        )
                    })
                }


                {
                    isopen && FILES.map((file) => {
                        return (
                            <div className='flex flex-row gap-1 items-center'>
                                <img className='h-[0.9rem]' src='JsLogo.png' />
                                <p className={` overflow-x-clip bg-clip-text  cursor-pointer break-words hover:bg-white hover:bg-opacity-10 text-[0.9rem] px-2 ${activeSection === file ? 'bg-[white] bg-opacity-10' : ''} `} onClick={() => SwitchTabs(file)}>{file}.
                                    <span className='text-p-300'>js</span>
                                </p>
                            </div>

                        )
                    })
                }


            </div>
        </div >
    )
}
