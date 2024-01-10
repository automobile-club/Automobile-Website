import styles from "@/styles/about.module.css";
import Navbar from "@/components/Navbar";
import ReactPlayer from "react-player";
import MemberCard from "./memberCard";
import AboutTeam from "./aboutTeam";
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
              url="https://youtu.be/FCpxpfrwaQs?si=xkxNl9p7Gql7hnuw"
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
      <div className="about_teams">
        <div className={styles.second_section}>
          <AboutTeam
            aboutText="Team Trident, a distinguished division within the SAE Collegiate Club at IIT BHU, has a rich legacy of innovation and engineering prowess. Their journey epitomizes teamwork, dedication, and a relentless pursuit of perfection.
          "
            heading="Team Trident"
            img="/images/testimg.png"
            img2="/images/testimg.png"
          />
        </div>
        <div className={styles.third_section}>
          <AboutTeam
            aboutText="The RC Car Team at IIT BHU, a subunit of the SAE Collegiate Club, has evolved from its roots in building remote-controlled cars to embracing the forefront of technological innovation – automation.
          "
            heading="Team RC Car"
            img="/images/testimg.png"
            img2="/images/testimg.png"
          />
        </div>
      </div>
      <div className={styles.fifth_section}>
        <div className={styles.heading_box}>
          <div className={styles.fifth_section_heading}>Our Team</div>
        </div>
        <div className={styles.helm}>
          <MemberCard
            imageSrc="/images/AmanSrivastava.png"
            memberName="Aman Srivastava"
            memberDesignation="Jt. Secretary"
          />
          <MemberCard
            imageSrc="/images/Shruti.jpg"
            memberName="Shruti Jha"
            memberDesignation="Secretary"
          />
          <MemberCard
            imageSrc="/images/Anshuman.jpeg"
            memberName="Anshuman Chaurasia"
            memberDesignation="Jt. Secretary"
          />
        </div>
        <div className={styles.helm2}>
          <MemberCard
            imageSrc="/images/NisthaJain.jpeg"
            memberName="Nistha Jain"
            memberDesignation="Design Head"
          />
          <MemberCard
            imageSrc="/images/SaiyamJain.png"
            memberName="Saiyam Jain"
            memberDesignation="Web Team Head"
          />
          <MemberCard
            imageSrc="/images/PaltiSumasri.jpeg"
            memberName="Palti Sumasri"
            memberDesignation="Social Content Head"
          />
        </div>
      </div>
    </>
  );
}
