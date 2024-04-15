import React from 'react'
import styles from '@/styles/Heading.module.css'

interface HeadingProps {
  headingText: string
  children?: React.ReactNode
}

const Heading: React.FC<HeadingProps> = ({ headingText, children }) => {
  return (
    <div className={styles.heading}>
      <h2 className={styles.heading_text}>{headingText}</h2>
      {children}
    </div>
  )
}

export default Heading
