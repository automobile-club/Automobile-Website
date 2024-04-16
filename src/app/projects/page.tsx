import styles from '@/styles/Projects.module.css'
import ProjectCard from './ProjectCard'
import Image from 'next/image'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import type { Metadata } from 'next'
import OrangeSection from '@/components/OrangeSection'

const title = 'Our Projects'
const content =
  'Discover our impressive portfolio of automotive projects that showcase our technical prowess and innovation. Each project represents our commitment to pushing the boundaries of automotive engineering.'

export const metadata: Metadata = {
  title: 'Projects',
}

export default function Projects() {
  return (
    <>
      <HeroSection title={title} content={content} />
      <div className={styles.body}>
        <div className={styles.timeline}>
          <div className={styles.Timeline_heading}>
            <h1 className={styles.Timeline_heading_text}>Past Projects:</h1>
          </div>
        </div>
        <div className={styles.card_container}>
          <div className={styles.card}>
            <Image
              src="/images/project/jlrroboticarm.png"
              alt="Robotic arm"
              width={290}
              height={117.15}
            />
            <div className={styles.card_content}>
              <h3>JLR’s Robotic Arm</h3>
              <p>
                The JLR Automatic Robotic Charger Arm Challenge in Inter IIT
                11.0 at IIT Kanpur was a remarkable platform for innovation,
                engineering excellence, and pushing the boundaries of
                automation.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div className={styles.card}>
            <Image
              src="/images/project/piezoelectric_suspension.webp"
              alt="Piezoelectric suspension"
              width={290}
              height={117.15}
            />
            <div className={styles.card_content}>
              <h3>Piezoelectric Suspension</h3>
              <p>
                The Piezoelectric Suspension Project undertaken by our team
                represents a pioneering leap into the realm of automotive
                engineering, offering a transformative solution to enhance
                vehicle dynamics, comfort, and sustainability.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div className={styles.card}>
            <Image
              src="/images/project/project-ev-logo.png"
              alt="EV Project"
              width={290}
              height={117.5}
            />
            <div className={styles.card_content}>
              <h3>EV Project</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                et ligula ut augue luctus venenatis. Aenean ipsum tortor,
                euismod sit amet sodales ac, commodo et dui. Maecenas auctor ex
                nibh, ut gravida orci iaculis ac. Proin facilisis eros nec
                laoreet scelerisque.
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
                In the office, remote, or a mix of the two, with Miro, your team
                can connect, collaborate, and co-create in one space no matter
                where you are.
                <Link href="#" className={styles.Btn}>
                  Learn More
                </Link>
              </div>
              <div className={styles.ongoingprojects}>
                <ProjectCard
                  title="Formula Bharat"
                  content="In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are."
                  imageSrc="/images/project/projects1.png"
                />
              </div>
              <div className={`${styles.ongoingprojects} ${styles.middlecard}`}>
                <ProjectCard
                  title="Formula Bharat"
                  content="In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are."
                  imageSrc="/images/project/projects2.png"
                />
              </div>
              <div className={styles.ongoingprojects}>
                <ProjectCard
                  title="Formula Bharat"
                  content="In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are."
                  imageSrc="/images/project/projects3.png"
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
                In the office, remote, or a mix of the two, with Miro, your team
                can connect, collaborate, and co-create in one space no matter
                where you are.
                <Link href="#" className={`${styles.Btn}`}>
                  Learn More
                </Link>
              </div>
              <div className={styles.lb}>
                <div className={styles.ongoingprojects}>
                  <ProjectCard
                    title="Formula Bharat"
                    content="In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are."
                    imageSrc="/images/project/projects1.png"
                  />
                </div>
                <div
                  className={`${styles.ongoingprojects} ${styles.middlecard}`}
                >
                  <ProjectCard
                    title="Formula Bharat"
                    content="In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are."
                    imageSrc="/images/project/projects2.png"
                  />
                </div>
                <div className={styles.ongoingprojects}>
                  <ProjectCard
                    title="Formula Bharat"
                    content="In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are."
                    imageSrc="/images/project/projects3.png"
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
                In the office, remote, or a mix of the two, with Miro, your team
                can connect, collaborate, and co-create in one space no matter
                where you are.
                <Link href="#" className={`${styles.Btn}`}>
                  Learn More
                </Link>
              </div>
              <div className={styles.pcard_container}>
                <div className={styles.pcard}>
                  <Image
                    src="/images/project/hybridwork.png"
                    alt="Project 1"
                    width={100}
                    height={50}
                  />
                  <div className={styles.pcard_content}>
                    <p>
                      In the office, remote, or a mix of the two, with Miro,
                      your team can connect, collaborate, and co-create in one
                      space no matter where you are.
                    </p>
                  </div>
                </div>
                <div className={styles.pcard}>
                  <Image
                    src="/images/project/hybridwork.png"
                    alt="Project 2"
                    width={100}
                    height={50}
                  />
                  <div className={styles.pcard_content}>
                    <p>
                      In the office, remote, or a mix of the two, with Miro,
                      your team can connect, collaborate, and co-create in one
                      space no matter where you are.
                    </p>
                  </div>
                </div>
                <div className={styles.pcard}>
                  <Image
                    src="/images/project/hybridwork.png"
                    alt="Project 3"
                    width={100}
                    height={50}
                  />
                  <div className={styles.pcard_content}>
                    <p>
                      In the office, remote, or a mix of the two, with Miro,
                      your team can connect, collaborate, and co-create in one
                      space no matter where you are.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <OrangeSection />
      </div>
    </>
  )
}
