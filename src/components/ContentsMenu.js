import React from 'react'
import { NavLink } from 'react-router-dom'

function ContentsMenu() {
    const title = ["써브웨이와 함께하는 tvN '이번 생도 잘 부탁해'", "써브웨이와 함께하는 tvN '뿅뿅 지구 오락실2'", "써브웨이와 함께하는 채널A '하트시그널4'"];

    return (
        <div className='w-full contentmenu'>
            <div className='lg:w-[1200px] mx-auto py-20'>
                <div className='lg:flex lg:h-[300px]'>
                    <div className='lg:basis-[400px] h-full lg:ml-[55px] amused lg:block hidden'>
                        <p className='lg:ml-[39px] lg:mt-[38px] lg:text-[28px] font-bold text-white lg:leading-10 tracking-[-0.03em]'>써브웨이를</p>
                        <p className='lg:ml-[39px] lg:text-[28px] font-bold text-white lg:leading-10 tracking-[-0.02em]'>제대로 즐기는 방법!</p>
                        <NavLink className='inline-block lg:mt-[92px] lg:ml-[41px] lg:w-[92px] lg:h-9 leading-8 text-white border-2 text-center rounded-[20px]'>이용방법</NavLink>
                    </div>
                    <div className='lg:hidden block bg-[#39A6E4] mx-5 p-10 rounded-tl-[30px] relative pb-20'>
                        <p className='text-xl font-bold text-white'>써브웨이를</p>
                        <p className='text-xl font-bold text-white'>제대로 즐기는 방법!</p>
                        <NavLink className='absolute right-10 bottom-8 py-1 px-3 text-sm text-white border-2 text-center rounded-[20px]'>이용방법</NavLink>
                    </div>
                    <div className='lg:basis-[825px] h-full history lg:block hidden'>
                        <p className='text-white lg:ml-[410px] lg:mt-[38px] text-[28px] font-bold leading-10 tracking-[-0.02em]'>50년 역사를 가진</p>
                        <p className='text-white lg:ml-[410px] text-[28px] font-bold leading-10 tracking-[-0.02em]'>No.1 프랜차이즈의 성장기</p>
                        <NavLink className='inline-block lg:mt-[100px] lg:ml-[410px] lg:w-32 lg:h-9 lg:leading-8 text-white border-2 text-center rounded-[20px]'>써브웨이 역사</NavLink>
                    </div>
                    <div className='lg:hidden block bg-[#F68200] mx-5 p-10 rounded-br-[30px] relative pb-20'>
                        <p className='text-xl font-bold text-white'>50년 역사를 가진</p>
                        <p className='text-xl font-bold text-white'>No.1 프랜차이즈의 성장기</p>
                        <NavLink className='absolute right-10 bottom-8 py-1 px-3 text-sm text-white border-2 text-center rounded-[20px]'>써브웨이 역사</NavLink>
                    </div>
                </div>
                <div className='w-full h-full mt-[30px] lg:ml-[55px] px-5 lg:flex'>
                    <div className='lg:flex lg:basis-[870px] relative bg-white h-[300px] lg:mr-[30px] rounded-tl-[30px] rounded-br-[30px] overflow-hidden'>
                        <div className='lg:mt-[75px] lg:ml-[60px] lg:text-left text-center mt-10'>
                            <span className='text-[#292929] text-[30px] font-bold tracking-tighter h-[60px] lg:pt-[17px] pt-4 pl-[25px] mb-[1px] lg:mt-0 contentbottomtitle'>What's New</span>
                            <p className='text-center leading-[26px] tracking-[-0.03em] lg:block hidden'>써브웨이의 다양한 소식을</p>
                            <p className='text-center leading-[26px] tracking-[-0.03em] lg:block hidden'>빠르게 전달해드립니다.</p>
                            <p className='text-center leading-[26px] tracking-[-0.03em] lg:hidden block text-[#666] text-sm'>써브웨이의 다양한 소식을 빠르게 전달해드립니다.</p>
                        </div>
                        <div className='lg:basis-1/2 lg:mt-[76px] mt-5 lg:ml-[133.5px] ml-16'>
                            <ul>
                                {
                                    title.map((e, i) => {
                                        return (
                                            <li key={i} className='group lg:mt-[21px] mt-3 first:mt-0'><NavLink className='text-[#292929] lg:text-base lg:tracking-[-0.03em] relative group-hover:text-[#009223] after:w-0 after:h-[1px] after:absolute after:left-0 after:bottom-[1px] after:transition-all after:bg-[#009223] group-hover:after:w-full'>{e}</NavLink></li>
                                        )
                                    })
                                }
                            </ul>
                            <NavLink className='lg:inline-block text-[#999] text-sm mt-5 hidden'>more</NavLink>
                            <NavLink className='lg:hidden absolute text-[#999] text-sm right-16 bottom-5'>more</NavLink>
                        </div>
                    </div>
                    <div className='lg:basis-[270px] bg-white lg:h-[300px] rounded-tr-[30px] rounded-bl-[30px] relative overflow-hidden lg:block hidden'>
                        <ul className='flex lg:w-[300%]'>
                            {
                                Array(3).fill().map((_, i) => {
                                    return (
                                        <li><NavLink href="#"><img src={`./../../img/content${i + 1}.jpg`} alt={i} /></NavLink></li>
                                    )
                                })
                            }
                        </ul>
                        <div className='absolute lg:right-[10px] lg:top-[10px]'>
                            <ul>
                                {
                                    Array(3).fill().map((_, i) => {
                                        return (
                                            <li key={i} className='inline-block text-[0px] w-[10px] h-[10px] bg-white rounded-[30px] mx-[5px] transition-all cursor-pointer'><NavLink href="#">1</NavLink></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentsMenu