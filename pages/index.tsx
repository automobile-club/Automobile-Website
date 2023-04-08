import Navbar from "@/components/Navbar";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

const srclogo = "/images/SAEVectorWhite.svg";
const buttonstyle = styles.button;
const navbarColor = styles.navbar;

function Home() {
  return (
    <>
      <Navbar srclogo={srclogo}  buttonstyle={buttonstyle} navbarColor={navbarColor}/>
      <body className={styles.main}>
        <div className={styles.sae_intro}>
          <div className={styles.left_wrapper_saeintro}>
            <div className={styles.cards_saeintro}>
              <Image
                className={styles.cards_img_saeintro}
                src="/images/cards.png"
                alt=""
                width={600}
                height={600}
              />
            </div>
          </div>
          <div className={styles.right_wrapper_saeintro}>
            <div className={styles.sae_headings}>
              <h1 className={styles.sae_name_text}>SAE</h1>
              <h1 className={styles.sae_collegiate_text}>Collegiate Club</h1>
            </div>
            <div className={styles.sae_content}>
              <h1 className={styles.sae_long_text}>
                It is a student organization at Indian Institute of Technology,
                (BHU) Varanasi.{} It focuses on promoting automotive engineering
                and provides members with opportunities to participate in
                technical events, competitions, and hands-on projects related to
                vehicle design and building.
              </h1>
            </div>
            <div className={styles.social_media}>
              <div className={styles.instagram}>
                <a href="#">
                  <Image
                    className={styles.instagram_img}
                    src="/images/instagram.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </a>
              </div>
              <div className={styles.facebook}>
                <a href="#">
                  <Image
                    className={styles.facebook_img}
                    src="/images/facebook.png"
                    alt=""
                    width={60}
                    height={40}
                  />
                </a>
              </div>
              <div className={styles.linkedIn}>
                <a href="#">
                  <Image
                    className={styles.linkedIn_img}
                    src="/images/linkedIn.png"
                    alt=""
                    width={55}
                    height={37}
                  />
                </a>
              </div>
            </div>
            <div className={styles.line}></div>
          </div>
        </div>
        {/* our teams section  */}
        {/* our teams section  */}
        <div className={styles.sae_ourteams}>
          <div className={styles.left_wrapper_ourteams}>
            <div className={styles.line1}></div>
            <div className={styles.heading_ourteams}>
              <h1 className={styles.heading_content_ourteams}>Our Teams </h1>
            </div>
            <div className={styles.long_content_ourteams}>
              <h1 className={styles.text_longcontent_ourteams}>
                Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit
              </h1>
            </div>
            <div className={styles.colored_div}></div>
          </div>
          <div className={styles.right_wrapper_ourteams}>
            <div className={styles.cards_ourteams}>
              <div className={styles.uppercards_ourteams}>
                <div className={styles.cards_wholecontent_ourteams}>
                  <h2 className={styles.cards_headings_ourteams}>
                    Card Heading
                  </h2>
                  <h1 className={styles.cardcontent_ourteams}>
                    Short content describing the card goes here. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit.{" "}
                  </h1>
                </div>
                <div className={styles.cards_wholecontent_ourteams}>
                  <h2 className={styles.cards_headings_ourteams}>
                    Card Heading
                  </h2>
                  <h1 className={styles.cardcontent_ourteams}>
                    Short content describing the card goes here. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit.{" "}
                  </h1>
                </div>
              </div>
              <div className={styles.lowercards_ourteams}>
                <div className={styles.cards_wholecontent_ourteams}>
                  <h2 className={styles.cards_headings_ourteams}>
                    Card Heading
                  </h2>
                  <h1 className={styles.cardcontent_ourteams}>
                    Short content describing the card goes here. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit.{" "}
                  </h1>
                </div>
                <div className={styles.cards_wholecontent_ourteams}>
                  <h2 className={styles.cards_headings_ourteams}>
                    Card Heading
                  </h2>
                  <h1 className={styles.cardcontent_ourteams}>
                    Short content describing the card goes here. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit.{" "}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Home;
