'use client';

import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { FiMenu } from "react-icons/fi";



const navigation = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Blogs",
      link: "/blogs",
    },
    {
      id: 3,
      title: "About me",
      link: "/about",
    },
    {
      id: 4,
      title: "Contact",
      link: "/contact",
    },
  ];

const Navbar = () => {

  let [showMenu, setShowMenu] = useState (false);

    const handleButtonToggle = () => {
      setShowMenu(!showMenu)
    }
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Logo title='BlogSpot' className={styles.logo} />


      <div className={`${styles.navlinks} ${showMenu ? styles.mobile_menu : styles.web_menu}`}>
          {
            navigation.map((nav) => (
              <Link key={nav.id} href={nav.link} className={styles.link}>
                {nav.title}
              </Link>
            ))
          }
      </div>
          <div className={styles.menu_icon_div}> 
            <button onClick={handleButtonToggle}>
            <FiMenu className={styles.menu_icon}/>
            </button>
          </div>
      </div>
    </div>
  )
}

export default Navbar
