import React from 'react'
import styles from '@/styles/ProjectCard.module.css'

interface ProjectCardProps {
  title: string
  content: string
  imageSrc: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  content,
  imageSrc,
}) => {
  return (
    <div className={styles.Project}>
      <div className={styles.rectangle}>
        <img src={imageSrc} alt="ProjectCard Image" />
        <div className={styles.overlay}>
          <p className={styles.title}>{title}</p>
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
