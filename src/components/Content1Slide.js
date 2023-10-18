import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

function Content1Slide() {
    return (
        <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                navigation={{clickable: true}}
                pagination={{clickable: true}}
                modules={[Autoplay, Navigation, Pagination]}
                >
                    {
                        Array(3).fill().map((_, i) => {
                            return (
                                <>
                                <SwiperSlide key={i} className='relative'>
                                    <img src={`./../../img/swiper${i + 1}.jpg`} alt={`slide${i + 1}`} />
                                </SwiperSlide>
                            </>
                            )
                        })
                    }                
            </Swiper>
    )
}

export default Content1Slide