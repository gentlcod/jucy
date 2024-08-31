/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdDeliveryDining } from "react-icons/md";
import { apricotJuiceImg, cantalopeJuiceImg, guavaJuiceImg, peachJuiceImg } from '../../../../public/assets';
import { TbBasketPlus } from "react-icons/tb";
import { ImPhone } from "react-icons/im";
import { TbBasketCheck } from "react-icons/tb";
import { PiBasketFill } from 'react-icons/pi';
import { logoImg } from '../../../../public/assets';

const Guava = () => {
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


      <br />
      <br />
      <br />
      <br />

      <div className="pt-[29px] lg:pb-1 pb-42 overflow-hidden lg:px-[120px] px-5"
        data-aos="fade-down"
        data-aos-duration="1500">

        <div className='flex flex-col lg:flex-row items-center'>
          <h5 className='ml-[-9rem] lg:ml-0 pb-6 font-medium text-[#53422B] text-2xl'>
          Guava Juice
          </h5>
          <div className='absolute lg:top-1 lg:right-64 right-12 bg-[#FF9900] shadow-xl border-[#555555] rounded-tr-2xl rounded-bl-2xl py-2 px-3 cursor-pointer'>
            <TbBasketPlus style={{ color: '#fff', fontSize: '24px' }} />
          </div>
        </div>

        {/* PRODUCT IMAGE  */}
        <div className='flex flex-col lg:flex-row items-center'>
          <Image
            src={guavaJuiceImg}
            height={300}
            width={300}
            alt='Guava Juice'
          />

          {/* DESCRIPTION OF THE PRODUCT */}
          <div className='flex flex-col justify-center ml-0 lg:ml-[9rem]'>
            <h3 className='mb-4 tracking-wide text-[#53422B] text-xl'>
              Description: 
            </h3>

            <p className='text-[#555555] tracking-wider text-sm'>
              A tropical and invigorating delight, this guava juice offers a<br />
              burst of sweet and tangy flavor. Rich in vitamins A and C,<br />
              it supports your immune system and promotes overall wellness.<br />
              Each sip delivers a refreshing taste of freshly squeezed guavas,<br />
              capturing their unique sweetness and vibrant aroma. Carefully crafted<br />
              to preserve the fruit's natural brightness, this juice ensures a high-quality,<br />
              wholesome beverage. Its bold and fruity profile makes it an excellent<br />
              choice for a revitalizing start to your day or a refreshing treat at any<br />
              time. Whether enjoyed chilled or at room temperature, this guava juice<br />
              delivers a delicious and rejuvenating experience with every glass.
            </p>










<div className='mt-[3.5rem] flex items-center justify-between flex-col lg:flex-row'>
              <h3 className='mb-4 text-[#53422B] text-xl'>
                Price : 
              </h3>
              <p className='text-[#555555] text-xl font-semibold'>
                <span className='text-[#FF4D00] text-sm font-semibold'>
                  $
                </span>
                11.00
              </p>
            </div>

            <div className='flex items-center justify-between flex-col lg:flex-row'>
              <h3 className='lg:mt-0 mt-[1.25rem] mb-4 text-[#53422B] text-xl'>
                For Delivery Order :
              </h3>

              <div className='flex items-center'>
                <ImPhone style={{ fontSize: '27px', color: '#53422B', marginRight: '11px' }} />
                <p className='text-[#555555] text-xl font-regular'>
                  0 000 00 00
                </p>
              </div>
            </div>

            <div className='flex items-center justify-between flex-col lg:flex-row'>
            <p className='text-center lg:text-left lg:mt-0 mt-[1.25rem] text-[#555555] tracking-wide text-sm'>
              Our juices are securely
              <br /> packaged and delivered with
              <br /> care, ensuring freshness
              <br /> and safety for every order.
            </p>


              <div className='flex items-center mt-4 lg:mt-0'>
                <MdDeliveryDining style={{ fontSize: '35px', color: '#53422B', marginRight: '15px' }} />
                <TbBasketCheck style={{ fontSize: '35px', color: '#53422B' }} />
              </div>
            </div>
          </div>
        </div>

        <Link href='/tropicaljuices'>
          <p className='my-6 underline font-medium text-[#53422B]'>
            Back to menu
          </p>
        </Link>

      </div>
    </>
  );
};

export default Guava;
