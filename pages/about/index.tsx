import styles from "@/styles/about.module.css";
import Navbar from "@/components/Navbar";
import ReactPlayer from "react-player";
export default function About() {
  return (
    <>
      <Navbar BgColor="black" />
      <div className={styles.first_section}>
        <div className={styles.about}>
          <h1>About Us..</h1>
          <div className={styles.desc}>
            The SAE Collegiate Club at the Indian Institute of Technology (IIT) BHU is a dynamic and vibrant community of engineering enthusiasts dedicated to all things automotive. Our club serves as a melting pot of creativity, innovation, and engineering excellence, providing a platform for students to immerse themselves in the thrilling world of automobiles.
          </div>
          <hr />
        </div>
        <div className={styles.star}>
          <img alt="stars" src="/images/star.png" />
        </div>
        <div className={styles.intro}>
          <div className={styles.player}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=Y-fVS9FSoXw"
              height="100%"
              width="100%"
            />
          </div>
          <div className={styles.intro_text}>Watch Our Intro Video<br></br>
            <button className={styles.youtube_btn}>
              Watch on &nbsp;
              <img alt="youtube" src="/images/feYoutube2.png" />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.second_section}>
        <h1>Team Trident</h1>
        <div className={styles.content}>
          <div className={styles.left}>
            <img src="/images/TeamTrident.png" alt="team_trident" />
          </div>
          <div className={styles.right}>
            Team Trident, a distinguished division within the SAE Collegiate
            Club at IIT BHU, has a rich legacy of innovation and engineering
            prowess. Originally focused on All-Terrain Vehicles (ATVs), they
            have transitioned to an exciting new frontier – Formula SAE (FSAE).
            With an unquenchable thirst for engineering excellence, Team Trident
            is committed to designing and building high-performance race cars
            that compete globally. Their journey epitomizes teamwork,
            dedication, and a relentless pursuit of perfection. Leveraging their
            expertise in vehicle dynamics, aerodynamics, and cutting-edge
            technology, they strive to create competitive FSAE cars that push
            boundaries and leave an indelible mark in motorsports. Join Team
            Trident as they rev up their engines and embark on this thrilling
            FSAE adventure, where they aim not only to compete but to redefine
            the standards of automotive engineering. To learn more about Team
            Trident, visit the “Team Trident” page.
          </div>
        </div>
      </div>
      <div className={styles.third_section}>
        <h1>Team RC Car</h1>
        <div className={styles.content}>
          <div className={styles.right}>
            The RC Car Team at IIT BHU, a subunit of the SAE Collegiate Club,
            has evolved from its roots in building remote-controlled cars to
            embracing the forefront of technological innovation – automation.
            With a strong foundation in engineering and a track record of
            building exceptional RC cars, this team is now dedicated to crafting
            autonomous vehicles. They aim to combine artificial intelligence,
            robotics, and advanced sensor technology to create self-driving RC
            cars. By pushing the boundaries of autonomy, they are honing their
            engineering skills and contributing to the future of transportation
            technology. Join them as they navigate the exciting terrain of
            automation and redefine the possibilities of RC car technology.
          </div>
          <div className={styles.left}>
            <img src="/images/TeamTrident.png" alt="team_trident" />
          </div>
        </div>
      </div>
      {/* <div className={styles.fourth_section}>
        <h1>Team RC Car</h1>
        <div className={styles.content}>
          <div className={styles.left}>
            <img src="/images/TeamTrident.png" alt="team_trident" />
          </div>
          <div className={styles.right}>
            Team RC Car, which consists of engineering students from IIT BHU, is
            getting ready for a track racing competition. Their objective is to
            develop a quick and effective car that can navigate the track with
            precision. The team is using advanced software tools for designing
            and up-to-date manufacturing techniques for building the car
            components.
          </div>
        </div>
      </div> */}
      <div className={styles.fifth_section}>
        <h1>Our Team</h1>
        <div className={styles.helm}>
          <div className={styles.member}>
            <div className={styles.circle}>
              <img src="/images/Helm1.png" alt="helm1" />
              <div className={styles.overlay}>
                <a href="#">
                  <img
                    src="/images/instagram_hero.svg"
                    alt="instagram"
                    width={50}
                    height={50}
                  />
                </a>
                <a href="#">
                  <img
                    src="/images/facebook_hero.svg"
                    alt="Facebook"
                    width={50}
                    height={50}
                  />
                </a>
                <a href="#">
                  <img
                    src="/images/linkedIn_hero.svg"
                    alt="LinkedIn"
                    width={50}
                    height={50}
                  />
                </a>
              </div>
            </div>
            <p className={styles.memberName}>Name 1</p>
            <p className={styles.memberDesignation}>Name 3</p>
          </div>

          <div className={styles.member}>
            <div className={styles.circle}>
              <img src="/images/Helm2.png" alt="helm2" />
              <div className={styles.overlay}>
                <a href="#">
                  <img
                    src="/images/instagram_hero.svg"
                    alt="instagram"
                    width={50}
                    height={50}
                  />
                </a>
                <a href="#">
                  <img
                    src="/images/facebook_hero.svg"
                    alt="Facebook"
                    width={50}
                    height={50}
                  />
                </a>
                <a href="#">
                  <img
                    src="/images/linkedIn_hero.svg"
                    alt="LinkedIn"
                    width={50}
                    height={50}
                  />
                </a>
              </div>
            </div>
            <p className={styles.memberName}>Name 2</p>
            <p className={styles.memberDesignation}>Name 3</p>
          </div>

          <div className={styles.member}>
            <div className={styles.circle}>
              <img src="/images/Helm3.png" alt="helm3" />
              <div className={styles.overlay}>
                <a href="#">
                  <img
                    src="/images/instagram_hero.svg"
                    alt="instagram"
                    width={50}
                    height={50}
                  />
                </a>
                <a href="#">
                  <img
                    src="/images/facebook_hero.svg"
                    alt="Facebook"
                    width={50}
                    height={50}
                  />
                </a>
                <a href="#">
                  <img
                    src="/images/linkedIn_hero.svg"
                    alt="LinkedIn"
                    width={50}
                    height={50}
                  />
                </a>
              </div>
            </div>
            <p className={styles.memberName}>Name 3</p>
            <p className={styles.memberDesignation}>Name 3</p>
          </div>
        </div>
        <div className={styles.helm2}>
          <div className={styles.member}>
            <div className={styles.circle}>
              <img src="/images/Helm3.png" alt="helm3" />
              <div className={styles.overlay}>
                <a href="#">
                  <img
                    src="/images/instagram_hero.svg"
                    alt="instagram"
                    width={50}
                    height={50}
                  />
                </a>
                <a href="#">
                  <img
                    src="/images/facebook_hero.svg"
                    alt="Facebook"
                    width={50}
                    height={50}
                  />
                </a>
                <a href="#">
                  <img
                    src="/images/linkedIn_hero.svg"
                    alt="LinkedIn"
                    width={50}
                    height={50}
                  />
                </a>
              </div>
            </div>
            <p className={styles.memberName}>Name 3</p>
            <p className={styles.memberDesignation}>Name 3</p>
          </div>
          <div className={styles.member}>
            <div className={styles.circle}>
              <img src="/images/Helm3.png" alt="helm3" />
              <div className={styles.overlay}>
                <a href="#">
                  <img
                    src="/images/instagram_hero.svg"
                    alt="instagram"
                    width={50}
                    height={50}
                  />
                </a>
                <a href="#">
                  <img
                    src="/images/facebook_hero.svg"
                    alt="Facebook"
                    width={50}
                    height={50}
                  />
                </a>
                <a href="#">
                  <img
                    src="/images/linkedIn_hero.svg"
                    alt="LinkedIn"
                    width={50}
                    height={50}
                  />
                </a>
              </div>
            </div>
            <p className={styles.memberName}>Name 3</p>
            <p className={styles.memberDesignation}>Name 3</p>
          </div>
        </div>
      </div>
    </>
  );
}
