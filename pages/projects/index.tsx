import styles from "@/styles/projects.module.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const srclogo = "/images/SAE.png";
const buttonstyle = styles.button;
const navbarColor = styles.navbar;

export default function Projects() {
  return (
    <>
      <Navbar
        srclogo={srclogo}
        buttonstyle={buttonstyle}
        navbarColor={navbarColor}
      />
      <div className={styles.achievements}>
        <h1>Our Achievements</h1>
        <h2>SAE(Society of Automotive Engineers) aims to give a platform to people who wish to learn about and build automobiles. Our teams take part in various RC and automotive events all round the year....</h2>
      </div>
    </>
  );
}
