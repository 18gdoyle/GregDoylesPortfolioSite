import './ResumePage.css'
import TimeLineCard from '../components/TimeLineCard'

export default function Home() {
    return (
        <main className='timeLineContainer'>
            <div className='topOfTimeLine'>
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
                />
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
                />
            </div>
            <div className='timeLineLine'>
                <div>2014</div>
                <hr className="timeLineHR"></hr>
                <div>Present</div>
            </div>
            <div className='bottomOfTimeLine'>
                <div className="marginDiv"></div>
                <TimeLineCard />
            </div>
        </main>
    )
  }