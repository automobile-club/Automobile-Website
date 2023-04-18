import styles from "@/styles/Footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <footer className={styles.footer_distributed}>
      <div className={styles.footer_left}>
        <h3>
          SAE Collegiate Club <span>IIT (BHU) Varanasi</span>
        </h3>

        <p className={styles.footer_links}>
          <a href="#" className={styles.link_1}>
            Home
          </a>

          <a href="#">Events</a>

          <a href="#">Blogs</a>

          <a href="#">About</a>

          <a href="#">Projects</a>
        </p>

        <p className={styles.footer_company_name}>+91 7558525641</p>
      </div>

      <div className={styles.footer_center}>
        <img src='/images/Footerimg.png' alt="" />
      </div>

      <div className={styles.footer_right}>
        <p className={styles.footer_company_about}>
          <span>About SAE</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
          euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>
        <div>
          <i className={"${styles.fa} ${styles.fa_phone}"}></i>
          <p>+1.555.555.5555</p>
        </div>

        <div>
          <i className={"${styles.fa} ${styles.fa_envelope}"}></i>
          <p>
            <a href="mailto:support@company.com">support@company.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
