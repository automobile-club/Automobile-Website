import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogContainer from "@/components/BlogContainer";
import styles from "@/styles/Blogs.module.css";
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
          selectedButton === "Trident" ? styles.blog_selected_button : ""
        }`}
        onClick={handleButtonClick}
      >
        Trident
      </button>
      <button
        className={`${styles.blog_type_button} ${
          selectedButton === "Rowboatics" ? styles.blog_selected_button : ""
        }`}
        onClick={handleButtonClick}
      >
        Rowboatics
      </button>
    </div>
  );
}

export default function Blog() {
  return (
    <>
      <Navbar BgColor="black" />
      <div className={styles.main}>
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
          <img
            className={styles.bulb}
            src="/blogs-images/Blogbulb.png"
            alt="bulb"
          />
          <div className={styles.sideContent}>
            <h1>Give a platform to your ideas!</h1>
            <h3>
              Have something to share? Email us your blogs and get featured!
            </h3>
            <div className={styles.email}>
              <img className={styles.logo} src="/gmail.svg" alt="gmail" />
              saeiitbhu@itbhu.ac.in
            </div>
          </div>
        </div>
      </div>
    <Footer />
    </>
  );
}
