import Navbar from "@/components/Navbar";
import styles from "@/styles/Blogs.module.css";
import Image from "next/image";
import { useState } from "react";

function BlogType() {
  const [selectedButton, setSelectedButton] = useState<string>("View All");

  const handleButtonClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setSelectedButton(event.currentTarget.innerText);
  };

  return (
    <div className={styles.blog_type}>
      <button
        className={`${styles.blog_type_button} ${
          selectedButton === "View All" ? styles.blog_selected_button : ""
        }`}
        onClick={handleButtonClick}
      >
        View All
      </button>
      <button
        className={`${styles.blog_type_button} ${
          selectedButton === "Crypto" ? styles.blog_selected_button : ""
        }`}
        onClick={handleButtonClick}
      >
        Crypto
      </button>
      <button
        className={`${styles.blog_type_button} ${
          selectedButton === "Announcements" ? styles.blog_selected_button : ""
        }`}
        onClick={handleButtonClick}
      >
        Announcements
      </button>
      <button
        className={`${styles.blog_type_button} ${
          selectedButton === "People" ? styles.blog_selected_button : ""
        }`}
        onClick={handleButtonClick}
      >
        People
      </button>
      <button
        className={`${styles.blog_type_button} ${
          selectedButton === "Engineering" ? styles.blog_selected_button : ""
        }`}
        onClick={handleButtonClick}
      >
        Engineering
      </button>
      <button
        className={`${styles.blog_type_button} ${
          selectedButton === "NFT" ? styles.blog_selected_button : ""
        }`}
        onClick={handleButtonClick}
      >
        NFT
      </button>
    </div>
  );
}

export default function Blog() {
  return (
    <>
      <Navbar BgColor="white" />
      <body className={styles.main}>
        <div className={styles.blog_intro}>
          <h1 className={styles.blog_title}>Blogs</h1>
          <p>
            Learn about cryptocurrency, NFTs, and blockchain, discover our
            latest product updates, partnership announcements, user stories, and
            more.
          </p>
          <BlogType />
        </div>
        <div className={styles.blog_container}>
          <div className={styles.blog_card}><button>Read More</button></div>
          <div className={styles.blog_card}><button>Read More</button></div>
          <div className={styles.blog_card}><button>Read More</button></div>
          <div className={styles.blog_card}><button>Read More</button></div>
          <div className={styles.blog_card}><button>Read More</button></div>
          <div className={styles.blog_card}><button>Read More</button></div>
        </div>
      </body>
    </>
  );
}
