import './WelcomeCard.css';
import Image from 'next/image';

export default function Home() {
    return (
      <main>
        <article>
          <figure>
            <Image 
              src="/assets/GregDoyleNoBackground.png"
              width={500}
              height={500}
              alt="" 
            />
          </figure>
        </article>

        <h1>:hover</h1>
      </main>
    )
  }