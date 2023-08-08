import styles from "@/styles/sponsors.module.css";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Projects() {
  const [slidesPerView, setSlidesPerView] = useState(3);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setSlidesPerView(1);
    } else if (window.innerWidth < 1024) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(3);
    }
  };

  return (
    <>
      <Navbar BgColor="black" />
      <body className={styles.body}>
        <div className={styles.achievements}>
          <h1>WHY SPONSOR US?</h1>
          <span>
            <h2>
            Sponsoring Team Avrera and Team Trident of the Society of Automobile Engineers at IIT BHU is a strategic investment for companies. These teams exemplify innovation, engineering excellence, and teamwork in the field of automotive technology. <br /> By supporting them, companies align their brand with cutting-edge research and development, tapping into a pool of skilled future professionals. Additionally, collaboration fosters real-world problem-solving, enhancing practical skills and industry knowledge of students.
            </h2>
          </span>
          <div className={styles.btn_container}>
            <Link href="mailto:saecollegiateclub.iitbhu@gmail.com">
              <button className={styles.top_btn}>
                <span>CLICK HERE TO COLLABORATE WITH US</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="custom-container">
        <div className={styles.achievements}>
          <h1>Platinum Sponsors</h1>
        </div>
        <div className="card-group" style={{ width: '75%', margin: '0 auto' }}>
          <div className="card">
            <Image className="card-img-top"  width={200} height={200} src="/images/tatasteel.png" alt="Card image cap"/>
          </div>
          <div className="card">
            <Image className="card-img-top" width={200} height={200} src="/images/tatasteel.png" alt="Card image cap"/>
          </div>
          <div className="card">
            <Image className="card-img-top" width={200} height={200} src="/images/tatasteel.png" alt="Card image cap"/>
          </div>
          <div className="card">
            <Image className="card-img-top" width={200} height={200} src="/images/tatasteel.png" alt="Card image cap"/>
          </div>
        </div>
        </div>
        <div className="custom-container">
        <div className={styles.achievements}>
          <h1>Gold Sponsors</h1>
        </div>
        <div className="card-group" style={{ width: '75%', margin: '0 auto' }}>
          <div className="card">
            <Image className="card-img-top"  width={200} height={200} src="/images/tatasteel.png" alt="Card image cap"/>
              <div className="card-body">
               <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
          </div>
          <div className="card">
            <Image className="card-img-top" width={200} height={200} src="/images/tatasteel.png" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
          </div>
          <div className="card">
            <Image className="card-img-top" width={200} height={200} src="/images/tatasteel.png" alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="card">
            <Image className="card-img-top" width={200} height={200} src="/images/tatasteel.png" alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
        </div>
        <div className="custom-container">
        <div className={styles.achievements}>
          <h1>Silver Sponsors</h1>
        </div>
        <div className="card-group" style={{ width: '75%', margin: '0 auto' }}>
          <div className="card">
            <Image className="card-img-top"  width={200} height={200} src="/images/tatasteel.png" alt="Card image cap"/>
              <div className="card-body">
               <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
          </div>
          <div className="card">
            <Image className="card-img-top" width={200} height={200} src="/images/tatasteel.png" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
          </div>
          <div className="card">
            <Image className="card-img-top" width={200} height={200} src="/images/tatasteel.png" alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="card">
            <Image className="card-img-top" width={200} height={200} src="/images/tatasteel.png" alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
        </div>
        <div className={styles.teams}>
          <h1>Past Sponsors</h1>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={slidesPerView}
          navigation
          scrollbar={{ draggable: true }}
          className={styles.slider}
          onResize={handleResize}
        >
          <SwiperSlide>
            <Image
              src="/images/tatasteel.png"
              width={400}
              height={300}
              alt=""
              className={styles.image}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/aditya2.png"
              width={400}
              height={300}
              alt=""
              className={styles.image}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/mahindra2.png"
              width={400}
              height={300}
              alt=""
              className={styles.image}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/gail.png"
              width={400}
              height={300}
              alt=""
              className={styles.image}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/gfg.jpeg"
              width={400}
              height={300}
              alt=""
              className={styles.image}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/lic.png"
              width={400}
              height={300}
              alt=""
              className={styles.image}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/ultratech.png"
              width={400}
              height={300}
              alt=""
              className={styles.image}
            />
          </SwiperSlide>
        </Swiper>
        <div className={styles.teams}>
          <span>
            <h2>
              
In the illustrious history of the Society of Automobile Engineers IIT (BHU), we have had the privilege of being supported by some of the most distinguished names in the industry. Past sponsors include giants like Tata Steel, Aditya Birla Group, Ultratech Cement, LIC, GAIL, GeeksforGeeks, and Mahindra. Their unwavering commitment and partnership have fueled our endeavors, enabling us to innovate, educate, and elevate the field of automobile engineering. These collaborations have left an indelible mark, contributing significantly to our growth and accomplishments. We extend our heartfelt gratitude to these esteemed organizations for their pivotal role in shaping our journey.
            </h2>
          </span>
        </div>
      </body>
      <Footer/>
    </>
  );
}
