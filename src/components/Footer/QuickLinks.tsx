import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';

const QuickLinks = () => {
  return (
    <div className={styles.about_column}>
      <h4>Quick Links</h4>
      <Link href="/about" className={styles.about_links}>About Me</Link>
      <Link href="/blogs" className={styles.about_links}>Blogs</Link>
      <Link href="/contact" className={styles.about_links}>Contact</Link>
      <Link href="#" className={styles.about_links}>Gallery</Link>
    </div>
  )
}

export default QuickLinks