import styles from '@/styles/Trident.module.css'
import HeroSection from '@/components/HeroSection'
import type { Metadata } from 'next'
import Heading from '@/components/Heading'

const title = 'Team Trident'
const content =
  'We are a student organization at Indian Institute of Technology, (BHU) Varanasi. It focuses on promoting automotive engineering and provides opportunities to participate in technical events, competitions, and hands-on projects related to vehicle design.'

export const metadata: Metadata = {
  title: 'Trident',
}

export default function Trident() {
  return (
    <div>
      <HeroSection title={title} content={content} isTrident={true} />
      <Heading headingText="Events & Workshops" />
    </div>
  )
}
