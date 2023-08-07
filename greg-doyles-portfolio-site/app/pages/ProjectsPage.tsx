import './ProjectsPage.css'
import ProjectCard from '../components/ProjectCard'


export default function Home() {
    return (
        <main>
            <div className='resumeSectionHeader'>
                <div className="sectionHeaderTitle">
                    Projects
                </div>
            </div>
            <div className='projectsContainer'>
                <ProjectCard 
                    title="Music Link Page"
                    description="A music link page I designed using Vue 3, Vite, and Three.js"
                    projectLink="https://lilacrust.com/"
                    codeLink="https://github.com/18gdoyle/lilac-rust-website"
                    color="white"
                    icon="musicWebsite"
                />
                <ProjectCard 
                    title="Personal Portfolio Website"
                    description="The website you are currently browsing was built using React and Next.js"
                    projectLink="https://gregdoyle.pages.dev/"
                    codeLink="https://github.com/18gdoyle/GregDoylesPortfolioSite"
                    color="white"
                    icon="personalPortfolio"
                />
            </div>
        </main>
    )
  }