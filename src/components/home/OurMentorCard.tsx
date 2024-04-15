import styles from '@/styles/OurMentorCard.module.css'

const MentorCard = () => {
  return (
    <div className={styles.projcard_container}>
      <div className={`${styles.projcard} ${styles.projcard_blue}`}>
        <div className={styles.projcard_innerbox}>
          <img
            className={styles.projcard_img}
            src="/images/home/mentor.jpg"
            alt="Project Image"
          />
          <div className={styles.projcard_textbox}>
            <div className={styles.projcard_title}>Card Title</div>
            <div className={styles.projcard_subtitle}>
              This explains the card in more detail
            </div>
            <div className={styles.projcard_bar}></div>
            <div className={styles.projcard_description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MentorCard
