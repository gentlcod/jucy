/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import { logoImg } from '../../../public/assets';
import { useAuth } from '../contexts/authContext';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState('home');
  const { user = null, logout = () => {} } = useAuth() || {};

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

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;

    const verticalVisible = rect.top <= windowHeight && rect.bottom >= 0;
    const horizontalVisible = rect.left <= windowWidth && rect.right >= 0;

    return verticalVisible && horizontalVisible;
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const targetId = section.id;
      const navLink = document.querySelector(`.nav-link[href='#${targetId}']`);

      if (isElementInViewport(section)) {
        setActiveNavLink(targetId);
      }
    });
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

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className={`fixed w-full h-20 z-[100] navbar ${shadow ? 'navbar-shadow' : ''}`}>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div className='lg:ml-[70px] cursor-pointer'>
          <button onClick={() => handleNavClick('home')}>
            <div className='mt-3'/>
            <Image src={logoImg} alt='logo' height={85} width={85} data-aos="fade-right" data-aos-duration="1500"/>
          </button>
        </div>
        <div className='font-md text-primary'>
          <ul className='hidden md:flex flex items-center text-[#53422B]'>
            <li className={`cursor-pointer xl:ml-12 lg:ml-8 md:ml-7 text-sm uppercase duration-500 ${activeNavLink === 'home' ? 'font-bold' : ''}`} onClick={() => handleNavClick('home')}>
              Home
            </li>
            <li className={`cursor-pointer xl:ml-12 lg:ml-8 md:ml-7 text-sm uppercase duration-500 ${activeNavLink === 'about' ? 'font-bold' : ''}`} onClick={() => handleNavClick('about')}>
              About
            </li>
            <li className={`cursor-pointer xl:ml-12 lg:ml-8 md:ml-7 text-sm uppercase duration-500 ${activeNavLink === 'menu' ? 'font-bold' : ''}`} onClick={() => handleNavClick('menu')}>
              Menu
            </li>
            <li className={`cursor-pointer xl:ml-12 lg:ml-8 md:ml-7 text-sm uppercase duration-500 ${activeNavLink === 'contact' ? 'font-bold' : ''}`} onClick={() => handleNavClick('contact')}>
              Contact
            </li>
            {user ? (
              <div className='ml-[19rem] flex items-center'>
                <span className='text-[#53422B] mr-4'>{user.email}</span>
                <button onClick={logout} className='bg-red-500 text-white px-4 py-2 rounded-md'>
                  Sign Out
                </button>
              </div>
            ) : (
              <>
                <Link href='/login' className='text-center border border-[#53422B] md:ml-[129px] lg:ml-[249px] p-[3.7px] rounded-md bg-transparent w-[80px]' data-aos="fade-left" data-aos-duration="1500">
                  Sign in
                </Link>
                <Link href='/signup' className='text-center ml-[9px] lg:mr-[100px] bg-[#53422B] p-[3.7px] rounded-md text-white border border-[#53422B] w-[80px]' data-aos="fade-left" data-aos-duration="1500">
                  Sign up
                </Link>
              </>
            )}
          </ul>

          <div onClick={handleNav} className='md:hidden cursor-pointer' data-aos="fade-up" data-aos-duration="1500">
            {nav ? '' : <AiOutlineMenu style={{color: '#53422B', fontSize: '24px'}} />}
          </div>
        </div>
      </div>
      <div className={nav ? "md:hidden fixed right-0 top-0 w-full h-screen" : ""}>
        <div className={nav ? "fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 ease-in duration-500" : "fixed right-[-150%] top-0 p-10 ease-in duration-500"}>
          <div className='flex w-full items-center justify-between cursor-pointer'>
            <div className='my-2' />
            <div onClick={handleNav} className='mr-[-27px] mt-[-17px]'>
              <AiOutlineClose style={{color: '#53422B', fontSize: '24px'}} />
            </div>
          </div>
          <div className='py-4 flex bg-[#FFEDB7] shadow-lg p-7 rounded-xl flex-col'>
            <ul className='uppercase'>
              <li onClick={() => handleNavClick('home')} className={`text-[#53422B] cursor-pointer text-sm uppercase pt-3 ${activeNavLink === 'home' ? 'font-bold' : ''}`}>
                Home
              </li>
              <li onClick={() => handleNavClick('about')} className={`text-[#53422B] cursor-pointer text-sm uppercase pt-7 ${activeNavLink === 'about' ? 'font-bold' : ''}`}>
                About
              </li>
              <li onClick={() => handleNavClick('menu')} className={`text-[#53422B] cursor-pointer text-sm uppercase pt-7 ${activeNavLink === 'menu' ? 'font-bold' : ''}`}>
                Menu
              </li>
              <li onClick={() => handleNavClick('contact')} className={`text-[#53422B] cursor-pointer text-sm uppercase pt-7 ${activeNavLink === 'contact' ? 'font-bold' : ''}`}>
                Contact
              </li>
              {user ? (
                <div className='flex flex-col items-start pt-7'>
                  <span className='text-[#53422B] mb-4' style={{textTransform: 'none'}}>{user.email}</span>
                  <button onClick={logout} className='bg-red-500 text-white px-4 py-2 rounded-md'>
                    Sign Out
                  </button>
                </div>
              ) : (
                <>
                  <Link href='/login' className='text-center border border-[#53422B] bg-transparent p-[3.7px] rounded-md w-full mb-4 block text-center' data-aos="fade-left" data-aos-duration="1500">
                    Sign in
                  </Link>
                  <Link href='/signup' className='text-center bg-[#53422B] p-[3.7px] rounded-md text-white border border-[#53422B] w-full block text-center' data-aos="fade-left" data-aos-duration="1500">
                    Sign up
                  </Link>
                </>
              )}
            </ul>
            <div className='flex justify-around py-2 text-[#53422B]'>
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
