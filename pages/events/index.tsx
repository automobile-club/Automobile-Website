import styles from "@/styles/events.module.css";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import EventCard from "./EventCard";

export default function Events() {
  return (
    <>
      <div>
        <Navbar BgColor="black" />
        <div className={styles.upper_content}>
          {/* <div className={styles.top_img_container}>
            <Image 
              className={styles.top_image}
              width={1200}
              height={800}
              src="/images/Rectangle37.png"
              alt="#" 
            />
          </div> */}
  
  <div className={styles.sae_intro}>
        <div className={styles.right_wrapper_saeintro}>
          <div className={styles.sae_headings}>
            <h1 className={styles.sae_name_text}>Events</h1>
          </div>
          <div className={styles.sae_content}>
            <p className={styles.sae_long_text}>
              We are a student organization at Indian Institute of Technology,
              (BHU) Varanasi. It focuses on promoting automotive engineering and
              provides opportunities to participate in technical events,
              competitions, and hands-on projects related to vehicle design.
            </p>
          </div>
          <div className={styles.social_media}>
            <a href="https://www.instagram.com/saecollegiateclubiitbhu/">
              <Image
                className={styles.instagram_img}
                src="/images/instagram_hero.svg"
                alt="instagram"
                width={60}
                height={60}
              />
            </a>
            <a href="https://www.facebook.com/SAEIITBHU/">
              <Image
                className={styles.facebook_img}
                src="/images/facebook_hero.svg"
                alt="facebook"
                width={62}
                height={62}
              />
            </a>
            <a href="https://in.linkedin.com/company/sae-collegiate-club-iit-varanasi">
              <Image
                className={styles.linkedIn_img}
                src="/images/linkedIn_hero.svg"
                alt="linkedIn"
                width={50}
                height={50}
              />
            </a>
          </div>
          <div className={styles.line}></div>
        </div>
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

        <div className="">
        <EventCard/>
        <EventCard/>
        </div>
        </div>
    </>
  );
}
