import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import BlogCard from "@/components/BlogCard/BlogCard";
import Button from "@/components/Button/Button";
import Newsletter from "@/components/Newsletter/Newsletter";
import Title from "@/components/Title/Title";
import Gallery from "@/components/Gallery/Gallery";

export default function Home() {
  return (
    <>
    <Hero />
    <Title />
    <BlogCard />
    <Button text='Read More' />
    <Newsletter />
    <Gallery />
    </>
  );
}
