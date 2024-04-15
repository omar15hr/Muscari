"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/promo-section/HeroParallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
const products = [
  {
    title: 'Polera deportiva manga larga para hombre',
    link: '/product/mens_chill_crew_neck_sweatshirt',
    thumbnail: "/products/1740176-00-A_0_2000.jpg",
  },
  {
    title: 'Chaqueta para hombre',
    link: '/product/men_quilted_shirt_jacket',
    thumbnail: "/products/1740507-00-A_0_2000.jpg",
  },
  {
    title: 'Chaqueta ligera con cierre para hombre',
    link: '/product/men_raven_lightweight_zip_up_bomber_jacket',
    thumbnail: "/products/1740250-00-A_0_2000.jpg",
  },
  {
    title: 'Polera manga larga para hombre',
    link: '/product/men_turbine_long_sleeve_tee',
    thumbnail: "/products/1740280-00-A_0_2000.jpg",
  },
  {
    title: 'Chaqueta con cierre para mujer',
    link: '/product/women_cropped_puffer_jacket',
    thumbnail: "/products/1740535-00-A_0_2000.jpg",
  },
  {
    title: 'Poleron con cierre corto para mujer',
    link: '/product/women_chill_half_zip_cropped_hoodie',
    thumbnail: "/products/1740226-00-A_0_2000.jpg",
  },
  {
    title: 'Sweater para mujer',
    link: '/product/women_raven_slouchy_crew_sweatshirt',
    thumbnail: "/products/1740260-00-A_0_2000.jpg",
  },
  {
    title: 'Polera manga larga para mujer',
    link: '/product/women_turbine_cropped_long_sleeve_tee',
    thumbnail: "/products/1740290-00-A_0_2000.jpg",
  },
  {
    title: 'Bodie Made on Earth para niños',
    link: '/product/made_on_earth_by_humans_onesie',
    thumbnail: "/products/1473809-00-A_1_2000.jpg",
  },
  {
    title: 'Bodie con T logo para niños',
    link: '/product/scribble_t_logo_onesie',
    thumbnail: "/products/8529387-00-A_0_2000.jpg",
  },
  
]
