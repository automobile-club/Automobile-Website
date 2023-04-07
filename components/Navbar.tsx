import Link from 'next/link'
import styles from '../styles/navbar.module.css'
import Image from 'next/image';
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";


function Navbar() {
  return (
        <>
      <div className={styles.navbar}>
        <Link href="/">
          <Image src="/images/SAEVectorWhite.svg" alt="SAE" width={150} height={50} />
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
    // <div className={styles.nav}>
    //     <ul>
    //         <li className={styles.nav_elements_left}>
    //             <Link href="/" className={styles.logo}><Image src="/images/SAE.png" alt="SAE-logo" width={150} height={45}/></Link>
    //         </li>
    //         <li className={styles.nav_elements_mid}>
    //             <Link href="/" className={styles.a}>Home</Link>
    //         </li>
    //         <li className={styles.nav_elements_mid}>
    //             <Link href="/about" className={styles.a}>About Us</Link>
    //         </li>
    //         <li className={styles.nav_elements_mid}>    
    //             <Link href="/events" className={styles.a}>Events</Link>
    //         </li>
    //         <li className={styles.nav_elements_mid}>
    //             <Link href="/blog" className={styles.a}>Blog</Link>
    //         </li>
    //         <li className={styles.nav_elements_mid}>
    //             <Link href="/projects" className={styles.a}>Projects and Achievements</Link>
    //         </li>
    //         <li className={styles.nav_elements_right}>
    //             <Link href="/signin" className={styles.btn}><button id="signin">Sign In</button></Link>
    //         </li>
    //     </ul>
    // </div>
    
  )
}

export default Navbar;