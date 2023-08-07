import './MobileNavBar.css'

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
        <main className="navbar">
            <div className="navbar-container container">
                <input type="checkbox" name="" id="" />
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <ul className="menu-items">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#food">Category</a></li>
                        <li><a href="#food-menu">Menu</a></li>
                        <li><a href="#testimonials">Testimonial</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <h1 className="logo navBarTitle">Greg Doyle</h1>
            </div>
        </main>
    )
}