import { FC } from 'react'
import PropTypes from 'prop-types'
import styles from '@/styles/AboutTeam.module.css'

interface AboutTeamProps {
  aboutText: string
  heading: string
  img: string
  img2: string
}

const AboutTeam: FC<AboutTeamProps> = ({ aboutText, heading, img, img2 }) => {
  return (
    <div className={styles.container}>
      <div className={styles.about_team}>
        <div className={styles.about_image1}>
          <img alt="Img1" src={img} />
        </div>
        <div className={styles.about_team_text}>
          <div className={styles.text_container}>
            <div className={styles.about_team_heading}>{heading}</div>
            <div className={styles.about_team_desc}>{aboutText}</div>
          </div>
        </div>
        <div className={styles.about_image2}>
          <img alt="Img2" src={img2} />
        </div>
      </div>
    </div>
  )
}

AboutTeam.propTypes = {
  aboutText: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  img2: PropTypes.string.isRequired,
}

export default AboutTeam
