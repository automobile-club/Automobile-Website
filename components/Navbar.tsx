import Nav from "react-bootstrap/Nav";
import Image from "next/image";
import styles from "@/styles/navbar.module.css";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

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
        <Image className={styles.caricon}
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
        <motion.li
          whileHover={{ scale: 1.3, originX: 0, color: " " }}
          transition={{ type: "spring", stiffness: 180 }}
          className={styles.animate}
        >
          {" "}
          <Nav.Link href="/" className={styles.links}>
            Home
          </Nav.Link>{" "}
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.3, originX: 0, color: " " }}
          transition={{ type: "spring", stiffness: 180 }}
          className={styles.animate}
        >
          {" "}
          <Nav.Link href="/about" className={styles.links}>
            About
          </Nav.Link>{" "}
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.3, originX: 0, color: " " }}
          transition={{ type: "spring", stiffness: 180 }}
          className={styles.animate}
        >
          {" "}
          <Nav.Link href="/events" className={styles.links}>
            Events
          </Nav.Link>{" "}
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.3, originX: 0, color: " " }}
          transition={{ type: "spring", stiffness: 180 }}
          className={styles.animate}
        >
          {" "}
          <Nav.Link href="/blog" className={styles.links}>
            Blogs
          </Nav.Link>{" "}
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.3, originX: 0, color: " " }}
          transition={{ type: "spring", stiffness: 180 }}
          className={styles.animate}
        >
          {" "}
          <Nav.Link href="/projects" className={styles.links}>
            Projects
          </Nav.Link>{" "}
        </motion.li>{" "}
      </div>

      <motion.button
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 8px rgb(255,255,255)"
          
        }}
        className={styles.signInBtn}
      >
        Sign In
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          scale: 1.05,
          transition: { duration: 0.7 },
        }}
        exit={{ opacity: 0 }}
        className={`${
          !toggle
            ? styles.linkContainerhamburger
            : styles.linkContainerhamburgershow
        }`}
      >
        <motion.li
          whileHover={{ scale: 1.1, originX: 0, color: "#ffffff" }}
          transition={{ type: "spring", stiffness: 280 }}
          className={styles.animate}
        >
          <Nav.Link href="/" className={styles.linkshamburger}>
            Home
          </Nav.Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1, originX: 0, color: "#ffffff" }}
          transition={{ type: "spring", stiffness: 280 }}
          className={styles.animate}
        >
          <Nav.Link href="/about" className={styles.linkshamburger}>
            About
          </Nav.Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1, originX: 0, color: "#ffffff" }}
          transition={{ type: "spring", stiffness: 280 }}
          className={styles.animate}
        >
          {" "}
          <Nav.Link href="/events" className={styles.linkshamburger}>
            Events
          </Nav.Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1, originX: 0, color: "#ffffff" }}
          transition={{ type: "spring", stiffness: 280 }}
          className={styles.animate}
        >
          <Nav.Link href="/blog" className={styles.linkshamburger}>
            Blogs
          </Nav.Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1, originX: 0, color: "#ffffff" }}
          transition={{ type: "spring", stiffness: 280 }}
          className={styles.animate}
        >
          <Nav.Link href="/projects" className={styles.linkshamburger}>
            Projects
          </Nav.Link>
        </motion.li>
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)"
          }}
          className={styles.signInBtnhamburger}
        >
          Sign In
        </motion.button>
      </motion.div>

      <img
        className={styles.hamburger}
        src={
          toggle
            ? "/close.svg"
            : props.BgColor === "black"
            ? "/menu.svg"
            : props.BgColor === "white"
            ? "/menublack.svg"
            : ""
        }
        alt="menu"
        onClick={() => setToggle(!toggle)}
      ></img>
    </div>
  );
}

export default NavBar;
