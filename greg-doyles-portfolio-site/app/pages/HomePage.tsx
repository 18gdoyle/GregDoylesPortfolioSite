import "./HomePage.css";
import Skills from "../components/Skills";
import ProjectsPage from "../pages/ProjectsPage";

export default function Home({ pageSwitchEvent }: any) {
  function showContactPage() {
    pageSwitchEvent('contactPage')
  }

  function showProjectsPage() {
    pageSwitchEvent('projectsPage');
  }

  return (
    <main className="homePageContainer">
      <div className="welcomeBlockContainer">
        <div className="welcomeBlock">
          <div className="name">Hello World, I&apos;m Greg Doyle</div>
          <div className="description">
            <p className="pairedText">
              I am a Full Stack Software Developer with experience in developing
              web applications using frameworks and technologies such as{" "}
              <span>
                <a
                  href="https://vuejs.org/"
                  className="inlineLink hoverUnderlineAnimation vueColors"
                  target="_blank"
                >
                  Vue
                </a>
                ,
              </span>{" "}
              <span>
                <a
                  href="https://angular.io/"
                  className="inlineLink hoverUnderlineAnimation angularColors"
                  target="_blank"
                >
                  {" "}
                  Angular
                </a>
                ,
              </span>{" "}
              <span>
                <a
                  href="https://react.dev/"
                  className="inlineLink hoverUnderlineAnimation reactColors"
                  target="_blank"
                >
                  React
                </a>
                ,
              </span>{" "}
              <span>
                <a
                  href="https://dotnet.microsoft.com/en-us/download"
                  className="inlineLink hoverUnderlineAnimation netColors"
                  target="_blank"
                >
                  .NET
                </a>
                ,
              </span>{" "}
              <span>
                <a
                  href="https://www.mongodb.com/"
                  className="inlineLink hoverUnderlineAnimation mongoColors"
                  target="_blank"
                >
                  MongoDB
                </a>
                ,
              </span>{" "}
              <span>
                <a
                  href="https://azure.microsoft.com/en-us"
                  className="inlineLink hoverUnderlineAnimation azureColors"
                  target="_blank"
                >
                  Azure
                </a>
                ,
              </span>{" "}
              and{" "}
              <span>
                <a
                  href="https://aws.amazon.com/"
                  className="inlineLink hoverUnderlineAnimation amazonColors"
                  target="_blank"
                >
                  Amazon Web Services (AWS)
                </a>
                .
              </span>{" "}
              Whether it's building sleek interfaces, optimizing backend
              processes, or ensuring seamless functionality across devices, I'm
              dedicated to delivering solutions that not only meet but exceed
              expectations. From concept to deployment and beyond, I'm here to
              transform your vision into reality.
              <br />
              <br />
            </p>
          </div>
          <div className="buttonContainer">
            <a
              className="longButton"
              onClick={showProjectsPage}
              target="_blank"
            >
              <p className="buttonText">Browse Past Projects</p>
            </a>
            <a
              className="longButton"
              onClick={showContactPage}
              target="_blank"
            >
              <p className="buttonText">Contact Me</p>
            </a>
          </div>
        </div>
      </div>
      <Skills />
      <ProjectsPage />
      <br />
      <br />
    </main>
  );
}
