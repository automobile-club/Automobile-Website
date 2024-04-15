import React from 'react'
import styles from '@/styles/EventCard.module.css'

// Define the type for props
type EventCardProps = {
  card_event_img: string
  card_event_title: string
  card_event_text: string
  duration: string
}

const EventCard: React.FC<EventCardProps> = ({
  card_event_img,
  card_event_title,
  card_event_text,
  duration,
}) => {
  return (
    <div className={`card ${styles.card_event}`}>
      <div
        className={styles.card_event_img}
        style={{ backgroundImage: `url(${card_event_img})` }}
      ></div>
      <div className="card-body" style={{ overflowY: 'auto' }}>
        <h4 className="card-title">{card_event_title}</h4>
        <p className={`${styles.card_event_text}`}>{card_event_text}</p>
      </div>

      <div
        className="card-footer"
        style={{ background: 'inherit', borderColor: 'inherit' }}
      >
        <p className={` ${styles.duration}`}>{duration}</p>
      </div>
    </div>
  )
}

export default EventCard
