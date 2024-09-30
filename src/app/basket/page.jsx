'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { RiDiscountPercentFill } from "react-icons/ri";
import { FaMinus } from "react-icons/fa";
import { useAuth } from '../contexts/authContext';
import { db } from '../firebase';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore'; 
import { logoImg } from '../../../public/assets';

const Basket = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [basketItems, setBasketItems] = useState([]);
  const { user, logout } = useAuth() || {};

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
    if (user) {
      fetchBasketItemsForUser(user.uid);
    } else {
      const storedBasket = JSON.parse(localStorage.getItem('basket')) || [];
      setBasketItems(storedBasket);
    }
  }, [user]);

  const fetchBasketItemsForUser = async (userId) => {
    if (!userId) return;
    const basketRef = collection(db, `users/${userId}/basket`);
    const basketSnapshot = await getDocs(basketRef);
    const items = basketSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setBasketItems(items);
  };

  const handleRemoveFromBasket = async (itemId) => {
    const updatedBasket = basketItems.filter(item => item.id !== itemId);
    setBasketItems(updatedBasket);

    if (user) {
      await deleteDoc(doc(db, `users/${user.uid}/basket`, itemId));
    } else {
      localStorage.setItem('basket', JSON.stringify(updatedBasket));
    }
  };

  const handleNav = () => setNav(!nav);

  return (
    <div className='overflow-hidden'>
       {/* Navbar */}
       <div className={`fixed w-full h-20 z-[100] navbar ${shadow ? 'navbar-shadow' : ''}`}>
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
          <div className='lg:ml-[70px] cursor-pointer'>
            <Link href='/'>
              <Image src={logoImg} alt='logo' height={85} width={85} data-aos="fade-right" data-aos-duration="1500"/>
            </Link>
          </div>
          <h5 className="xl:ml-80 lg:ml-0 ml-[-1.75rem]  text-[#53422B] font-bold" data-aos="fade-down">
            Basket
          </h5>
          <div className='font-md text-primary'>
            <ul className='hidden xl:flex items-center text-[#53422B]'>
              {user ? (
                <div className='xl:ml-[19rem] mt-2 flex flex-col gap-1 items-center'>
                  <span className='text-[#53422B]'>{user.email}</span>
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
            <div className='py-4 flex bg-[#FFEDB7] shadow-lg w-[110%] rounded-xl flex-col'>
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

      {/* Basket Content */}
      <div className='lg:mt-0 mt-[3.5rem] pt-48 lg:px-0 px-[3rem] mb-2 flex items-center text-center justify-center'>
        {basketItems.length === 0 ? (
          <p className='text-[#53422B]'>
            Your basket is empty, please check the menu and add a juice to the basket.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-4">
            {basketItems.map((item, index) => (
              <div key={index} className="relative bg-white rounded-lg shadow-lg p-4 h-auto">
                {/* Image */}
                <div className='flex justify-center items-center'>
                  <Image
                    src={item.imageUrl}
                    alt={`${item.name} juice`}
                    height={165}
                    width={165}
                    className={item.name === 'Blueberry' ? 'flip-image' : ''}
                  />
                </div>

                {/* Discount Icon */}
                {item.hasDiscount && (
                  <div className="absolute top-2 left-2">
                    <RiDiscountPercentFill style={{color: '#FF4D00', fontSize: '50px'}}/>
                  </div>
                )}

                {/* Item Info */}
                <div className="text-center mt-4">
                  <h5 className="text-[#473525] text-xl font-bold">{item.name}</h5>
                  <p className='text-[#555555] text-sm'>{item.description}</p>

                  <div className="flex justify-center items-center mt-2">
                    {item.hasDiscount && (
                      <p className="text-md font-semibold line-through mr-2 text-[#555555]">
                        ${item.originalPrice.toFixed(2)}
                      </p>
                    )}
                    <p className="text-[#FF4D00] text-xl font-semibold">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>

                  {/* Remove button */}
                  <div className="mt-4">
                    <button 
                      className="bg-red-500 text-white px-3 py-1 rounded-md"
                      onClick={() => handleRemoveFromBasket(item.id)}
                    >
                      <FaMinus />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Continue Shopping Button */}
      <div className='mt-5 flex justify-center'>
        <Link href="/menucategories">
          <button className="bg-[#53422B] text-white p-3 rounded-md">Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default Basket;
