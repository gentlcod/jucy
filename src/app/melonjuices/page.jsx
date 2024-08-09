/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../menucategories/module.css';
import { RiDiscountPercentFill } from "react-icons/ri";
import { TbBasketPlus } from "react-icons/tb";
import { cantalopeJuiceImg, honeyDewJuiceImg, waterMelonJuiceImg } from '../../../public/assets';
import { PiBasketFill } from 'react-icons/pi';
import { logoImg } from '../../../public/assets';

const melonJuices = () => {
  const [shadow, setShadow] = useState(false);

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
      <div
        className={`sticky-header ${shadow ? 'sticky-header-shadow' : ''}`}
      >
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
          <div className="lg:ml-[85px] cursor-pointer">
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
          <h5 className="text-[#53422B] font-bold" data-aos="fade-down">
            Menu
          </h5>

          <div className="lg:mr-[6.9rem] mr-[35px] ml-[1rem]">
            <Link href="/basket">
              <PiBasketFill
                style={{ color: '#53422B', fontSize: '33px' }}
                data-aos="fade-left"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Categories Boxes */}
      <div className="pt-[121px] lg:pb-1 pb-42 overflow-hidden lg:px-[120px] px-5"
         data-aos="fade-down"
         data-aos-duration="1500">
        <h5 className='pb-6 font-medium text-[#53422B] text-2xl'>
          Melon Juices
        </h5>

        {/* Combined Category Boxes */}
        <div className="mb-[2rem] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          <Link href="/melonjuices/watermelon">
            <div className="relative w-full h-[375px]">
              {/* Blurred Background */}
              <div className="absolute inset-0 bg-gradient-custom border border-white border-[1.5px] rounded-3xl blur-sm"></div>
              {/* Image */}
              <div className="absolute inset-0 ml-7">
                <div className='flex items-center'>
                  <Image
                    src={waterMelonJuiceImg}
                    alt="watermelon juice"
                    height={275}
                    width={275}
                    className='transform -scale-x-100'
                  />
                  <div className='absolute top-1 right-1 bg-[#FF9900] shadow-xl border-[#555555] rounded-tr-2xl rounded-bl-2xl py-2 px-3'>
                    <TbBasketPlus style={{color: '#fff', fontSize: '24px'}}/>
                  </div>
                </div>
              </div>
              {/* Text */}
              <div className="z-10 absolute top-64 px-10">
                <h5 className="text-[#473525] text-xl font-bold">
                  Watermelon
                </h5>
                <p className='text-[#555555] text-xs'>
                Refreshing and hydrating, with a 
                <br /> mild, sweet flavor.
                </p>
                <p className='pt-1 text-[#555555] text-xl font-semibold '>
                  <span className='text-[#FF4D00] text-sm font-semibold'>
                    $
                  </span>
                  10.00
                </p>
              </div>
            </div>
          </Link>

          <Link href="/melonjuices/cantaloupe">
  <div className="relative w-full h-[375px]">
    {/* Blurred Background */}
    <div className="absolute inset-0 bg-gradient-custom border border-white border-[1.5px] rounded-3xl blur-sm"></div>
    {/* Image */}
    <div className="absolute inset-0 ml-7">
      <div className='flex items-center'>
        <Image
          src={cantalopeJuiceImg}
          alt="cantaloupe juice"
          height={250}
          width={250}
         
        />
        <div className='absolute top-1 right-1 bg-[#FF9900] shadow-xl border-[#555555] rounded-tr-2xl rounded-bl-2xl py-2 px-3'>
          <TbBasketPlus style={{color: '#fff', fontSize: '24px'}}/>
        </div>
      </div>
    </div>
    {/* Text */}
    <div className="z-10 absolute top-64 px-10">
      <h5 className="text-[#473525] text-xl font-bold">
        Cantalope
      </h5>
      <p className='text-[#555555] text-xs'>
        Rich in antioxidants, this juice offers a
        <br /> sweet and subtly tart flavor.
      </p>

      <p className='pt-1 text-[#555555] text-xl font-semibold '>
                  <span className='text-[#FF4D00] text-sm font-semibold'>
                    $
                  </span>
                  11.00
                </p>
     
    </div>
  </div>
         </Link>


          <Link href="/melonjuices/honeydew">
            <div className="relative w-full h-[375px]">
              {/* Blurred Background */}
              <div className="absolute inset-0 bg-gradient-custom border border-white border-[1.5px] rounded-3xl blur-sm"></div>
              {/* Image */}
              <div className="absolute inset-0 ml-7">
                <div className='mt-[-.5rem] flex items-center'>
                  <Image
                    src={honeyDewJuiceImg}
                    alt="honeydew juice"
                    height={183}
                    width={183}
                    className='transform -scale-x-100'
                  />
                  <div className='absolute top-[-.45rem] left-[-2.7rem]'>
      <RiDiscountPercentFill style={{color: '#FF4D00', fontSize: '65px'}}/>
        </div>
                  <div className='absolute top-1 right-1 bg-[#FF9900] shadow-xl border-[#555555] rounded-tr-2xl rounded-bl-2xl py-2 px-3'>
                    <TbBasketPlus style={{color: '#fff', fontSize: '24px'}}/>
                  </div>
                </div>
              </div>
              {/* Text */}
              <div className="z-10 absolute top-64 px-10">
                <h5 className="text-[#473525] text-xl font-bold">
                Honeydew
                </h5>
                <p className='text-[#555555] text-xs'>
                Sweet and mild, very hydrating 
               <br />  and refreshing.
                </p>

                 {/* Price Container */}
      <div className="flex items-center gap-2 pt-1">
        {/* Original Price */}
        <span className='mt-1 text-[#FF4D00] text-sm font-semibold'>
            $
          </span>
        <p className='ml-[-9px] text-[#555555] opacity-[65%] text-xl font-semibold' style={{ textDecoration: 'line-through', textDecorationColor: 'red' }}>
         
          15.00
        </p>
        {/* Sale Price */}
        <p className='text-[#555555] text-xl font-semibold'>
          <span className='text-[#FF4D00] text-sm font-semibold'>
            $
          </span>
          12.00
        </p>
      </div>


             
              </div>
            </div>
          </Link>


        </div>

        <Link href='/menucategories'>
        <p className='my-6 underline font-medium text-[#53422B]'>
          Back to menu categories
        </p>
        </Link>


      </div>
    </>
  );
};

export default melonJuices;
