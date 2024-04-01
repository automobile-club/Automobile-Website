import React from 'react';
import styles  from '../../styles/HomeCards.module.css';
import car from '../../../public/images/car.webp'



const HomeCard = () => {
  return (
    <div className={styles.blog_slider}>
      <div className={`${styles.blog_slider__wrp} ${styles.swiper_wrapper}`}>
        <div className={`${styles.blog_slider__item} ${styles.swiper_slide}`}>
          <div className={styles.blog_slider__img}>
          <img src="/images/car.webp" alt="" />
          </div>
          <div className={styles.blog_slider__content}>
            {/* <span className={styles.blog_slider__code}>26 December 2019</span> */}
            <div className={styles.blog_slider__title}>The Culture of SAE</div>
            <div className={styles.blog_slider__text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
            <a href="/events" className={styles.blog_slider__button}>READ MORE</a>
          </div>
        </div>        

        {/* <div className={`${styles.blog_slider__item} ${styles.swiper_slide}`}>
          <div className={styles.blog_slider__img}>
            <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp" alt="" />
          </div>
          <div className={styles.blog_slider__content}>
            <span className={styles.blog_slider__code}>26 December 2019</span>
            <div className={styles.blog_slider__title}>Lorem Ipsum Dolor</div>
            <div className={styles.blog_slider__text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
            <a href="#" className={styles.blog_slider__button}>READ MORE</a>
          </div>
        </div> */}

      </div>
      <div className={styles.blog_slider__pagination}></div>
    </div>
  );
};

export default HomeCard;