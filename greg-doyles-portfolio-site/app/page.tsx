'use client'

import WelcomeCard from './components/WelcomeCard'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ContactInfoPage from './pages/ContactInfoPage'
import ResumePage from './pages/ResumePage'
import NavBar from './components/NavBar'
import React from 'react'

export default function Home() {
  const [showHomePage, setShowHomePage] = React.useState(true);
  const [showResumePage, setShowResumePage] = React.useState(false)
  const [showProjectsPage, setShowProjectsPage] = React.useState(false);
  const [showContactPage, setShowContactPage] = React.useState(false);

  function handlePageSwitchEvent(pageString: string) {
    
    setShowHomePage(false);
    setShowResumePage(false);
    setShowProjectsPage(false);
    setShowContactPage(false);

    if (pageString === 'homePage') {
      setShowHomePage(true);
    } else if (pageString === 'resumePage') {
      setShowResumePage(true)
    } else if (pageString === 'projectsPage') {
      setShowProjectsPage(true)
    } else if (pageString === 'contactPage') {
      setShowContactPage(true);
    }
  }
  return (
    <main>
      <div className="window">
        <NavBar pageSwitchEvent={handlePageSwitchEvent}></NavBar>
        <div className='navBarPadding'></div>
        <div>
          { showHomePage ? <HomePage /> : null }
          { showProjectsPage ? <ProjectsPage /> : null }
          { showContactPage ? <ContactInfoPage /> : null }
          { showResumePage ? <ResumePage /> : null }
        </div>
      </div>
    </main>
  )
}
