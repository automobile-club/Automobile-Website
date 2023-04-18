import styles from "@/styles/events.module.css";
import img1 from "/events-images/Rectangle 37.png";
import img2 from "/events-images/Rectangle 15.png";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useState, useLayoutEffect } from "react";

export default function Events() {
  return (
    <div>
      <Navbar BgColor="white" />
      <div className={styles.upper_content}>
        <Image
          className={styles.top_img}
          src="/events-images/Rectangle 37.png"
          alt="#"
          width={1200}
          height={580}
        ></Image>
        <div className={styles.top_content}>
          <h1 className={styles.top_heading}>Event Name</h1>
          <span className={styles.top_desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            officia, libero voluptas quaerat fugiat, cumque esse animi et
            laboriosam tempore explicabo
          </span>
        </div>
        <div className={styles.btn_container}>
          <Link href="">
            <button className={styles.top_btn}>Explore event</button>
          </Link>
        </div>
      </div>

      <h1 className={styles.main_heading}>EVENT SCHEDULE</h1>
      <div className={styles.all_events}>
        <div className={styles.row_events}>
          <div className={styles.indivisual_event}>
            <Link href="#">
              <Image width={447} height={290} className={styles.event_img} src="/events-images/Rectangle 15.png" alt="#"></Image>
              <p>February 6th 2023</p>
              <h1>Meet up Freelancer</h1>
            </Link>
          </div>
          <div className={styles.indivisual_event}>
            <Link href="#">
              <Image width={447} height={290} className={styles.event_img} src="/events-images/Rectangle 15.png" alt="#"></Image>
              <p>February 6th 2023</p>
              <h1>Meet up Freelancer</h1>
            </Link>
          </div>
          <div className={styles.indivisual_event}>
            <Link href="#">
              <Image width={447} height={290} className={styles.event_img} src="/events-images/Rectangle 15.png" alt="#"></Image>
              <p>February 6th 2023</p>
              <h1>Meet up Freelancer</h1>
            </Link>
          </div>
        </div>
        <div className={styles.row_events}>
          <div className={styles.indivisual_event}>
            <Link href="#">
              <Image width={447} height={290} className={styles.event_img} src="/events-images/Rectangle 15.png" alt="#"></Image>
              <p>February 6th 2023</p>
              <h1>Meet up Freelancer</h1>
            </Link>
          </div>
          <div className={styles.indivisual_event}>
            <Link href="#">
              <Image width={447} height={290} className={styles.event_img} src="/events-images/Rectangle 15.png" alt="#"></Image>
              <p>February 6th 2023</p>
              <h1>Meet up Freelancer</h1>
            </Link>
          </div>
          <div className={styles.indivisual_event}>
            <Link href="#">
              <Image width={447} height={290} className={styles.event_img} src="/events-images/Rectangle 15.png" alt="#"></Image>
              <p>February 6th 2023</p>
              <h1>Meet up Freelancer</h1>
            </Link>
          </div>
        </div>
        <div className={styles.row_events}>
          <div className={styles.indivisual_event}>
            <Link href="#">
              <Image width={447} height={290} className={styles.event_img} src="/events-images/Rectangle 15.png" alt="#"></Image>
              <p>February 6th 2023</p>
              <h1>Meet up Freelancer</h1>
            </Link>
          </div>
          <div className={styles.indivisual_event}>
            <Link href="#">
              <Image width={447} height={290} className={styles.event_img} src="/events-images/Rectangle 15.png" alt="#"></Image>
              <p>February 6th 2023</p>
              <h1>Meet up Freelancer</h1>
            </Link>
          </div>
          <div className={styles.indivisual_event}>
            <Link href="#">
              <Image width={447} height={290} className={styles.event_img} src="/events-images/Rectangle 15.png" alt="#"></Image>
              <p>February 6th 2023</p>
              <h1>Meet up Freelancer</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
