import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

function Nav() {
    
    const MainMenu = ["메뉴소개", "이용방법", "새소식", "써브웨이", "가맹점", "온라인 주문"];
    
    const SubMenu = [
        ["샌드위치", "랩 · 기타", "샐러드", "아침메뉴", "스마일 썹", "단체메뉴"],
        ["써브웨이 이용방법", "단체메뉴 이용방법", "신선한 재료 소개", "App 이용방법"],
        ["이벤트 · 프로모션", "뉴스 · 공지사항", "광고영상"],
        ["써브웨이 역사", "써브웨이 약속", "샌드위치 아티스트 지원", "매장찾기"],
        ["써브웨이 프랜차이즈", "가맹관련 FAQ", "가맹신청 · 문의", "지사안내", "사업설명회"],
        ["FAST-SUB", "HOME-SUB", "단체주문"]
    ];

    return (
        <>
        
            <div className='lg:w-full lg:h-[165px] border-t-[5px] border-[#009223] after:absolute after:top-[165px] after:w-full after:h-[1px] after:bg-[#ddd] after:z-10 group'>
                <div className='lg:w-[1200px] lg:h-full lg:mx-auto lg:flex lg:relative lg:flex-wrap'>
                    <div className='lg:basis-full lg:text-center lg:mt-9'>
                        <NavLink to='/'>
                            <img className='mx-auto' src="./../img/logo.png" alt="logo" />
                        </NavLink>
                    </div>
                    <div className='lg:absolute lg:right-6 lg:top-10'>
                        <ul className='lg:flex lg:items-center'>
                            <li className='lg:relative'>
                                <NavLink className='lg:text-sm lg:block lg:text-[#666]'>로그인</NavLink>
                            </li>
                            <li className='lg:relative lg:ml-7 lg:mr-3 after:absolute after:w-[3px] after:h-[3px] after:bg-[#ddd] after:-left-4 after:top-1/2'>
                                <NavLink className='lg:text-sm lg:block lg:text-[#666]'>회원가입</NavLink>
                            </li>
                            <li className='lg:relative'>
                                <NavLink className='lg:text-sm lg:block lg:text-[#666]'><FontAwesomeIcon icon={faGlobe} /></NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='lg:basis-full lg:flex lg:h-14 lg:pt-4 lg:pb-2 lg:relative lg:z-50'>
                        <ul className='lg:flex lg:w-[1200px] lg:h-16 lg:mx-auto lg:justify-between lg:items-center'>
                            {
                                MainMenu.map((e) => {
                                    return (
                                        <li className='lg:basis-40 lg:text-center lg:font-bold lg:text-lg lg:h-16 cursor-pointer'>
                                            <NavLink className='lg:inline-block lg:w-full lg:text-[#292929] hover:lg:text-[#009223]'>{e}</NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className='lg:w-full lg:bg-white lg:duration-500 lg:pt-10 lg:-mt-10 lg:relative lg:overflow-hidden lg:h-0 group-hover:h-72
                '>
                    <div className='lg:w-[1200px] lg:mx-auto lg:flex lg:justify-between'>
                        {
                            Array(6).fill().map((_, i) => {
                                return (
                                    <ul className='lg:basis-40 lg:text-center lg:pt-5' key={i}>
                                        {
                                            SubMenu[i].map((e) => {
                                                return (
                                                    <li className='lg:h-9 lg:duration-200'>
                                                        <NavLink className='hover:lg:text-[#009223] hover:lg:underline'>{e}</NavLink>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            // autoplay={{
            //     delay: 7000,
            //     disableOnInteraction: false,
            // }}
            navigation={{clickable: true}}
            pagination={{clickable: true}}
            modules={[Autoplay, Navigation, Pagination]}
            className='-z-10'
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
            <div className='lg:w-[1170px] lg:mt-[-29px] lg:mx-auto z-[9] relative flex justify-end'>
                <ul className='flex basis-[600px]'>
                    <li className='basis-1/2 h-20 text-center bg-[#ffcd32] rounded-tl-[30px] tracking-[-0.02em]'><NavLink className="text-[22px] pt-[26px] inline-block w-full font-bold before:inline-block before:relative before:w-6 before:h-[30px] before:bg-black before:mr-[13px] before:align-middle before:-top-[2px]">매장찾기</NavLink></li>
                    <li className='basis-1/2 h-20 text-center bg-[#009223] rounded-br-[30px] tracking-[-0.06em] text-[#292929]'><NavLink className="text-[22px] pt-[26px] inline-block w-full font-bold text-white before:inline-block before:relative before:w-[34px] before:h-[30px] before:bg-white before:align-middle before:mr-[13px] before:-top-[2px]">가맹신청 · 문의</NavLink></li>
                </ul>
            </div>
        </>
    );
}

export default Nav