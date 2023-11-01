import styles from "@/styles/projects.module.css";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
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
        <div className={`${styles.achievements} ${styles.introp}`}>
          <h1>Our Projects</h1>
          <span>
            <h2>
            Discover our impressive portfolio of automotive projects that showcase our technical prowess and innovation.
Each project represents our commitment to pushing the boundaries of automotive engineering.

            </h2>
          </span>
        </div>
        <div className={styles.timeline}>
        <div className={styles.Timeline_heading}>
          <h2 className={styles.Timeline_heading_text}> Check out some of our notable projects:</h2>
         </div>
          {/* <VerticalTimeline lineColor={"#8c96a3"}>
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
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading Creative Direction, User Experience,
                Visual Design, Project Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              iconStyle={{ background: "rgb(33, 150, 243)" }}
              contentStyle={{ background: "#FF6012", color: "#f2f5f8" }}
              contentArrowStyle={{ borderRight: "7px solid  #FF6012" }}
              dateClassName={styles.date}
            >
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>
                Creative Direction, User Experience, Visual Design, SEO, Online
                Marketing
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#FF6012", color: "#f2f5f8" }}
              contentArrowStyle={{ borderRight: "7px solid  #FF6012" }}
              date="2008 - 2010"
              iconStyle={{ background: "rgb(33, 150, 243)" }}
              dateClassName={styles.date}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Los Angeles, CA
              </h4>
              <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#FF6012", color: "#f2f5f8" }}
              contentArrowStyle={{ borderRight: "7px solid  #FF6012" }}
              date="2006 - 2008"
              iconStyle={{ background: "rgb(33, 150, 243)" }}
              dateClassName={styles.date}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
          </VerticalTimeline> */}
          <div className={styles.card_container}>
          <div className={styles.row}>
            <div className={styles.card}>
              <Image
                src="/images/jlr _robotic_arm.png"
                alt="Robotic arm"
                width={290}
                height={117.15}
              />
              <h2>JLR’s Robotic Arm Challenge</h2>
              <p>
              The JLR Automatic Robotic Charger Arm Challenge in Inter IIT 11.0 at IIT Kanpur was a remarkable platform for innovation, engineering excellence, and pushing the boundaries of automation. 
              </p>
              <a href="#">Read More</a>
            </div>
            <div className={styles.card}>
              <Image
                src="/images/piezoelectric_suspension.webp"
                alt="Piezoelectric suspension"
                width={290}
                height={117.15}
              />
              <h2>Piezoelectric Suspension</h2>
              <p>
              The Piezoelectric Suspension Project undertaken by our team represents a pioneering leap into the realm of automotive engineering, offering a transformative solution to enhance vehicle dynamics, comfort, and sustainability.

              </p>
              <a href="#">Read More</a>
            </div>
            <div className={styles.card}>
              <Image
                src="/images/project-ev-logo.png"
                alt="EV Project"
                width={290}
                height={117.15}
              />
              <h2>EV Project</h2>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et ligula ut augue luctus venenatis. Aenean ipsum tortor, euismod sit amet sodales ac, commodo et dui. Maecenas auctor ex nibh, ut gravida orci iaculis ac. Proin facilisis eros nec laoreet scelerisque.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
          </div>
        </div>
        <div className={styles.teams}>

            <h1 >Our Vision</h1>
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
    
        </div>
      </body>
    </>
  );
}
