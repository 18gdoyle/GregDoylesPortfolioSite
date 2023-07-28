import './HomePage.css'
import Image from 'next/image';

export default function Home() {
  return (
    <main className='homePageContainer'>
      <div className="welcomeBlockContainer">
        <div className='welcomeBlock'>
          <div className="name">
            Hello World, I'm Greg Doyle
          </div>
          <div className="description">
            I am a Full Stack Software Developer with experience in developing web applications using frameworks and
            technologies such as <a href="https://vuejs.org/" className="inlineLink hoverUnderlineAnimation vueColors" target='_blank'>Vue</a> 
            , <a href='https://angular.io/' className="inlineLink hoverUnderlineAnimation angularColors" target='_blank'> Angular</a>
            , <a href='https://react.dev/' className="inlineLink hoverUnderlineAnimation reactColors" target='_blank'>React</a>
            , <a href='https://dotnet.microsoft.com/en-us/download' className="inlineLink hoverUnderlineAnimation netColors" target='_blank'>.NET</a>
            , <a href='https://www.mongodb.com/' className="inlineLink hoverUnderlineAnimation mongoColors" target='_blank'>MongoDB</a>
            , <a href='https://azure.microsoft.com/en-us' className="inlineLink hoverUnderlineAnimation azureColors" target='_blank'>Azure</a>
            , and <a href='https://aws.amazon.com/' className="inlineLink hoverUnderlineAnimation amazonColors" target='_blank'>Amazon Web Services (AWS)</a>.
            I have significant experience working within an agile development environment, collaborating with others, and managing teams in
            different leadership roles.
          </div>
        </div>
      </div>
      
      <div>
        <div className='skillsDiv'>
          Skills
        </div>
        <div className='skillsAndFrameWorks'>
          <div className='glassDiv languages'>
            <div className='title'>
              Languages
            </div>
            <div className='imageRow'>
              <div className='skillContainer'>
                <Image 
                  src="/assets/typeScriptLogo.png"
                  width={80}
                  height={80}
                  alt="" 
                />
                <div className='skillName'>TypeScript</div>
              </div>
              <div className='skillContainer'>
                <Image 
                  src="/assets/javaScriptLogo.png"
                  width={80}
                  height={80}
                  alt="" 
                />
                <div className='skillName'>JavaScript</div>
              </div>
              <div className='skillContainer'>
                <Image 
                  src="/assets/htmlLogo.png"
                  width={80}
                  height={80}
                  className='skillImage'
                  alt="" 
                />
                <div className='skillName'>HTML</div>
              </div>
            </div>
            <div className='imageRow'>
              <div className='skillContainer'>
                <Image 
                  src="/assets/cssLogo.png"
                  width={80}
                  height={80}
                  className='skillImage'
                  alt="" 
                />
                <div className='skillName'>CSS</div>
              </div>
              <div className='skillContainer'>
                  <Image 
                    src="/assets/sqlLogo.png"
                    width={80}
                    height={80}
                    className='skillImage'
                    alt="" 
                  />
                <div className='skillName'>SQL</div>
              </div>
              <div className='skillContainer'>
                  <Image 
                    src="/assets/javaLogo.png"
                    width={80}
                    height={80}
                    className='skillImage'
                    alt="" 
                  />
                <div className='skillName'>Java</div>
              </div>
            </div>
            <div className='imageRow'>
              <div className='skillContainer'>
                <Image 
                  src="/assets/pythonLogo.png"
                  width={80}
                  height={80}
                  className='skillImage'
                  alt="" 
                />
                <div className='skillName'>Python</div>
              </div>
              <div className='skillContainer'>
                  <Image 
                    src="/assets/cLogo.png"
                    width={80}
                    height={80}
                    className='skillImage'
                    alt="" 
                  />
                <div className='skillName'>C</div>
              </div>
              <div className='skillContainer'>
                  <Image 
                    src="/assets/cSharpLogo.png"
                    width={80}
                    height={80}
                    className='skillImage'
                    alt="" 
                  />
                <div className='skillName'>C#</div>
              </div>
            </div>
            <div className='imageRow'>
              <div className='skillContainer'>
                <Image 
                  src="/assets/rustLogo.png"
                  width={80}
                  height={80}
                  className='skillImage'
                  alt="" 
                />
                <div className='skillName'>Rust</div>
              </div>
              <div className='skillContainer'>
                  <Image 
                    src="/assets/swiftLogo.png"
                    width={80}
                    height={80}
                    className='skillImage'
                    alt="" 
                  />
                <div className='skillName'>Swift</div>
              </div>
            </div>
          </div>
          <div className='glassDiv'>
            <div className='title'>
              Technologies and Frameworks
            </div>
            <div className='imageRow'>
              <div className='skillContainer'>
                <Image 
                  src="/assets/vueLogo.png"
                  width={80}
                  height={80}
                  className='skillImage'
                  alt="" 
                />
                <div className='skillName'>Vue</div>
              </div>
              <div className='skillContainer'>
                <Image 
                  src="/assets/angularLogo.png"
                  width={80}
                  height={80}
                  className='skillImage'
                  alt="" 
                />
                <div className='skillName'>Angular</div>
              </div>
              <div className='skillContainer'>
                <Image 
                  src="/assets/reactLogo.png"
                  width={80}
                  height={80}
                  className='skillImage'
                  alt="" 
                />
                <div className='skillName'>React</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}