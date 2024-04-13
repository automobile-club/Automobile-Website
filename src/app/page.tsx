import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import AchievementTimeline from '@/components/home/AchievementTimeline'
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
        {/* <div className={styles.ourachievments_heading}>
          <h2 className={styles.ourmentors_heading_text}>Our Achievements</h2>
        </div> */}
        <Heading headingText='Our Achievements'> </Heading>

        <div className={styles.achievments_cards_sae}>
          <AchievementTimeline />
          {/* <div className={styles.ourmentors_card1_sae}>
            <Image
              className={styles.ourmentors_img}
              src="/images/Techfest_img.webp"
              alt="Mentors"
              width={138.24}
              height={138.24}
            />
            <div className={styles.achievments_card1_text}>
              <h3 className={styles.ourmentors_card1_heading_text}>
                IIT Bombay
              </h3>
              <span className={styles.ourmentors_card1_text}>
                Top 10 in IFT&apos;18 Techfest&apos;18
              </span>
            </div>
          </div>

          <div className={styles.ourmentors_card1_sae}>
            <Image
              className={styles.ourmentors_img}
              src="/images/Techniche_img.webp"
              alt="Mentors"
              width={138.24}
              height={138.24}
            />
            <div className={styles.achievments_card1_text}>
              <h3 className={styles.ourmentors_card1_heading_text}>
                IIT Guwahati
              </h3>
              <span className={styles.ourmentors_card1_text}>
                2nd Position Burnout&apos;18 Techniche&apos;19
              </span>
            </div>
          </div>

          <div className={styles.ourmentors_card1_sae}>
            <Image
              className={styles.ourmentors_img}
              src="/images/Technex_img.webp"
              alt="Technex"
              width={138.24}
              height={138.24}
            />
            <div className={styles.achievments_card1_text}>
              <h3 className={styles.ourmentors_card1_heading_text}>
                IIT Varanasi
              </h3>
              <span className={styles.ourmentors_card1_text}>
                1st Position Axelerate&apos;19 Technex&apos;19
              </span>
            </div>
          </div> */}
        </div>
      </div>
    
      {/* our mentors section */}
      {/* our mentors section */}
      <div className={styles.ourmentor}>
        <Heading headingText="Our Mentor"></Heading>
      <OurMentorCard></OurMentorCard>
      </div>
      




      {/* <div className={styles.ourmentors_sae}> */}
        {/* <div className={styles.ourachievments_heading}>
          <h2 className={styles.ourmentors_heading_text}>Our Mentors</h2>
        </div> */}
        {/* <Heading headingText='Our Mentor'></Heading>
        <div className={styles.achievments_cards_sae}>
          <div className={styles.ourmentors_card1_sae}>
            <Image
              className={styles.ourmentors_img}
              src="/images/mentors1.webp"
              alt="Mentors"
              width={138.24}
              height={138.24}
            />
            <div className={styles.achievments_card1_text}>
              <h4 className={styles.ourmentors_card1_heading_text}>
                Amit Kumar
              </h4>
              <span className={styles.ourmentors_card1_text}>
                Proud to be an SAE Club IIT BHU alumnus
              </span>
            </div>
          </div>

          <div className={styles.ourmentors_card1_sae}>
            <Image
              className={styles.ourmentors_img}
              src="/images/mentors1.webp"
              alt="Mentors"
              width={138.24}
              height={138.24}
            />
            <div className={styles.achievments_card1_text}>
              <h4 className={styles.ourmentors_card1_heading_text}>
                Amit Kumar
              </h4>
              <span className={styles.ourmentors_card1_text}>
                Proud to be an SAE Club IIT BHU alumnus
              </span>
            </div>
          </div>

          <div className={styles.ourmentors_card1_sae}>
            <Image
              className={styles.ourmentors_img}
              src="/images/mentors1.webp"
              alt="Mentors"
              width={138.24}
              height={138.24}
            />
            <div className={styles.achievments_card1_text}>
              <h4 className={styles.ourmentors_card1_heading_text}>
                Amit Kumar
              </h4>
              <span className={styles.ourmentors_card1_text}>
                Proud to be an SAE Club IIT BHU alumnus
              </span>
            </div>
          </div>
        </div>
      </div> */}
      {/* our events section */}
      {/* our events section */}

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
      {/* <div className={styles.events}>
        <div className={styles.eventHeading}>
          <h2 className={styles.ourmentors_heading_text}>Events & Workshop</h2>
        </div>
        <div className={styles.card_container}>
          <div className={styles.row}>
            <div className={styles.card}>
              <Image
                src="/images/car.webp"
                alt="The Culture of SAE"
                width={290}
                height={117.15}
              />
              <h2>The Culture of SAE</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
                vel risus commodo viverra.
              </p>
              <a href="#">Read More</a>
            </div>
            <div className={styles.card}>
              <Image
                src="/images/car.webp"
                alt="The Culture of SAE"
                width={290}
                height={117.15}
              />
              <h2>The Culture of SAE</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
                vel risus commodo viverra.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.card}>
              <Image
                src="/images/car.webp"
                alt="The Culture of SAE"
                width={290}
                height={117.15}
              />
              <h2>The Culture of SAE</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
                vel risus commodo viverra.
              </p>
              <a href="#">Read More</a>
            </div>
            <div className={styles.card}>
              <Image
                src="/images/car.webp"
                alt="The Culture of SAE"
                width={290}
                height={117.15}
              />
              <h2>The Culture of SAE</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
                vel risus commodo viverra.
              </p>
              <a href="#">Read More</a>
            </div>
            <div className={styles.card}>
              <Image
                src="/images/car.webp"
                alt="The Culture of SAE"
                width={290}
                height={117.15}
              />
              <h2>The Culture of SAE</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
                vel risus commodo viverra.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>

      </div> */}
      <Link href="/events" className={`${styles.vmBtn} ${styles.ourBlogBtn}`}>
        View More
      </Link>

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
