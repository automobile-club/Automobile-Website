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
          <Nav.Link
            href="/about"
            className={`${styles.links} ${styles.navlinkltr}`}
          >
            About
          </Nav.Link>
          <Nav.Link
            href="/events"
            className={`${styles.links} ${styles.navlinkltr}`}
          >
            Events
          </Nav.Link>
          {/* <Nav.Link
            href="/blog"
            className={`${styles.links} ${styles.navlinkltr}`}
          >
            Blogs
          </Nav.Link> */}
          <Nav.Link
            href="/projects"
            className={`${styles.links} ${styles.navlinkltr}`}
          >
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
        Trident
      </motion.button>

      {isSmallScreen && showDropdown && (
        <div className={styles.fullScreenOverlay}>
          <div className={styles.linkContainer}>
            <button
              className={styles.closeButton}
              onClick={handleDropdownClick}
            >
              <svg
                width="45px"
                height="45px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Menu / Close_SM">
                    {" "}
                    <path
                      id="Vector"
                      d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16"
                      stroke="#ffffff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />{" "}
                  </g>{" "}
                </g>
              </svg>
            </button>
            <Nav.Link
              href="/"
              className={`${styles.links} ${styles.navlinkltr}`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/about"
              className={`${styles.links} ${styles.navlinkltr}`}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="/events"
              className={`${styles.links} ${styles.navlinkltr}`}
            >
              Events
            </Nav.Link>
            {/* <Nav.Link
              href="/blog"
              className={`${styles.links} ${styles.navlinkltr}`}
            >
              Blogs
            </Nav.Link> */}
            <Nav.Link
              href="/projects"
              className={`${styles.links} ${styles.navlinkltr}`}
            >
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
            Trident
          </motion.button>
        </div>
      )}
    </div>
  );
}

export default NavBar;
