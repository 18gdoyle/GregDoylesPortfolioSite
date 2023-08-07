import './ContactInfoPage.css'
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <main className="contactCard">
            <div className='contactCardImageContainer'>
                <Image className="contactCard-img" src="/assets/GregDoyle.jpg" width={1930} height={1930} alt={''} />
            </div>
            <div className="desc">
                <h6 className="primary-text">Greg Doyle</h6>
                <h6 className="secondary-text">Software Engineer</h6>
                <br />
                <h6 className="secondary-text"><FontAwesomeIcon className='icon' icon={faPhone} /> 610-233-8733</h6>
                <h6 className="secondary-text"><FontAwesomeIcon className='icon' icon={faEnvelope} /> 18gdoyle@gmail.com</h6>
                <h6 className="secondary-text"><FontAwesomeIcon className='icon' icon={faLinkedin} /> <a href='https://www.linkedin.com/in/gregoryvincentdoyle/' className="inlineLink hoverUnderlineAnimation contactCardColors" target='_blank'><strong>LinkedIn Profile</strong></a></h6>
                <h6 className="secondary-text"><FontAwesomeIcon className='icon' icon={faGlobe} /> <a href='https://gregdoyle.pages.dev/' className="inlineLink hoverUnderlineAnimation contactCardColors" target='_blank'><strong>gregdoyle.com</strong></a></h6>
            </div>
    </main>
  )
}