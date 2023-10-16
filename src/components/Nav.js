import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <div className='lg:w-full lg:h-[165px] border-t-[5px] border-[#009223] after:absolute after:top-[170px] after:w-full after:h-[1px] after:bg-[#ddd] after:z-10'>
            <div className='lg:w-[1200px] lg:h-full lg:mx-auto lg:flex lg:relative lg:flex-wrap'>
                <div className='lg:basis-full lg:text-center lg:mt-9'>
                    <NavLink to='/'>
                        <img src="./../img/logo.png" alt="logo" />
                    </NavLink>
                </div>
                <div className='lg:absolute lg:right-6 lg:top-10'>
                    <ul className='lg:flex lg:items-center'>
                        <li className='lg:relative'>
                            <NavLink className='lg:text-sm lg:block'>로그인</NavLink>
                        </li>
                        <li className='lg:relative lg:ml-7 lg:mr-3 after:absolute after:w-[3px] after:h-[3px] after:bg-[#ddd] after:-left-4 after:top-1/2'>
                            <NavLink className='lg:text-sm lg:block'>회원가입</NavLink>
                        </li>
                        <li className='lg:relative'>
                            <NavLink className='lg:text-sm lg:block'><FontAwesomeIcon icon={faGlobe} /></NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><NavLink>메뉴소개</NavLink></li>
                        <li><NavLink>이용방법</NavLink></li>
                        <li><NavLink>새소식</NavLink></li>
                        <li><NavLink>써브웨이</NavLink></li>
                        <li><NavLink>가맹점</NavLink></li>
                        <li><NavLink>온라인 주문</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Nav