import './HomePage.css'
import ProjectCard from '../components/ProjectCard'
import WelcomeCard from '../components/WelcomeCard'

export default function Home() {
    return (
      <main>
        <div className="pageContainer">
            <WelcomeCard></WelcomeCard>
        </div>
      </main>
    )
  }