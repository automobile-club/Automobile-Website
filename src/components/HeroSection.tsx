import styles from '@/styles/HeroSection.module.css'
import Image from 'next/image'

type HeroSectionProps = {
  title: string
  content: string
  isTrident?: boolean
}

const HeroSection = ({
  title,
  content,
  isTrident = false,
}: HeroSectionProps) => {
  return (
    <div className={styles.sae_intro}>
      <h1 className={styles.sae_headings}>{title}</h1>
      <p className={styles.sae_long_text}>{content}</p>
      <div className={styles.social_media}>
        <a
          href={
            !isTrident
              ? 'https://www.instagram.com/saecollegiateclubiitbhu/'
              : 'https://www.instagram.com/team_trident_iit_bhu/'
          }
        >
          <Image
            src="/images/social/instagram_hero.svg"
            alt="instagram"
            width={54}
            height={54}
          />
        </a>
        <a
          href={
            !isTrident
              ? 'https://www.facebook.com/SAEIITBHU/'
              : 'https://www.facebook.com/TeamTridentIITBHU/'
          }
        >
          <Image
            src="/images/social/facebook_hero.svg"
            alt="facebook"
            width={54}
            height={54}
          />
        </a>
        <a
          href={
            !isTrident
              ? 'https://in.linkedin.com/company/sae-collegiate-club-iit-varanasi'
              : 'https://www.linkedin.com/company/team-trident-iit-bhu'
          }
        >
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
