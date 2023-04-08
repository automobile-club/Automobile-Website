import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Image from "next/image";
import styles from "@/styles/navbar.module.css";
import Link from "next/link";

type NavBarProps = {
  buttonstyle: string;
  srclogo: string;
  navbarColor: string;
};

function NavBar({ srclogo, buttonstyle, navBarColor }: NavBarProps) {
  return (
    <>
      <div className={navbarColor}>
        <Link href="/">
          <Image src={srclogo} alt="SAE" width={150} height={50} />
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
        <Button className={buttonstyle}>Sign In</Button>
      </div>
    </>
  );
    <>
      <div className={styles.navbar}>
        <Link href="/">
          <Image src="/SAEVectorWhite.svg" alt="SAE" width={150} height={50} />
        </Link>
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
        <Button className={styles.button}>Sign In</Button>
      </div>
    </>
  );
}

export default NavBar;