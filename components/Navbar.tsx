import Link from 'next/link'
import styles from '../styles/navbar.module.css'

function Navbar() {
  return (
    <div className={styles.nav}>
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About Us</Link>
            </li>
            <li>
                <Link href="/events">Events</Link>
            </li>
            <li>
                <Link href="/blog">Blog</Link>
            </li>
            <li>
                <Link href="/projects">Projects and Achievements</Link>
            </li>
            <li>
                <Link href="/signin">Sign In</Link>
            </li>
        </ul>
    </div>
    
  )
}

export default Navbar;