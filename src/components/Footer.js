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
    const footerBottom = ["서울시 서초구 강남대로 535 프린스빌딩 15층", "대표 : INSOO CHO(인수조)", "전화 : 02-797-5036", "사업자등록번호 : 101-84-04143"];

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
                                        <li key={i} className={`lg:mr-[29px] lg:h-[18px] relative lg:top-[-2px] ${i === 1 ? 'font-bold' : ''}`}><NavLink href="#" className={`block text-sm tracking-tighter text-[#666] ${i === 1 ? 'text-[#bbb]' : ''}`}>{e}</NavLink></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        {
                            footerBottom.map((e, i) => {
                                return (
                                    <span key={i} className='text-[13px] inline-block lg:mt-[18px] lg:ml-[3px] lg:pl-[9px] relative text-[#666] after:absolute after:w-[2px] after:h-[10px] after:bg-[#666] after:left-[2px] after:top-[5px] first:after:w-0 first:ml-0 first:pl-0'>{e}</span>
                                )
                            })
                        }
                        <p className='text-[13px] lg:leading-[31px] lg:tracking-tighter text-[#666]'>SUBWAY® is a Registered Trademark of Subway IP LLC. © 2021 Subway IP LLC. All Rights Reserved.</p>
                    </div>
                    <div className='absolute text-[0px] lg:right-[-10px] lg:top-[52px] lg:w-[165px] lg:h-[50px] sns-link'>
                        <ul>
                            <li className='absolute lg:w-[50px] lg:h-[50px] overflow-hidden lg:bottom-0 cursor-pointer after:transition-all after:lg:w-[50px] after:lg:h-[50px] after:block after:opacity-0 hover:after:opacity-100'>인스타그램</li>
                            <li className='absolute lg:w-[50px] lg:h-[50px] overflow-hidden lg:bottom-0 cursor-pointer after:transition-all after:lg:w-[50px] after:lg:h-[50px] after:block after:opacity-0 hover:after:opacity-100'>페이스북</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer