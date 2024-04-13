'use client'

import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ContactInfoPage from './pages/ContactInfoPage'
import ResumePage from './pages/ResumePage'
import NavBar from './components/NavBar'
import MobileNavBar from './components/MobileNavBar'
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
        <section>
          <div id="bg-wrap">
            <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
              <defs>
                <radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5"><animate attributeName="fx" dur="68s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(255, 0, 255, 1)"></stop><stop offset="100%" stop-color="rgba(255, 0, 255, 0)"></stop></radialGradient>
                <radialGradient id="Gradient2" cx="50%" cy="50%" fx="2.68147%" fy="50%" r=".5"><animate attributeName="fx" dur="48s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(255, 255, 0, 1)"></stop><stop offset="100%" stop-color="rgba(255, 255, 0, 0)"></stop></radialGradient>
                <radialGradient id="Gradient3" cx="50%" cy="50%" fx="0.836536%" fy="50%" r=".5"><animate attributeName="fx" dur="44s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(0, 255, 255, 1)"></stop><stop offset="100%" stop-color="rgba(0, 255, 255, 0)"></stop></radialGradient>
                <radialGradient id="Gradient4" cx="50%" cy="50%" fx="4.56417%" fy="50%" r=".5"><animate attributeName="fx" dur="46s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(0, 255, 0, 1)"></stop><stop offset="100%" stop-color="rgba(0, 255, 0, 0)"></stop></radialGradient>
                <radialGradient id="Gradient5" cx="50%" cy="50%" fx="2.65405%" fy="50%" r=".5"><animate attributeName="fx" dur="50s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(0,0,255, 1)"></stop><stop offset="100%" stop-color="rgba(0,0,255, 0)"></stop></radialGradient>
                <radialGradient id="Gradient6" cx="50%" cy="50%" fx="0.981338%" fy="50%" r=".5"><animate attributeName="fx" dur="52s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(255,0,0, 1)"></stop><stop offset="100%" stop-color="rgba(255,0,0, 0)"></stop></radialGradient>
              </defs>
              <rect x="13.744%" y="1.18473%" width="100%" height="100%" fill="url(#Gradient1)" transform="rotate(334.41 50 50)"><animate attributeName="x" dur="40s" values="25%;0%;25%" repeatCount="indefinite"></animate><animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="14s" repeatCount="indefinite"></animateTransform></rect>
              <rect x="-2.17916%" y="35.4267%" width="100%" height="100%" fill="url(#Gradient2)" transform="rotate(255.072 50 50)"><animate attributeName="x" dur="46s" values="-25%;0%;-25%" repeatCount="indefinite"></animate><animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="24s" repeatCount="indefinite"></animateTransform>
              </rect>
              <rect x="9.00483%" y="14.5733%" width="100%" height="100%" fill="url(#Gradient3)" transform="rotate(139.903 50 50)"><animate attributeName="x" dur="50s" values="0%;25%;0%" repeatCount="indefinite"></animate><animate attributeName="y" dur="12s" values="0%;25%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="18s" repeatCount="indefinite"></animateTransform>
              </rect>
            </svg>
          </div>
        </section>
        <div className='backgroundOverlay'></div>
        <NavBar pageSwitchEvent={handlePageSwitchEvent}></NavBar>
        <div className='navBarPadding'></div>
        <div className="pageContent">
          {showHomePage ? <HomePage pageSwitchEvent={handlePageSwitchEvent} /> : null}
          {showProjectsPage ? <ProjectsPage /> : null}
          {showContactPage ? <ContactInfoPage /> : null}
          {showResumePage ? <ResumePage /> : null}
        </div>
      </div>
    </main>
  )
}
