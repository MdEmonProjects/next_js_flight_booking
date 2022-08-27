import Image from 'next/image'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import database from '../data';
import { Pagination, Autoplay } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faStar, faStarHalf, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

function ChooseusTesttimonial() {
    return (
        <section className='choose_us__testimonial'>
            <div className='container mx-auto flex justify-center flex-wrap'>
                <div className='choose_us_section' style={{ width: "476px", maxWidth: "100%" }}>
                    <div className='heading_'>
                        <h3>Why Choose Us</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                    </div>

                    <div className='choose_us_images flex justify-start flex-wrap relative'>
                        {
                            database?.chooseUsImage.map(value => {
                                return (
                                    <div className='item_image m-2.5 relative' key={value?.id} style={{ height: "213px" }}>
                                        <Image src={value?.imageLocation} width={213} height={213} alt={value?.alt} className="hover:scale-110  transition-all duration-500"></Image>
                                        <div className='image-overly absolute top-0 left-0 w-full h-full flex justify-center items-end choose_us_image_bg pointer-events-none'>
                                            <h2>{value?.name}</h2>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
                <div className='testimonial_section ml-0 sm:ml-8' style={{ width: "635px", maxWidth: "100%" }}>
                    <div className='heading_ text-right'>
                        <h3>Testimonials</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum has been the industry's standard dummy text.</p>
                    </div>
                    <div className='testimonial_slider pt-8'>
                        <Swiper
                            pagination={{
                                dynamicBullets: true,
                            }}
                            autoplay={{
                                delay: 1000,
                            }}
                            modules={[Pagination, Autoplay]}
                            className="testimonial_swiper_"
                        >
                            <SwiperSlide>
                                <FontAwesomeIcon style={{ fontSize: "65px", color: "#2095AE", verticalAlign: "revert" }} icon={faQuoteLeft}></FontAwesomeIcon>
                                <div className='service_rating'>
                                    <FontAwesomeIcon style={{ fontSize: "15px", color: "#fec624", verticalAlign: "revert" }} icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon style={{ fontSize: "15px", color: "#fec624", verticalAlign: "revert" }} icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon style={{ fontSize: "15px", color: "#fec624", verticalAlign: "revert" }} icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon style={{ fontSize: "15px", color: "#fec624", verticalAlign: "revert" }} icon={faStarHalfAlt}></FontAwesomeIcon>
                                    <FontAwesomeIcon style={{ fontSize: "15px", color: "#838383", verticalAlign: "revert" }} icon={faStar}></FontAwesomeIcon>
                                </div>
                                <div className='comment'>
                                    <p>
                                        “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.”
                                    </p>
                                </div>
                                <div className='writer-name'>
                                    <h4>Mikal clark</h4>
                                </div>
                                <div className='writer-position'>
                                    <h4>CEO</h4>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <FontAwesomeIcon style={{ fontSize: "65px", color: "#2095AE", verticalAlign: "revert" }} icon={faQuoteLeft}></FontAwesomeIcon>
                                <div className='service_rating'>
                                    <FontAwesomeIcon style={{ fontSize: "15px", color: "#fec624", verticalAlign: "revert" }} icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon style={{ fontSize: "15px", color: "#fec624", verticalAlign: "revert" }} icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon style={{ fontSize: "15px", color: "#fec624", verticalAlign: "revert" }} icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon style={{ fontSize: "15px", color: "#fec624", verticalAlign: "revert" }} icon={faStarHalfAlt}></FontAwesomeIcon>
                                    <FontAwesomeIcon style={{ fontSize: "15px", color: "#838383", verticalAlign: "revert" }} icon={faStar}></FontAwesomeIcon>
                                </div>
                                <div className='comment'>
                                    <p>
                                        “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.”
                                    </p>
                                </div>
                                <div className='writer-name'>
                                    <h4>Mikal clark</h4>
                                </div>
                                <div className='writer-position'>
                                    <h4>CEO</h4>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <FontAwesomeIcon style={{ fontSize: "65px", color: "#2095AE", verticalAlign: "revert" }} icon={faQuoteLeft}></FontAwesomeIcon>
                                <div className='service_rating'>
                                    <FontAwesomeIcon style={{ fontSize: "15px", color: "#fec624", verticalAlign: "revert" }} icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon style={{ fontSize: "15px", color: "#fec624", verticalAlign: "revert" }} icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon style={{ fontSize: "15px", color: "#fec624", verticalAlign: "revert" }} icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon style={{ fontSize: "15px", color: "#fec624", verticalAlign: "revert" }} icon={faStarHalfAlt}></FontAwesomeIcon>
                                    <FontAwesomeIcon style={{ fontSize: "15px", color: "#838383", verticalAlign: "revert" }} icon={faStar}></FontAwesomeIcon>
                                </div>
                                <div className='comment'>
                                    <p>
                                        “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.”
                                    </p>
                                </div>
                                <div className='writer-name'>
                                    <h4>Mikal clark</h4>
                                </div>
                                <div className='writer-position'>
                                    <h4>CEO</h4>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <FontAwesomeIcon style={{ fontSize: "65px", color: "#2095AE", verticalAlign: "revert" }} icon={faQuoteLeft}></FontAwesomeIcon>
                                <div className='service_rating'>
                                    <FontAwesomeIcon style={{ fontSize: "15px", color: "#fec624", verticalAlign: "revert" }} icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon style={{ fontSize: "15px", color: "#fec624", verticalAlign: "revert" }} icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon style={{ fontSize: "15px", color: "#fec624", verticalAlign: "revert" }} icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon style={{ fontSize: "15px", color: "#fec624", verticalAlign: "revert" }} icon={faStarHalfAlt}></FontAwesomeIcon>
                                    <FontAwesomeIcon style={{ fontSize: "15px", color: "#838383", verticalAlign: "revert" }} icon={faStar}></FontAwesomeIcon>
                                </div>
                                <div className='comment'>
                                    <p>
                                        “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.”
                                    </p>
                                </div>
                                <div className='writer-name'>
                                    <h4>Mikal clark</h4>
                                </div>
                                <div className='writer-position'>
                                    <h4>CEO</h4>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ChooseusTesttimonial