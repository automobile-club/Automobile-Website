import styles from '@/styles/HeroSection.module.css'
import Image from 'next/image'

type HeroSectionProps = {
  title: string
  content: string
}

const HeroSection = ({ title, content }: HeroSectionProps) => {
  return (
    <div className={styles.sae_intro}>
      <h1 className={styles.sae_headings}>{title}</h1>
      <p className={styles.sae_long_text}>{content}</p>
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
            className={styles.linkedIn_img}
            src="/images/social/linkedin_hero.svg"
            alt="linkedIn"
            width={54}
            height={54}
          />
        </a>
      </div>
      <div className={styles.line}></div>
    </div>
  )
}
export default HeroSection
