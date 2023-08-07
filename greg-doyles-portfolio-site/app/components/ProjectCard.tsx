import './ProjectCard.css';
import './ProjectCard';

import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faMusic } from '@fortawesome/free-solid-svg-icons'

export default function Home(props: any) {
    const [projectIcon] = useState(`${props.icon}`);
    return (
        <main className={`card ${props.color}`}>
            <div className="content">
                <div className='projectIcon'>
                    {(() => {
                        if (projectIcon === 'personalPortfolio') {
                            return (
                                <FontAwesomeIcon className='icon' icon={faGlobe} />
                            )
                        } else if (projectIcon === 'musicWebsite') {
                            return (
                                <FontAwesomeIcon className='icon' icon={faMusic} />
                            )
                        }
                    })()}
                </div>
                <div className='projectText'>
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
        </main>
    )
}