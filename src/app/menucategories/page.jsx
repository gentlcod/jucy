import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blackBerryJuceImg, citrusJuicesCategoryImg, exoticJuicesCategoryImg, logoImg, stoneFruitJuicesCategoryImg, tropicalJuicesCategoryImg, waterMelonJuiceImg } from '../../../public/assets';
import { PiBasketFill } from 'react-icons/pi';

const textShadowStyle = {
  textShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
};

const menuCategories = () => {
  return (
    <>
      {/* Header Section */}
      <div className='fixed w-full h-20 z-[100] navbar'>
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
          <div className='lg:ml-[70px] cursor-pointer'>
            <Link href='/'>
              <div className='mt-3'/>
              <Image src={logoImg} alt='logo' height={85} width={85} data-aos="fade-right" data-aos-duration="1500"/>
            </Link>
          </div>
          <h5 className='text-[#53422B] font-bold' data-aos='fade-down'>Menu Categories</h5>
          <div className='mr-16'>
            <Link href='/basket'>
              <PiBasketFill style={{color: '#53422B', fontSize: '33px'}} data-aos='fade-left'/>
            </Link>
          </div>
        </div>
      </div>

      {/* Categories Boxes */}
      <div className='pt-[131px] md:row-2 px-[150px]'>
        {/* First Row of Category Boxes */}
        <div className='flex items-center flex-wrap xl:justify-between xl:w-[1135px] md:w-[725px] w-[350px]' data-aos="fade-down" data-aos-duration="1500">

          <Link href='/citrusjuices'>
          <div className='relative w-[250px] h-[270px] xl:m-0 m-5'>
            {/* Blurred Background */}
            <div className='absolute inset-0 bg-gradient-custom border border-white border-[1.5px] rounded-3xl blur-sm'></div>
            {/* Image */}
            <div className='absolute inset-0 flex justify-center items-center'>
              <Image src={citrusJuicesCategoryImg} className='blur-sm' alt='citrus juices' height={230} width={230} />
            </div>
            {/* Text */}
            <div className='relative z-10 flex justify-center items-center w-full h-full'>
              <h5 className='text-center text-white text-5xl font-bold' style={textShadowStyle}>Citrus Juices</h5>
            </div>
          </div>
          </Link>


          <Link href='/berryjuices'>
          <div className='relative w-[250px] h-[270px] xl:m-0 m-5'>
            {/* Blurred Background */}
            <div className='absolute inset-0 bg-gradient-custom border border-white border-[1.5px] rounded-3xl blur-sm'></div>
            {/* Image */}
            <div className='absolute inset-0 flex justify-center items-center'>
              <Image src={blackBerryJuceImg} className='blur-sm' alt='berry juices' height={160} width={160} />
            </div>
            {/* Text */}
            <div className='relative z-10 flex justify-center items-center w-full h-full'>
              <h5 className='text-center text-white text-5xl font-bold' style={textShadowStyle}>Berry Juices</h5>
            </div>
          </div>
          </Link>


          <Link href='/tropicaljuices'>
          <div className='relative w-[250px] h-[270px] lg:mr-[-120px] xl:m-0 m-5'>
            {/* Blurred Background */}
            <div className='absolute inset-0 bg-gradient-custom border border-white border-[1.5px] rounded-3xl blur-sm'></div>
            {/* Image */}
            <div className='absolute inset-0 flex justify-center items-center'>
              <Image src={tropicalJuicesCategoryImg} className='blur-sm' alt='tropical juices' height={500} width={500} />
            </div>
            {/* Text */}
            <div className='relative z-10 flex justify-center items-center w-full h-full'>
              <h5 className='text-center text-white text-5xl font-bold' style={textShadowStyle}>Tropical Juices</h5>
            </div>
          </div>
          </Link>
        </div>

        <br />

        {/* Second Row of Category Boxes */}
        <div className='flex items-center flex-wrap xl:justify-between xl:w-[1135px] md:w-[725px] w-[350px]' 
        data-aos="fade-down" data-aos-duration="1500">

          <Link href='/exoticjuices'>
          <div className='relative w-[250px] h-[270px] xl:m-0 m-5'>
            {/* Blurred Background */}
            <div className='absolute inset-0 bg-gradient-custom border border-white border-[1.5px] rounded-3xl blur-sm'></div>
            {/* Image */}
            <div className='absolute inset-9 mt-[-23px] flex justify-center items-center'>
              <Image src={exoticJuicesCategoryImg} className='blur-sm' alt='exotic juices' height={180} width={180} />
            </div>
            {/* Text */}
            <div className='relative z-10 flex justify-center items-center w-full h-full'>
              <h5 className='text-center text-white text-5xl font-bold' style={textShadowStyle}>Exotic Juices</h5>
            </div>
          </div>
          </Link>

          <Link href='/stonefruitjuices'>
          <div className='relative w-[250px] h-[270px] xl:m-0 m-5'>
            {/* Blurred Background */}
            <div className='absolute inset-0 bg-gradient-custom border border-white border-[1.5px] rounded-3xl blur-sm'></div>
            {/* Image */}
            <div className='absolute inset-0 flex justify-center items-center'>
              <Image src={stoneFruitJuicesCategoryImg} className='blur-sm' alt='stone fruit juices' height={160} width={160} />
            </div>
            {/* Text */}
            <div className='relative z-10 flex justify-center items-center w-full h-full'>
              <h5 className='text-center text-white text-5xl font-bold' style={textShadowStyle}>Stone Fruit Juices</h5>
            </div>
          </div>
          </Link>


          <Link href='/melonjuices'>
          <div className='relative w-[250px] h-[270px] lg:mr-[-120px] xl:m-0 m-5'>
            {/* Blurred Background */}
            <div className='absolute inset-0 bg-gradient-custom border border-white border-[1.5px] rounded-3xl blur-sm'></div>
            {/* Image */}
            <div className='absolute inset-0 flex justify-center items-center'>
              <Image src={waterMelonJuiceImg} alt='watermelon juices' className='blur-sm' height={500} width={500} />
            </div>
            {/* Text */}
            <div className='relative z-10 flex justify-center items-center w-full h-full'>
              <h1 className='text-center text-white text-5xl font-bold' style={textShadowStyle}>
                Melon Juices
              </h1>
            </div>
          </div>
          </Link>

        </div>
      </div>
    </>
  );
};

export default menuCategories;
