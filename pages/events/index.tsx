import styles from "@/styles/events.module.css";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import EventCard from "./EventCard";
import SaeIntro from "@/components/SaeIntro";

export default function Events() {
  return (
    <>
      <div>
        <Navbar BgColor="black" />
        <div className={styles.upper_content}>
          <SaeIntro aboutheading="Events" desc="We are a student organization at Indian Institute of Technology,
            (BHU) Varanasi. It focuses on promoting automotive engineering and
            provides opportunities to participate in technical events,
            competitions, and hands-on projects related to vehicle design."/>
        
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