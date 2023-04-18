/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <>
      <Navbar BgColor="black" />
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
                  src="/images/instagram_hero.png"
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
                  src="/images/facebook_hero.png"
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
                  src="/images/linkedIn_hero.png"
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
          <div className={styles.heading_ourteams}>
            <h1 className={styles.heading_content_ourteams}>Our Teams </h1>
          </div>
          <div className={styles.long_content_ourteams}>
            <h1 className={styles.text_longcontent_ourteams}>
              Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit
            </h1>
          </div>
          <div className={styles.colored_div}></div>
        </div>
        <div className={styles.right_wrapper_ourteams}>
          <div className={styles.cards_ourteams}>
            <div className={styles.uppercards_ourteams}>
              <div className={styles.cards_wholecontent_ourteams}>
                <h2 className={styles.cards_headings_ourteams}>Card Heading</h2>
                <h1 className={styles.cardcontent_ourteams}>
                  Short content describing the card goes here. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit.
                </h1>
              </div>
              <div className={styles.cards_wholecontent_ourteams}>
                <h2 className={styles.cards_headings_ourteams}>Card Heading</h2>
                <h1 className={styles.cardcontent_ourteams}>
                  Short content describing the card goes here. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit.
                </h1>
              </div>
            </div>
            <div className={styles.lowercards_ourteams}>
              <div className={styles.cards_wholecontent_ourteams}>
                <h2 className={styles.cards_headings_ourteams}>Card Heading</h2>
                <h1 className={styles.cardcontent_ourteams}>
                  Short content describing the card goes here. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit.
                </h1>
              </div>
              <div className={styles.cards_wholecontent_ourteams}>
                <h2 className={styles.cards_headings_ourteams}>Card Heading</h2>
                <h1 className={styles.cardcontent_ourteams}>
                  Short content describing the card goes here. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* our blogs section */}
      {/* our blogs section */}
      <div className={styles.blogs}>
        <div className={styles.blogHeading}>
          <h1>Our Blogs</h1>
        </div>
        <div className={styles.blog_container}>
          <div className={styles.blog_card}>
            <button>Read More</button>
          </div>
          <div className={styles.blog_card}>
            <button>Read More</button>
          </div>
          <div className={styles.blog_card}>
            <button>Read More</button>
          </div>
          <div className={styles.blog_card}>
            <button>Read More</button>
          </div>
        </div>
      </div>

      {/* orange section */}
      {/* orange section */}
      <div className={styles.orangeSection}>
        <img src="/images/orangeSection.svg" />
      </div>

      {/* our achievments section */}
      {/* our achievments section */}
      <div className={styles.ourachievments_sae}>
        <div className={styles.ourachievments_heading}>
          <h1 className={styles.ourachievments_heading_text}>
            Our Achievements
          </h1>
        </div>
        <div className={styles.achievments_cards_sae}>
          <div className={styles.achievments_card1_sae}>
            <img
              className={styles.Techfest_img}
              src="/images/Techfest_img.png"
              alt="Techfest"
            />
            <div className={styles.achievments_card1_text}>
              Top 10
              <br />
              in IFT&apos;18
              <br /> Techfest&apos;18
              <br />
              IIT Bombay
            </div>
          </div>

          <div className={styles.achievments_card1_sae}>
            <img
              className={styles.Techniche_img}
              src="/images/Techniche_img.png"
              alt="Techniche"
            />
            <div className={styles.achievments_card1_text}>
              2nd Position
              <br />
              Burnout&apos;18
              <br />
              Techniche&apos;19
              <br />
              IIT Guwahati
            </div>
          </div>

          <div className={styles.achievments_card1_sae}>
            <img
              className={styles.Technex_img}
              src="/images/Technex_img.png"
              alt="Technex"
            />
            <div className={styles.achievments_card1_text}>
              1st Position
              <br />
              Axelerate&apos;19 <br />
              Technex&apos;19 <br />
              IIT BHU
            </div>
          </div>
        </div>
      </div>

      {/* our mentors section */}
      {/* our mentors section */}

      <div className={styles.ourmentors_sae}>
        <div className={styles.ourmentors_heading}>
          <h1 className={styles.ourmentors_heading_text}> Our Mentors</h1>
        </div>
        <div className={styles.ourmentors_cards_sae}>
          <div className={styles.ourmentors_card1_sae}>
            <img
              className={styles.ourmentors_img}
              src="/images/mentors1.png"
              alt="mentor"
            />
            <div className={styles.ourmentors_card1_content}>
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
              alt="mentor"
            />
            <div className={styles.ourmentors_card1_content}>
              <h3 className={styles.ourmentors_card1_heading_text}>
                Amit Kumar
              </h3>
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
              alt="mentor"
            />
            <div className={styles.ourmentors_card1_content}>
              <h3 className={styles.ourmentors_card1_heading_text}>
                Amit Kumar
              </h3>
              <span className={styles.ourmentors_card1_text}>
                Proud to be an SAE Club IIT BHU alumnus, where innovation and
                teamwork fueled my passion for engineering excellence
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* our events section */}
      {/* our events section */}

      <div className={styles.events}>
        <div className={styles.eventHeading}>
          <h1>Events & Workshop</h1>
        </div>

        <div className={styles.eventContainer}>
          <div className={styles.upperEvent}>
            <div className={styles.ueEach}>
              <img src="/images/eventImg.svg" />
              <div className={styles.ueContent}>
                <span>The culture of SAE</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.Nunc vel risus commodo viverra.
                </p>
                <Link href="/">Read more </Link>
              </div>
            </div>
            <div className={styles.ueEach}>
              <img src="/images/eventImg.svg" />
              <div className={styles.ueContent}>
                <span>The culture of SAE</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.Nunc vel risus commodo viverra.
                </p>
                <Link href="/">Read more </Link>
              </div>
            </div>
          </div>
          <div className={styles.lowerEvent}>
            <div className={styles.leEach}>
              <img src="/images/eventImg.svg" />
              <div className={styles.leContent}>
                <span>The culture of SAE</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.Nunc vel risus commodo viverra.
                </p>
                <Link href="/">Read more </Link>
              </div>
            </div>
            <div className={styles.leEach}>
              <img src="/images/eventImg.svg" />
              <div className={styles.leContent}>
                <span>The culture of SAE</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.Nunc vel risus commodo viverra.
                </p>
                <Link href="/">Read more </Link>
              </div>
            </div>
            <div className={styles.leEach}>
              <img src="/images/eventImg.svg" />
              <div className={styles.leContent}>
                <span>The culture of SAE</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.Nunc vel risus commodo viverra.
                </p>
                <Link href="/">Read more </Link>
              </div>
            </div>
          </div>
        </div>
        <button className={styles.vmBtn}>View More</button>
      </div>
    </>
  );
}

export default Home;
