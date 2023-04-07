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
        <div className={styles.left_wrapper_ourteams}>
          <div className={styles.heading_ourteams}>
            <h1 className={styles.heading_content_ourteams}>Our Teams </h1>
          </div>
          <div className={styles.long_content_ourteams}>
            <p className={styles.text_longcontent_ourteams}>
              Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit
            </p>
          </div>
          <div className={styles.colored_div}></div>
        </div>
        <div className={styles.right_wrapper_ourteams}>
          <div className={styles.cards_ourteams}>
            <div className={styles.cardie}>
              <h2>Card Heading</h2>
              <h1 className={styles.cardcontent_ourteams}>
                Short content describing the card goes here. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.{" "}
              </h1>
            </div>
            <div className={styles.cardie}>
              <h2>Card Heading</h2>
              <h1 className={styles.cardcontent_ourteams}>
                Short content describing the card goes here. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.{" "}
              </h1>
            </div>
            <div className={styles.cardie}>
              <h2>Card Heading</h2>
              <h1 className={styles.cardcontent_ourteams}>
                Short content describing the card goes here. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. .{" "}
              </h1>
            </div>
            <div className={styles.cardie}>
              <h2>Card Heading</h2>
              <h1 className={styles.cardcontent_ourteams}>
                Short content describing the card goes here. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
