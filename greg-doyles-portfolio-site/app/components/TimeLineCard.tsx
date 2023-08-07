import './TimeLineCard.css';
import './TimeLineCard';
import React from 'react'

export default function Home(props: any) {
    return (
        <main className={`timeLineCard ${props.color}`}>
            <div className='textAndImages'>
                <div className="timeLineContent">
                    <div>
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
                        <div className="flexItem">
                            <div className="para">
                                <strong>{props.descriptionTitle}</strong>
                                {props.description}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="image-stack">
                        <div className="image-stack__item image-stack__item--top">
                            <img className='timeLineImage' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/110238/portrait1.jpeg" alt="" />
                        </div>
                        <div className="image-stack__item image-stack__item--bottom">
                            <img className='timeLineImage' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/110238/texture-waves-cropped.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}