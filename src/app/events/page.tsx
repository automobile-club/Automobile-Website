import styles from '@/styles/Events.module.css'
import EventCard from './EventCard'
import HeroSection from '@/components/HeroSection'

const title = 'Events'
const content =
  'We are a student organization at Indian Institute of Technology, (BHU) Varanasi. It focuses on promoting automotive engineering and provides opportunities to participate in technical events, competitions, and hands-on projects related to vehicle design.'

export default function Events() {
  return (
    <div>
      <HeroSection title={title} content={content} />
        <div className={styles.ourevents_heading}>
          <h2 className={styles.ourevents_heading_text}>Event Schedule</h2>
        </div>      <div className={`${styles.Eventcards}`}>
        <EventCard
          card_event_img="http://res.cloudinary.com/d3/image/upload/c_scale,q_auto:good,w_1110/trianglify-v1-cs85g_cc5d2i.jpg"
          card_event_avatar="http://res.cloudinary.com/d3/image/upload/c_pad,g_center,h_200,q_auto:eco,w_200/bootstrap-logo_u3c8dx.jpg"
          card_event_title="Card title"
          card_event_text="Card has a minimum height set but will expand if more space is needed for card body content. You can use Bootstrap card-decks to align multiple cards nicely in a row."
          duration="By Host on 09/11/2001"
        />
        <EventCard
          card_event_img="http://res.cloudinary.com/d3/image/upload/c_scale,q_auto:good,w_1110/trianglify-v1-cs85g_cc5d2i.jpg"
          card_event_avatar="http://res.cloudinary.com/d3/image/upload/c_pad,g_center,h_200,q_auto:eco,w_200/bootstrap-logo_u3c8dx.jpg"
          card_event_title="Card title"
          card_event_text="Card has a minimum height set but will expand if more space is needed for card body content. You can use Bootstrap card-decks to align multiple cards nicely in a row."
          duration="By Host on 09/11/2001"
        />
        <EventCard
          card_event_img="http://res.cloudinary.com/d3/image/upload/c_scale,q_auto:good,w_1110/trianglify-v1-cs85g_cc5d2i.jpg"
          card_event_avatar="http://res.cloudinary.com/d3/image/upload/c_pad,g_center,h_200,q_auto:eco,w_200/bootstrap-logo_u3c8dx.jpg"
          card_event_title="Card title"
          card_event_text="Card has a minimum height set but will expand if more space is needed for card body content. You can use Bootstrap card-decks to align multiple cards nicely in a row."
          duration="By Host on 09/11/2001"
        />
        <EventCard
          card_event_img="http://res.cloudinary.com/d3/image/upload/c_scale,q_auto:good,w_1110/trianglify-v1-cs85g_cc5d2i.jpg"
          card_event_avatar="http://res.cloudinary.com/d3/image/upload/c_pad,g_center,h_200,q_auto:eco,w_200/bootstrap-logo_u3c8dx.jpg"
          card_event_title="Card title"
          card_event_text="Card has a minimum height set but will expand if more space is needed for card body content. You can use Bootstrap card-decks to align multiple cards nicely in a row."
          duration="By Host on 09/11/2001"
        />
        <EventCard
          card_event_img="http://res.cloudinary.com/d3/image/upload/c_scale,q_auto:good,w_1110/trianglify-v1-cs85g_cc5d2i.jpg"
          card_event_avatar="http://res.cloudinary.com/d3/image/upload/c_pad,g_center,h_200,q_auto:eco,w_200/bootstrap-logo_u3c8dx.jpg"
          card_event_title="Card title"
          card_event_text="Card has a minimum height set but will expand if more space is needed for card body content. You can use Bootstrap card-decks to align multiple cards nicely in a row."
          duration="By Host on 09/11/2001"
        />
        <EventCard
          card_event_img="http://res.cloudinary.com/d3/image/upload/c_scale,q_auto:good,w_1110/trianglify-v1-cs85g_cc5d2i.jpg"
          card_event_avatar="http://res.cloudinary.com/d3/image/upload/c_pad,g_center,h_200,q_auto:eco,w_200/bootstrap-logo_u3c8dx.jpg"
          card_event_title="Card title"
          card_event_text="Card has a minimum height set but will expand if more space is needed for card body content. You can use Bootstrap card-decks to align multiple cards nicely in a row."
          duration="By Host on 09/11/2001"
        />
      </div>
    </div>
  )
}
