import './ProjectsPage.css'
import ProjectCard from '../components/ProjectCard'


export default function Home() {
    return (
        <main>
            <div className='projectsSectionHeader'>
                <div className="sectionHeaderTitle">
                    Past Projects
                </div>
            </div>
            <div className='projectsContainer'>
                <div className='fiftyPercentOfContainer'>
                    <ProjectCard 
                        title="Pet Care Business Website"
                        description="A web application built using Vue, MongoDB, ExpressJS, and Google Firebase for authentication. This application allows users to schedule pet visits and also gives the employees of the pet care company the ability to manage those visits"
                        projectLink="https://catherines-pet-care.uk.r.appspot.com/"
                        codeLink="https://github.com/18gdoyle/catherines-pet-care"
                        color="white"
                        icon="petWebsite"
                    />
                </div>
                <div className='fiftyPercentOfContainer'>
                    <ProjectCard 
                        title="Music Link Page"
                        description="A music link page I designed using Vue 3, Vite, and Three.js"
                        projectLink="https://lilacrust.com/"
                        codeLink="https://github.com/18gdoyle/lilac-rust-website"
                        color="white"
                        icon="musicWebsite"
                    />
                </div>
            </div>
            <div className='projectsContainer'>
                <div className='fiftyPercentOfContainer'>
                    <ProjectCard 
                        title="Personal Portfolio Website"
                        description="The website you are currently browsing was built using React and Next.js"
                        projectLink="https://gregoryvincentdoyle.com/"
                        codeLink="https://github.com/18gdoyle/GregDoylesPortfolioSite"
                        color="white"
                        icon="personalPortfolio"
                    />
                </div>
            </div>
        </main>
    )
  }