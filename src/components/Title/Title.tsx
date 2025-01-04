import Image from 'next/image'
import React from 'react';
import styles from './Title.module.css';

const Title = () => {
  return (
    <div className={styles.title_container}>
       <div className={styles.heading}>
            <h2>My <span>Blog</span></h2>
            <p>Read what’s new, exciting, and worth sharing in my latest blogs!</   p>
       </div>
      <div className={styles.images}>
         <Image src={'/author_1.jpg'} alt='Author' height={90} width={90} className={styles.author_image}/>
         <Image src={'/author_4.jpeg'} alt='Author' height={90} width={90} className={styles.author_image}/>
         <Image src={'/author_6.jpeg'} alt='Author' height={90} width={90} className={styles.author_image}/>
         <Image src={'/author_7.jpeg'} alt='Author' height={90} width={90} className={styles.author_image}/>
         <Image src={'/author_9.jpeg'} alt='Author' height={90} width={90} className={styles.author_image}/>
        </div>
    </div>
  )
}

export default Title
