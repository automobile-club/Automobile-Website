import styles from '@/styles/OrangeSection.module.css'
import Image from 'next/image'

const OrangeSection = () => {
  return (
    <div>
      <div className={styles.newBlogIdeas}>
        <Image
          className={styles.bulb}
          src="/images/social/bulb.png"
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
              src="/images/social/gmail.svg"
              alt="gmail"
              width={40}
              height={50.71}
            />
            saecollegiateclub.iitbhu@gmail.com
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrangeSection
