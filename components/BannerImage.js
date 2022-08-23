import React, { useRef, useState } from "react";
import Image from 'next/image';
import database from '../data';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectFade, Navigation, Pagination,Autoplay } from "swiper";
function BannerImage() {
  return (
    <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={false}
        pagination={{
          clickable: false,
        }}
        autoplay={{
            delay: 5000,
        }}
        modules={[Autoplay, EffectFade, Navigation]}
        className="mySwiper"
      >
        {
            database.bannerImage.map(value=>{
                return(
                    <SwiperSlide key={value.imageLocation}>
                        <img src={value.imageLocation} alt={value.alt} />
                    </SwiperSlide>
                )
            })
        }
    </Swiper>
  )
}

export default BannerImage