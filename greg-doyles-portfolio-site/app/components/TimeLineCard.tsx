import './TimeLineCard.css';
import './TimeLineCard';
import React from 'react'

export default function Home(props: any) {
    return (
        <main className={`timeLineCard ${props.color}`}>
            <div className='textAndImages'>
                <div className="timeLineContent">
                    <div>
                        <div className='headingCentered'>
                            <div className="flexItem">
                                <p className="subtitle">
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
                        </div>
                        <div className="flexItem">
                            <div className="para">
                                <strong>{props.descriptionTitle}</strong>
                                {props.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}