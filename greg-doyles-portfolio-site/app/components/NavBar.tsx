import './NavBar.css'
import React from 'react';

export default function Home({ pageSwitchEvent }: any) {
  function showResumePage() {
    pageSwitchEvent('resumePage');
  }

  function showProjectsPage() {
    pageSwitchEvent('projectsPage');
  }

  function showHomePage() {
    pageSwitchEvent('homePage')
  }

  function showContactPage() {
    pageSwitchEvent('contactPage')
  }

  return (
    <main>
      <div className="navBar">
        <div onClick={showHomePage} className='clickableDiv navBarTitle hoverUnderlineAnimation navBarColors' >
          Greg Doyle
        </div>
        <div className='navLinks'>
          <div onClick={showResumePage} className='clickableDiv hoverUnderlineAnimation navBarColors'>
            <strong>Resume</strong>
          </div>
          <div onClick={showProjectsPage} className='clickableDiv hoverUnderlineAnimation navBarColors'>
            <strong>Projects</strong>
          </div>
          <div onClick={showContactPage} className='clickableDiv hoverUnderlineAnimation navBarColors'>
            <strong>Contact Info</strong>
          </div>
        </div>
      </div>
    </main>
  )
}