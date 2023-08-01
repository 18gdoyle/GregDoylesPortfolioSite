import './ProjectCard.css';
import './ProjectCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
    return (
      <main>
        <div className="card purple">
            <div className="content">
                <div>
                    <FontAwesomeIcon className='icon' icon={faMusic} />
                </div>
                <div>
                    <div className='flexItem'>
                        <p className='heading'>Music Link Page</p>
                    </div>
                    <div className="flexItem">
                        <p className="para">
                            A music link page I designed using Vue 3, Vite, and Three.js
                        </p>
                    </div>
                    <div className='flexItem'>
                        <hr className="rounded"></hr>
                    </div>
                   <div className='flexItem'>
                    <p className="para">
                        <a href="https://lilacrust.com/" target="_blank" className='hover-underline-animation purpleGradient'>The Project</a>
                    </p>
                    <p className="para">
                        <a href="https://github.com/18gdoyle/lilac-rust-website" target="_blank" className='hover-underline-animation purpleGradient'>The Code</a>
                    </p>
                   </div>
                </div>
            </div>
        </div>
      </main>
    )
  }