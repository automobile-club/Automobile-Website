import styles from "@/styles/Footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_box}>
        <div className={styles.contact_us}>
          <div className={styles.footer_logo}>
            <img src="/images/bhuFooter.png" alt="" />
            <img src="/images/logoFooter.png" alt="" />
          </div>
          <div className={styles.contact_us_desc}>
            <h2>Contact Us</h2>
            <span>
              Indian Institute Of Technology
              <br />
              (BHU) Varanasi. India
              <br />
            </span>
            <span>+91 7558525641</span>
          </div>
          </div>
        <div className={styles.quick_links}>
          <h2>Quick Links</h2>
          <div className={styles.linkDiv}>
            <Link href="/">Projects</Link>
            <Link href="/">Events</Link>
            <Link href="/">About us</Link>
            <Link href="/">Workshops</Link>
            <img src="/images/upArrow.svg" className={styles.upArrow} />
          </div>
          <h4 className={styles.connectLogo}>
            Connect to us on :
            <Link href="/">
              <img src="/images/instagramFooter.png" alt="" />
            </Link>
            <Link href="/">
              <img src="/images/linkedinFooter.png" alt="" />
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
}
