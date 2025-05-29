import './WelcomeCard.css';

export default function Home() {
    return (
      <main>
        <article>
          <figure>
            <img className='welcomeCardImage'
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