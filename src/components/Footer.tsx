'use client'
import type { NextPage } from 'next'
import styles from '@/styles/Footer.module.css'
import Link from 'next/link'
import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import Image from 'next/image'

const Footer: NextPage = () => {
  const [showScrollButton, setShowScrollButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      setShowScrollButton(scrollTop > 100)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    console.log('Scroll to top button clicked')
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  const [email, setEmail] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Email submitted:', email)
  }

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <div className={styles.logoContainer}>
          <div className={styles.addlheading}>
            <h2 className={styles.headingl1}>SAE</h2>
            <h2 className={styles.headingl2}>Collegiate Club</h2>
          </div>
          <Image
            width={100}
            height={100}
            className={styles.building}
            alt="bhu building logo"
            src="/images/footer/bhuBuilding.svg"
          />
          <Image
            width={100}
            height={100}
            className={styles.saeLogo}
            alt="sae logo"
            src="/images/footer/sae_logo.svg"
          />
        </div>
        <div className={styles.address}>
          <div className={styles.addheading}>
            <h2 className={styles.heading1}>SAE</h2>
            <h2 className={styles.heading2}>Collegiate Club</h2>
          </div>
          <p>Technical Assistance Centre, Mechanical department</p>
          <p>IIT (BHU) Varanasi, 221005, Uttar Pradesh, India</p>
        </div>
        <div className={styles.social}>
          <h2>Socials</h2>
          <div className={styles.socialContainer}>
            <div>
              <Link
                href="https://www.instagram.com/saecollegiateclubiitbhu/"
                className={styles.socialContainerChild}
              >
                <Image
                  width={36}
                  height={36}
                  alt="insta logo"
                  src="/images/social/instagram_hero.svg"
                />
                Instagram
              </Link>
            </div>
            <div>
              <Link
                href="https://www.facebook.com/SAEIITBHU/"
                className={styles.socialContainerChild}
              >
                <Image
                  width={36}
                  height={36}
                  alt="fb logo"
                  src="/images/social/facebook_hero.svg"
                />
                Facebook
              </Link>
            </div>
            <div>
              <Link
                href="https://www.linkedin.com/company/sae-collegiate-club-iit-varanasi/"
                className={styles.socialContainerChild}
              >
                <Image
                  width={36}
                  height={36}
                  alt="linkedin logo"
                  src="/images/social/linkedin_hero.svg"
                />
                LinkedIn
              </Link>
            </div>
            <div>
              <Link
                href="mailto:saecollegiateclub.iitbhu@gmail.com"
                className={styles.socialContainerChild}
              >
                <Image
                  width={36}
                  height={36}
                  alt="mail logo"
                  src="/images/social/mail_hero.svg"
                />
                Email
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.submitcol}>
          <h2>Stay Up to date</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={handleChange}
              placeholder="Your email address"
            />
            <button type="submit">
              <img
                src="/images/footer/submit_icon.svg"
                alt="Submit"
                className={styles.submitimg}
              />
            </button>
          </form>
        </div>
        {showScrollButton && (
          <div className={styles.scrollButton}>
            <img
              className={styles.scrollImage}
              src="/images/footer/Vector.png"
              alt="Scroll to Top"
              onClick={scrollToTop}
            />
          </div>
        )}
        <div className={styles.nfoot}>
          <div className={styles.nsocial}>
            <a href="https://www.instagram.com/saecollegiateclubiitbhu/">
              <Image
                width={45}
                height={45}
                className={styles.ninstaicon}
                alt="insta logo"
                src="/images/social/instagram_hero.svg"
              />
            </a>
            <a href="https://www.facebook.com/SAEIITBHU/">
              <Image
                width={45}
                height={45}
                className={styles.nfacebookicon}
                alt="fb logo"
                src="/images/social/facebook_hero.svg"
              />
            </a>
            <a href="https://www.linkedin.com/company/sae-collegiate-club-iit-varanasi/">
              <Image
                width={45}
                height={45}
                className={styles.nlinkedinicon}
                alt="linkedin logo"
                src="/images/social/linkedin_hero.svg"
              />
            </a>
            <a href="mailto:saecollegiateclub.iitbhu@gmail.com">
              <Image
                width={45}
                height={45}
                className={styles.nemailicon}
                alt="mail logo"
                src="/images/social/mail_hero.svg"
              />
            </a>
          </div>
          <div className={styles.addheading}>
            <h2 className={styles.heading1}>SAE</h2>
            <h2 className={styles.heading2}>Collegiate Club</h2>
          </div>
          <Image
            className={styles.smlSaeLogo}
            width={250}
            height={250}
            alt="sae logo"
            src="/images/footer/sae_logo.svg"
          />
          <h2 className={styles.niit}>IIT (BHU) Varanasi, India</h2>
        </div>
      </div>
    </div>
  )
}
export default Footer
