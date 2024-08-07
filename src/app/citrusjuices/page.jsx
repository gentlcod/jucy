/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../menucategories/module.css';
import { TbBasketPlus } from "react-icons/tb";
import {
  grapeFruitJuiceImg,
  lemonJuiceImg,
  limeJuiceImg,
  logoImg,
  orangeJuiceImg,
  tangerineJuiceImg
} from '../../../public/assets';
import { PiBasketFill } from 'react-icons/pi';

const citrusJuices = () => {
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
          Citrus Juices
        </h5>

        {/* Combined Category Boxes */}
        <div className="mb-[2rem] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          <Link href="/citrusjuices/orangejuice">
            <div className="relative w-full h-[375px]">
              {/* Blurred Background */}
              <div className="absolute inset-0 bg-gradient-custom border border-white border-[1.5px] rounded-3xl blur-sm"></div>
              {/* Image */}
              <div className="absolute inset-0 ml-7">
                <div className='mt-[1rem] flex items-center'>
                  <Image
                    src={orangeJuiceImg}
                    alt="orange juice"
                    height={140}
                    width={140}
                  />
                  <div className='absolute top-1 right-1 bg-[#FF9900] shadow-xl border-[#555555] rounded-tr-2xl rounded-bl-2xl py-2 px-3'>
                    <TbBasketPlus style={{color: '#fff', fontSize: '24px'}}/>
                  </div>
                </div>
              </div>
              {/* Text */}
              <div className="z-10 absolute top-64 px-10">
                <h5 className="text-[#473525] text-xl font-bold">
                  Orange
                </h5>
                <p className='text-[#555555] text-xs'>
                  A classic favorite, rich in vitamin C
                  <br /> and bursting with refreshing,
                  <br /> tangy-sweet flavor.
                </p>
                <p className='pt-1 text-[#555555] text-xl font-semibold '>
                  <span className='text-[#FF4D00] text-sm font-semibold'>
                    $
                  </span>
                  7.00
                </p>
              </div>
            </div>
          </Link>

          <Link href="/citrusjuices/lemonjuice">
            <div className="relative w-full h-[375px]">
              {/* Blurred Background */}
              <div className="absolute inset-0 bg-gradient-custom border border-white border-[1.5px] rounded-3xl blur-sm"></div>
              {/* Image */}
              <div className="absolute inset-0 ml-7">
                <div className='flex mt-[1.9rem] items-center'>
                  <Image
                    src={lemonJuiceImg}
                    alt="lemon juice"
                    height={210}
                    width={210}
                  />
                  <div className='absolute top-1 right-1 bg-[#FF9900] shadow-xl border-[#555555] rounded-tr-2xl rounded-bl-2xl py-2 px-3'>
                    <TbBasketPlus style={{color: '#fff', fontSize: '24px'}}/>
                  </div>
                </div>
              </div>
              {/* Text */}
              <div className="z-10 absolute top-64 px-10">
                <h5 className="text-[#473525] text-xl font-bold">
                  Lemon
                </h5>
                <p className='text-[#555555] text-xs'>
                  Bright and zesty, perfect for adding 
                  <br />a refreshing tartness to any
                  <br /> drink or dish.
                </p>
                <p className='pt-1 text-[#555555] text-xl font-semibold '>
                  <span className='text-[#FF4D00] text-sm font-semibold'>
                    $
                  </span>
                  7.00
                </p>
              </div>
            </div>
          </Link>

          <Link href="/citrusjuices/limejuice">
            <div className="relative w-full h-[375px]">
              {/* Blurred Background */}
              <div className="absolute inset-0 bg-gradient-custom border border-white border-[1.5px] rounded-3xl blur-sm"></div>
              {/* Image */}
              <div className="absolute inset-0 ml-7">
                <div className='mt-[.7rem] flex items-center'>
                  <Image
                    src={limeJuiceImg}
                    alt="lime juice"
                    height={230}
                    width={230}
                    className="transform -scale-x-100" // Flip the image horizontally
                  />
                  <div className='absolute top-1 right-1 bg-[#FF9900] shadow-xl border-[#555555] rounded-tr-2xl rounded-bl-2xl py-2 px-3'>
                    <TbBasketPlus style={{color: '#fff', fontSize: '24px'}}/>
                  </div>
                </div>
              </div>
              {/* Text */}
              <div className="z-10 absolute top-64 px-10">
                <h5 className="text-[#473525] text-xl font-bold">
                  Lime
                </h5>
                <p className='text-[#555555] text-xs'>
                  Crisp and tangy, this juice adds a
                  <br /> vibrant splash of flavor to any
                  <br /> beverage.
                </p>
                <p className='pt-1 text-[#555555] text-xl font-semibold '>
                  <span className='text-[#FF4D00] text-sm font-semibold'>
                    $
                  </span>
                  8.00
                </p>
              </div>
            </div>
          </Link>

          <Link href="/citrusjuices/grapefruitjuice">
            <div className="relative w-full h-[375px]">
              {/* Blurred Background */}
              <div className="absolute inset-0 bg-gradient-custom border border-white border-[1.5px] rounded-3xl blur-sm"></div>
              {/* Image */}
              <div className="absolute inset-0 ml-7">
                <div className='mt-[1rem] flex items-center'>
                  <Image
                    src={grapeFruitJuiceImg}
                    alt="grape fruit juice"
                    height={185}
                    width={185}
                  />
                  <div className='absolute top-1 right-1 bg-[#FF9900] shadow-xl border-[#555555] rounded-tr-2xl rounded-bl-2xl py-2 px-3'>
                    <TbBasketPlus style={{color: '#fff', fontSize: '24px'}}/>
                  </div>
                </div>
              </div>
              {/* Text */}
              <div className="z-10 absolute top-64 px-10">
                <h5 className="text-[#473525] text-xl font-bold">
                  Grapefruit
                </h5>
                <p className='text-[#555555] text-xs'>
                  A bold, tangy juice with a hint of
                  <br /> sweetness, great for a refreshing
                  <br /> pick-me-up.
                </p>
                <p className='pt-1 text-[#555555] text-xl font-semibold '>
                  <span className='text-[#FF4D00] text-sm font-semibold'>
                    $
                  </span>
                  8.50
                </p>
              </div>
            </div>
          </Link>

          <Link href="/citrusjuices/tangerinejuice">
            <div className="relative w-full h-[375px]">
              {/* Blurred Background */}
              <div className="absolute inset-0 bg-gradient-custom border border-white border-[1.5px] rounded-3xl blur-sm"></div>
              {/* Image */}
              <div className="absolute inset-0 ml-7">
                <div className='mt-[2.1rem] flex items-center'>
                  <Image
                    src={tangerineJuiceImg}
                    alt="tangerine juice"
                    height={210}
                    width={210}
                  />
                  <div className='absolute top-1 right-1 bg-[#FF9900] shadow-xl border-[#555555] rounded-tr-2xl rounded-bl-2xl py-2 px-3'>
                    <TbBasketPlus style={{color: '#fff', fontSize: '24px'}}/>
                  </div>
                </div>
              </div>
              {/* Text */}
              <div className="z-10 absolute top-64 px-10">
                <h5 className="text-[#473525] text-xl font-bold">
                  Tangerine
                </h5>
                <p className='pt-2 text-[#555555] text-xs'>
                  Sweet and tangy, with a delightful
                  <br /> burst of citrus flavor.
                </p>
                <p className='pt-2 text-[#555555] text-xl font-semibold '>
                  <span className='text-[#FF4D00] text-sm font-semibold'>
                    $
                  </span>
                  7.50
                </p>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </>
  );
};

export default citrusJuices;
