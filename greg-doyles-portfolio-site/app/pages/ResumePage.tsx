import './ResumePage.css'
import TimeLineCard from '../components/TimeLineCard'
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
    const [timeLineCardNumber, setTimeLineCardNumber] = useState(5);

    function goBackInTimeLine() {
        if (timeLineCardNumber > 1) {
            return timeLineCardNumber - 1;
        }
        return timeLineCardNumber;
    }

    function goForwardInTimeLine() {
        if (timeLineCardNumber < 5) {
            return timeLineCardNumber + 1;
        }
        return timeLineCardNumber;
    }

    return (
        <main className='timeLineContainer'>
            <div className='resumeSectionHeader'>
                <div className="sectionHeaderTitle">
                    Resume
                </div>
            </div>
            <div className='horizontalScrollContainer'>
                <div className='timeLine'>
                    {(() => {
                        if (timeLineCardNumber === 1) {
                            return (
                                <TimeLineCard
                                    date="2014-2018"
                                    title="Downingtown STEM Academy"
                                    subtitle="High School Diploma - 3.8 GPA"
                                    descriptionTitle="Activities and Accomplishments"
                                    description={
                                        <div>
                                            <li>Ski and Snowboard Club</li>
                                            <li>National Honors Society</li>
                                        </div>
                                    }
                                    color="red"
                                />
                            )
                        } else if (timeLineCardNumber === 2) {
                            return (
                                <TimeLineCard
                                    date="2018-2022"
                                    title="University of Pittsburgh"
                                    subtitle="Bachelor of Science in Computer Science - 3.5 GPA"
                                    descriptionTitle="Notable Coursework"
                                    description={
                                        <div>
                                            <li>CS 1502: Formal Methods in Computer Science</li>
                                            <li>CS 1501: Algorithm Implementation</li>
                                            <li>CS 0449: Introduction to Systems Software</li>
                                            <li>CS 0447: Computer Organization and Assembly Language</li>
                                            <li>CS 0445: Discrete Structures</li>
                                        </div>
                                    }
                                    color="orange"
                                />
                            )
                        } else if (timeLineCardNumber === 3) {
                            return (
                                <TimeLineCard
                                    date="2020-2022"
                                    title="University of Pittsburgh"
                                    subtitle="Resident Assistant"
                                    description={
                                        <div>
                                            <li>Provided a floor of 40 freshmen with information on campus resources such as housing and dining services, tutoring programs, and extracurricular activities.e</li>
                                            <li>Developed 2 floor programs a month to aid in residents’ transition to college and give them an opportunity to socialize with their peers. Programs included study tip seminars, game nights, etc.</li>
                                            <li>Created forms and polls to get feedback from residents on programs.</li>
                                        </div>
                                    }
                                    color="green"
                                />
                            )
                        } else if (timeLineCardNumber === 4) {
                            return (
                                <TimeLineCard
                                    date="2021"
                                    title="Bruno Solutions"
                                    subtitle="Full Stack Developer"
                                    description={
                                        <div>
                                            <li>Developed a full-stack web application using the Angular framework for the front-end.</li>
                                            <li>Utilized AWS API Gateway, AWS Lambda (node.js and JavaScript), RDS Aurora (PostgreSQL), AWS S3, Google Firebase for user authentication, AWS CloudFront, AWS Route 53, and AWS CloudWatch for the backend.</li>
                                            <li>Gained experience with agile development, taking part in stand-ups every morning, and using GitHub for code reviews and merges.</li>
                                        </div>
                                    }
                                    color="blue"
                                />
                            )
                        } else if (timeLineCardNumber === 5) {
                            return (
                                <TimeLineCard
                                    date="2022-Present"
                                    title="Devia Software"
                                    subtitle="Software Developer"
                                    description={
                                        <div>
                                            <li>Developing multiple full-stack web applications using Vue and .NET frameworks for the front-end and Azure services for the backend.</li>
                                            <li>Gaining significant experience with HTML5, CSS3, JavaScript, TypeScript, and JavaScript frameworks such as jQuery and Handlebars by developing tools and solutions for e-commerce web applications.</li>
                                            <li>Acquiring skills related to machine learning by developing, training, and timeLineCardNumbering an image classification model that is being built and deployed using TensorFlow, Python, Rust, and Docker.</li>
                                        </div>
                                    }
                                    color="purple"
                                />
                            )
                        }
                    })()}
                </div>
            </div>
            <div className='timeLineButtons'>
                <div className='timeLineButton' onClick={() => setTimeLineCardNumber(goBackInTimeLine)}><FontAwesomeIcon className='icon' icon={faAngleLeft} /></div>
                <div className={`timeLineButton ${timeLineCardNumber === 1 ? 'red' : null}`} onClick={() => setTimeLineCardNumber(1)}>2014</div>
                <div className={`timeLineButton ${timeLineCardNumber === 2 ? 'orange' : null}`} onClick={() => setTimeLineCardNumber(2)}>2018</div>
                <div className={`timeLineButton ${timeLineCardNumber === 3 ? 'green' : null}`} onClick={() => setTimeLineCardNumber(3)}>2020</div>
                <div className={`timeLineButton ${timeLineCardNumber === 4 ? 'blue' : null}`} onClick={() => setTimeLineCardNumber(4)}>2021</div>
                <div className={`timeLineButton ${timeLineCardNumber === 5 ? 'purple' : null}`} onClick={() => setTimeLineCardNumber(5)}>2022</div>
                <div className='timeLineButton' onClick={() => setTimeLineCardNumber(goForwardInTimeLine)}><FontAwesomeIcon className='icon' icon={faAngleRight} /></div>
            </div>
        </main>
    )
}