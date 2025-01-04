import React from 'react';
import styles from './page.module.css'
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "CONTACT",
  description: "Blog Website created with next js",
};


const page = () => {
  return (
    <section className={styles.contact_section}>
      <h2 className={styles.contactUs_heading}>Contact Me</h2>
      <p className={styles.contactUs_description}>
      Let's connect and share ideas to make life more vibrant and inspiring—drop me a message!
      </p>
      <div className={styles.contact_container}>
        <div className={styles.contact_info}>
          <div className={styles.box}>
            <div className={styles.icon}>
              <MdLocationOn />
            </div>
            <div className={styles.info_div}>
              <h4>Address</h4>
              <p>
                263, Sugar camp Road <br /> San Francisco, 57800.
              </p>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.icon}>
              <FaPhoneAlt />
            </div>
            <div className={styles.info_div}>
              <h4>Phone</h4>
              <p>+21 312456789</p>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.icon}>
              <MdEmail />
            </div>
            <div className={styles.info_div}>
              <h4>Email</h4>
              <p>sarah@smith123.com</p>
            </div>
          </div>
        </div>

        <div className={styles.contact_form}>
          <form action="#">
            <h2>Send Message</h2>
            <div className={styles.input_box}>
              <label>Your Name:</label>
              <input type="text" placeholder="Enter your name" required />
            </div>
            <div className={styles.input_box}>
              <label>Your Email:</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className={styles.input_box}>
              <label>Your Message:</label>
              <textarea
                rows={5}
                placeholder="Write your message here"
              ></textarea>
            </div>
            <div className={styles.input_box}>
              <input type="submit" value={"Send"} className={styles.send} />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default page
