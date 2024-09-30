'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaMinus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { RiDiscountPercentFill } from "react-icons/ri";
import { useAuth } from '../contexts/authContext';
import { db } from '../firebase';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore'; 
import { logoImg } from '../../../public/assets';

const Basket = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [basketItems, setBasketItems] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false)
  const [itemToRemove, setItemToRemove] = useState(null)
  const { user, logout } = useAuth() || {};


  const handleConfirmRemove = function(itemId) {
    setItemToRemove(itemId) // Set the ID of the item to be removed
    setShowConfirm(true) // Show the confirmation dialog
  }

  const handleCancel = () => {
    setShowConfirm(false); // Hide the confirmation dialog
    setItemToRemove(null); // Reset the item to remove
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

    // Reset the confirmation dialog state
    setShowConfirm(false);
    setItemToRemove(null);
};


  const handleNav = () => setNav(!nav);

  return (
    <div className='overflow-hidden'>
       {/* Navbar */}
       <div className={`fixed w-full h-20 z-[50] navbar ${shadow ? 'navbar-shadow' : ''}`}>
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
          <div className='lg:ml-[70px] cursor-pointer'>
            <Link href='/'>
              <Image src={logoImg} alt='logo' height={85} width={85} data-aos="fade-right" data-aos-duration="1500"/>
            </Link>
          </div>
          <h5 className="xl:ml-[22rem] xl:flex hidden  text-[#53422B] font-bold" data-aos="fade-down">
            Basket
          </h5>
          <div className='font-md text-primary'>
            <ul className='hidden xl:flex items-center text-[#53422B]'>
              {user ? (
                <div className='xl:ml-[15rem] mt-2 flex flex-col gap-1 items-center'
                data-aos='fade-left'
                >
                  <span className='text-[#53422B] mr-11'>{user.email}</span>
                  <button onClick={logout} className='mr-11 bg-red-500 text-white px-3 py-1 rounded-md z-[-1]'>
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
      <div className='lg:px-[120px] px-5 lg:mt-0 mt-[3.5rem] pt-36 mb-2 flex items-center text-center justify-center'>
        <h5 className='flex xl:hidden absolute top-24 text-center text-[#53422B] font-extrabold'>Basket</h5>
        {basketItems.length === 0 ? (
          <p className='text-[#53422B]'>
            Your basket is empty, please check the menu and add a juice to the basket.
          </p>
        ) : (
          <div className="grid grid-cols-1  sm:grid-cols-2 xl:grid-cols-3 gap-12 mt-4"
          data-aos='fade-down'
          >
            {basketItems.map((item) => (
              <div key={item.id} className="relative"> 
                {/* Blur Background */}
                <div className="absolute inset-0 bg-gradient-custom md:w-[370px] sm:w-[317px] sm:h-[400px] h-[387px] border-white border-[1.5px] rounded-3xl blur-sm z-0"></div>
                
                {/* Image and Item Info */}
                <div className="relative z-10">
                  <div className='flex justify-start ml-6'>
                    <Image
                      src={item.imageUrl}
                      alt={`${item.name} juice`}
                      height={165}
                      width={165}
                      className={item.name === 'Blueberry' ? 'flip-image' : ''}
                    />
                    <button className="absolute top-1 right-1 bg-[#FF9900] shadow-xl border-[#555555] rounded-tr-2xl rounded-bl-2xl py-2 px-3"
                     onClick={() => handleConfirmRemove(item.id)}
                    >
                      <FaMinus className='text-white text-[24px]'/>
                    </button>
                  </div>

                  {/* Discount Icon */}
                  {item.hasDiscount && (
                    <div className="absolute top-2 left-2 z-10">
                      <RiDiscountPercentFill style={{color: '#FF4D00', fontSize: '50px'}}/>
                    </div>
                  )}

                  {/* Item Info */}
                  <div className="text-left ml-6 mt-4">
                    <h5 className="text-[#473525] text-xl font-bold">{item.name}</h5>
                    <p className='text-[#555555] text-sm'>{item.description}</p>

                    <div className="flex items-center">
                  {/* Displaying the original price with a red line for discounted items */}
                  {item.hasDiscount && (
                    <p className="text-md font-semibold line-through mr-2 text-[#555555] opacity-[75%] flex items-center">
                      <span className='text-red-500'>$</span>{item.originalPrice.toFixed(2)}
                    </p>
                  )}
                  <p className="text-[#555555] text-xl font-semibold flex items-center">
                    <span className='text-[#FF4D00]'>$</span>{item.price.toFixed(2)}
                  </p>
                </div>

                {/* Discount Icon for Discounted Items */}
              {item.hasDiscount && (
                <div className="absolute top-1 left-1">
                  <RiDiscountPercentFill style={{color: '#FF4D00', fontSize: '65px'}}/>
                </div>
              )}

                  
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Confirmation Dialog */}
      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gradient-custom border border-[#555555] sm:px-20 sm:py-14 px-9 py-7 rounded-3xl shadow-lg"
          data-aos='zoom-in'
          >
            <button className="absolute top-0 right-0 bg-[#FF9900] shadow-xl border-[#555555] rounded-tr-3xl rounded-bl-2xl py-2 px-3"
                     onClick={handleCancel}
                    >
                      <IoClose className='text-[#53422B] text-[29px] font-extrabold'/>
                    </button>
            <p className='text-center text-[#53422B] text-md mb-7'>Are you sure you want to
              <br />  remove this item from the basket?</p>
            <div className="flex justify-center gap-9 mt-4">
              <button onClick={handleCancel} className="mr-2 bg-transparent text-[#53422B] border border-[#53422B] px-3 py-1 rounded-md">Cancel</button>
              <button onClick={() => handleRemoveFromBasket(itemToRemove)} className="bg-[#53422B] text-white px-3 py-1 rounded-md">Remove</button>
            </div>
          </div>
        </div>
      )}
       {/* Continue Shopping Button */}
       <div className='my-16 flex justify-center'>
        <Link href="/menucategories">
          <button className="bg-[#53422B] text-white p-3 rounded-md">Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default Basket;
