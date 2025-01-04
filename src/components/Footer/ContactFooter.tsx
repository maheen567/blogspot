import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import styles from "./Footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
import SocialLinks from "../SocialLinks/SocialLinks";
import Logo from "../Logo/Logo";

const socialLinks = [
  {
    id: 1,
    icon: <FaFacebookF />,
    link: '#'
  },
  {
    id: 2,
    icon: <FaTwitter />,
    link: '#'
  },
  {
    id: 3,
    icon: <FaInstagram />,
    link: '#'
  },
  {
    id: 4,
    icon: <FaPinterestP />,
    link: '#'
  },
  {
    id: 5,
    icon: <FaYoutube />,
    link: '#'
  },
]

const ContactFooter = () => {
  return (
    <div className={styles.contact_column}>
      <div className={styles.contact_info}>
        <Logo title='BlogSpot' className={styles.logo}/>
        <h2>Contact</h2>
        <p>
          <strong>Address: </strong> 263, Sugar camp Road San Frascisco, America
        </p>
        <p>
          <strong>Phone: </strong>+1 (312) 3456789
        </p>
        <p>
          <strong>Email: </strong>sarah@smith123.com
        </p>
      </div>

      <div>
        <h4>Follow Us</h4>
        <SocialLinks />
      </div>
    </div>
  );
};

export default ContactFooter;