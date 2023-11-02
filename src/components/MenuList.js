import React from 'react'
import { NavLink } from 'react-router-dom';

function MenuList() {
    const SubwayMenu = ["클래식", "프레쉬&라이트", "프리미엄", "아침메뉴"];
    return (
        <div className='bg-white w-full lg:h-[560px] pb-[60px]'>
            <div className="lg:w-[1170px] lg:mx-auto lg:pt-[60px] lg:pb-[33px] flex justify-between">
                <h3 className='text-[#292929] lg:text-[40px] lg:pt-[17px] lg:pl-[25px] mb-[1px] lg:h-[60px]'>Subway's Menu</h3>
                <ul className='flex mt-11'>
                    {
                        SubwayMenu.map((e, i) => {
                            console.log(e, i);
                            return (
                                <li key={i} className='lg:pl-[25px] lg:ml-[23px] font-bold relative'><NavLink>{e}</NavLink></li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default MenuList