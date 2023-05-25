import './ProjectCard.css';
import './ProjectCard';
import Image from 'next/image';

export default function Home() {
    return (
      <main>
        <div className="card">
            <div className="content">
                <div>
                    <p className='heading'>Music Link Page</p>
                </div>
                <div>
                    <div className="flexItem">
                        <p className="para">
                            A music link page I designed using Vue 3, Vite, and Three.js
                        </p>
                    </div>
                    <div className='flexItem'>
                        <p className="para">
                            <hr className="rounded"></hr>
                        </p>
                    </div>
                   <div className='flexItem'>
                    <p className="para">
                        <a href="https://lilacrust.com/" target="_blank">View Project</a>
                        <a href="https://github.com/18gdoyle/lilac-rust-website" target="_blank">View Code</a>
                    </p>
                   </div>
                </div>
            </div>
        </div>
      </main>
    )
  }