import './ProjectCard.css';
import './ProjectCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

export default function Home(props: any) {
    return (
      <main>
        <div className={`card ${props.color}`}>
            <div className="content">
                <div>
                    <FontAwesomeIcon className='icon' icon={faMusic} />
                </div>
                <div>
                    <div className='flexItem'>
                        <p className='heading'>{props.title}</p>
                    </div>
                    <div className="flexItem">
                        <p className="para">
                            {props.description}
                        </p>
                    </div>
                    <div className='flexItem'>
                        <hr className="rounded"></hr>
                    </div>
                   <div className='flexItem'>
                    <p className="para">
                        <a href={props.projectLink} target="_blank" className={`hover-underline-animation ${props.color}Gradient`}>The Project</a>
                    </p>
                    <p className="para">
                        <a href={props.codeLink} target="_blank" className={`hover-underline-animation ${props.color}Gradient`}>The Code</a>
                    </p>
                   </div>
                </div>
            </div>
        </div>
      </main>
    )
  }