import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Timeline from '@/components/home/Timeline'
import HomeCard from '@/components/home/HomeCards'
import OurMentorCard from '@/components/home/OurMentorCard'
import Heading from '@/components/Heading'

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
        <div className={styles.right_wrapper_saeintro}>
          <div className={styles.sae_headings}>
            <h1 className={styles.sae_name_text}>SAE Collegiate Club</h1>
          </div>
          <div className={styles.sae_content}>
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
                className={styles.instagram_img}
                src="/images/home/instagram_hero.svg"
                alt="instagram"
                width={54}
                height={54}
              />
            </a>
            <a href="https://www.facebook.com/SAEIITBHU/">
              <Image
                className={styles.facebook_img}
                src="/images/home/facebook_hero.svg"
                alt="facebook"
                width={54}
                height={54}
              />
            </a>
            <a href="https://in.linkedin.com/company/sae-collegiate-club-iit-varanasi">
              <Image
                className={styles.linkedIn_img}
                src="/images/home/linkedin_hero.svg"
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
        <Heading headingText="Our Achievements"> </Heading>

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
      <div className={styles.orangeSection}>
        <div className={styles.newBlogIdeas}>
          <Image
            className={styles.bulb}
            src="/blogs-images/Blogbulb.png"
            alt="bulb"
            width={240}
            height={300}
          />
          <div className={styles.sideContent}>
            <h1>Give a platform to your ideas!</h1>
            <h3>
              Have something to share? Email us your blogs and get featured!
            </h3>
            <div className={styles.email}>
              <Image
                className={styles.logo}
                src="/gmail.svg"
                alt="gmail"
                width={40}
                height={50.71}
              />
              saeiitbhu@itbhu.ac.in
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
