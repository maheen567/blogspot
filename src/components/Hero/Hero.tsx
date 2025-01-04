import React from 'react';
import styles from './Hero.module.css';
import Image from 'next/image';
import hero from '../../../public/hero.jpg';

const Hero = () => {
  return (
    <section className={styles.hero_section}>
      <Image src={hero} alt='Hero Image' className={styles.hero_image}/>
      <div className={styles.hero_details}>
        <h2>Sarah Smith</h2>
        <p>Lifestyle Blogger</p>
      </div>
    </section>
  )
}

export default Hero
