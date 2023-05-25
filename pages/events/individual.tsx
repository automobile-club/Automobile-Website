import React, { useLayoutEffect, useState } from "react";
import Image from "next/image";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "@/styles/individualEvent.module.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";

const SingleEvent = () => {
  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }
  const [width] = useWindowSize();

  return (
    <>
      <NavBar BgColor="white" />
      <div>
        <div className={styles.firstVP}>
          <Image
            src="/images/event_Poster.jpg"
            className={styles.bannerImage}
            height={100}
            width={390}
            objectFit="cover"
            alt="event_name"
          />
          <div className={styles.imgTime}>
            <div className={styles.eventName}>EVENT NAME</div>
            <div className={styles.eventTime}>
              <div className={styles.timeRoot}>
                <div className={styles.timeDetail}>31</div>
                Days
              </div>
              <div className={styles.timeColon}>:</div>
              <div className={styles.timeRoot}>
                <div className={styles.timeDetail}>21</div>
                Hours
              </div>
              <div className={styles.timeColon}>:</div>
              <div className={styles.timeRoot}>
                <div className={styles.timeDetail}>6</div>
                Minutes
              </div>
              <div className={styles.timeColon}>:</div>
              <div className={styles.timeRoot}>
                <div className={styles.timeDetail}>2</div>
                Seconds
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rootmain}>
          <div className={styles.eventimg}>
            <div className={styles.div1}>
              <Image
                src="/images/event_detail_1.jpg"
                width="180"
                height="180"
                objectFit="cover"
                alt="event_name"
                className={styles.imgBlock}
              />
            </div>
            <div className={styles.div3}>
              <Image
                src="/images/event_detail_2.jpg"
                width="180"
                height="180"
                alt="event_name"
                className={styles.imgBlock}
              />
            </div>
            {/* <div><Image src='/images/event_detail_1.jpg' width="180" height="180" objectFit='cover' alt='event_name' className={styles.imgBlock}/></div>
                    <div className={styles.floatImg}><Image src='/images/event_detail_2.jpg' width="180" height="180" alt='event_name' className={styles.imgBlock}/></div> */}
          </div>
          <div className={styles.aboutEvent}>
            <div className={styles.aboutHead}>About Event</div>
            <div className={styles.aboutTextWrap}>
              <p className={styles.aboutText}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
                eos excepturi mollitia soluta explicabo cumque id natus iure
                doloribus assumenda minus voluptatem beatae quam doloremque,
                alias, rerum quibusdam vero unde!
              </p>
            </div>
            <div className={styles.addressWrap}>42 Drive,Florida,USA</div>
            <div className={styles.boxRoot}>
              <div className={styles.box}>
                <div className={styles.boxBold}>2</div>
                <div>Days Event</div>
              </div>
              <div className={styles.box}>
                <div className={styles.boxBold}>15+</div>
                <div>Speakers</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.exploreRoot}>
          <div className={styles.exploreHead}>
            Explore More Events{" "}
            <svg
              className={styles.svghw}
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </div>
          <div className={styles.cardWrapper}>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={width < 800 ? 1 : width < 1550 ? 2 : 3}
              navigation
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              className={styles.swiperRoot}
              style={{ padding: "0 2.5rem" }}
            >
              <SwiperSlide className={styles.sliderMain}>
                <Link href="/events/individual" className={styles.link}>
                  <div className={styles.carBody}>
                    <div className={styles.imgBack}>
                      <Image
                        src="/images/Rectangle_19img.png"
                        className={styles.carImg}
                        width="125"
                        height="125"
                        alt="event_name"
                      />
                    </div>
                    <div className={styles.carouselData}>
                      <div className={styles.eventDate}>May 8 , 2020</div>
                      <div className={styles.cardEventHead}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </div>
                      <div className={styles.cardEventData}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Inventore molestiae ipsam, hic nam explicabo
                        molestias reiciendis nostrum voluptatibus recusandae
                        natus blanditiis aperiam accusantium ipsum unde
                        officiis. Voluptatem necessitatibus rerum voluptatum?
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className={styles.sliderMain}>
                <Link href="/events/individual" className={styles.link}>
                  <div className={styles.carBody}>
                    <div className={styles.imgBack}>
                      <Image
                        src="/images/Rectangle_19img.png"
                        className={styles.carImg}
                        width="125"
                        height="125"
                        alt="event_name"
                      />
                    </div>
                    <div className={styles.carouselData}>
                      <div className={styles.eventDate}>May 8 , 2020</div>
                      <div className={styles.cardEventHead}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </div>
                      <div className={styles.cardEventData}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Inventore molestiae ipsam, hic nam explicabo
                        molestias reiciendis nostrum voluptatibus recusandae
                        natus blanditiis aperiam accusantium ipsum unde
                        officiis. Voluptatem necessitatibus rerum voluptatum?
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className={styles.sliderMain}>
                <Link href="/events/individual" className={styles.link}>
                  <div className={styles.carBody}>
                    <div className={styles.imgBack}>
                      <Image
                        src="/images/Rectangle_19img.png"
                        className={styles.carImg}
                        width="125"
                        height="125"
                        alt="event_name"
                      />
                    </div>
                    <div className={styles.carouselData}>
                      <div className={styles.eventDate}>May 8 , 2020</div>
                      <div className={styles.cardEventHead}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </div>
                      <div className={styles.cardEventData}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Inventore molestiae ipsam, hic nam explicabo
                        molestias reiciendis nostrum voluptatibus recusandae
                        natus blanditiis aperiam accusantium ipsum unde
                        officiis. Voluptatem necessitatibus rerum voluptatum?
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className={styles.sliderMain}>
                <Link href="/events/individual" className={styles.link}>
                  <div className={styles.carBody}>
                    <div className={styles.imgBack}>
                      <Image
                        src="/images/Rectangle_19img.png"
                        className={styles.carImg}
                        width="125"
                        height="125"
                        alt="event_name"
                      />
                    </div>
                    <div className={styles.carouselData}>
                      <div className={styles.eventDate}>May 8 , 2020</div>
                      <div className={styles.cardEventHead}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </div>
                      <div className={styles.cardEventData}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Inventore molestiae ipsam, hic nam explicabo
                        molestias reiciendis nostrum voluptatibus recusandae
                        natus blanditiis aperiam accusantium ipsum unde
                        officiis. Voluptatem necessitatibus rerum voluptatum?
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleEvent;
