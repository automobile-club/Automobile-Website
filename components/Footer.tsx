import styles from "@/styles/Footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_box}>
        <div className={styles.contact_us}>
          <div className={styles.footer_logo}>
            <img src="/images/bhu.png" alt="" />
            <img src="/images/logo.png" alt="" />
          </div>
          <div className={styles.contact_us_desc}>
            <h2>Contact Us</h2>
            Indian Institute Of Technology
            <br />
            (Banaras Hindu University)
            <br />
            Varanasi. India
            <br />
            PIN: 221005
            <br />
            <br />
            <span>+91 7558525641</span>
          </div>
        </div>
        <div className={styles.connect}>
          <h2>
            SAE Collegiate Club
            <br /> IIT (BHU) Varanasi
          </h2>
          <Link href="/">
            <img src="/images/gmail.png" alt="" />
            saecollegiateclub.iitbhu@gmail.com
          </Link>
          <h4>
            Connect to us on :
            <Link href="/">
              <img src="/images/instagram.png" alt="" />
            </Link>
            <Link href="/">
              <img src="/images/linkedin.png" alt="" />
            </Link>
          </h4>
        </div>
        <div className={styles.quick_links}>
          <h2>Quick Links</h2>
          <h4>
            Check out our
            <span>
              <Link href="/">Blog</Link>
            </span>
            with weekly updates
          </h4>
          <div className={styles.linkDiv}>
            <Link href="/">Projects</Link>
            <Link href="/">Events</Link>
            <Link href="/">About us</Link>
            <Link href="/">Workshops</Link>
            <img src="/images/upArrow.svg" className={styles.upArrow} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
