import './ContactInfoPage.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faUpwork } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <main className="contactCard">
            <div className='contactCardImageContainer'>
                <img className="contactCard-img" src="/assets/GregDoyle.jpg" alt={''} />
            </div>
            <div className="desc">
                <h6 className="primary-text">Greg Doyle</h6>
                <h6 className="secondary-text">Software Engineer</h6>
                <br />
                <h6 className="secondary-text"><FontAwesomeIcon className='icon contactInfoIcon' icon={faPhone} /> <a href='tel:610-233-8733' className="inlineLink hoverUnderlineAnimation contactCardColors"><strong>610-233-8733</strong></a></h6>
                <h6 className="secondary-text"><FontAwesomeIcon className='icon contactInfoIcon' icon={faEnvelope} /> <a href='mailto:18gdoyle@gmail.com' className="inlineLink hoverUnderlineAnimation contactCardColors"><strong>18gdoyle@gmail.com</strong></a></h6>
                <h6 className="secondary-text"><FontAwesomeIcon className='icon contactInfoIcon' icon={faLinkedinIn} /> <a href='https://www.linkedin.com/in/gregoryvincentdoyle/' className="inlineLink hoverUnderlineAnimation contactCardColors" target='_blank'><strong>LinkedIn Profile</strong></a></h6>
                <h6 className="secondary-text"><FontAwesomeIcon className='icon contactInfoIcon' icon={faUpwork} /> <a href='https://www.upwork.com/freelancers/~011193481588fc4ca2' className="inlineLink hoverUnderlineAnimation contactCardColors" target='_blank'><strong>Upwork Profile</strong></a></h6>
            </div>
    </main>
  )
}