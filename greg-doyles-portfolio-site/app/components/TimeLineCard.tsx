import './TimeLineCard.css';
import './TimeLineCard';
import React from 'react'

export default function Home(props: any) {
    const [maximizedContent, setMaximizedContent] = React.useState(false);

    function enterHover() {
        setMaximizedContent(true);
    }

    function exitHover() {
        setMaximizedContent(false);
    }

    return (
      <main className={`timeLineCard ${props.color}`} onMouseEnter={enterHover} onMouseLeave={exitHover}>
        <div>
            <div className="content">
                {maximizedContent ? 
                    <div>
                        <div className="flexItem">
                            <p className="para">
                                {props.date}
                            </p>
                        </div>
                        <div className='flexItem'>
                            <p className='heading'>{props.title}</p>
                        </div>
                        <div className="flexItem">
                            <p className="subtitle">
                                {props.subtitle}
                            </p>
                        </div>
                        <div className="flexItem">
                            <p className="para">
                                <strong>{props.descriptionTitle}</strong>
                                <div>
                                    {props.description}
                                </div>
                            </p>
                        </div>
                    </div>
                :
                    <div>
                        <div className="flexItem">
                            <p className="para">
                                {props.date}
                            </p>
                        </div>
                    </div>
                }
            </div>
        </div>
      </main>
    )
  }