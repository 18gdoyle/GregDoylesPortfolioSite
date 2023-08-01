import './HomePage.css'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
    return (
        <main>
            <ProjectCard 
                title="Music Link Page"
                description="A music link page I designed using Vue 3, Vite, and Three.js"
                projectLink="https://lilacrust.com/"
                codeLink="https://github.com/18gdoyle/lilac-rust-website"
            />
        </main>
    )
  }