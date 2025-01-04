import Link from 'next/link';
import React from 'react';
import styles from './Logo.module.css';

interface Props {
    title?: string,
    className?: string
}

const Logo = ({title, className}:Props) => {
  return (
    <Link href={'/'}>
        <h1 className={`${styles.logo} ${className}`}>{title}</h1>
    </Link>
  )
}

export default Logo
