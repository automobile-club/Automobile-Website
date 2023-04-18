import Navbar from "@/components/Navbar";
import BlogContainer from "@/components/BlogContainer";
import styles from "@/styles/Blogs.module.css";
import blogimg from "../../public/blogs-images/Blogbulb.png";
import gmail from "../../public/gmail.svg";
import { useState } from "react";
import Image from "next/image";

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
      <Navbar BgColor="black" />
      <body className={styles.main}>
        <div className={styles.blog_intro}>
          <h1 className={styles.blog_title}>Blogs</h1>
          <span>
            Learn about cryptocurrency, NFTs, and blockchain, discover our
            latest product updates, partnership announcements, user stories, and
            more.
          </span>
          <BlogType />
        </div>
        <BlogContainer numBlogCards={6} />
        <div className={styles.newBlogIdeas}>
          <Image className={styles.bulb} src={blogimg} alt="" />
          <div className={styles.sideContent}>
            <h1>Give a platform to your ideas!</h1>
            <h3>
              Have something to share? Email us your blogs and get featured!
            </h3>
            <div className={styles.email}><Image className={styles.logo} src={gmail} alt=''/>saeiitbhu@itbhu.ac.in</div>
          </div>
        </div>
      </body>
    </>
  );
}
