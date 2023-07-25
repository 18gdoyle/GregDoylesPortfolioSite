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
                    color="orange"
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
                    color="green"
                />
                <TimeLineCard 
                    date="2020-2022"
                    title="University of Pittsburgh"
                    subtitle="Resident Assistant"
                    descriptionTitle="Notable Coursework"
                    description={
                        <div>
                            <li>Provided a floor of 40 freshmen with information on campus resources such as housing and dining services, tutoring programs, and extracurricular activities.e</li>
                            <li>Developed 2 floor programs a month to aid in residents’ transition to college and give them an opportunity to socialize with their peers. Programs included study tip seminars, game nights, etc.</li>
                            <li>Created forms and polls to get feedback from residents on programs.</li>
                        </div>
                    }
                />
                <TimeLineCard 
                    date="2022-Present"
                    title="Devia Software"
                    subtitle="Software Developer"
                    description={
                        <div>
                            <li>Developing multiple full-stack web applications using Vue and .NET frameworks for the front-end and Azure services for the backend.</li>
                            <li>Gaining significant experience with HTML5, CSS3, JavaScript, TypeScript, and JavaScript frameworks such as jQuery and Handlebars by developing tools and solutions for e-commerce web applications.</li>
                            <li>Acquiring skills related to machine learning by developing, training, and testing an image classification model that is being built and deployed using TensorFlow, Python, Rust, and Docker.</li>
                        </div>
                    }
                    color="purple"
                />
            </div>
            <div className='timeLineLine'>
                <div>2014</div>
                <hr className="timeLineHR"></hr>
                <div>Present</div>
            </div>
            <div className='bottomOfTimeLine'>
                <div className="marginDiv"></div>
            </div>
        </main>
    )
  }