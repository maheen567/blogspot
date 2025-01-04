import React from 'react'
import ContactFooter from './ContactFooter'
import QuickLinks from './QuickLinks';
import styles from './Footer.module.css'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.main_footer_div}>
     <div className={styles.footer_div}>
        <div className={styles.upper}>
          <ContactFooter />
          <QuickLinks />
        </div>
        <div className={styles.lower}>
          <p>© 2024 | <Link href= 'https://www.linkedin.com/in/maheen-hussain-931388301/' target='_blank' className={styles.link}>Maheen Hussain</Link> | All Rights Reserved</p>
          <p>Blog Website made with Next.js</p>
        </div>
     </div>
    </footer>
  )
}

export default Footer
