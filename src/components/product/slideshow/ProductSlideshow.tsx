'use client';

import { useState } from 'react';
import { Swiper as SwiperObject } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { ProductImage } from '../product-image/ProductImage';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './slideshow.css';


interface Props {
  images: string[];
  title: string;
  className?: string;
}



export const ProductSlideshow = ( { images, title, className }: Props ) => {

  const [ thumbsSwiper, setThumbsSwiper ] = useState<SwiperObject>();


  return (
    <div className={ className }>

      <Swiper
        style={ {
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        } as React.CSSProperties
        }
        spaceBetween={ 10 }
        navigation={ true }
        
        thumbs={ {
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
        } }
        modules={ [ FreeMode, Navigation, Thumbs, Autoplay ] }
        className="mySwiper2"
      >

        {
          images.map( image => (
            <SwiperSlide key={ image }>
              <ProductImage
                width={ 1024 }
                height={ 800 }
                src={ image }
                alt={ title }
                className="rounded-lg object-fill"
              />
            </SwiperSlide>

          ) )
        }
      </Swiper>
    </div>
  );
};