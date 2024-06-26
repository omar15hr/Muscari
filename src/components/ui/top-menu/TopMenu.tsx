"use client";
import { useEffect, useState } from 'react';

import Link from "next/link";
import Image from "next/image";
import { IoMailOutline ,IoCartOutline } from "react-icons/io5";

import { titleFont } from "@/config/fonts";
import { useCartStore, useUIStore } from "@/store";

import styles from './styles.module.scss';

export const TopMenu = () => {

  const openSideMenu = useUIStore((state) => state.openSideMenu);
  const totalItemsInCart = useCartStore((state) => state.getTotalItems());

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [])



  return (
    <nav className="flex px-5 justify-between items-center w-full" aria-label="Top Menu"> 
      {/* Logo */}
      <Link href="/" className={styles.logoContainer}>
        <span>
          <Image src="/logo/muscari-logo.jpg" priority width={400} height={400} className={styles.logo} alt="muscari-logo" />
        </span>
        <span className={`${titleFont.className} antialiased font-bold hidden sm:inline-block`}>Muscari</span>
        <span className=" hidden sm:block" > | Clothing</span>
        <span className=" block sm:hidden"> <span className={`${titleFont.className} block antialiased font-bold `}>Muscari</span>| Clothing</span>
      </Link>


      {/* Center Menu */}
      <div className=" hidden md:block">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/gender/men"
        >
          Hombres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/gender/women"
        >
          Mujeres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/gender/kid"
        >
          Niños
        </Link>
      </div>

      {/* Search, Cart, Menu */}
      <div className="flex items-center" >
        <Link href="/contact" className="mx-2" aria-label="Mail Icon">
          <IoMailOutline />
        </Link>

        <Link href={
          ((totalItemsInCart === 0) && loaded)
            ? '/empty'
            : "/cart"
        } className="mx-2" aria-label="Cart Icon">
          <div className="relative">
            {(loaded && totalItemsInCart > 0) && (
              <span className="fade-in absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-blue-700 text-white">
                {totalItemsInCart}
              </span>
            )}
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>

        <button
          onClick={openSideMenu}
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Menú
        </button>
      </div>
    </nav>
  );
};
