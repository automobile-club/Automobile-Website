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

          <h1 className={styles.Timeline_heading_text}>Our notable projects:</h1>
         </div>
         </div>
          <div className={styles.card_container}>
  <div className={styles.card}>
    <Image
      src="/images/jlr robotic arm.png"
      alt="Robotic arm"
      width={290}
      height={117.15}
    />
    <div className={styles.card_content}>
      <h3>JLR’s Robotic Arm</h3>
      <p>
        The JLR Automatic Robotic Charger Arm Challenge in Inter IIT 11.0 at IIT
        Kanpur was a remarkable platform for innovation, engineering excellence,
        and pushing the boundaries of automation.
      </p>
      <a href="#">Read More</a>
    </div>
  </div>
  <div className={styles.card}>
    <Image
      src="/images/piezoelectric_suspension.webp"
      alt="Piezoelectric suspension"
      width={290}
      height={117.15}
    />
    <div className={styles.card_content}>
      <h3>Piezoelectric Suspension</h3>
      <p>
        The Piezoelectric Suspension Project undertaken by our team represents a
        pioneering leap into the realm of automotive engineering, offering a
        transformative solution to enhance vehicle dynamics, comfort, and
        sustainability.
      </p>
      <a href="#">Read More</a>
    </div>
  </div>
  <div className={styles.card}>
    <Image
      src="/images/project-ev-logo.png"
      alt="EV Project"
      width={290}
      height={117.5}
    />
    <div className={styles.card_content}>
      <h3>EV Project</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et ligula
        ut augue luctus venenatis. Aenean ipsum tortor, euismod sit amet sodales
        ac, commodo et dui. Maecenas auctor ex nibh, ut gravida orci iaculis ac.
        Proin facilisis eros nec laoreet scelerisque.
      </p>
      <a href="#">Read More</a>
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
