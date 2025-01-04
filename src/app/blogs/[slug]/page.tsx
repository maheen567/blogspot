import React from "react";
import styles from "./page.module.css";
import { blogData } from "@/Data/BlogData";
import Comments from "@/components/Comment/Comments";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "BLOG",
  description: "Blog Website created with next js",
};


interface Params {
  params: {
    id: number;
    slug: string;
  };
}

const page = ({ params }: Params) => {
  const blog_slug = params.slug;
  const blog_data = blogData;
  const blogs = blog_data.find((blog) => blog.slug === blog_slug);

  return (
    <section key={blogs?.id} className={styles.blog_section}>
      <div className={styles.blog_img_div}>
          <img
            src={blogs?.image}
            alt="Blog Image"
            className={styles.blog_img}
          />
        </div>
      <div className={styles.section_content}>
        <div>
          <h1>{blogs?.title}</h1>
          <div className={styles.center}>
            <span >{blogs?.category}</span>
            <span >Publish Date: {blogs?.publish_date}</span>
          </div>
          <h3>{blogs?.introduction_heading}</h3>
          <p>{blogs?.introduction_para}</p>
          <h3>{blogs?.step1_title}</h3>
          <p>{blogs?.step1_para}</p>
          <h3>{blogs?.step2_title}</h3>
          <p>{blogs?.step2_para}</p>
          <div className={styles.blog_img_0_div}>
            <img
              src={blogs?.img1}
              alt="Blog Image"
              className={styles.blog_img_0}
            />
          </div>
          <h3>{blogs?.step3_title}</h3>
          <p>{blogs?.step3_para}</p>
          <h3>{blogs?.step4_title}</h3>
          <p>{blogs?.step4_para}</p>
          <div className={styles.blog_img_0_div}>
            <img
              src={blogs?.img2}
              alt="Blog Image"
              className={styles.blog_img_0}
            />
          </div>
          <h3>{blogs?.step5_title}</h3>
          <p>{blogs?.step5_para}</p>
        </div>
        <Comments />
      </div>

    </section>
  );
};

export default page;
