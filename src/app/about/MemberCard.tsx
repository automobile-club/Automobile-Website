import React from 'react'
import styles from '@/styles/MemberCard.module.css'

interface MemberCardProps {
  imageSrc: string
  memberName: string
  memberDesignation: string
  memberInstagram: string
  memberLinkedIn: string
}

const MemberCard: React.FC<MemberCardProps> = ({
  imageSrc,
  memberName,
  memberDesignation,
  memberInstagram,
  memberLinkedIn,
}) => {
  return (
    <div className={styles.member}>
      <div className={styles.circle}>
        <img src={imageSrc} alt={memberName} />
        <div className={styles.overlay}>
          <a href={memberInstagram}>
            <img
              src="/images/social/instagram_hero.svg"
              alt="instagram"
              width={50}
              height={50}
            />
          </a>
          <a href={memberLinkedIn}>
            <img
              src="/images/social/linkedin_hero.svg"
              alt="LinkedIn"
              width={50}
              height={50}
            />
          </a>
        </div>
      </div>
      <p className={styles.memberName}>{memberName}</p>
      <p className={styles.memberDesignation}>{memberDesignation}</p>
    </div>
  )
}

export default MemberCard
