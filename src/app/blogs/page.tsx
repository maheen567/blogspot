import React from 'react';
import styles from './page.module.css';
import BlogCard from '@/components/BlogCard/BlogCard';
import BlogTitle from '@/components/BlogTitle/BlogTitle';
import Pagination from '@/components/Pagination/Pagination';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "BLOGS",
  description: "Blog Website created with next js",
};


const page = () => {
  return (
    <div className={styles.blog_container}>
      <BlogTitle />
      <BlogCard />
      <Pagination />
    </div>
  )
}

export default page
