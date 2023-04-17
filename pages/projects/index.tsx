import styles from "@/styles/projects.module.css";
import React from "react";
import Navbar from "@/components/Navbar";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function Projects() {
  return (
    <>
      <Navbar BgColor="white" />
      <body className={styles.body}>
        <div className={styles.achievements}>
          <h1>Our Achievements</h1>
          <span>
            <h2>
              SAE(Society of Automotive Engineers) aims to give a platform to
              people who wish to learn about and build automobiles. Our teams
              take part in various RC and automotive events all round the
              year....
            </h2>
          </span>
        </div>
        <div className={styles.timeline}>
          <VerticalTimeline lineColor={"#8c96a3"}>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#FF6012", color: "#f2f5f8" }}
              contentArrowStyle={{ borderRight: "7px solid  #FF6012" }}
              date="2011 - present"
              iconStyle={{ background: "rgb(33, 150, 243)" }}
              dateClassName={styles.date}
            >
              <h3 className="vertical-timeline-element-title">
                Creative Director
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <span>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </span>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              iconStyle={{ background: "rgb(33, 150, 243)" }}
              contentStyle={{ background: "#fff", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            >
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <span>
                Creative Direction, User Experience, Visual Design, SEO, Online
                Marketing
              </span>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2008 - 2010"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "black" }}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Los Angeles, CA
              </h4>
              <span>User Experience, Visual Design</span>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2006 - 2008"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <span>User Experience, Visual Design</span>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
        <div className={styles.achievements}>
          <h1>Our Projects</h1>
          <span>
            <h2>
              SAE(Society of Automotive Engineers) aims to give a platform to
              people who wish to learn about and build automobiles. Our teams
              take part in various RC and automotive events all round the
              year....
            </h2>
          </span>
        </div>
        <div className={styles.teams}>
          <h1>Team Trident</h1>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={3}
          pagination={{ clickable: true }}
          navigation={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className={styles.slider}
        >
          <SwiperSlide>
            <Image
              src="/images/car.png"
              width={400}
              height={300}
              alt=""
              className={styles.image}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/car.png"
              width={400}
              height={300}
              alt=""
              className={styles.image}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/car.png"
              width={400}
              height={300}
              alt=""
              className={styles.image}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/car.png"
              width={400}
              height={300}
              alt=""
              className={styles.image}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/car.png"
              width={400}
              height={300}
              alt=""
              className={styles.image}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/car.png"
              width={400}
              height={300}
              alt=""
              className={styles.image}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/car.png"
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
              SAE(Society of Automotive Engineers) aims to give a platform to
              people who wish to learn about and build automobiles. Our teams
              take part in various RC and automotive events all round the
              year.... SAE(Society of Automotive Engineers) aims to give a
              platform to people who wish to learn about and build automobiles.
              Our teams take part in various RC and automotive events all round
              the year.... SAE(Society of Automotive Engineers) aims to give a
              platform to people who wish to learn about and build automobiles.
              Our teams take part in various RC and automotive events all round
              the year....
            </h2>
          </span>
        </div>
      </body>
    </>
  );
}
