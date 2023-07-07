"use client"
import React, {FC, useEffect} from 'react';
import SwiperCore from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image';
import {Autoplay, Pagination} from "swiper/modules"
import 'swiper/css';
import 'swiper/css/pagination';

type Customer = {
    id: string
    customerName: string;
    customerRole: string;
    review: string;
    customerPic: string
};

interface Props {
    customers: Customer[];
}

const Testimonial: FC<Props> = ({customers}) => {
    return (
        <section className="text-gray-600 body-font bg-gray-300 dark:bg-transparent">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-10">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Testimonial</h2>
                        <div className="h-1 w-20 bg-primary rounded"></div>
                    </div>
                </div>

                <div className="hidden md:flex  flex-wrap -m-4">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        slidesPerView={2}
                        spaceBetween={10}
                        speed={1000}
                        autoplay={{
                            delay: 2000,
                            pauseOnMouseEnter: true,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        navigation={true}
                        pagination={{clickable: false, el: ".sa"}}
                        className="mySwiper"
                    >
                        {customers.map((customer) => (
                            <SwiperSlide key={customer.id} className="p-4 md:w-1/2 w-full">
                                <div className="h-full bg-gray-100 p-8 rounded">
                                    <div className="grid grid-cols-[.4fr_1fr] ">
                                        <Image
                                            alt="testimonial"
                                            width={100}
                                            height={100}
                                            src={customer.customerPic}
                                            className="rounded-[50%_0_50%_50%] w-32 h-32 flex-shrink-0 object-cover object-center"
                                        />
                                        <span className="flex-grow flex flex-col pl-4">
                      <p className="leading-relaxed dark:text-gray-900 mb-6">{customer.review}</p>
                      <span className="title-font font-medium dark:text-gray-900 text-xl sm:text-2xl text-gray-900">
                        {customer.customerName}
                      </span>
                      <span className="text-gray-500 dark:text-gray-500 ">{customer.customerRole}</span>
                    </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="flex md:hidden  flex-wrap -m-4">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        slidesPerView={1}
                        spaceBetween={10}
                        speed={1000}
                        autoplay={{
                            delay: 2000,
                            pauseOnMouseEnter: true,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        navigation={true}
                        pagination={{clickable: false, el: ".sa"}}
                        className="mySwiper"
                    >
                        {customers.map((customer) => (
                            <SwiperSlide key={customer.id} className="p-4 md:w-1/2 w-full">
                                <div className="h-full bg-gray-100 p-8 rounded">
                                    <div className="grid grid-cols-[.4fr_1fr] ">
                                        <Image
                                            alt="testimonial"
                                            width={60}
                                            height={60}
                                            src={customer.customerPic}
                                            className="rounded-[50%_0_50%_50%] w-20 h-20 flex-shrink-0 object-cover object-center"
                                        />
                                        <span className="flex-grow flex flex-col pl-4">
                      <p className="leading-relaxed dark:text-gray-900 mb-6">{customer.review}</p>
                      <span className="title-font font-medium dark:text-gray-900 text-xl sm:text-2xl text-gray-900">
                        {customer.customerName}
                      </span>
                      <span className="text-gray-500 dark:text-gray-500 ">{customer.customerRole}</span>
                    </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
