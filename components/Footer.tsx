import styles from "@/styles/Footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_box}>
        <div className={styles.footer_logo}>
          <img src="/images/bhuFooter.svg" alt="" />
          <img src="/images/logoFooter.svg" alt="" />
        </div>

        <div className={styles.footer_line}>
          <img src="/images/line 4.svg" alt="" />
        </div>

        <div className={styles.contact_us_desc}>
          <h2>Contact Us</h2>
          <span>
            Indian Institute Of Technology
            <br />
            (BHU) Varanasi, India
            <br />
          
          </span>
          <span>+91 7558525641</span>
          <br />
          <br />
          <span>Mail us at-</span>
          <br />
          <span className={styles.contact_us_desc_mail}>
          <a href="saecollegiateclub.iitbhu@gmail.com"><img src="/images/Gmail.svg" alt="" /></a>
            <span>

            <Link href="saecollegiateclub.iitbhu@gmail.com">saecollegiateclub.iitbhu@gmail.com</Link></span>
            
          </span>
        </div>

        <div className={styles.footer_line}>
          <img src="/images/line 4.svg" alt="" />
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

export default Footer;
