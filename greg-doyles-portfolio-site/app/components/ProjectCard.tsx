import './ProjectCard.css';
import './ProjectCard';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
    return (
      <main>
        <div className="card">
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
                        <a href="https://lilacrust.com/" target="_blank" className='hover-underline-animation'>The Project</a>
                    </p>
                    <p className="para">
                        <a href="https://github.com/18gdoyle/lilac-rust-website" target="_blank" className='hover-underline-animation'>The Code</a>
                    </p>
                   </div>
                </div>
            </div>
        </div>
      </main>
    )
  }