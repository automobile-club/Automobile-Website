'use client'
import styles from '@/styles/About.module.css'
import ReactPlayer from 'react-player/youtube'
import MemberCard from './MemberCard'
import AboutTeam from './AboutTeam'
import HeroSection from '@/components/HeroSection'
import type { Metadata } from 'next'

const title = 'About Us'
const content =
  'We are a student organization at Indian Institute of Technology, (BHU) Varanasi. It focuses on promoting automotive engineering and provides opportunities to participate in technical events, competitions, and hands-on projects related to vehicle design.'

export const metadata: Metadata = {
  title: 'About',
}

export default function About() {
  return (
    <>
      <div>
        <HeroSection title={title} content={content} />
        <div className={styles.intro}>
          <div className={styles.player}>
            <ReactPlayer
              url="https://youtu.be/FCpxpfrwaQs?si=xkxNl9p7Gql7hnuw"
              height="100%"
              width="100%"
            />
          </div>
          <div className={styles.intro_text}>
            Watch Our Intro Video<br></br>
            <button className={styles.youtube_btn}>
              Watch on &nbsp;
              <img alt="youtube" src="/images/feYoutube2.png" />
            </button>
          </div>
        </div>
      </div>
      <div className="about_teams">
        <div className={styles.second_section}>
          <AboutTeam
            aboutText="Team Trident, a distinguished division within the SAE Collegiate Club at IIT BHU, has a rich legacy of innovation and engineering prowess. Their journey epitomizes teamwork, dedication, and a relentless pursuit of perfection.
          "
            heading="Team Trident"
            img="/images/testimg.png"
            img2="/images/testimg.png"
          />
        </div>
        <div className={styles.third_section}>
          <AboutTeam
            aboutText="The RC Car Team at IIT BHU, a subunit of the SAE Collegiate Club, has evolved from its roots in building remote-controlled cars to embracing the forefront of technological innovation – automation.
          "
            heading="Team RC Car"
            img="/images/testimg.png"
            img2="/images/testimg.png"
          />
        </div>
      </div>
      <div className={styles.fifth_section}>
        <div className={styles.heading_box}>
          <div className={styles.fifth_section_heading}>Our Team</div>
        </div>
        <div className={styles.helm}>
          <MemberCard
            imageSrc="/images/AmanSrivastava.png"
            memberName="Aman Srivastava"
            memberDesignation="Jt. Secretary"
          />
          <MemberCard
            imageSrc="/images/Shruti.jpg"
            memberName="Shruti Jha"
            memberDesignation="Secretary"
          />
          <MemberCard
            imageSrc="/images/Anshuman.jpeg"
            memberName="Anshuman Chaurasia"
            memberDesignation="Jt. Secretary"
          />
        </div>
        <div className={styles.helm2}>
          <MemberCard
            imageSrc="/images/NisthaJain.jpeg"
            memberName="Nistha Jain"
            memberDesignation="Design Head"
          />
          <MemberCard
            imageSrc="/images/SaiyamJain.png"
            memberName="Saiyam Jain"
            memberDesignation="Web Team Head"
          />
          <MemberCard
            imageSrc="/images/PaltiSumasri.jpeg"
            memberName="Palti Sumasri"
            memberDesignation="Social Content Head"
          />
        </div>
      </div>
    </>
  )
}
