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
        <div onClick={showHomePage} className='clickableDiv navBarTitle hoverUnderlineAnimation navBarColors' > 
          Greg Doyle
        </div>
        <div className='navLinks'>
          <div onClick={showResumePage} className='clickableDiv hoverUnderlineAnimation navBarColors'>
            Resume
          </div>
          <div onClick={showProjectsPage} className='clickableDiv hoverUnderlineAnimation navBarColors'>
            Projects
          </div>
          <div onClick={showContactPage} className='clickableDiv hoverUnderlineAnimation navBarColors'>
            Contact Info
          </div>
        </div>
      </div>
    </main>
  )
}