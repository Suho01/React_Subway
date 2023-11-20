import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
    const footerMenu = [
        {
            title : "프랜차이즈",
            desc : "개설절차/투자비용 정보"
        },
        {
            title : "지사안내",
            desc : "수도권/지방 지사정보"
        },
        {
            title : "광고영상",
            desc : "TV광고/동영상"
        },
        {
            title : "고객문의",
            desc : "자주하는 질문/1:1문의"
        }
    ];
    const footerTop = ["이용약관", "개인정보처리방침", "써브카드", "점주관리자", "Subway Listens"];

    return (        
        <>
            <div className='text-center lg:pt-10 lg:pb-[37px] footer-menu'>
                <ul className='lg:h-[70px] overflow-hidden inline-block'>
                    {
                        footerMenu.map((e, i) => {
                            return (
                                <li key={i} className='float-left h-full relative lg:ml-20 first:lg:left-[1px] first:lg:ml-0'>
                                    <NavLink href="#" className='block lg:h-[70px] lg:pl-[90px] text-[0px]'>
                                        <div class="icon"></div>
                                        <p className='text-lg text-[#292929] text-left lg:mt-[11px] lg:tracking-[-0.04em] font-bold'>{e.title}</p>
                                        <span className='text-[13px] text-[#999] text-left lg:mt-[6px] block font-normal tracking-[-0.02em]'>{e.desc}</span>
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='bg-[#292929] lg:pt-6 lg:pb-[18.81px] relative after:absolute after:w-full after:h-[1px] after:bg-[#3b3b3b] after:top-[59px]'>
                <div className='lg:w-[1170px] mx-auto relative'>
                    <div className='lg:mb-[25px]'>
                        <ul className='flex'>
                            {
                                footerTop.map((e, i) => {
                                    return (
                                        <li key={i} className='lg:mr-[29px] lg:h-[18px] relative lg:top-[-2px]'><NavLink href="#" className='block text-sm tracking-tighter text-[#666]'>{e}</NavLink></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer