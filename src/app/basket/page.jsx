'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { logoImg } from '../../../public/assets';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useAuth } from '../contexts/authContext';

const Basket = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const { user = null, logout = () => window.location.href = '/' } = useAuth() || {};

  const handleNav = () => setNav(prev => !prev);

  useEffect(() => {
    const handleShadow = () => {
      setShadow(window.scrollY >= 5);
    };

    window.addEventListener('scroll', handleShadow);
    return () => {
      window.removeEventListener('scroll', handleShadow);
    };
  }, []);

  return (
    <div className='overflow-hidden'>
      <div className={`sticky-header ${shadow ? 'sticky-header-shadow' : ''}`}>
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
          <div className="lg:ml-[70px] cursor-pointer">
            <Link href="/">
              <div className="mt-3" />
              <Image
                src={logoImg}
                alt="logo"
                height={85}
                width={85}
                data-aos="fade-right"
                data-aos-duration="1500"
              />
            </Link>
          </div>
          <h5 className="text-[#53422B] xl:ml-[33rem] md:ml-[18rem] sm:ml-[15rem] ml-[5rem] font-bold flex-1" data-aos="fade-down">
            Basket
          </h5>

          {user ? (
            <div className='hidden md:flex ml-[-4rem] flex items-center'>
              <span className='text-[#53422B] mr-4'>{user.email}</span>
              <button onClick={logout} className='bg-red-500 text-white px-4 py-2 rounded-md'>
                Sign Out
              </button>
            </div>
          ) : (
            <div className='hidden md:flex'>
              <Link href='/login' className='text-center border border-[#53422B] md:ml-[129px] lg:ml-[249px] p-[3.7px] rounded-md bg-transparent w-[80px]' data-aos="fade-left" data-aos-duration="1500">
                Sign in
              </Link>
              <Link href='/signup' className='text-center ml-[9px] lg:mr-[100px] bg-[#53422B] p-[3.7px] rounded-md text-white border border-[#53422B] w-[80px]' data-aos="fade-left" data-aos-duration="1500">
                Sign up
              </Link>
            </div>
          )}

          <div onClick={handleNav} className='md:hidden cursor-pointer' data-aos="fade-up" data-aos-duration="1500">
            {!nav && <AiOutlineMenu style={{ color: '#53422B', fontSize: '24px' }} />}
          </div>
        </div>
      </div>

      <div className={nav ? "md:hidden fixed right-0 top-0 w-full h-screen" : ""}>
        <div className={nav ? "fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 ease-in duration-500" : "fixed right-[-150%] top-0 p-10 ease-in duration-500"}>
          <div className='flex w-full items-center justify-between cursor-pointer'>
            <div className='my-2' />
            <div onClick={handleNav} className='mr-[-27px] mt-[-17px]'>
              <AiOutlineClose style={{ color: '#53422B', fontSize: '24px' }} />
            </div>
          </div>
          <div className='py-4 flex bg-[#FFEDB7] shadow-lg p-7 rounded-xl flex-col'>
            <ul>
              <br />
              <br />
              {user ? (
                <div className='flex flex-col items-start pt-7'>
                  <span className='text-[#53422B] mb-4'>{user.email}</span>
                  <button onClick={logout} className='uppercase bg-red-500 text-white px-4 py-2 rounded-md'>
                    Sign Out
                  </button>
                </div>
              ) : (
                <>
                  <Link href='/login' className='uppercase text-center border border-[#53422B] bg-transparent p-[3.7px] rounded-md w-full mb-4 block text-center' data-aos="fade-left" data-aos-duration="1500">
                    Sign in
                  </Link>
                  <Link href='/signup' className='uppercase text-center bg-[#53422B] p-[3.7px] rounded-md text-white border border-[#53422B] w-full block text-center' data-aos="fade-left" data-aos-duration="1500">
                    Sign up
                  </Link>
                </>
              )}
            </ul>
            <div className='pt-7'>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <div className='p-1 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <button>
                    <FaTwitter style={{ color: '#53422B', fontSize: '21px' }} />
                  </button>
                </div>
                <div className='p-1 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <button>
                    <FaInstagram style={{ color: '#53422B', fontSize: '21px' }} />
                  </button>
                </div>
                <div className='p-1 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <button>
                    <FaFacebook style={{ color: '#53422B', fontSize: '21px' }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='lg:mt-0 mt-[3.5rem] pt-48 lg:px-0 px-[3rem] mb-2 flex items-center text-center justify-center' data-aos='fade-up'>
        <p className='text-[#53422B]'>
          Your basket is empty, please check the menu
          <br /> and add a juice to the basket.
        </p>
      </div>

      <div className='flex justify-center lg:px-0 px-[3rem]' data-aos='fade-up'>
        <Link href='/menucategories' className='text-[#53422B] font-bold'>
          Click Here To Explore Menu
        </Link>
      </div>
    </div>
  );
};

export default Basket;
