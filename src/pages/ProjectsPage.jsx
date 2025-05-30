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
            title="Music Production Website"
            date="March 2024"
            description="An all-in-one online platform designed for music producer Lilac Rust. Built with Vue.js, the website serves as a marketplace for selling instrumentals and offers professional recording and mixing services."
            projectLink="https://lilacrust.com/"
            codeLink="https://github.com/18gdoyle/lilac-rust-recordings"
            color="white"
            icon="musicWebsite"
          />
        </div>
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
      </div>
      <div className="projectsContainer"></div>
    </main>
  );
}
