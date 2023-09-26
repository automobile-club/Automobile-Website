import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Image from "next/image";
import styles from "@/styles/navbar.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

function NavBar(props: { BgColor: string }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 956);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

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
          className={styles.caricon}
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

      {isSmallScreen ? (
        <div className={styles.hamburger} onClick={handleDropdownClick}>
          <img
            src={
                props.BgColor === "black"
                ? "/menu.svg"
                : props.BgColor === "white"
                ? "/menublack.svg"
                : ""
            }
            alt="menu"
          />
        </div>
      ) : (
        <div className={styles.linkContainer}>
          <Nav.Link href="/" className={`${styles.links} ${styles.navlinkltr}`}>
            Home
          </Nav.Link>
          <Nav.Link href="/about" className={`${styles.links} ${styles.navlinkltr}`}>
            About
          </Nav.Link>
          <Nav.Link href="/events" className={`${styles.links} ${styles.navlinkltr}`}>
            Events
          </Nav.Link>
          <Nav.Link href="/blog" className={`${styles.links} ${styles.navlinkltr}`}>
            Blogs
          </Nav.Link>
          <Nav.Link href="/projects" className={`${styles.links} ${styles.navlinkltr}`}>
            Projects
          </Nav.Link>
        </div>
      )}

      <motion.button
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 8px rgb(255,255,255)",
        }}
        className={styles.signInBtn}
      >
        Login
      </motion.button>

      {isSmallScreen && showDropdown && (
        <div className={styles.fullScreenOverlay} onClick={handleDropdownClick}>
          <div className={styles.linkContainer}>
            <Nav.Link href="/" className={`${styles.links} ${styles.navlinkltr}`}>
              Home
            </Nav.Link>
            <Nav.Link href="/about" className={`${styles.links} ${styles.navlinkltr}`}>
              About
            </Nav.Link>
            <Nav.Link href="/events" className={`${styles.links} ${styles.navlinkltr}`}>
              Events
            </Nav.Link>
            <Nav.Link href="/blog" className={`${styles.links} ${styles.navlinkltr}`}>
              Blogs
            </Nav.Link>
            <Nav.Link href="/projects" className={`${styles.links} ${styles.navlinkltr}`}>
              Projects
            </Nav.Link>
          </div>
          <motion.button
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className={styles.signInBtnhamburger}
          >
            Login
          </motion.button>
        </div>
      )}
    </div>
  );
}

export default NavBar;

