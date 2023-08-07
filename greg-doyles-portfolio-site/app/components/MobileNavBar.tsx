import './MobileNavBar.css'

export default function Home({ pageSwitchEvent }: any) {
    function showResumePage() {
        pageSwitchEvent('resumePage');
        (document.getElementById('burgerMenu') as HTMLInputElement)!.checked = false;
    }

    function showProjectsPage() {
        pageSwitchEvent('projectsPage');
        (document.getElementById('burgerMenu') as HTMLInputElement)!.checked = false;
    }

    function showHomePage() {
        pageSwitchEvent('homePage');
        (document.getElementById('burgerMenu') as HTMLInputElement)!.checked = false;
    }

    function showContactPage() {
        pageSwitchEvent('contactPage');
        (document.getElementById('burgerMenu') as HTMLInputElement)!.checked = false;
    }

    return (
        <main className="navbar">
            <div className="navbar-container container">
                <input type="checkbox" name="" id="burgerMenu" />
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <ul className="menu-items">
                        <div className='navBarBackgroundOverlay'></div>
                        <li onClick={showHomePage}><a>Home</a></li>
                        <li onClick={showProjectsPage}><a>Projects</a></li>
                        <li onClick={showResumePage}><a>Resume</a></li>
                        <li onClick={showContactPage}><a>Contact Info</a></li>
                    </ul>
                    <h1 className="logo navBarTitle">Greg Doyle</h1>
            </div>
        </main>
    )
}