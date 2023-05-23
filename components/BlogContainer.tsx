import React, { useState } from "react";
import styles from "@/styles/Blogs.module.css";
import Image from "next/image";

interface BlogContainerProps {
  numBlogCards: number;
}

const BlogContainer: React.FC<BlogContainerProps> = ({ numBlogCards }) => {
  const [selectedButton, setSelectedButton] = useState<string>("View All");

  const handleButtonClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setSelectedButton(event.currentTarget.innerText);
  };

  return (
    <div className={styles.blog_container}>
      {Array(numBlogCards)
        .fill(null)
        .map((_, index) => (
          <div key={index} className={styles.blog_card}>
            <div className={styles.blog_card_image}></div>
            <button>Read More</button>
          </div>
        ))}
    </div>
  );
};

export default BlogContainer;
