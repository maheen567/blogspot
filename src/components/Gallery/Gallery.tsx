import React from 'react';
import styles from './Gallery.module.css'

const Gallery = () => {
  return (
    <div className={styles.section}>
        <h2>Gallery</h2>
    <div className={styles.gallery_container}>
      <img src="/G1.jpg" alt="Gallery Image" className={styles.gallery_img}/>
      <img src="/G2.jpg" alt="Gallery Image" className={styles.gallery_img}/>
      <img src="/G3.jpg" alt="Gallery Image" className={styles.gallery_img}/>
      <img src="/G4.jpg" alt="Gallery Image" className={styles.gallery_img}/>
      <img src="/G5.jpg" alt="Gallery Image" className={styles.gallery_img}/>
      <img src="/G6.jpg" alt="Gallery Image" className={styles.gallery_img}/>
    </div>
    </div>
  )
}

export default Gallery
