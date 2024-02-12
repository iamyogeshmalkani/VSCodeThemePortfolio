import React, { useState } from 'react'
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai"
import { ASSETS, FILES } from './Constants';
import { BsImage } from "react-icons/bs"

export default function Navbar({ refs, SwitchTabs, activeSection }) {
    const [isopen, setIsOpen] = useState(false);
    const [isAssets, setIsAssets] = useState(false)
    const [isComponents, setIsComponents] = useState(false)

    return (
        <div className='bg-[#141414]  w-[18%] max-sm:w-[100%] max-sm:text-center max-sm:relative border-r-[1px] h-[100vh] max-sm:h-fit max-sm:border-none border-r-gray-500  fixed top-0  left-0 flex flex-col  items-left px-5 max-sm:px-0 max-md:px-2 text-[white]'>
            <p
                className={`py-1  max-sm:w-[100%] max-sm:text-2xl hover:bg-white hover:bg-opacity-10 cursor-pointer flex flex-row gap-2 items-center text-[1.5vw]  w-full `} onClick={() => setIsOpen(!isopen)}>
                {isopen ? <AiOutlineDown className='animate-[fadeIn_1s_forwards] text-white max-md:text-2xl max-md:text-white' />
                    : <AiOutlineRight className='animate-[fadeIn_1s_forwards] text-white max-md:text-2xl max-md:text-white' />}src
            </p>
            {isopen &&
                <div className='animate-[fadeIn_1s_forwards] ml-6  flex flex-col flex-wrap max-sm:flex-row max-md:gap-2 max-sm:mt-2 max-sm:ml-4 text-left w-[80%] max-sm:w-[90%] '>
                    <p
                        className={`py-1  max-sm:w-[100%] max-sm:text-2xl hover:bg-white hover:bg-opacity-10 cursor-pointer flex flex-row gap-2 items-center text-[1.5vw]  w-full `} onClick={() => setIsAssets(!isAssets)}>
                        {isAssets ? <AiOutlineDown className='animate-[fadeIn_1s_forwards] text-white max-md:text-2xl max-md:text-white' />
                            : <AiOutlineRight className='animate-[fadeIn_1s_forwards] text-white max-md:text-2xl max-md:text-white' />}assets
                    </p>
                    {isAssets &&
                        <>
                            {
                                ASSETS.map((asset) => {
                                    return (
                                        <p className={`text-[1vw] flex flex-row gap-2 items-center cursor-pointer break-words  hover:bg-white hover:bg-opacity-10 max-sm:text-lg px-2 ${activeSection === asset ? 'bg-[white] bg-opacity-10' : ''} `}
                                            onClick={() => { SwitchTabs(asset) }
                                            }><BsImage className='text-sm text-purple-200' /> {asset}
                                        </p>
                                    )
                                })
                            }
                        </>
                    }
                    <p
                        className={`py-1  max-sm:w-[100%] max-sm:text-2xl hover:bg-white hover:bg-opacity-10 cursor-pointer flex flex-row gap-2 items-center text-[1.5vw]  w-full `} onClick={() => setIsComponents(!isComponents)}>
                        {isComponents ? <AiOutlineDown className='animate-[fadeIn_1s_forwards] text-white max-md:text-2xl max-md:text-white' />
                            : <AiOutlineRight className='animate-[fadeIn_1s_forwards] text-white max-md:text-2xl max-md:text-white' />}components
                    </p>

                    {isComponents && <>
                        {
                            FILES.map((file) => {
                                return (
                                    <p className={`text-[1vw]  cursor-pointer break-words hover:bg-white hover:bg-opacity-10 max-sm:text-lg px-2 ${activeSection === file ? 'bg-[white] bg-opacity-10' : ''} `} onClick={() => SwitchTabs(file)}>{file}.
                                        <span className='text-p-300'>js</span>
                                    </p>
                                )
                            })
                        }
                    </>}
                </div>}
        </div>
    )
}
