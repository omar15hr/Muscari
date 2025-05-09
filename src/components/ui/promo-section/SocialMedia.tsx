"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const socialNetworks = [
  {
    name: "Facebook",
    url: "https://facebook.com",
    imageUrl: "/social-media/facebook.png",
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    imageUrl: "/social-media/instagram.png",
  },
  {
    name: "Tiktok",
    url: "https://tiktok.com",
    imageUrl: "/social-media/tiktok.png",
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    imageUrl: "/social-media/twitter.png",
  },
];

export default function SocialMedia() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
      className="py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <h2 className="clash text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Síguenos en nuestras redes sociales
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Ofrecemos nuestros productos por redes sociales, te brindamos una
            calidad atención y te permitirá conocernos un poco más.
          </p>
        </div>
        
        <div className="mx-auto flex justify-center">
          <ul className="flex flex-wrap justify-center gap-8 sm:gap-12">
            {socialNetworks.map((network) => (
              <motion.li 
                key={network.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href={network.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-3 transition-all duration-300"
                  aria-label={`Visitar ${network.name}`}
                >
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gray-50 p-1 shadow-sm ring-1 ring-gray-200 transition-all duration-300 group-hover:bg-white group-hover:shadow-md group-hover:ring-gray-300">
                    <Image
                      src={network.imageUrl}
                      alt={network.name}
                      width={36}
                      height={36}
                      className="h-9 w-9 object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                    {network.name}
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
