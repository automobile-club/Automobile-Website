import styles from '@/styles/Timeline.module.css'

const Timeline = () => {
  return (
    <section className={styles.timeline}>
      <div className={styles.timeline_item}>
        <div className={styles.timeline_img}></div>

        <div className={`${styles.timeline_content} ${styles.timeline_card}`}>
          <div className={styles.timeline_img_header}>
            <h2>IFT&apos;18 Techfest&apos;18</h2>
          </div>
          <div className={styles.date}>IIT Bombay</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
            ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed
            nulla voluptatem recusandae dolor, nostrum excepturi amet in
            dolores. Alias, ullam.
          </p>
        </div>
      </div>

      <div className={styles.timeline_item}>
        <div className={styles.timeline_img}></div>

        <div className={`${styles.timeline_content} ${styles.timeline_card}`}>
          <div className={styles.timeline_img_header}>
            <h2>Burnout&apos;18 Techniche&apos;19</h2>
          </div>
          <div className={styles.date}>IIT Guwahati</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
            ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed
            nulla voluptatem recusandae dolor, nostrum excepturi amet in
            dolores. Alias, ullam.
          </p>
        </div>
      </div>

      <div className={styles.timeline_item}>
        <div className={styles.timeline_img}></div>

        <div className={`${styles.timeline_content} ${styles.timeline_card}`}>
          <div className={styles.timeline_img_header}>
            <h2>Axelerate&apos;19 Technex&apos;19</h2>
          </div>
          <div className={styles.date}>IIT Varanasi</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
            ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed
            nulla voluptatem recusandae dolor, nostrum excepturi amet in
            dolores. Alias, ullam.
          </p>
        </div>
      </div>

      <div className={styles.timeline_item}>
        <div className={styles.timeline_img}></div>

        <div className={`${styles.timeline_content} ${styles.timeline_card}`}>
          <div className={styles.timeline_img_header}>
            <h2>Axelerate&apos;20 Technex&apos;20</h2>
          </div>
          <div className={styles.date}>IIT Varanasi</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
            ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed
            nulla voluptatem recusandae dolor, nostrum excepturi amet in
            dolores. Alias, ullam.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Timeline
