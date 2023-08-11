import styles from "../../styles/sponsors.module.css"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "react-vertical-timeline-component/style.min.css";
import React, { useState } from "react";

import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";



export default function Sponsors() {
  const [slidesPerView, setSlidesPerView] = useState(3);

  const handleResize = () => {
    if (window.innerWidth < 478) {
      setSlidesPerView(2);
    } else if (window.innerWidth < 1024) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(3);
    }
  };

  
 
  
  return (
    <>  
        <Navbar BgColor="black" />


        <div className={styles.achievements}>
          <h1>Why Sponsor Us?</h1>
          <span>
            <h2>
Your partnership is more than just financial support. Its an opportunity to co-create meaningful change. 
Our collaborative efforts will help us achieve our vision of a sustainable future.
 Your brand will shine as a beacon of social responsibility, gaining visibility among our engaged audience.
          </h2>
          </span>
        </div>

        
       <h1 className={styles.h1} > <strong> Our Sponsors</strong> </h1>
       
    <section className={styles.imageTiles}>
      <div className={styles.tileLine}>
        <div className={styles.imageTileT}>
          <a href="https://www.castrol.com/">
            <Image src="/images/others/castrol.cms" alt="Tile 1" />
          </a>
        </div>
        
        <div className={styles.imageTileT}>
          <a href="https://www.heromotocorp.com/">
            <Image src="/images/others/hero.png" alt="Tile 2" />
          </a>
        </div>
     
      
        <div className={styles.imageTileT}>
          <a href="http://upsacs.up.gov.in/">
            <Image src="/images/others/upsacs.png" alt="Tile 2" />
          </a>
        </div>
       </div>
      
      <div className={styles.tileLine}>
       
        <div className={styles.imageTile}>
          <a href="https://www.tatamotors.com/">
            <Image src="/images/others/tata.png" alt="Tile 3" />
          </a>
        </div>
        <div className={styles.imageTile}>
          <a href="https://auto.mahindra.com/">
            <Image src="/images/others/mahindra.png" alt="Tile 3" />
          </a>
        </div>
        <div className={styles.imageTile}>
          <a href="link-to-page3">
            <Image src="/images/others/godrej.png" alt="Tile 3" />
          </a>
        </div>
        <div className={styles.imageTile}>
          <a href="link-to-page4">
            <Image src="/images/others/iocl.png" alt="Tile 4" />
          </a>
        </div>
        <div className={styles.imageTile}>
          <a href="link-to-page4">
            <Image src="/images/others/bankofbaroda.png" alt="Tile 4" />
          </a>
        </div>
        
        
      </div>
      <div className={styles.tileLine}>
       
        <div className={styles.imageTile}>
          <a href="link-to-page3">
            <Image src="/images/others/hpcl.png" alt="Tile 3" />
          </a>
        </div>
        <div className={styles.imageTile}>
          <a href="link-to-page3">
            <Image src="/images/others/KTM_Logo.png" alt="Tile 3" />
          </a>
        </div>
        <div className={styles.imageTile}>
          <a href="https://www.iitk.ac.in/">
            <Image src="/images/others/kanpur.png" alt="Tile 3" />
          </a>
        </div>
        <div className={styles.imageTile}>
          <a href="link-to-page4">
            <Image src="/images/others/ntpc.png" alt="Tile 4" />
          </a>
        </div>
        <div className={styles.imageTile}>
          <a href="link-to-page4">
            <Image src="/images/others/laxmi_cycle.png" alt="Tile 4" />
          </a>
        </div>
       
      </div>
    </section>

        <div className={styles.teams}>
          <h1>Our Past Sponsors</h1>
        </div>
<div className={styles.sliderContainer}>

<Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={slidesPerView}
          loop={true}
          navigation
          scrollbar={{ draggable: true }}
          className={styles.slider}
          onResize={handleResize}
        >
          <SwiperSlide>
            <Image
              src="/images/others/newstimes.png"
              width={200}
              height={200}
              alt=""
              className={styles.image}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/others/itc.png"
              width={200}
              height={200}
              alt=""
              className={styles.image}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/others/adityabirla.png"
              width={200}
              height={200}
              alt=""
              className={styles.image}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/others/smilefoundation.png"
              width={200}
              height={200}
              alt=""
              className={styles.image}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/others/amul.png"
              width={200}
              height={200}
              alt=""
              className={styles.image}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/others/bsa.png"
              width={200}
              height={200}
              alt=""
              className={styles.image}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/others/hp.png"
              width={200}
              height={200}
              alt="Sponsors"
              className={styles.image}
            />
          </SwiperSlide>
        </Swiper>
</div>
    <Footer/>
      </>
     
       
    );
  }
















