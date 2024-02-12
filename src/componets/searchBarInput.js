import React, { useEffect, useState } from 'react'
import { LiaSearchSolid } from "react-icons/lia"
import { FILES } from './Constants';

export default function SearchBarInput({ setSearchBar, SwitchTabs, show }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [searchText, setSearchText] = useState('');
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowDown') {
                let newActiveIndex = activeIndex >= FILES.length - 1 ? 0 : activeIndex + 1;
                setActiveIndex(newActiveIndex);
            } else if (event.key === 'ArrowUp') {
                let newActiveIndex = activeIndex <= 0 ? FILES.length - 1 : activeIndex - 1;
                setActiveIndex(newActiveIndex);
            }
        };
        function handleKeyPress(event) {
            if (event.key === 'Enter') {
                document.getElementById('search' + activeIndex).click();
                setSearchBar(false);
            }
        }
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keypress', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keypress', handleKeyPress);
        };
    }, [activeIndex])


    return (
        <div className='w-[50vw] max-sm:w-[80vw] flex flex-row items-center gap-2 p-1 m-auto my-1 cursor-pointer hover:bg-white hover:bg-opacity-5 border border-slate-300 rounded-xl justify-center text-white bg-[#1b1b1c]' onClick={() => setSearchBar(true)}>
            <LiaSearchSolid className='text-2xl' />
            <p className='text-xl'>Portfolio</p>
            {show && <div className='fixed top-0  bg-[#1b1b1c] shadow-xl w-[50vw] max-sm:w-[90vw]  z-[100] border border-slate-200 rounded-lg py-3 px-2'>
                <input id='search' autoComplete='off' placeholder='search files by name' value={searchText} onChange={(e) => { setSearchText(e.target.value) }} type='text' className='searchInput text-black p-1.5 border border-blue-500 focus:outline-blue-500 w-full' />
                <div className='searchContainer mt-2'>
                    {FILES.map((file, ind) => {
                        if (file.toUpperCase().includes(searchText.toUpperCase())) {
                            return (
                                <p
                                    id={'search' + ind}
                                    key={ind}
                                    data-file={file}
                                    onClick={() => { SwitchTabs(file) }}
                                    className={`hover:bg-white hover:bg-opacity-10 searchResult text-white text-left  ${activeIndex === ind ? ' bg-white bg-opacity-10' : ''
                                        }`
                                    }
                                >
                                    {file + '.js'
                                    }
                                </p>
                            );
                        }
                    })}
                </div>

            </div >}

        </div>
    )
}
