import styles from '@/styles/Trident.module.css'
import HeroSection from '@/components/HeroSection'
import type { Metadata } from 'next'
import Heading from '@/components/Heading'
import Image from 'next/image'

const title = 'Team Trident'
const content =
  'We are a student organization at Indian Institute of Technology, (BHU) Varanasi. It focuses on promoting automotive engineering and provides opportunities to participate in technical events, competitions, and hands-on projects related to vehicle design.'

export const metadata: Metadata = {
  title: 'Trident',
}

export default function Trident() {
  return (
    <div>
      <HeroSection title={title} content={content} isTrident={true} />
      {/* <Heading headingText="Events & Workshops" /> */}

      <div className={styles.outer}>
        <div className={styles.benefits}>
          <h1 className={styles.benefits_title}>Benefits of Contribution</h1>
          <div className={styles.itemcontainer}>
          <div className={styles.items}>
            <div className={styles.itemimg}>
            <Image
            className={styles.benefits_image}
            src="/images/Trident/benefits/image 1084.png"
            alt="Instagram"
            width={100} 
            height={100} 
          />
          </div>
            <div className={styles.itempara}>
              <h3 className={styles.item_heading}>Exposure</h3>
              <p className={styles.itempara_para}>Our advanced spyware detection engine can identify if a device contains spyware or bugging software.</p>
            </div>
          </div>

          <div className={styles.items}>
            <div className={styles.itemimg}>
            <Image
            className={styles.benefits_image}
            src="/images/Trident/benefits/image 1081.png"
            alt="Instagram"
            width={100} 
            height={100} 
          />
          </div>
            <div className={styles.itempara}>
              <h3 className={styles.item_heading}>R&D and Innovation</h3>
              <p className={styles.itempara_para}>Find malicious keyboards installed on your device that could allow someone to record things you type (e.g. passwords).</p>
            </div>
          </div>

          <div className={styles.items}>
            <div className={styles.itemimg}>
            <Image
            className={styles.benefits_image}
            src="/images/Trident/benefits/image 1083.png"
            alt="Instagram"
            width={100} 
            height={100} 
          />
          </div>
            <div className={styles.itempara}>
              <h3 className={styles.item_heading}>Networking</h3>
              <p className={styles.itempara_para}>Check which apps can access your location, microphone or camera. Get alerted if a known tracking app is installed.</p>
            </div>
          </div>

          <div className={styles.items}>
            <div className={styles.itemimg}>
            <Image
            className={styles.benefits_image}
            src="/images/Trident/benefits/image 1085.png"
            alt="Instagram"
            width={100} 
            height={100} 
          />
          </div>
            <div className={styles.itempara}>
              <h3 className={styles.item_heading}>Enhancing Projects and education</h3>
              <p className={styles.itempara_para}>Analyze your operating system for signs of tampering that could compromise security, such as Jailbreaking.</p>
            </div>
          </div>

          <div className={styles.items}>
            <div className={styles.itemimg}>
            <Image
            className={styles.benefits_image}
            src="/images/Trident/benefits/image 1080.png"
            alt="Instagram"
            width={100} 
            height={100} 
          />
          </div>
            <div className={styles.itempara}>
              <h3 className={styles.item_heading}>Opportunities</h3>
              <p className={styles.itempara_para}>Our intelligent scan will either safely remove threats for you or provide easy-to-follow instructions.</p>
            </div>
          </div>

          <div className={styles.items}>
            <div className={styles.itemimg}>
            <Image
            className={styles.benefits_image}
            src="/images/Trident/benefits/image 1082.png"
            alt="Instagram"
            width={100} 
            height={100} 
          />
          </div>
            <div className={styles.itempara}>
              <h3 className={styles.item_heading}>Practical Applications</h3>
              <p className={styles.itempara_para}>We create easy to use apps that can check your device for vulnerabilities in a matter of minutes.</p>
            </div>
          </div>

          </div>
        </div>

        <div className={styles.sponsors}>
          
          <h2 className={styles.sponsors_title}>Our Sponsors</h2>
          <div className={styles.sponsor_images}>
          <div><Image
            src="/images/Trident/sponsors/image 1064.png"
            alt="Instagram"
            width={300} 
            height={130}/>
            </div>
            <div><Image
            src="/images/Trident/sponsors/image 1070.png"
            alt="Instagram"
            width={300} 
            height={130}/>
            </div>
            <div><Image
            src="/images/Trident/sponsors/image 1079.png"
            alt="Instagram"
            width={250} 
            height={130}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
