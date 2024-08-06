'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { logoImg } from '../../../public/assets';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Basket = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState('');

  const handleNav = () => setNav(prev => !prev);

  const handleNavClick = (navLinkId) => {
    setActiveNavLink(navLinkId);
    const targetSection = document.getElementById(navLinkId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 89,
        behavior: 'smooth'
      });
    }
    setNav(false); // Close the menu on click
  };

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
    <>
      {/* Header Section */}
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
          <h5 className="text-[#53422B] lg:mr-0 md:mr-0 mr-[2rem] font-bold text-center flex-1" data-aos="fade-down">
            Basket
          </h5>

          {/* Desktop and big tablet screens */}
          <div className=" hidden md:flex flex-col items-center mr-[35px] lg:ml-[-65px] md:ml-[-170px] mt-9">
            <h5 style={{ color: '#53422B' }} data-aos="fade-left">
              mailcompany@gmail.com
            </h5>

            <Link href='/'>
              <button
                className='mt-2 bg-red-500 text-white border border-red-500 ml-[3.5rem] p-2 rounded-lg'
                data-aos='fade-left'
              >
                Sign Out
              </button>
            </Link>

          </div>

          {/* Mobile and small screens */}
          <div onClick={handleNav} className='md:hidden cursor-pointer' data-aos="fade-up" data-aos-duration="1500">
            {nav ? '' : <AiOutlineMenu style={{color: '#53422B', fontSize: '24px'}}/>}
          </div>
        </div>
      </div>

      <div className={nav ? "md:hidden fixed right-0 top-0 w-full h-screen" : ""}>
        <div className={nav ? "fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 ease-in duration-500" : "fixed right-[-150%] top-0 p-10 ease-in duration-500"}>
          <div className='flex w-full items-center justify-between cursor-pointer'>
            <div className='my-2'/>
            <div onClick={handleNav} className='mr-[-27px] mt-[-17px]'>
              <AiOutlineClose style={{color: '#53422B', fontSize: '24px'}} />
            </div>
          </div>
          <div className='py-4 flex bg-[#FFEDB7] shadow-lg p-7 rounded-xl flex-col'>
            <ul className='uppercase'>
           
              <br />
              <br />
             <p className='text-sm text-[#53422B] font-semibold'>company@gmail.com</p>

              <br />
              <br />
              <Link href='/signup' className='bg-red-500 border p-[5px] text-white rounded-md border-red-500'>
                Sign Out
              </Link>
             
            </ul>
            <div className='pt-7'>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <div className='p-1 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <button>
                    <FaTwitter style={{color: '#53422B', fontSize: '21px'}}/>
                  </button>
                </div>
                <div className='p-1 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <button>
                    <FaInstagram style={{color: '#53422B', fontSize: '21px'}}/>
                  </button>
                </div>
                <div className='p-1 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <button>
                    <FaFacebook style={{color: '#53422B', fontSize: '21px'}}/>
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Added to basket list */}
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
    </>
  );
}

export default Basket;
