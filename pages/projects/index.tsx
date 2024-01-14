import styles from "@/styles/projects.module.css";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import ProjectCard from "./projectcard";
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
import Link from "next/link";

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

        <div className={styles.large}>
          <div className={styles.third_section}>
            <div className={styles.content}>
              <div className={styles.right}>
                <h2>Ongoing Projects</h2>
                In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.
                <Link href="#" className={`${styles.Btn}`}>
                    Learn More
                  </Link>
              </div>
              <div className={styles.ongoingprojects}>
                <ProjectCard
                  title="Formula Bharat"
                  content="In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are."
                  imageSrc="/images/projects1.png"
                />
              </div>
              <div className={`${styles.ongoingprojects} ${styles.middlecard}`}>
                <ProjectCard
                  title="Formula Bharat"
                  content="In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are."
                  imageSrc="/images/projects2.png"
                />
              </div>
              <div className={styles.ongoingprojects}>
                <ProjectCard
                  title="Formula Bharat"
                  content="In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are."
                  imageSrc="/images/projects3.png"
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.middle}>
          <div className={styles.third_section}>
            <div className={styles.content}>
              <div className={styles.right}>
                <h2>Ongoing Projects</h2>
                In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.
                  <Link href="#" className={`${styles.Btn}`}>
                    Learn More
                  </Link>
              </div>
              <div className={styles.lb}>
                <div className={styles.ongoingprojects}>
                  <ProjectCard
                    title="Formula Bharat"
                    content="In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are."
                    imageSrc="/images/projects1.png"
                  />
                </div>
                <div className={`${styles.ongoingprojects} ${styles.middlecard}`}>
                  <ProjectCard
                    title="Formula Bharat"
                    content="In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are."
                    imageSrc="/images/projects2.png"
                  />
                </div>
                <div className={styles.ongoingprojects}>
                  <ProjectCard
                    title="Formula Bharat"
                    content="In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are."
                    imageSrc="/images/projects3.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.small}>
          <div className={styles.third_section}>
            <div className={styles.content}>
              <div className={styles.right}>
                <h2>Ongoing Projects</h2>
                In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.
                <Link href="#" className={`${styles.Btn}`}>
                    Learn More
                  </Link>
              </div>
              <div className={styles.pcard_container}>
                <div className={styles.pcard}>
                  <Image
                    src="/images/hybridwork.png"
                    alt="Project 1"
                    width={100}
                    height={50}
                  />
                  <div className={styles.pcard_content}>

                    <p>
                      In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.
                    </p>
                  </div>
                </div>
                <div className={styles.pcard}>
                  <Image
                    src="/images/hybridwork.png"
                    alt="Project 2"
                    width={100}
                    height={50}
                  />
                  <div className={styles.pcard_content}>

                    <p>
                      In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.
                    </p>

                  </div>
                </div>
                <div className={styles.pcard}>
                  <Image
                    src="/images/hybridwork.png"
                    alt="Project 3"
                    width={100}
                    height={50}
                  />
                  <div className={styles.pcard_content}>

                    <p>
                      In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </body>
    </>
  );
}
