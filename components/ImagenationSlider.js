import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import database from '../data';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
function ImagenationSlider() {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="imageSwiper"
        >

            {
                database.cardImage.map(value => {
                    return (
                        <SwiperSlide key={value?.id}>
                            <img src={value.imageLocation} alt={value.alt} />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default ImagenationSlider