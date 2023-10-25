import styles from "@/styles/events.module.css";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CustomCard from "./CustomCard";

export default function Events() {
  return (
    <>
      <div>
        <Navbar BgColor="black" />
        <div className={styles.upper_content}>
          <div className={styles.top_img_container}>
            <Image 
              className={styles.top_image}
              width={1200}
              height={800}
              src="/images/Rectangle37.png"
              alt="#" 
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

        <div className="">
        <CustomCard/>
        <CustomCard/>
        </div>
        </div>
    </>
  );
}
