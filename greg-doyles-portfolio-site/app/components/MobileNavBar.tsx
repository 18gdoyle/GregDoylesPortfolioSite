import './MobileNavBar.css'

export default function Home({ pageSwitchEvent }: any) {
    function showResumePage() {
        pageSwitchEvent('resumePage');
        (document.getElementById('burgerMenu') as HTMLInputElement)!.checked = false;
        showOrHideMobileNavBar();
    }

    function showProjectsPage() {
        pageSwitchEvent('projectsPage');
        (document.getElementById('burgerMenu') as HTMLInputElement)!.checked = false;
        showOrHideMobileNavBar();
    }

    function showHomePage() {
        pageSwitchEvent('homePage');
        (document.getElementById('burgerMenu') as HTMLInputElement)!.checked = false;
        showOrHideMobileNavBar();
    }

    function showContactPage() {
        pageSwitchEvent('contactPage');
        (document.getElementById('burgerMenu') as HTMLInputElement)!.checked = false;
        showOrHideMobileNavBar();
    }

    function showOrHideMobileNavBar() {
        const mobNavItems = document.getElementById('menu-items');
        console.dir(mobNavItems);
        if (mobNavItems === null) {return};

        console.dir(mobNavItems.style.transform);

        if (mobNavItems.style.transform === '') {
            console.dir('test');
            mobNavItems.style.transform = 'translateX(0)'
        } else{
            mobNavItems.style.transform = '';
        }
    }

    return (
        <main>
            <ul className="menu-items" id="menu-items">
                <div className='navBarBackgroundOverlay'></div>
                <li onClick={showHomePage}><a>Home</a></li>
                <li onClick={showProjectsPage}><a>Projects</a></li>
                <li onClick={showResumePage}><a>Resume</a></li>
                <li onClick={showContactPage}><a>Contact Info</a></li>
            </ul>
            <div className="navbar">
                <div className="navbar-container container">
                    <input onClick={showOrHideMobileNavBar} type="checkbox" name="" id="burgerMenu" />
                        <div className="hamburger-lines">
                            <span className="line line1"></span>
                            <span className="line line2"></span>
                            <span className="line line3"></span>
                        </div>
                        <h1 className="logo navBarTitle">Greg Doyle</h1>
                </div>
            </div>
        </main>
    )
}