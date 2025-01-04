import React from "react";
import styles from "./page.module.css";
import SocialLinks from "@/components/SocialLinks/SocialLinks";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "ABOUT ME",
  description: "Blog Website created with next js",
};


const page = () => {
  return (
    <section className={styles.about_section}>
      <div className={styles.about_container}>
        <div className={styles.about_details}>
          <div className={styles.about_text}>
            <div className={styles.above_portion}>
              <h2>Sarah Smith</h2>
              <p>
                I'm a dedicated culture critic and lifestyle blogger located in
                San Francisco, America.
              </p>
            </div>
            <div className={styles.lower_portion}>
              <p>@sarahsmith</p>
              <SocialLinks />
            </div>
          </div>
          <div className={styles.about_image}>
            <img src="/about.jpg" alt="About" className={styles.about} />
          </div>
        </div>
      </div>

      {/* Written info */}
      <div className={styles.info_container}>
        <h2>About Me</h2>
        <p>
          Hi there! I’m Sarah Smith, a passionate lifestyle enthusiast, here to
          inspire you to live your best life. Whether it’s discovering the
          coziest coffee spots in town, sharing DIY home decor hacks, or
          exploring wellness tips to keep your mind and body in sync, this is
          the space where it all comes together.
          <br />
          On this blog, you’ll find a blend of personal stories, practical tips,
          and curated recommendations covering everything from travel adventures
          and fashion finds to mindful living and delicious recipes. My mission
          is to help you find joy in the little things, embrace creativity, and
          make everyday moments extraordinary.
          <br />I believe that life is a beautiful journey, and we’re all in it
          together. So grab a cup of coffee, dive into my posts, and let’s
          create a life we love—one blog at a time! Don’t forget to share your
          thoughts in the comments or connect with me on social media. I’d love
          to hear your stories and ideas too!
        </p>
        <h4>Connect with me!</h4>
        
        <div className={styles.SocialLinks}>
      <Link href={'#'} className={styles.link} >
        <FaFacebookF />
      </Link>
      <Link href={'#'} className={styles.link} >
        <FaInstagram />
      </Link>
      <Link href={'#'} className={styles.link} >
        <FaTwitter />
      </Link>
      <Link href={'#'} className={styles.link} >
        <FaLinkedinIn />
      </Link>
    </div>
      </div>
    </section>
  );
};

export default page;
