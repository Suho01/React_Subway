import { faGlobe, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
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

    const [sandwich, setSandwich] = useState(false);
    const toggleSandwich = () => {
        setSandwich(!sandwich);
    };

    return (
        <>
        
            <div className='lg:w-full lg:h-[165px] border-t-[5px] border-[#009223] after:absolute after:top-[165px] after:w-full after:h-[1px] after:bg-[#ddd] after:z-10 group'>
                <div className='lg:w-[1170px] lg:h-full lg:mx-auto lg:flex lg:relative lg:flex-wrap'>
                    {/* pc nav start */}
                    <div className='lg:basis-full lg:text-center lg:mt-9 lg:block hidden'>
                        <NavLink to='/'>
                            <img className='lg:mx-auto' src="./../img/logo.png" alt="logo" />
                        </NavLink>
                    </div>
                    <div className='absolute lg:right-6 lg:top-10 right-5 top-5'>
                        <ul className='flex items-center'>
                            <li className='relative'>
                                <NavLink className='lg:text-sm lg:block lg:text-[#666]'>로그인</NavLink>
                            </li>
                            <li className='relative ml-7 mr-3 after:absolute after:w-[3px] after:h-[3px] after:bg-[#ddd] after:-left-4 after:top-1/2'>
                                <NavLink className='lg:text-sm lg:block lg:text-[#666]'>회원가입</NavLink>
                            </li>
                            <li className='relative'>
                                <NavLink className='lg:text-sm lg:block lg:text-[#666]'><FontAwesomeIcon icon={faGlobe} /></NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='lg:basis-full lg:flex lg:h-14 lg:pt-4 lg:pb-2 lg:relative lg:z-50 hidden'>
                        <ul className='lg:flex lg:w-[1170px] lg:h-16 lg:mx-auto lg:justify-between lg:items-center'>
                            {
                                MainMenu.map((e, i) => {
                                    return (
                                        <li key={i} className='lg:basis-40 lg:text-center lg:font-bold lg:text-lg lg:h-16 cursor-pointer'>
                                            <NavLink className='lg:inline-block lg:w-full lg:text-[#292929] hover:lg:text-[#009223]'>{e}</NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    {/* pc nav end */}

                    {/* mobile nav start */}
                    <div className='w-full fixed bg-white z-20 border-t-[5px] border-[#009223] top-0 lg:hidden'>
                        <ul className='basis-full text-center mt-9 lg:hidden flex justify-between px-5 items-center h-20 mb-7'>
                            <li><NavLink to='/'><img className='' src="./../img/logo.png" alt="logo" /></NavLink></li>
                            <li className='cursor-pointer z-[51]' onClick={() => toggleSandwich()}>
                                {
                                    sandwich ? <FontAwesomeIcon icon={faXmark} className='text-4xl' /> : <img src="./../img/sandwich.png" alt="sandwich" className='w-10' />
                                }
                            </li>
                        </ul>
                        <div className={`lg:hidden block fixed bg-[#009223] right-0 top-0 h-full z-50 p-20 pt-40 duration-500 ${sandwich ? 'right-[-1px]' : '-right-80'}`}>
                            <ul className='text-white'>
                                {
                                    MainMenu.map((e, i) => {
                                        return (
                                            <li key={i} className='mb-10 text-lg relative cursor-pointer text-center'>{e}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    {/* mobile nav end */}

                </div>

                {/* pc sub nav start */}
                <div className='lg:w-full lg:bg-white lg:duration-500 lg:-mt-0 lg:relative lg:overflow-hidden lg:h-0 group-hover:h-72 z-50 lg:block hidden
                '>
                    <div className='lg:w-[1170px] md:max-w-3xl sm:max-w-sm lg:mx-auto lg:flex lg:justify-between'>
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
                {/* pc sub nav end */}

            </div>
            <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 7000,
                disableOnInteraction: false,
            }}
            navigation={{clickable: true}}
            pagination={{clickable: true}}
            modules={[Autoplay, Navigation, Pagination]}
            className='-z-10 lg:mt-0 mt-40'
            >
                {
                    Array(3).fill().map((_, i) => {
                        return (
                            <>
                            <SwiperSlide key={i} className='relative'>
                                <img src={`./../../img/swiper${i + 1}.jpg`} alt={`slide${i + 1}`} className='lg:block hidden'/>
                                <img src={`./../../img/swiper${i + 1}-tablet.png`} alt={`slide${i + 1}`} className='lg:hidden'/>
                            </SwiperSlide>
                            </>
                        )
                    })
                }                
            </Swiper>
            <div className='lg:w-[1170px] mt-[-29px] lg:mx-auto z-[9] relative flex justify-end quick-menu px-5'>
                <ul className='flex basis-[600px]'>
                    <li className='basis-1/2 lg:h-20 h-16 text-center bg-[#ffcd32] rounded-tl-[30px] tracking-[-0.02em]'><NavLink className="lg:text-[22px] text-lg lg:pt-[26px] pt-4 inline-block w-full font-bold before:inline-block before:relative before:w-6 before:h-[30px] before:mr-[13px] before:align-middle before:-top-[2px]">매장찾기</NavLink></li>
                    <li className='basis-1/2 lg:h-20 h-16 text-center bg-[#009223] rounded-br-[30px] tracking-[-0.06em] text-[#292929]'><NavLink className="lg:text-[22px] text-lg lg:pt-[26px] pt-4 inline-block w-full font-bold text-white before:inline-block before:relative before:w-[34px] before:h-[30px] before:align-middle before:mr-[13px] before:-top-[2px]">가맹신청 · 문의</NavLink></li>
                </ul>
            </div>
        </>
    );
}

export default Nav