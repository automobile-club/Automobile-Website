import type { NextPage } from "next";
import styles from "@/styles/Footer.module.css";
import Link from "next/link";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import ScrollToTopImage from '/Vector.png';


const Group: NextPage = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      setShowScrollButton(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const [email, setEmail] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail((prevEmail) => {
      console.log('Email submitted:', prevEmail);
      return '';
    });
  };;


  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <div className={styles.groupItem} />
      <div className={styles.instagramHeroParent}>
        <div className={styles.instagramHero}>
          <img className={styles.instagram_icon} alt="" src="/images/instagram_hero.svg" />
        </div>
        <div className={styles.facebookHero}>
          <img className={styles.facebook_icon} alt="" src="/images/facebook_hero.svg" />
        </div>
        <div className={styles.linkedinHero}>
          <img className={styles.linkedin_icon} alt="" src="/images/Linkedin.svg" />
        </div>
        <div className={styles.emailHero}>
          <img className={styles.email_icon} alt="" src="/images/email@2x.png" />
        </div>
        <div className={styles.socials}>Socials</div>
        <div className={styles.text}>
          <div className={styles.instagram}>
            <Link href="https://www.instagram.com/saecollegiateclubiitbhu/" style={{ color: 'var(--default-white)' }} >Instagram</Link>
          </div>
          <div className={styles.facebook}>
            <Link href="https://www.facebook.com/SAEIITBHU/" style={{ color: 'var(--default-white)' }} >Facebook</Link>
          </div>
          <div className={styles.linkediln}>
            <Link href="https://www.linkedin.com/company/sae-collegiate-club-iit-varanasi/" style={{ color: 'var(--default-white)' }}> LinkedIn </Link>
          </div>
          <div className={styles.eMail}>
            <Link href="mailto: saecollegiateclub.iitbhu@gmail.com" style={{ color: 'var(--default-white)' }}> Email</Link>
          </div>
        </div>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.collegiateClubParent}>
          <div className={styles.collegiateClub}>            Collegiate Club</div>
          <div className={styles.iitBhuVaranasiContainer}>
            <span className={styles.iitBhuVaranasiContainer1}>
              <p className={styles.iitBhuVaranasiIndia}>
                IIT (BHU) Varanasi. India
              </p>
              <p className={styles.iitBhuVaranasiIndia}>PIN: 221005</p>
            </span>
          </div>
          <div className={styles.tack}>
            {`Dept. of Mechanical engineering`}</div>
          <b className={styles.sae}>SAE</b>
        </div>
        <img className={styles.groupInner} alt="" src="/images/group-23@2x.png" />
        <div className={styles.rectangleGroup}>
          <div className={styles.rectangleDiv} />
          <img className={styles.saeIcon} alt="" src="/images/sae@2x.png" />
        </div>
      </div>
      <div className={styles.col3}>
        <div className={styles.stayUpTo1}>Stay up to date</div>
        <form className={styles.emailInputField1} onSubmit={handleSubmit}>
          <div className={styles.inputFieldBg} >
            <input
              type="email"
              value={email}
              onChange={handleChange}
              placeholder="Your email address"
              className={styles.yourEmailAddress1}
            />
          </div>
          <button type="submit" >
            <img
              src="/images/submit-icon.png"
              alt="Submit"
              className={styles.submit}
            />
          </button>
        </form>
      </div>
      {showScrollButton && (
        <img
          className={styles.scrollButton}
          src="/images/Vector.png"
          alt="Scroll to Top"
          onClick={scrollToTop}
        />
      )}
      <div className={styles.nfoot}>
        <div className={styles.nsocials}>
          <div className={styles.ninstagramHero}>
            <div className={styles.ninstagramHeroChild} />
            <a href="https://www.instagram.com/saecollegiateclubiitbhu/" target="_blank">
              <img className={styles.nvectorIcon} alt="" src="/images/instagram_hero.svg" />
            </a>
          </div>
          <div className={styles.nfacebookHero}>
            <div className={styles.nfacebookHeroChild} />
            <a href="https://www.facebook.com/SAEIITBHU/" target="_blank">
              <img className={styles.nvectorIcon1} alt="" src="/images/facebook_hero.svg" />
            </a>
          </div>
          <div className={styles.nlinkedinHero}>
            <div className={styles.nlinkedinChild} />
            <a href="https://www.linkedin.com/company/sae-collegiate-club-iit-varanasi/" target="_blank">
              <img className={styles.nlinkedinHeroIcon1} alt="" src="/images/linkedin_hero.svg" />
            </a>
          </div>
          <div className={styles.nemailHero}>
            <div className={styles.nemailChild} />
            <a href="mailto: saecollegiateclub.iitbhu@gmail.com" target="_blank">
              <img className={styles.nemailIcon} alt="" src="/images/email@2x.png" />
              </a>
          </div>
      </div>
      <div className={styles.nlogo}>
        <img className={styles.nsaeIcon} alt="" src="/images/logo.svg" />
      </div>
      <div className={styles.nsaeCollegiateClub}>
        <b className={styles.nsae}>SAE</b>
        <div className={styles.ncollegiateClub}> Collegiate Club </div>
      </div>
      <div className={styles.niitBhuVaranasi}>IIT (BHU) Varanasi, India</div>
    </div>
    </div >


  );
};

export default Group;
