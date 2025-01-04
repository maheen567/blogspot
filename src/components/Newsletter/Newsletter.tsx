import React from 'react';
import styles from './Newsletter.module.css';

const Newsletter = () => {
  return (
    <section className={styles.newsletter_section}>
        <div className={styles.news_text}>
            <h4>Subscribe for Newsletters</h4>
            <p>Get e-mail updates about our <span>latest blog.</span></p>
        </div>
        <div className={styles.form}>
            <input type="text" placeholder='Your email address' />
            <button>Subscribe</button>
        </div>
    </section>
  )
}

export default Newsletter