import styles from "@/styles/about.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReactPlayer from "react-player";
export default function About() {
  return (
    <>
      <Navbar BgColor="black" />
      <div className={styles.first_section}>
        <div className={styles.about}>
          <h1>About Us..</h1>
          <div className={styles.desc}>
            SAE(Society of Automotive Engineers) aims to give a platform to
            people who wish to learn about and build automobiles. Our teams take
            part in various RC and automotive events all round the year....
          </div>
          <hr />
        </div>
        <div className={styles.star}>
          <img src="/images/star.png" />
        </div>
        <div className={styles.intro}>
          <div className={styles.player}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=Y-fVS9FSoXw"
              height="100%"
              width="100%"
            />
          </div>
          <div className={styles.intro_text}>
            Watch Our Intro <br />
            Video
            <br />
            <button className={styles.youtube_btn}>
              Watch on &nbsp;
              <img src="/images/feYoutube2.png" />
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
            Team Trident is a group of IIT BHU engineering students preparing
            for Formula Bharat competition. They are designing a
            high-performance race car using advanced software tools and
            manufacturing techniques. The team is focusing on safety and
            reliability while rigorously testing their designs.
          </div>
        </div>
      </div>
      <div className={styles.third_section}>
        <h1>Team Rowbotics</h1>
        <div className={styles.content}>
          <div className={styles.right}>
            Team Rowbotics is a group of talented engineering students from IIT
            BHU who are participating in an upcoming RC boat competition. Their
            goal is to design an autonomous boat that can efficiently navigate
            through water and complete tasks. The team is utilizing advanced
            computer-aided design software and cutting-edge manufacturing
            techniques to build their boat.
          </div>
          <div className={styles.left}>
            <img src="/images/TeamTrident.png" alt="team_trident" />
          </div>
        </div>
      </div>
      <div className={styles.fourth_section}>
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
      </div>
      <div className={styles.fifth_section}>
        <h1>Our Helm</h1>
        <div className={styles.helm}>
          <img src="/images/Helm1.png" alt="helm1" />
          <img src="/images/Helm2.png" alt="helm1" />
          <img src="/images/Helm3.png" alt="helm1" />
        </div>
      </div>
      <Footer />
    </>
  );
}
