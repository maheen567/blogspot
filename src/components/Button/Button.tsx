import React from 'react';
import styles from './Button.module.css'
import Link from 'next/link';

const Button = (props:any) => {
  return (
    <div className={styles.container}>
      <Link href={'/blogs'} className={styles.link}>{props.text}</Link>
    </div>
  )
}

export default Button
