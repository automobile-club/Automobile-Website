import Nav from "react-bootstrap/Nav";
import Image from "next/image";
import styles from "@/styles/navbar.module.css";
import Link from "next/link";

function NavBar(props: {BgColor: string}) {
  return (
      <div className={props.BgColor === "black" ? styles.navbarBlack : props.BgColor === "white" ? styles.navbarWhite: ""}>
        <Link href="/">
          <Image src={props.BgColor === "black" ? "/images/SAEVectorWhite.svg" : props.BgColor === "white" ? "/images/SAE.png" : ""} alt="SAE" width={150} height={50} />
        </Link>
        <div className={styles.linkContainer}>
          <Nav.Link href="/" className={styles.links}>
            Home
          </Nav.Link>
          <Nav.Link href="/about" className={styles.links}>
            About
          </Nav.Link>
          <Nav.Link href="/events" className={styles.links}>
            Events
          </Nav.Link>
          <Nav.Link href="/blog" className={styles.links}>
            Blogs
          </Nav.Link>
          <Nav.Link href="/projects" className={styles.links}>
            Projects
          </Nav.Link>
        </div>
        <button className={styles.signInBtn}>Sign In</button>
      </div>
  );
}

export default NavBar;