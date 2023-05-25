'use client'

import WelcomeCard from './components/WelcomeCard'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import NavBar from './components/NavBar'
import React from 'react'

export default function Home() {
  const [showHomePage, setShowHomePage] = React.useState(true);
  const [showResumePage, setShowResumePage] = React.useState(false)
  const [showProjectsPage, setShowProjectsPage] = React.useState(false);

  function handlePageSwitchEvent(pageString: string) {
    
    setShowHomePage(false);
    setShowResumePage(false);
    setShowProjectsPage(false);

    if (pageString === 'homePage') {
      setShowHomePage(true);
    }

    if (pageString === 'resumePage') {
      setShowResumePage(true)
    }

    if (pageString === 'projectsPage') {
      setShowProjectsPage(true)
    }
  }
  return (
    <main>
      <NavBar pageSwitchEvent={handlePageSwitchEvent}></NavBar>
      <div className="pageContainer">
        { showHomePage ? <HomePage /> : null }
        { showProjectsPage ? <ProjectsPage /> : null }
      </div>
    </main>
  )
}
