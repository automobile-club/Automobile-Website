import styles from "@/styles/events.module.css";
import img1 from "../../public/events-images/Rectangle 37.png";
import img2 from "../../public/events-images/Rectangle 15.png";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Events() {
  return (
    <div>
      <Navbar BgColor="white" />
      <div>
        <Image
          className={styles.top_img}
          src={img1}
          alt="#"
          width={1200}
          height={580}
        ></Image>
        <p className={styles.top_heading}>Event Name</p>
        <p className={styles.top_desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui officia,
          libero voluptas quaerat fugiat, cumque esse animi et laboriosam
          tempore explicabo
        </p>
        <Link href="">
          <button className={styles.top_btn}>Explore event</button>
        </Link>
      </div>

      <h1 className={styles.main_heading}>EVENT SCHEDULE</h1>
      <div className={styles.all_events}>
        <div className={styles.row_events}>
          <div>
            <Link href="#">
              <Image className={styles.event_img} src={img2} alt="#"></Image>
              <p>February 6th 2023</p>
              <h1>Meet up Freelancer</h1>
            </Link>
          </div>
          <div>
            <Link href="#">
              <Image className={styles.event_img} src={img2} alt="#"></Image>
              <p>February 6th 2023</p>
              <h1>Meet up Freelancer</h1>
            </Link>
          </div>
          <div>
            <Link href="#">
              <Image className={styles.event_img} src={img2} alt="#"></Image>
              <p>February 6th 2023</p>
              <h1>Meet up Freelancer</h1>
            </Link>
          </div>
        </div>
        <div className={styles.row_events}>
          <div>
            <Link href="#">
              <Image className={styles.event_img} src={img2} alt="#"></Image>
              <p>February 6th 2023</p>
              <h1>Meet up Freelancer</h1>
            </Link>
          </div>
          <div>
            <Link href="#">
              <Image className={styles.event_img} src={img2} alt="#"></Image>
              <p>February 6th 2023</p>
              <h1>Meet up Freelancer</h1>
            </Link>
          </div>
          <div>
            <Link href="#">
              <Image className={styles.event_img} src={img2} alt="#"></Image>
              <p>February 6th 2023</p>
              <h1>Meet up Freelancer</h1>
            </Link>
          </div>
        </div>
        <div className={styles.row_events}>
          <div>
            <Link href="#">
              <Image className={styles.event_img} src={img2} alt="#"></Image>
              <p>February 6th 2023</p>
              <h1>Meet up Freelancer</h1>
            </Link>
          </div>
          <div>
            <Link href="#">
              <Image className={styles.event_img} src={img2} alt="#"></Image>
              <p>February 6th 2023</p>
              <h1>Meet up Freelancer</h1>
            </Link>
          </div>
          <div>
            <Link href="#">
              <Image className={styles.event_img} src={img2} alt="#"></Image>
              <p>February 6th 2023</p>
              <h1>Meet up Freelancer</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
