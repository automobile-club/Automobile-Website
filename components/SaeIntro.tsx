import React, { ReactNode } from 'react';
import Image from "next/image";
import styles from '../styles/SaeIntro.module.css'; // Make sure to import your styles

interface SaeIntroProps {
  aboutheading: string;
  desc: string;
}

const SaeIntro: React.FC<SaeIntroProps> = ({ aboutheading, desc}) => {
  return (
    <div className={styles.about}>
      <h1>{aboutheading}</h1>
      <div className={styles.desc}>
        {desc}
      </div>
      <div className={styles.social_media}>
            <a href="https://www.instagram.com/saecollegiateclubiitbhu/">
              <Image
                className={styles.instagram_img}
                src="/images/instagram_hero.svg"
                alt="instagram"
                width={60}
                height={60}
              />
            </a>
            <a href="https://www.facebook.com/SAEIITBHU/">
              <Image
                className={styles.facebook_img}
                src="/images/facebook_hero.svg"
                alt="facebook"
                width={62}
                height={62}
              />
            </a>
            <a href="https://in.linkedin.com/company/sae-collegiate-club-iit-varanasi">
              <Image
                className={styles.linkedIn_img}
                src="/images/linkedIn_hero.svg"
                alt="linkedIn"
                width={50}
                height={50}
              />
            </a>
          </div>
      <hr />
    </div>
  );
};

export default SaeIntro;
