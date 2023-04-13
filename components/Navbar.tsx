import Nav from "react-bootstrap/Nav";
import Image from "next/image";
import styles from "@/styles/navbar.module.css";
import Link from "next/link";
import { useState } from "react";

function NavBar(props: { BgColor: string }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className={
        props.BgColor === "black"
          ? styles.navbarBlack
          : props.BgColor === "white"
          ? styles.navbarWhite
          : ""
      }
    >
      <Link href="/">
        <Image
          src={
            props.BgColor === "black"
              ? "/images/SAEVectorWhite.svg"
              : props.BgColor === "white"
              ? "/images/SAE.png"
              : ""
          }
          alt="SAE"
          width={150}
          height={50}
        />
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

      <div
        className={`${
          !toggle
            ? styles.linkContainerhamburger
            : styles.linkContainerhamburgershow
        }`}
      >
        <Nav.Link href="/" className={styles.linkshamburger}>
          Home
        </Nav.Link>
        <Nav.Link href="/about" className={styles.linkshamburger}>
          About
        </Nav.Link>
        <Nav.Link href="/events" className={styles.linkshamburger}>
          Events
        </Nav.Link>
        <Nav.Link href="/blog" className={styles.linkshamburger}>
          Blogs
        </Nav.Link>
        <Nav.Link href="/projects" className={styles.linkshamburger}>
          Projects
        </Nav.Link>
        <button className={styles.signInBtnhamburger}>Sign In</button>
      </div>

      <img
        className={styles.hamburger}
        src={toggle ? "/close.svg" : "/menu.svg"}
        alt="menu"
        onClick={() => setToggle(!toggle)}
      ></img>
    </div>
  );
}

export default NavBar;
