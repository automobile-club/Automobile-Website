import styles from "@/styles/landing.module.css";
import Navbar from "@/components/Navbar";
export default function About() {
  return (
    <body className={styles.main}>
      <div className={styles.sae_intro}>
        <div className={styles.left_wrapper_saeintro}>
          <div className={styles.cards_saeintro}>
            <img className={styles.cards_img_saeintro} src="cards.png" alt="" />
          </div>
        </div>
        <div className={styles.right_wrapper_saeintro}>
          <div className={styles.sae_headings}>
            <p className={styles.sae_name_text}>SAE</p>
            <p className={styles.sae_collegiate_text}>Collegiate Club</p>
          </div>
          <div className={styles.sae_content}>
            <p className={styles.sae_long_text}>
              It is a student organization at Indian Institute of Technology,
              (BHU) Varanasi.{} It focuses on promoting automotive engineering
              and provides members with opportunities to participate in
              technical events, competitions, and hands-on projects related to
              vehicle design and building.
            </p>
          </div>
          <div className={styles.social_media}>
            <div className={styles.instagram}>
              <a href="#">
                <img
                  className={styles.instagram_img}
                  src="instagram.png"
                  alt=""
                />
              </a>
            </div>
            <div className={styles.facebook}>
              <a href="#">
                <img
                  className={styles.facebook_img}
                  src="facebook.png"
                  alt=""
                />
              </a>
            </div>
            <div className={styles.linkedIn}>
              <a href="#">
                <img
                  className={styles.linkedIn_img}
                  src="linkedIn.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className={styles.line}></div>
        </div>
      </div>
      <div className={styles.sae_ourteams}>
        <div className={styles.left_wrapper_ourteams}></div>
        <div className={styles.right_wrapper_ourteams}>
          <div className={styles.cards_ourteams}>
            <div className={styles.cardie}>
              <h2>Card Heading</h2>
              <p className={styles.cardcontent_ourteams}>
                Short content describing the card goes here. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Vestibulum rhoncus
                blandit nibh, sed molestie nulla dapibus vel. Aliquam pharetra
                ex in justo pulvinar, eu efficitur nisi bibendum.{" "}
              </p>
            </div>
            <div className={styles.cardie}><h2>Card Heading</h2>
              <p className={styles.cardcontent_ourteams}>
                Short content describing the card goes here. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Vestibulum rhoncus
                blandit nibh, sed molestie nulla dapibus vel. Aliquam pharetra
                ex in justo pulvinar, eu efficitur nisi bibendum.{" "}
              </p></div>
            <div className={styles.cardie}><h2>Card Heading</h2>
              <p className={styles.cardcontent_ourteams}>
                Short content describing the card goes here. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Vestibulum rhoncus
                blandit nibh, sed molestie nulla dapibus vel. Aliquam pharetra
                ex in justo pulvinar, eu efficitur nisi bibendum.{" "}
              </p></div>
            <div className={styles.cardie}><h2>Card Heading</h2>
              <p className={styles.cardcontent_ourteams}>
                Short content describing the card goes here. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Vestibulum rhoncus
                blandit nibh, sed molestie nulla dapibus vel. Aliquam pharetra
                ex in justo pulvinar, eu efficitur nisi bibendum.{" "}
              </p></div>
          </div>
        </div>
      </div>
    </body>
  );
}
