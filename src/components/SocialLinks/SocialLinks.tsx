import React from 'react';
import styles from './SocialLinks.module.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';

const SocialLinks = () => {
  return (
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
  )
}

export default SocialLinks
