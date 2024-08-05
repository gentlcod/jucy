/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { homeMainImg } from '../../../public/assets';

const MainHome = () => {
  return (

    <section id='home' className=' overflow-hidden py-[30px] pt-[90px] lg:px-[100px] px-[25px] max-w-[1280px]'>
            
      <div className='lg:mt-0 mt-12 flex items-center justify-between'>
        <h2 className='text-[#53422B] xl:text-5xl text-3xl mb-5 
        lg:mb-0 font-bold lg:mt-[-50px]'
        data-aos='fade-right'>
          Revitalize Your Routine, <br />
          Fresh, Fruity Fantastic
        </h2>

        <div className='lg:mt-[100px] xl:mr-[-110px]'
         data-aos="fade-left" data-aos-duration="1500">
          <Image
            src={homeMainImg}
            width={390}
            height={250}
            alt='main image'
          />
        </div>
      </div>

      <div className='lg:mt-[-170px]'>
        <p className='text-[#53422B] text-sm lg:text-md'
        data-aos="fade-right" data-aos-duration="1500">
        "Savor the symphony of flavors, with nature's sweetness & deliciousness.
          <br />
          Get the best variety of 100% organic juices here!"
        </p>

      </div>

      {/* Buttons  */}
      <div className='flex items-center 
      justify-start' data-aos='fade-right'>

        <Link href='/menucategories'
        className='bg-[#53422B] mt-16 px-7 
        p-4 rounded-lg text-white'>
          View Menu
        </Link>

        <Link href='/discount'
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
