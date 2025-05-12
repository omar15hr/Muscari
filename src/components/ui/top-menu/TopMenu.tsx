"use client";
import { useEffect, useState } from 'react';

import Link from "next/link";
import Image from "next/image";
import { IoMailOutline ,IoCartOutline } from "react-icons/io5";
import { titleFont } from "@/config/fonts";
import { useCartStore, useUIStore } from "@/store";
import { usePathname } from "next/navigation";
import styles from './styles.module.scss';

const links = [
  {
    href: '/gender/men',
    label: 'Hombres'
  },
  {
    href: '/gender/women',
    label: 'Mujeres'
  },
  {
    href: '/gender/kid',
    label: 'Niños'
  }
]

export const TopMenu = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);
  const totalItemsInCart = useCartStore((state) => state.getTotalItems());
  const pathname = usePathname();

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [])

  return (
    <nav className="flex px-5 justify-between items-center w-full shadow-md" aria-label="Top Menu"> 
      {/* Logo */}
      <Link href="/" className={styles.logoContainer}>
        <span>
          <Image src="/logo/muscari-logo.jpg" priority width={400} height={400} className={styles.logo} alt="muscari-logo" />
        </span>
        <span className={`${titleFont.className} antialiased font-bold hidden sm:inline-block`}>Muscari</span>
        <span className=" hidden sm:block" > | Clothing</span>
        <span className=" block sm:hidden"> <span className={`${titleFont.className} block antialiased font-bold `}>Muscari</span>| Clothing</span>
      </Link>

      <div className=" hidden md:block">
        {links.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              className={`m-2 p-2 rounded-md relative group ${isActive ? 'font-bold text-primary' : ''}`}
              href={link.href}
            >
              {link.label}
              <span 
                className={`absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform transition-transform duration-300 ease-in-out origin-left ${
                  isActive 
                    ? 'scale-x-100' 
                    : 'scale-x-0 group-hover:scale-x-100'
                }`}
              ></span>
            </Link>
          );
        })}
      </div>

      {/* Search, Cart, Menu */}
      <div className="flex items-center" >
        <Link href="/contact" className="mx-2 hover:scale-110 transition duration-300 ease-in-out cursor-pointer" aria-label="Mail Icon">
          <IoMailOutline className='w-6 h-6' />
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
            <IoCartOutline className="w-6 h-6 hover:scale-110 transition duration-300 ease-in-out cursor-pointer" />
          </div>
        </Link>

        <button
          onClick={openSideMenu}
          className="m-2 p-2 rounded-md relative group"
        >
          Menú
          <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform scale-x-0 transition-transform duration-300 ease-in-out origin-left group-hover:scale-x-100"></span>
        </button>
      </div>
    </nav>
  );
};
