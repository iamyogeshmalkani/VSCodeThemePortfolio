import React from 'react'
import { VscClose } from "react-icons/vsc"
import { IMAGEEXTENSIONS } from './Constants'
import { BsImage } from 'react-icons/bs'

export default function ActiveTabs({ SwitchTabs, tabs, activeSection, deleteSection }) {
    return (
        <div className='flex flex-row flex-wrap  z-50 max-sm:hidden h-fit'>
            {
                tabs.map((tab) => {
                    return (
                        <div
                            key={tab}
                            className={`cursor-pointer gap-2 border-[1%] items-center border border-l-0  border-gray-500 p-2 text-slate-300 flex flex-row  justify-between  ${activeSection === tab ? 'bg-[#1b1b1c] border-b-0  border-t-blue-600' : 'bg-[#1F2428]'}`}>
                            <div
                                onClick={() => { SwitchTabs(tab) }}
                                className='flex flex-row items-center gap-2'>
                                {!IMAGEEXTENSIONS.some(extension => tab.includes(extension)) ? <img src='JsLogo.png' className='h-4'></img> : <BsImage className='text-sm text-purple-200' />}
                                <p >{tab}{!IMAGEEXTENSIONS.some(extension => tab.includes(extension)) ? '.js' : ''}</p>
                            </div>
                            <VscClose onClick={() => { deleteSection(tab) }} className=' text-white font-bold text-xl rounded-lg hover:bg-white hover:bg-opacity-10' />
                        </div>)
                })
            }
            <div className='flex-auto border border-b border-gray-500 bg-[#1F2428]'>
            </div>
        </div>
    )
}
