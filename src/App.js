import './App.css';
import Homepage from './componets/homepage';
// import Navbar from './componets/navbar';
import About from './componets/about';
import Experiences from './componets/experiences';
import { useCallback, useEffect, useRef, useState } from 'react';
import Navbar from './componets/navbar';
import ActiveTabs from './componets/activeTabs';
import ContactForm from "./componets/contactMe"
import SearchBarInput from './componets/searchBarInput';
import { IMAGEEXTENSIONS } from './componets/Constants';

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
        'ExperienceAndSkills': ExperienceRef,
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
        <div id='mainDiv' className="App w-full flex flex-col bg-[#1b1b1c] min-h-[100vh]">
            <Navbar refs={refs} SwitchTabs={SwitchTabs} activeSection={activeSection} />
            <div className='w-[80%] ml-[18%]  max-sm:w-[100%] flex flex-col max-sm:ml-0  max-sm:overflow-y-scroll'>
                <SearchBarInput setSearchBar={setSearchBar} SwitchTabs={SwitchTabs} show={searchBar} />
                <ActiveTabs SwitchTabs={SwitchTabs} tabs={activeTabs} activeSection={activeSection} deleteSection={deleteSection} />
                {activeSection === 'Home' && <Homepage SwitchTabs={SwitchTabs} HomeRef={HomeRef} />}
                {activeSection === 'About' && < About AboutRef={AboutRef} />}
                {activeSection === 'ExperienceAndSkills' && <Experiences ExperienceRef={ExperienceRef} />}
                {activeSection === 'Contact' && <ContactForm ContactRef={ContactRef} />}
                {activeSection === null && <div className=''></div>}
                {IMAGEEXTENSIONS.some(extension => activeSection?.includes(extension)) && <img loading='lazy' className='w-[50%] m-auto' src={activeSection}></img>}

            </div>

        </div >
    );
}

export default App;
