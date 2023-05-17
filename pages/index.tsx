/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import BlogContainer from "@/components/BlogContainer";
import DirectionCards from "@/components/DirectionCards/DirectionCards";

function Home() {
  return (
    <>
      <Navbar BgColor="black" />

      {/* Hero Section */}
      {/* Hero Section */}
      <div className={styles.sae_intro}>
        <Image
          className={styles.cards_img_saeintro}
          src="/images/cards.png"
          alt=""
          width={600}
          height={600}
        />
        <div className={styles.right_wrapper_saeintro}>
          <div className={styles.sae_headings}>
            <h1 className={styles.sae_name_text}>SAE Collegiate Club</h1>
          </div>
          <div className={styles.sae_content}>
            <p className={styles.sae_long_text}>
              It is a student organization at Indian Institute of Technology,
              (BHU) Varanasi. It focuses on promoting automotive engineering and
              provides opportunities to participate in technical events,
              competitions, and hands-on projects related to vehicle design.
            </p>
          </div>
          <div className={styles.social_media}>
            <a href="#">
              <img
                className={styles.instagram_img}
                src="/images/instagram_hero.png"
                alt=""
              />
            </a>
            <a href="#">
              <img
                className={styles.facebook_img}
                src="/images/facebook_hero.png"
                alt=""
              />
            </a>
            <a href="#">
              <img
                className={styles.linkedIn_img}
                src="/images/linkedIn_hero.png"
                alt=""
              />
            </a>
          </div>
          <div className={styles.line}></div>
        </div>
      </div>

      {/* our achievments section */}
      {/* our achievments section */}
      <div className={styles.ourachievments_sae}>
        <div className={styles.ourachievments_heading}>
          <h2 className={styles.ourmentors_heading_text}>Our Achievements</h2>
        </div>
        <div className={styles.achievments_cards_sae}>
          <div className={styles.ourmentors_card1_sae}>
            <img
              className={styles.ourmentors_img}
              src="/images/Techfest_img.png"
              alt="Mentors"
            />
            <div className={styles.achievments_card1_text}>
              <h3 className={styles.ourmentors_card1_heading_text}>
                IIT Bombay
              </h3>
              <span
                className={`${styles.ourmentors_card1_text} ${styles.ourachievments_card1_text}`}
              >
                Top 10 in IFT&apos;18 Techfest&apos;18
              </span>
            </div>
          </div>

          <div className={styles.ourmentors_card1_sae}>
            <img
              className={styles.ourmentors_img}
              src="/images/Techniche_img.png"
              alt="Mentors"
            />
            <div className={styles.achievments_card1_text}>
              <h3 className={styles.ourmentors_card1_heading_text}>
                IIT Guwahati
              </h3>
              <span
                className={`${styles.ourmentors_card1_text} ${styles.ourachievments_card1_text}`}
              >
                2nd Position Burnout&apos;18 Techniche&apos;19
              </span>
            </div>
          </div>

          <div className={styles.ourmentors_card1_sae}>
            <img
              className={styles.ourmentors_img}
              src="/images/Technex_img.png"
              alt="Technex"
            />
            <div className={styles.achievments_card1_text}>
              <h3 className={styles.ourmentors_card1_heading_text}>
                IIT Varanasi
              </h3>
              <span
                className={`${styles.ourmentors_card1_text} ${styles.ourachievments_card1_text}`}
              >
                1st Position Axelerate&apos;19 Technex&apos;19
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* our events section */}
      {/* our events section */}
      <div className={styles.events}>
        <div className={styles.eventHeading}>
          <h2>Events & Workshop</h2>
        </div>
        <div className={styles.card_container}>
          <div className={styles.row}>
            <div className={styles.card}>
              <img src="/images/eventImg.svg" alt="The Culture of SAE" />
              <h2>The Culture of SAE</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
                vel risus commodo viverra.
              </p>
              <a href="#">Read More</a>
            </div>
            <div className={styles.card}>
              <img src="/images/eventImg.svg" alt="The Culture of SAE" />
              <h2>The Culture of SAE</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
                vel risus commodo viverra.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.card}>
              <img src="/images/eventImg.svg" alt="The Culture of SAE" />
              <h2>The Culture of SAE</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
                vel risus commodo viverra.
              </p>
              <a href="#">Read More</a>
            </div>
            <div className={styles.card}>
              <img src="/images/eventImg.svg" alt="The Culture of SAE" />
              <h2>The Culture of SAE</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
                vel risus commodo viverra.
              </p>
              <a href="#">Read More</a>
            </div>
            <div className={styles.card}>
              <img src="/images/eventImg.svg" alt="The Culture of SAE" />
              <h2>The Culture of SAE</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
                vel risus commodo viverra.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
        <Link href="/blog" className={`${styles.vmBtn} ${styles.ourBlogBtn}`}>
          View More
        </Link>
      </div>

      {/* orange section */}
      {/* orange section */}
      <div className={styles.orangeSection}>
        <img src="/images/orangeSection.svg" alt="orange" />
      </div>

      {/* our blogs section */}
      {/* our blogs section */}
      <div className={styles.blogs}>
        <div className={styles.blogHeading}>
          <h2>Our Blogs</h2>
        </div>
        <BlogContainer numBlogCards={4} />
        <Link href="/blog" className={`${styles.vmBtn} ${styles.ourBlogBtn}`}>
          View More
        </Link>
      </div>

      {/* our mentors section */}
      {/* our mentors section */}
      <div className={styles.ourmentors_sae}>
        <div className={styles.ourachievments_heading}>
          <h2 className={styles.ourmentors_heading_text}>Our Mentors</h2>
        </div>
        <div className={styles.achievments_cards_sae}>
          <div className={styles.ourmentors_card1_sae}>
            <img
              className={styles.ourmentors_img}
              src="/images/mentors1.png"
              alt="Mentors"
            />
            <div className={styles.achievments_card1_text}>
              <h4 className={styles.ourmentors_card1_heading_text}>
                Amit Kumar
              </h4>
              <span className={styles.ourmentors_card1_text}>
                Proud to be an SAE Club IIT BHU alumnus, where innovation and
                teamwork fueled my passion for engineering excellence
              </span>
            </div>
          </div>

          <div className={styles.ourmentors_card1_sae}>
            <img
              className={styles.ourmentors_img}
              src="/images/mentors1.png"
              alt="Mentors"
            />
            <div className={styles.achievments_card1_text}>
              <h4 className={styles.ourmentors_card1_heading_text}>
                Amit Kumar
              </h4>
              <span className={styles.ourmentors_card1_text}>
                Proud to be an SAE Club IIT BHU alumnus, where innovation and
                teamwork fueled my passion for engineering excellence
              </span>
            </div>
          </div>

          <div className={styles.ourmentors_card1_sae}>
            <img
              className={styles.ourmentors_img}
              src="/images/mentors1.png"
              alt="Mentors"
            />
            <div className={styles.achievments_card1_text}>
              <h4 className={styles.ourmentors_card1_heading_text}>
                Amit Kumar
              </h4>
              <span className={styles.ourmentors_card1_text}>
                Proud to be an SAE Club IIT BHU alumnus, where innovation and
                teamwork fueled my passion for engineering excellence
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* our teams section  */}
      {/* our teams section  */}
      <div className={styles.sae_ourteams}>
        <div className={styles.left_wrapper_ourteams}>
          <div className={styles.heading_ourteams}>
            <h2 className={styles.heading_content_ourteams}>Our Teams </h2>
          </div>
          <p className={styles.text_longcontent_ourteams}>
            Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit
          </p>
          <Link href="/blog" className={`${styles.vmBtn} ${styles.ourBlogBtn}`}>
            View More
          </Link>
        </div>
        <div className={styles.right_wrapper_ourteams}>
          <DirectionCards />
        </div>
      </div>
    </>
  );
}

export default Home;
