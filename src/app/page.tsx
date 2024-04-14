import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Timeline from '@/components/home/Timeline'
import HomeCard from '@/components/home/HomeCards'
import OurMentorCard from '@/components/home/OurMentorCard'
import Heading from '@/components/Heading'
import OrangeSection from '@/components/OrangeSection'

function Home() {
  return (
    <>
      {/* Hero Section */}
      {/* Hero Section */}
      <div className={styles.sae_intro}>
        <Image
          className={styles.cards_img_saeintro}
          src="/images/home/Cards.png"
          alt="card"
          placeholder="empty"
          loading="eager"
          width={550}
          height={550}
        />
        <div>
          <div className={styles.sae_headings}>
            <h1 className={styles.sae_name_text}>SAE Collegiate Club</h1>
          </div>
          <div>
            <p className={styles.sae_long_text}>
              We are a student organization at Indian Institute of Technology,
              (BHU) Varanasi. It focuses on promoting automotive engineering and
              provides opportunities to participate in technical events,
              competitions, and hands-on projects related to vehicle design.
            </p>
          </div>
          <div className={styles.social_media}>
            <a href="https://www.instagram.com/saecollegiateclubiitbhu/">
              <Image
                src="/images/social/instagram_hero.svg"
                alt="instagram"
                width={54}
                height={54}
              />
            </a>
            <a href="https://www.facebook.com/SAEIITBHU/">
              <Image
                src="/images/social/facebook_hero.svg"
                alt="facebook"
                width={54}
                height={54}
              />
            </a>
            <a href="https://in.linkedin.com/company/sae-collegiate-club-iit-varanasi">
              <Image
                src="/images/social/linkedin_hero.svg"
                alt="linkedIn"
                width={54}
                height={54}
              />
            </a>
          </div>
          <div className={styles.line}></div>
        </div>
      </div>

      {/* our achievments section */}
      {/* our achievments section */}
      <div className={styles.ourachievments_sae}>
        <Heading headingText="Our Achievements" />

        <div className={styles.achievments_cards_sae}>
          <Timeline />
        </div>
      </div>

      {/* our mentors section */}
      {/* our mentors section */}
      <div className={styles.ourmentor}>
        <Heading headingText="Our Mentor"></Heading>
        <OurMentorCard></OurMentorCard>
      </div>

      {/* our events section */}
      {/* our events section */}
      <div>
        <Heading headingText="Events & Workshops"> </Heading>
        <div className={styles.card_container}>
          <div className={styles.card4}>
            <HomeCard />
          </div>
          <div className={styles.card4}>
            <HomeCard />
          </div>
          <div className={styles.card4}>
            <HomeCard />
          </div>
        </div>
        <Link href="/events" className={`${styles.vmBtn} ${styles.ourBlogBtn}`}>
          View More
        </Link>
      </div>

      {/* orange section */}
      {/* orange section */}
      <OrangeSection />
    </>
  )
}

export default Home
