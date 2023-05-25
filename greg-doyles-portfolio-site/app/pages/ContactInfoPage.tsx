import './ContactInfoPage.css'
import Image from 'next/image';

export default function Home() {
  return (
    <main>
        <div className="contactCard">
            <div className='contactCardImageContainer'>
                <Image className="contactCard-img" src="/assets/GregDoyle.jpg" width={120} height={120} alt={''} />
            </div>
            <div className="desc">
                <h6 className="primary-text">Greg Doyle</h6>
                <h6 className="secondary-text">Software Engineer</h6>
            </div>
            <div className="primary-text glassy">View Profile</div>
            <div className="details">
                <div className="rating">
                    <h6 className="primary-text"> 86% </h6>
                    <h6 className="secondary-text"> Rating </h6>
                </div>
                <div className="activity">
                    <h6 className="primary-text"> 92% </h6>
                    <h6 className="secondary-text"> Activity </h6>
                </div>
            </div>
        </div>
    </main>
  )
}