import './App.css';
import Homepage from './componets/homepage';
// import Explorer from './componets/Explorer';
import About from './componets/about';
import Experiences from './componets/experiences';
import { useCallback, useEffect, useRef, useState } from 'react';
import Explorer from './componets/explorer';
import ActiveTabs from './componets/activeTabs';
import ContactForm from "./componets/contactMe"
import SearchBarInput from './componets/searchBarInput';
import { IMAGEEXTENSIONS } from './componets/Constants';
import Bottom from './componets/bottom';

function App() {
    const [activeSection, setActiveSection] = useState('Home');
    const [activeTabs, setActiveTabs] = useState(['Home'])
    const [searchBar, setSearchBar] = useState(false);

    let HomeRef = useRef();
    let AboutRef = useRef();
    let ExperienceRef = useRef();
    let ContactRef = useRef();


    const refs = {
        'Home': HomeRef,
        'About': AboutRef,
        'Experience': ExperienceRef,
        'Contact': ContactRef
    }

    const SwitchTabs = useCallback((section) => {
        setActiveSection(section)
        if (!activeTabs.includes(section)) {
            setActiveTabs(prevstate => [...prevstate, section])
        }
    });

    const deleteSection = useCallback((section) => {
        let newActiveTabs = activeTabs.filter((tab) => section !== tab);
        setActiveTabs(newActiveTabs);
        if (newActiveTabs.length == 0) {
            setActiveSection(null)
        }
        setActiveSection(newActiveTabs[newActiveTabs.length - 1]);
    })


    const handleVisibilityChange = useCallback(() => {
        if (document.visibilityState === 'hidden') {
            document.title = "Come Back🙏";
        } else {
            document.title = 'Yogesh Malkani';
        }
    })

    const handleKeyPress = useCallback((event) => {
        if (event.key === 's') {
            setSearchBar(!searchBar)
        }
    })

    const handleMouseDown = useCallback((e) => {
        if (e.target.className.length > 0 && (e?.target?.className?.includes('searchResult'))) {
            SwitchTabs(e.target.getAttribute('data-file'));
        }
        if (e.target.className.length > 0 && !e?.target?.className?.includes('searchInput')) {
            setSearchBar(false)
        }
    })

    useEffect(() => {
        document.addEventListener("keypress", handleKeyPress);
        document.onmousedown = handleMouseDown;
        document.addEventListener('visibilitychange', handleVisibilityChange);
    }, []);

    return (
        <div id='mainDiv' className="App w-full flex flex-col bg-[#24292E] h-[100vh] overflow-y-auto ">
            <SearchBarInput setSearchBar={setSearchBar} SwitchTabs={SwitchTabs} show={searchBar} />
            <div className='flex flex-row max-sm:flex-col max-sm:w-[100%] h-full pb-[2rem]'>
                <Explorer refs={refs} SwitchTabs={SwitchTabs} activeSection={activeSection} />
                <div className='max-sm:w-[100%] flex flex-col max-sm:overflow-y-scroll '>
                    <ActiveTabs SwitchTabs={SwitchTabs} tabs={activeTabs} activeSection={activeSection} deleteSection={deleteSection} />
                    {activeSection === 'Home' && <Homepage SwitchTabs={SwitchTabs} HomeRef={HomeRef} />}
                    {activeSection === 'About' && < About AboutRef={AboutRef} />}
                    {activeSection === 'Experience' && <Experiences ExperienceRef={ExperienceRef} />}
                    {activeSection === 'Contact' && <ContactForm ContactRef={ContactRef} />}
                    {activeSection === null && <div className=''></div>}
                    {IMAGEEXTENSIONS.some(extension => activeSection?.includes(extension)) && <div className='flex flex-row gap-5 px-10 flex-1 max-sm:flex-col mt-10 items-center w-[80vw] h-full'>
                        <img loading='lazy' className='w-[20rem] m-auto' src={activeSection}></img>
                    </div>}
                </div>
            </div>
            <Bottom />

        </div >
    );
}

export default App;
