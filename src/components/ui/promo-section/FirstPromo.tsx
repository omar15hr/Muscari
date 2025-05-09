"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import blackShirt from "../../../../public/products/100042301_0_2000.jpg";
import blackShirtZoom from "../../../../public/products/100042301_alt.jpg";
import redShirt from "../../../../public/products/100042307_0_2000.jpg";
import bodyBaby from "../../../../public/products/1473814-00-A_1_2000.jpg";
import hat from "../../../../public/products/1657916-00-A_1.jpg";
import grayShirt from "../../../../public/products/8765130-00-A_1.jpg";
import blackShirtSquare from "../../../../public/products/1549268-00-A_2.jpg";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button"
import { motion } from "framer-motion";


export default function FirstPromo() {
  const { data: session } = useSession();
  const isAuthenticated = !!session?.user;

  return (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="relative overflow-hidden mt-5"
  >
    <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
      <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div className="sm:max-w-lg">
          <h1 className="clash text-4xl semi-bold tracking-tight text-gray-950 sm:text-6xl">
            Los estilos de verano ya están aquí
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Enfrenta los elementos con estilo este verano con nuestra nueva
            colección. Regístrate y adquiere nuestros diseños.
          </p>
        </div>
        <div>
          <div className="mt-10">
            {/* Decorative image grid */}
            <div
              aria-hidden="true"
              className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
            >
              <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div className="flex items-center space-x-6 lg:space-x-8">
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 shadow-lg">
                      <Image
                        src={blackShirt}
                        alt=""
                        priority
                        width={400}
                        height={0}
                        className="promo-image-1 h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src={blackShirtZoom}
                        alt=""
                        priority
                        width={400}
                        height={40}
                        className="promo-image-2 h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src={redShirt}
                        alt=""
                        priority
                        width={400}
                        height={40}
                        className="promo-image-3 h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src={bodyBaby}
                        alt=""
                        priority
                        width={400}
                        height={40}
                        className="promo-image-4 h-full w-full object-cover object-center shadow-lg"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src={grayShirt}
                        alt=""
                        priority
                        width={400}
                        height={40}
                        className="promo-image-5 h-full w-full object-cover object-center shadow-lg"
                      />
                    </div>
                  </div>
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src={hat}
                        alt=""
                        priority
                        width={400}
                        height={40}
                        className="promo-image-6 h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src={blackShirtSquare}
                        alt=""
                        priority
                        width={400}
                        height={40}
                        className="promo-image-7 h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {!isAuthenticated && (
              <Link href="/auth/login" className={buttonVariants({ variant: "default", size: 'lg' })}>Registrate ya</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
    
  );
}
