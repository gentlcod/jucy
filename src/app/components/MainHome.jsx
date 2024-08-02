/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { homeMainImg } from '../../../public/assets';

const MainHome = () => {
  return (
    <section id='home' className='py-[30px] lg:pt-[90px] pt-[225px] lg:px-[100px] px-[25px] max-w-[1280px]'>
      <div className='flex items-center justify-between'>
        <h2 className='text-[#53422B] xl:text-5xl text-3xl mb-5 
        lg:mb-0 font-bold lg:mt-[-50px]'>
          Revitalize Your Routine, <br />
          Fresh, Fruity Fantastic
        </h2>

        <div className='lg:mt-[100px] xl:mr-[-180px]'>
          <Image
            src={homeMainImg}
            width={390}
            height={250}
            alt='main image'
          />
        </div>
      </div>

      <div className='lg:mt-[-170px]'>
        <p className='text-[#53422B] text-sm lg:text-md'>
        "Savor the symphony of flavors, with nature's sweetness & deliciousness.
          <br />
          Get the best variety of 100% organic juices here!"
        </p>

      </div>

      {/* Buttons  */}
      <div className='flex items-center 
      justify-start'>
        <Link href='/menu-pages/menu-categories'
        className='bg-[#53422B] mt-16 px-7 
        p-4 rounded-lg text-white'>
          View Menu
        </Link>

        <Link href='/discount-menu'
        className='bg-transparent 
        border-[1px] border-[#53422B] ml-5 
        mt-16 px-7 p-4 rounded-lg text-[#53422B]'>
          Discount
        </Link>
      </div>
    </section>
  );
};

export default MainHome;
