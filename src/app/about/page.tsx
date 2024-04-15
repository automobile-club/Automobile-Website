'use client'
import styles from '@/styles/About.module.css'
import ReactPlayer from 'react-player/youtube'
import MemberCard from './MemberCard'
import AboutTeam from './AboutTeam'
import HeroSection from '@/components/HeroSection'
import Heading from '@/components/Heading'

const title = 'About Us'
const content =
  'We are a student organization at Indian Institute of Technology, (BHU) Varanasi. It focuses on promoting automotive engineering and provides opportunities to participate in technical events, competitions, and hands-on projects related to vehicle design.'

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
              <img alt="youtube" src="/images/social/youtube.png" />
            </button>
          </div>
        </div>
      </div>
      <div className="about_teams">
        <div className={styles.second_section}>
          <AboutTeam
            aboutText="Team Trident, has a rich legacy of innovation and engineering prowess.
          "
            heading="Team Trident"
            img="/images/about/teamTri1.png"
            img2="/images/about/teamTri2.png"
          />
        </div>
        <div className={styles.third_section}>
          <AboutTeam
            aboutText="The RC Car Team has evolved from its roots in building remote-controlled cars
          "
            heading="Team RC Car"
            img="/images/about/teamRC1.png"
            img2="/images/about/teamRC2.png"
          />
        </div>
      </div>
      <div className={styles.fifth_section}>
        <Heading headingText="Our Team" />
        <div className={styles.helm}>
          <MemberCard
            imageSrc="/images/about/team/AmanSrivastava.webp"
            memberName="Aman Srivastava"
            memberDesignation="Jt. Secretary"
            memberInstagram="https://www.instagram.com/aman_sriv.25"
            memberLinkedIn="https://www.linkedin.com/in/aman-srivastava-7a916b223/"
          />
          <MemberCard
            imageSrc="/images/about/team/Shruti.webp"
            memberName="Shruti Jha"
            memberDesignation="Secretary"
            memberInstagram="https://www.instagram.com/__jhashruti/"
            memberLinkedIn="https://in.linkedin.com/in/shruti-jha-13363b222"
          />
          <MemberCard
            imageSrc="/images/about/team/Anshuman.webp"
            memberName="Anshuman Chaurasia"
            memberDesignation="Jt. Secretary"
            memberInstagram="https://www.instagram.com/anshhuman_chaurasia/"
            memberLinkedIn="https://www.linkedin.com/in/anshuman-chaurasia"
          />
        </div>
        <div className={styles.helm2}>
          <MemberCard
            imageSrc="/images/about/team/NisthaJain.jpeg"
            memberName="Nistha Jain"
            memberDesignation="Design Head"
            memberInstagram={''}
            memberLinkedIn={''}
          />
          <MemberCard
            imageSrc="/images/about/team/SaiyamJain.png"
            memberName="Saiyam Jain"
            memberDesignation="Web Team Head"
            memberInstagram="https://www.instagram.com/saiyam_iitbhu"
            memberLinkedIn="https://www.linkedin.com/in/sairev"
          />
          <MemberCard
            imageSrc="/images/about/team/PaltiSumasri.jpeg"
            memberName="Palti Sumasri"
            memberDesignation="Social Content Head"
            memberInstagram="https://www.instagram.com/sumasri_palti"
            memberLinkedIn="https://www.linkedin.com/in/sumasri-palti-6ba965230/"
          />
        </div>
      </div>
    </>
  )
}
