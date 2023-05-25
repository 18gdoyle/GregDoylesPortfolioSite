import './WelcomeCard.css';
import Image from 'next/image';

export default function Home() {
    return (
      <main>
        <article>
          <figure>
            <Image className='welcomeCardImage'
              src="/assets/GregDoyleNoBackground.png"
              width={500}
              height={500}
              alt="" 
            />
            <div className="welcomeCardText">This is a test</div>
          </figure>
        </article>
      </main>
    )
  }