import React from "react";
import styles from "./BlogCard.module.css";
import { categories } from "@/Data/CategoriesData";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { BiLike } from "react-icons/bi";
import Image from "next/image";

const all_categories = categories;

const BlogCard = () => {
  return (
    <section className={styles.blogcard_section}>
      <div className={styles.container}>
        {all_categories.map((item) => (
          <div key={item.id} className={styles.blogcard_container}>
            <div className={styles.blogcard_wrapper}>
              <img
                src={item.image}
                alt="Item Image"
                className={styles.blogcard_image}
              />

              <div className={styles.blog_details}>
                <h2>{item.category}</h2>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <div className={styles.btn_div}>
                  <Link
                    href={`/blogs/${item.slug}`}
                    className={styles.btn_link}
                  >
                    {item.btnText}
                    <FaArrowRightLong className={styles.right_arrow} />
                  </Link>
                  <span className={styles.icons_span_1}>
                    <IoEyeOutline className={styles.icon} />
                    {item.views}K
                  </span>
                  <span className={styles.icons_span_2}>
                    <BiLike />
                    {item.likes}
                  </span>
                </div>
                <div className={styles.author_div}>
                  <Image src={item.author_image} alt="Author Image" height={40} width={40} className={styles.authorImage}/>
                  <div className={styles.nameDate}>
                    <h4>{item.author_name}</h4>
                    <p>{item.publish_date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogCard;
