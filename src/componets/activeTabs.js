import React from 'react'
import { VscClose } from "react-icons/vsc"
import { IMAGEEXTENSIONS } from './Constants'
import { BsImage } from 'react-icons/bs'

export default function ActiveTabs({ SwitchTabs, tabs, activeSection, deleteSection }) {
    return (
        <div className='flex flex-row w-full z-50 h-fit flex-wrap'>
            {
                tabs.map((tab) => {
                    return (
                        <div
                            key={tab}
                            className={`cursor-pointer gap-2 border-[1%] items-center   p-2 text-slate-300 flex flex-row  justify-between  ${activeSection === tab ? 'bg-[#1b1b1c] border-t  border-t-blue-600' : 'bg-[#2e3439] border-r border-r-gray-500'}`}>
                            <div
                                onClick={() => { SwitchTabs(tab) }}
                                className='flex flex-row items-center gap-2'>
                                {!IMAGEEXTENSIONS.some(extension => tab.includes(extension)) ? <img src='JsLogo.png' className='h-4'></img> : <BsImage className='text-[1rem] text-purple-200' />}
                                <p >{tab}{!IMAGEEXTENSIONS.some(extension => tab.includes(extension)) ? '.js' : ''}</p>
                            </div>
                            <VscClose onClick={() => { deleteSection(tab) }} className=' text-white font-bold text-[1.3rem] rounded-lg hover:bg-white hover:bg-opacity-10' />
                        </div>)
                })
            }
            <div className='flex-grow bg-[#1F2428]'>
            </div>
        </div>
    )
}
