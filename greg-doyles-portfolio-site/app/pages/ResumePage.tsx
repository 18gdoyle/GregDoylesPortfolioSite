import './ResumePage.css'
import TimeLineCard from '../components/TimeLineCard'

export default function Home() {
    return (
        <main className='timeLineContainer'>
            <div className='topOfTimeLine'>
                <TimeLineCard />
                <TimeLineCard />
            </div>
            <div className='timeLineLine'>
                <hr></hr>
            </div>
            <div className='bottomOfTimeLine'>
                <div className="marginDiv"></div>
                <TimeLineCard />
                <TimeLineCard />
            </div>
        </main>
    )
  }