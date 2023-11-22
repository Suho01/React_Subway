import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { MenuBox } from './../../src/data/MenuBox';

function MenuList() {
    const SubwayMenu = ["클래식", "프레쉬&라이트", "프리미엄", "아침메뉴"];
    const [menuBox, setMenuBox] = useState(MenuBox);
    
    return (
        <div className='bg-white w-full lg:h-[560px] pb-[60px]'>
            <div className="lg:w-[1170px] lg:mx-auto pt-[60px] pb-[33px] lg:flex lg:justify-between px-5 text-center">
                <span className='text-[#292929] text-[40px] font-bold lg:pt-1 pl-[25px] mb-[1px] lg:h-[60px] contentbottomtitle tracking-tighter'>Subway's Menu</span>
                <ul className='flex mt-11 lg:justify-normal justify-around'>
                    {
                        SubwayMenu.map((e, i) => {
                            return (
                                <li key={i} className='lg:pl-[25px] lg:ml-[23px] relative after:absolute after:w-[1px] after:h-[15px] after:bg-[#ddd] after:-right-6 after:top-1 after:last:w-0'><NavLink className={`inline-block w-full tracking-[-0.03em] hover:text-[#009223] hover:font-bold ${i === 0 ? 'text-[#009223] font-bold' : ''}`}>{e}</NavLink></li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='w-full h-[320px] relative overflow-hidden lg:block hidden'>
                <div className='lg:w-[1170px] h-full absolute left-1/2 -translate-x-1/2 w-full'>
                    <div className='w-full h-full overflow-hidden'>
                        <div className='lg:w-[200%] w-[1170px] flex relative px-5'>
                            {
                                menuBox.filter(function(e) {
                                    return e.id === "classic";
                                }).map((e, i) => {
                                    return (
                                        <div className='lg:basis-[260px] lg:h-[320px] lg:ml-[30px] lg:px-[5px] cursor-pointer text-center relative menubox group'>
                                            <img key={i} src={`./../../img/sandwich_${i + 1}.jpg`} alt={e.name} className='w-full h-[182px] lg:group-hover:w-[440px] lg:group-hover:h-[238px]' />
                                            <h3 className='text-[#292929] lg:text-lg lg:mt-[-1px] lg:mb-2 group-hover:text-[22px] group-hover:mt-[10px]'>{e.name}</h3>
                                            <p className='text-[#999] text-[13px] leading-[21px] tracking-[-0.04em] group-hover:hidden'>{e.desc}</p>
                                            <p className='text-[#999] text-[13px] leading-[21px] tracking-[-0.04em] group-hover:hidden'>{e.desc2}</p>
                                            <p className='text-[#999] text-[13px] leading-[21px] tracking-[-0.04em] group-hover:hidden'>{e.desc3}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:hidden block group text-center cursor-pointer'>
                <img src="./../img/sandwich_1.jpg" alt="eggmayo" className='w-2/4 group-hover:w-3/4 mx-auto' />
                <h3 className='text-[#292929] text-lg group-hover:text-[22px]'>에그마요</h3>
                <p className='text-[#999] text-[13px] leading-[21px] tracking-[-0.04em] group-hover:hidden'>부드러운 달걀과 고소한 마요네즈가 만나</p>
                <p className='text-[#999] text-[13px] leading-[21px] tracking-[-0.04em] group-hover:hidden'>더 부드러운 스테디셀러</p>
            </div>
        </div>
    )
}

export default MenuList