import styles from "@/styles/events.module.css";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Events() {
  return (
    <>
    <div>
      <Navbar BgColor="white" />
      <div className={styles.upper_content}>
        <div className={styles.top_img_container}>
          <Image
            width={1200}
            height={800}
            src="/images/Rectangle37.png"
            alt="#"
            className={styles.top_image}
          />
        </div>
        <div className={styles.btn_container}>
          <Link href="">
            <button className={styles.top_btn}>
              <span>Explore event</span>
            </button>
          </Link>
        </div>
      </div>

      <h1 className={styles.main_heading}>EVENT SCHEDULE</h1>

      <div className={styles.all_events}>
        <div className={styles.indivisual_event}>
          <Link style={{ textDecoration: "none" }} href="/events/individual">
            <Image
              width={447}
              height={290}
              className={styles.event_img}
              src="/images/Rectangle15.png"
              alt="#"
            ></Image>
            <p className={styles.event_p}>February 6th 2023</p>
            <h1 className={styles.event_h1}>Meet up Freelancer</h1>
          </Link>
        </div>
        <div className={styles.indivisual_event}>
          <Link style={{ textDecoration: "none" }} href="/events/individual">
            <Image
              width={447}
              height={290}
              className={styles.event_img}
              src="/images/Rectangle15.png"
              alt="#"
            ></Image>
            <p className={styles.event_p}>February 6th 2023</p>
            <h1 className={styles.event_h1}>Meet up Freelancer</h1>
          </Link>
        </div>
        <div className={styles.indivisual_event}>
          <Link style={{ textDecoration: "none" }} href="/events/individual">
            <Image
              width={447}
              height={290}
              className={styles.event_img}
              src="/images/Rectangle15.png"
              alt="#"
            ></Image>
            <p className={styles.event_p}>February 6th 2023</p>
            <h1 className={styles.event_h1}>Meet up Freelancer</h1>
          </Link>
        </div>
        <div className={styles.indivisual_event}>
          <Link style={{ textDecoration: "none" }} href="/events/individual">
            <Image
              width={447}
              height={290}
              className={styles.event_img}
              src="/images/Rectangle15.png"
              alt="#"
            ></Image>
            <p className={styles.event_p}>February 6th 2023</p>
            <h1 className={styles.event_h1}>Meet up Freelancer</h1>
          </Link>
        </div>
        <div className={styles.indivisual_event}>
          <Link style={{ textDecoration: "none" }} href="/events/individual">
            <Image
              width={447}
              height={290}
              className={styles.event_img}
              src="/images/Rectangle15.png"
              alt="#"
            ></Image>
            <p className={styles.event_p}>February 6th 2023</p>
            <h1 className={styles.event_h1}>Meet up Freelancer</h1>
          </Link>
        </div>
        <div className={styles.indivisual_event}>
          <Link style={{ textDecoration: "none" }} href="/events/individual">
            <Image
              width={447}
              height={290}
              className={styles.event_img}
              src="/images/Rectangle15.png"
              alt="#"
            ></Image>
            <p className={styles.event_p}>February 6th 2023</p>
            <h1 className={styles.event_h1}>Meet up Freelancer</h1>
          </Link>
        </div>
        <div className={styles.indivisual_event}>
          <Link style={{ textDecoration: "none" }} href="/events/individual">
            <Image
              width={447}
              height={290}
              className={styles.event_img}
              src="/images/Rectangle15.png"
              alt="#"
            ></Image>
            <p className={styles.event_p}>February 6th 2023</p>
            <h1 className={styles.event_h1}>Meet up Freelancer</h1>
          </Link>
        </div>
        <div className={styles.indivisual_event}>
          <Link style={{ textDecoration: "none" }} href="/events/individual">
            <Image
              width={447}
              height={290}
              className={styles.event_img}
              src="/images/Rectangle15.png"
              alt="#"
            ></Image>
            <p className={styles.event_p}>February 6th 2023</p>
            <h1 className={styles.event_h1}>Meet up Freelancer</h1>
          </Link>
        </div>
        <div className={styles.indivisual_event}>
          <Link style={{ textDecoration: "none" }} href="/events/individual">
            <Image
              width={447}
              height={290}
              className={styles.event_img}
              src="/images/Rectangle15.png"
              alt="#"
            ></Image>
            <p className={styles.event_p}>February 6th 2023</p>
            <h1 className={styles.event_h1}>Meet up Freelancer</h1>
          </Link>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
