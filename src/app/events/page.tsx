import styles from '@/styles/events.module.css'
import EventCard from './EventCard'
import HeroSection from '@/components/HeroSection'

const title = 'Events'
const content =
  'We are a student organization at Indian Institute of Technology, (BHU) Varanasi. It focuses on promoting automotive engineering and provides opportunities to participate in technical events, competitions, and hands-on projects related to vehicle design.'

export default function Events() {
  return (
    <div>
      <HeroSection title={title} content={content} />
      <h1 className={styles.main_heading}>EVENT SCHEDULE</h1>
      <div className="">
        <EventCard />
        <EventCard />
      </div>
    </div>
  )
}
