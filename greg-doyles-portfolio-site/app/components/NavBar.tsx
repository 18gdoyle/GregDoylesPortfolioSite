import './NavBar.css'
import MobileNavBar from './MobileNavBar';
import { render } from 'react-dom';
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

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 620;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <main>
      {(() => {
        if (width > breakpoint) {
          return(
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
          )
        } else {
          return(
            <MobileNavBar></MobileNavBar>
          )
        }
      })()}
    </main>
  )
}