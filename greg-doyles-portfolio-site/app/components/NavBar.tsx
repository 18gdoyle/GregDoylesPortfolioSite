import "./NavBar.css";
import React from "react";

export default function Home({ pageSwitchEvent }: any) {
  function showProjectsPage() {
    pageSwitchEvent("projectsPage");
  }

  function mobileShowProjectsPage() {
    showProjectsPage();
    showOrHideMobileNavBar();
  }

  function showHomePage() {
    pageSwitchEvent("homePage");
  }

  function mobileShowHomePage() {
    showHomePage();
    showOrHideMobileNavBar();
  }

  function showContactPage() {
    pageSwitchEvent("contactPage");
  }

  function mobileShowContactPage() {
    showContactPage();
    showOrHideMobileNavBar();
  }

  function showOrHideMobileNavBar() {
    const mobNavItems = document.getElementById("menu-items");
    const burgerMenuCheckBox = document.getElementById('burgerMenu') as HTMLInputElement;
    burgerMenuCheckBox.checked = !burgerMenuCheckBox.checked;
    if (mobNavItems === null) {
      return;
    }

    if (mobNavItems.style.transform === "") {
      mobNavItems.style.transform = "translateX(0)";
    } else {
      mobNavItems.style.transform = "";
    }
  }

  return (
    <main>
      <ul className="menu-items" id="menu-items">
        <div className="navBarBackgroundOverlay"></div>
        <li onClick={mobileShowHomePage}>
          <a>Home</a>
        </li>
        <li onClick={mobileShowProjectsPage}>
          <a>Past Projects</a>
        </li>
        <li onClick={mobileShowContactPage}>
          <a>Contact Info</a>
        </li>
      </ul>
      <div className="navBar">
        <div className="nav-container">
          <input
            className="checkbox"
            type="checkbox"
            name=""
            id="burgerMenu"
          />
          <div className="hamburger-lines" onClick={showOrHideMobileNavBar}>
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
        </div>
        <div className="navBarTitleContainer">
          <div
            onClick={showHomePage}
            className="clickableDiv navBarTitle hoverUnderlineAnimation navBarColors"
          >
            Greg Doyle
          </div>
        </div>
        
        <div className="navLinks">
          <div
            onClick={showProjectsPage}
            className="clickableDiv hoverUnderlineAnimation navBarColors"
          >
            <strong>Past Projects</strong>
          </div>
          <div
            onClick={showContactPage}
            className="clickableDiv hoverUnderlineAnimation navBarColors"
          >
            <strong>Contact Info</strong>
          </div>
        </div>
      </div>
    </main>
  );
}
