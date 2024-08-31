import Image from 'next/image';
import { Navigation, Autoplay } from 'swiper';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import brand_img_1 from "@assets/img/brand/home-3/brand-1.png";
import brand_img_2 from "@assets/img/brand/home-3/brand-2.png";
import brand_img_3 from "@assets/img/brand/home-3/brand-3.png";
import brand_img_4 from "@assets/img/brand/home-3/brand-4.png";
import brand_img_5 from "@assets/img/brand/home-3/brand-5.png";

const brand_img = [brand_img_1, brand_img_2, brand_img_3, brand_img_4, brand_img_5, brand_img_1, brand_img_2, brand_img_3, brand_img_4, brand_img_5];

const setting = {
    slidesPerView: 5,
    autoplay: {
        delay: 2000, // Delay between transitions in ms
        disableOnInteraction: false, // Auto-play will not be disabled after user interactions
    },
    loop: true, // Enable continuous loop mode
    breakpoints: {
        '1200': {
            slidesPerView: 5,
        },
        '992': {
            slidesPerView: 4,
        },
        '768': {
            slidesPerView: 3,
        },
        '576': {
            slidesPerView: 2,
        },
        '0': {
            slidesPerView: 1,
        },
    },
};

const ClientArea = ({ service }) => {
    const [isLoop, setIsLoop] = useState(false);

    useEffect(() => {
        setIsLoop(true);
    }, []);

    return (
        <>
            <div className={`tp-brand-3-area p-relative ${service ? "breadcrumb-brand" : ""} pt-65 pb-60`}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="tp-brand-3-wrapper">
                                <Swiper
                                    {...setting}
                                    loop={isLoop}
                                    modules={[Navigation, Autoplay]}
                                    className="brand-3-active swiper-container">
                                    {brand_img.map((item, i) =>
                                        <SwiperSlide key={i}>
                                            <div className="tp-brand-3-thumb">
                                                <Image src={item} alt={`brand-${i + 1}`} />
                                            </div>
                                        </SwiperSlide>
                                    )}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClientArea;
