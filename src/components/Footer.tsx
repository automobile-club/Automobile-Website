'use client'
import type { NextPage } from 'next'
import styles from '@/styles/Footer.module.css'
import Link from 'next/link'
import { useState, useEffect, ChangeEvent, FormEvent } from 'react'

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
        <div className={styles.logo}>
          <div className={styles.addlheading}>
            <h2 className={styles.headingl1}>SAE</h2>
            <h2 className={styles.headingl2}>Collegiate Club</h2>
          </div>
          <img
            className={styles.building}
            alt="bhu building logo"
            src="/bhu_building.png"
          />
          <img className={styles.sae} alt="sae logo" src="/sae_logo.svg" />
        </div>
        <div className={styles.address}>
          <div className={styles.addheading}>
            <h2 className={styles.heading1}>SAE</h2>
            <h2 className={styles.heading2}>Collegiate Club</h2>
          </div>
          <p>TACK Ka full form Or pura tack ka address</p>
          <p>IIT (BHU) Varanasi. India PIN: 221005</p>
        </div>
        <div className={styles.social}>
          <h2>Socials</h2>
          <div className={styles.socialItem}>
            <img
              className={styles.instaicon}
              alt="insta logo"
              src="/instagram_icon.svg"
            />
            <Link href="https://www.instagram.com/saecollegiateclubiitbhu/">
              Instagram{' '}
            </Link>
          </div>
          <div className={styles.socialItem}>
            <img
              className={styles.facebookicon}
              alt="fb logo"
              src="/facebook_icon.svg"
            />
            <Link href="https://www.facebook.com/SAEIITBHU/">Facebook </Link>
          </div>
          <div className={styles.socialItem}>
            <img
              className={styles.linkedinicon}
              alt="linkedin logo"
              src="/linkedin_icon.svg"
            />
            <Link href="https://www.linkedin.com/company/sae-collegiate-club-iit-varanasi/">
              {' '}
              LinkedIn{' '}
            </Link>
          </div>
          <div className={styles.socialItem}>
            <img
              className={styles.emailicon}
              alt="mail logo"
              src="/emailicon.svg"
            />
            <Link href="mailto: saecollegiateclub.iitbhu@gmail.com">
              {' '}
              Email{' '}
            </Link>
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
              <img src="/submit_icon.svg" alt="Submit" />
            </button>
          </form>
        </div>
        {showScrollButton && (
          <div className={styles.scrollButton}>
            <img
              src="/images/Vector.png"
              alt="Scroll to Top"
              onClick={scrollToTop}
            />
          </div>
        )}
        <div className={styles.nfoot}>
          <div className={styles.nsocial}>
            <a href="https://www.instagram.com/saecollegiateclubiitbhu/">
              <img
                className={styles.ninstaicon}
                alt="insta logo"
                src="/instagram_icon.svg"
              />
            </a>
            <a href="https://www.facebook.com/SAEIITBHU/">
              <img
                className={styles.nfacebookicon}
                alt="fb logo"
                src="/facebook_icon.svg"
              />
            </a>
            <a href="https://www.linkedin.com/company/sae-collegiate-club-iit-varanasi/">
              <img
                className={styles.nlinkedinicon}
                alt="linkedin logo"
                src="/linkedin_icon.svg"
              />
            </a>
            <a href="mailto: saecollegiateclub.iitbhu@gmail.com">
              <img
                className={styles.nemailicon}
                alt="mail logo"
                src="/emailicon.svg"
              />
            </a>
          </div>
          <div className={styles.addheading}>
            <h2 className={styles.heading1}>SAE</h2>
            <h2 className={styles.heading2}>Collegiate Club</h2>
          </div>
          <img className={styles.sae} alt="sae logo" src="/sae_logo.svg" />
          <div className={styles.niit}>IIT (BHU) Varanasi, India</div>
        </div>
      </div>
    </div>
  )
}
export default Footer
