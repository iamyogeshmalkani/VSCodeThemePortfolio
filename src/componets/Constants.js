const JOBS = [
    {
        company: 'PillUp',
        duration: { start: 'May 2023', end: 'July 2023' },
        title: "Software Developer",
        skills: ['React js', 'Tailwind', 'React Native', "Node js", "Fast Api"],

    },
    {
        company: 'MIM Essay',
        title: 'Software Developer',
        duration: { start: 'Dec 2022', end: 'Mar 2023' },
        skills: ['Laravel', 'PHP', 'Saas'],
        description: 'Built RESTful Apis using Laravel that serve data to Front End. \n Integrated WATI Api for \n sending WhatsApp and Mail notifications \n to the clients.Made changes to the Databse using Laravel \n migrations.Written a Laravel Command which uses a recursive logic that \n traverse a comlicated json to calculate the percentage of \n answered questions.Made Several Responsive Web Pages for their CRM.Found new \n bugs and fixed them.'
    },
    {
        company: 'GoMechanics',
        title: 'Front End Developer',
        duration: { start: 'May 2021', end: 'Aug 2021' },
        skills: ['Vue js', 'React Js', 'Node js', 'Element UI', 'Css'],
        description: "Collaborated with the product team to understand requirements \n and made solutions for the same. Replicated their Central Dashboard(Malaysia) For INDIA with \n some 10+ new features. Used Vue js \n with Element UI for making \n Web Pages.Made a new multipage flow for their existing Car Rating Page in \n their main Website for small devices.Used React js and and pure \n HTML and CSS for making web pages."

    },
    {
        logo: '',
        company: 'Angel Ai',
        title: 'React Js Developer',
        duration: { start: 'Nov 2021', end: 'Jan 2021' },
        skills: ['React js', 'Material UI'],
        description: 'Built RESTful Apis using Laravel that serve data to Front End. \n Integrated WATI Api for \n sending WhatsApp and Mail notifications \n to the clients.Made changes to the Databse using Laravel \n migrations.Written a Laravel Command which uses a recursive logic that \n traverse a comlicated json to calculate the percentage of \n answered questions.Made Several Responsive Web Pages for their CRM.Found new \n bugs and fixed them.'
    },
    {
        company: 'Spark Foundation',
        title: 'Web Developer',
        duration: { start: 'June 2020', end: 'Aug 2020' },
        skills: ['Html', 'Css', 'Javascript', 'Bootstrap'],
        description: 'Built RESTful Apis using Laravel that serve data to Front End. \n Integrated WATI Api for \n sending WhatsApp and Mail notifications \n to the clients.Made changes to the Databse using Laravel \n migrations.Written a Laravel Command which uses a recursive logic that \n traverse a comlicated json to calculate the percentage of \n answered questions.Made Several Responsive Web Pages for their CRM.Found new \n bugs and fixed them.'
    }

]
let SKILLS = {
    "languages": [{ label: "C++", rating: "6" }, { label: "Javascript", rating: "8" }],
    "frontend": [{ label: "HTML", rating: "9" }, { label: "CSS", rating: "8" }, { label: "ReactJs", rating: "8" }],
    "backend": [{ label: "Nodejs", rating: "8" }, { label: "MySql", rating: "6" }, { label: "MongoDB", rating: "6" }]
}

let FILES = [
    "Home",
    "About",
    "Experience",
    "Contact",
    "Projects"
]
let ASSETS = [
    "contact.jpeg",
    "VsLogo.ico",
    "Yogesh.jpeg",
    "JsLogo.png"
]

let PROJECTS = [
    {
        title: "VsCodeThemePortfolio",
        description: "This is a web portfolio that is inspired by the Ui Ux of Vs Code Editor",
        image: "Project1.png",
        skills: ["React", "Tailwind Css", "Email Js"],
        link: "https://yogeshmalkani.vercel.app"
    },
    {
        title: "HealthCare App",
        description: "A cross platform mobile application that helps patients take there medicines on time.",
        image: "Project2.svg",
        skills: ["React Native"],
        link: "https://play.google.com/store/apps/details?id=com.pillup"
    },
    {
        title: "Astrology Website",
        description: "Website made for a client.",
        image: "Project3.png",
        link: "https://astrologerdeepagupta.com",
        skills: ["React Js", "Node js", "Tailwind Css", "SEO"]
    }
]

const IMAGEEXTENSIONS = ['gif', 'ico', 'png', 'jpeg', 'webp', 'jpg'];

export { JOBS, SKILLS, FILES, ASSETS, IMAGEEXTENSIONS, PROJECTS }