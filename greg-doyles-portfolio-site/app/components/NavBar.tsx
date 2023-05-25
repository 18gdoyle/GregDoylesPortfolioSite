import './NavBar.css'

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
        <div onClick={showHomePage} className='clickableDiv navBarTitle'>
          Greg Doyle
        </div>
        <div className='navLinks'>
          <div onClick={showResumePage} className='clickableDiv'>
            Resume
          </div>
          <div onClick={showProjectsPage} className='clickableDiv'>
            Projects
          </div>
          <div onClick={showContactPage} className='clickableDiv'>
            Contact Info
          </div>
        </div>
      </div>
    </main>
  )
}