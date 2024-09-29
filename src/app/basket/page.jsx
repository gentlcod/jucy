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
  const [basketItems, setBasketItems] = useState([]);
  const { user = null, logout = () => window.location.href = '/' } = useAuth() || {};

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
    // Retrieve basket items from local storage if the user is not authenticated
    if (!user) {
      const storedBasket = JSON.parse(localStorage.getItem('basket')) || [];
      setBasketItems(storedBasket);
    } else {
      // Fetch basket items from backend for authenticated user
      fetchBasketItemsForUser(user.email);
    }
  }, [user]);

  const fetchBasketItemsForUser = async (email) => {
    // Fetch basket items from your backend based on the user email
    const response = await fetch(`/api/basket?email=${email}`);
    const items = await response.json();
    setBasketItems(items);
  };

  const handleAddToBasket = (item) => {
    const updatedBasket = [...basketItems, item];
    setBasketItems(updatedBasket);

    if (user) {
      // Save to backend for authenticated users
      fetch('/api/basket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: user.email, item }),
      });
    } else {
      // Save to local storage for non-authenticated users
      localStorage.setItem('basket', JSON.stringify(updatedBasket));
    }
  };

  const handleNav = () => setNav(prev => !prev);

  return (
    <div className='overflow-hidden'>
      {/* Navbar */}

      <div className={`fixed w-full h-20 z-[100] navbar ${shadow ? 'navbar-shadow' : ''}`}>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div className='lg:ml-[70px] cursor-pointer'>
          <Link href='/'>
            <div className='mt-3'/>
            <Image src={logoImg} alt='logo' height={85} width={85} data-aos="fade-right" data-aos-duration="1500"/>
          </Link>
        </div>
        <div className='font-md text-primary'>
          <ul className='hidden xl:flex items-center text-[#53422B]'>
           
            {user ? (
              <div className='xl:ml-[19rem] mt-2 flex flex-col gap-1 items-center'>
                <span className='text-[#53422B] mr-4'>{user.email}</span>
                <button onClick={logout} className='bg-red-500 text-white px-3 py-1 rounded-md'>
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

          <div onClick={handleNav} className='flex xl:hidden lg:mr-24 md:mr-4 sm:mr-3 mr-2 cursor-pointer' data-aos="fade-up" data-aos-duration="1500">
            {nav ? '' : <AiOutlineMenu style={{color: '#53422B'}} className='lg:text-[45px] md:text-[39px] sm:text-[37px] text-[35px]' />}
          </div>
        </div>
      </div>
      <div className={nav ? "flex xl:hidden fixed right-0 top-0 w-full h-screen" : ""}>
        <div className={nav ? "fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 ease-in duration-500" : "fixed right-[-150%] top-0 p-10 ease-in duration-500"}>
          <div className='flex w-full items-center justify-between cursor-pointer'>
            <div className='my-2' />
            <div onClick={handleNav} className='mr-[-27px] mt-[-17px] lg:mr-16 md:mr-[.1rem] sm:mr-[.1rem]'>
              <AiOutlineClose style={{color: '#53422B'}} className='lg:text-[45px] md:text-[39px] sm:text-[37px] text-[35px]' />
            </div>
          </div>
          <div className='py-4  flex bg-[#FFEDB7] shadow-lg w-[110%] rounded-xl flex-col'>
            <ul className='uppercase'>
             
              {user ? (
                <div className='flex flex-col items-center text-center pt-7'>
                  <span className='text-[#53422B] mb-4 ml-7 sm:text-lg text-xs' style={{textTransform: 'none'}}>{user.email}</span>
                  <button onClick={logout} className='mb-9 bg-red-500 text-white px-3 py-1 rounded-md'>
                    Sign Out
                  </button>
                </div>
              ) : (
                <>
                  <Link href='/login' className='my-4 border border-[#53422B] bg-transparent p-[.79px] rounded-md w-full mb-4 block text-center' data-aos="fade-left" data-aos-duration="1500">
                    Sign in
                  </Link>
                  <Link href='/signup' className='my-4 bg-[#53422B] p-[.79px] rounded-md text-white border border-[#53422B] w-full block text-center' data-aos="fade-left" data-aos-duration="1500">
                    Sign up
                  </Link>
                </>
              )}
            </ul>
            <div className='flex justify-around py-2 text-[#53422B] text-xl'>
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>

      <div className='lg:mt-0 mt-[3.5rem] pt-48 lg:px-0 px-[3rem] mb-2 flex items-center text-center justify-center' data-aos='fade-up'>
        {basketItems.length === 0 ? (
          <p className='text-[#53422B]'>
            Your basket is empty, please check the menu
            <br /> and add a juice to the basket.
          </p>
        ) : (
          <div className='text-left'>
            <h3 className='text-[#53422B] font-bold mb-4'>Your Basket:</h3>
            <ul>
              {basketItems.map((item, index) => (
                <li key={index} className='text-[#53422B] mb-2'>
                  {item.name} - ${item.price}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className='flex justify-center lg:px-0 px-[3rem]' data-aos='fade-up'>
        <Link href="/menucategories">
          <button className="bg-[#53422B] text-white p-3 rounded-md">Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default Basket;
