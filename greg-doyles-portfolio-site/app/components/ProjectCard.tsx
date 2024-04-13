import "./ProjectCard.css";
import "./ProjectCard";

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faMusic, faPaw } from "@fortawesome/free-solid-svg-icons";

export default function Home(props: any) {
  const [projectIcon] = useState(`${props.icon}`);
  return (
    <main className={`card ${props.color}`}>
      <div className="content">
        <div className="projectIcon">
          {(() => {
            if (projectIcon === "personalPortfolio") {
              return <FontAwesomeIcon className="icon" icon={faGlobe} />;
            } else if (projectIcon === "musicWebsite") {
              return <FontAwesomeIcon className="icon" icon={faMusic} />;
            } else if (projectIcon === "petWebsite") {
              return <FontAwesomeIcon className="icon" icon={faPaw} />;
            }
          })()}
        </div>
        <div className="projectText">
          <div className="flexItem">
            <p className="heading">{props.title}</p>
          </div>
          <div className="flexItem">
            <p className="para">{props.description}</p>
          </div>
          <div className="flexItem divider">
            <hr className="rounded"></hr>
          </div>
          <div className="flexItem centered projectAndCodeButtons">
            <a
              href={props.projectLink}
              target="_blank"
              className="longButton white"
            >
              <div><p className="para">The Project</p></div>
            </a>
            <a
              href={props.codeLink}
              target="_blank"
              className="longButton white"
            >
              <div><p className="para">The Code</p></div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
