import './TimeLineCard.css';
import './TimeLineCard';
import React from 'react'

export default function Home() {
    const [maximizedContent, setMaximizedContent] = React.useState(false);

    function enterHover() {
        setMaximizedContent(true);
    }

    function exitHover() {
        setMaximizedContent(false);
    }

    return (
      <main className="timeLineCard" onMouseEnter={enterHover} onMouseLeave={exitHover}>
        <div>
            <div className="content">
                {maximizedContent ? 
                    <div>
                        <div className="flexItem">
                            <p className="para">
                                2014-2018
                            </p>
                        </div>
                        <div className='flexItem'>
                            <p className='heading'>Downingtown STEM Academy</p>
                        </div>
                        <div className="flexItem">
                            <p className="para">
                                <strong>GPA:</strong> 3.8
                            </p>
                        </div>
                        <div className="flexItem">
                            <p className="para">
                                <strong>Activities and Accomplishments:</strong>
                                <li>
                                    Ski and Snowboard Club
                                </li>
                                <li>
                                    National Honors Society
                                </li>
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
                :
                    <div>
                        <div className="flexItem">
                            <p className="para">
                                2014-2018
                            </p>
                        </div>
                    </div>
                }
            </div>
        </div>
      </main>
    )
  }