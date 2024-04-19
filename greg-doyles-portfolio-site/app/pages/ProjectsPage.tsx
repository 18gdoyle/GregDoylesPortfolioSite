import "./ProjectsPage.css";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <main>
      <div className="projectsSectionHeader">
        <div className="sectionHeaderTitle">Past Projects</div>
      </div>
      <div className="projectsContainer">
        <div className="fiftyPercentOfContainer">
          <ProjectCard
            title="Musical Artist Website"
            date="April 2024"
            description="A website designed for musical artist Megan Mary. Built with Vue.js, the web application serves as a marketplace for selling merchandise and provides quick access to Megan Mary's discography on multiple streaming service."
            projectLink="https://meganmarymusic.com/"
            codeLink="https://github.com/18gdoyle/megan-mary-music"
            color="white"
            icon="musicWebsite"
          />
        </div>
        <div className="fiftyPercentOfContainer">
          <ProjectCard
            title="Music Production Website"
            date="March 2024"
            description="An all-in-one online platform designed for music producer Lilac Rust. Built with Vue.js, the website serves as a marketplace for selling instrumentals and offers professional recording and mixing services."
            projectLink="https://lilacrust.com/"
            codeLink="https://github.com/18gdoyle/lilac-rust-recordings"
            color="white"
            icon="musicWebsite"
          />
        </div>
      </div>
      <div className="projectsContainer">
        <div className="fiftyPercentOfContainer">
          <ProjectCard
            title="Personal Portfolio Website"
            date="February 2024"
            description="The website you are currently browsing was built using React and Next.js"
            projectLink="https://gregoryvincentdoyle.com/"
            codeLink="https://github.com/18gdoyle/GregDoylesPortfolioSite"
            color="white"
            icon="personalPortfolio"
          />
        </div>
        <div className="fiftyPercentOfContainer">
          <ProjectCard
            title="Pet Care Business Website"
            date="August 2023"
            description="A web application built using Vue, MongoDB, ExpressJS, and Google Firebase for authentication. This application allows users to schedule pet visits and also gives the employees of the pet care company the ability to manage those visits"
            projectLink="https://catherines-pet-care.uk.r.appspot.com/"
            codeLink="https://github.com/18gdoyle/catherines-pet-care"
            color="white"
            icon="petWebsite"
          />
        </div>
      </div>
    </main>
  );
}
