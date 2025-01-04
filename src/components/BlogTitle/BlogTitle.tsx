import Image from 'next/image'
import React from 'react';
import styles from './BlogTitle.module.css';
import author_1 from '/author_1.jpg';
import author_4 from '/author_4.jpeg';
import author_6 from '/author_6.jpeg';
import author_7 from '/author_7.jpeg';
import author_9 from '/author_9.jpeg';

const BlogTitle = () => {
  return (
    <div className={styles.blogtitle_container}>
         <h2>See what we've <br /><span> written lately!</span></h2>
        <div className={styles.images}>
         <Image src={'/author_1.jpg'} alt='Author' height={130} width={130} className={styles.author_image}/>
         <Image src={'/author_4.jpeg'} alt='Author' height={130} width={130} className={styles.author_image}/>
         <Image src={'/author_6.jpeg'} alt='Author' height={130} width={130} className={styles.author_image}/>
         <Image src={'/author_7.jpeg'} alt='Author' height={130} width={130} className={styles.author_image}/>
         <Image src={'/author_9.jpeg'} alt='Author' height={130} width={130} className={styles.author_image}/>
        </div>
      </div>
  )
}

export default BlogTitle

// See what we've written lately!
