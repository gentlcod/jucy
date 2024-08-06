'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../menucategories/module.css';
import {
  blackBerryJuceImg,
  citrusJuicesCategoryImg,
  exoticJuicesCategoryImg,
  logoImg,
  stoneFruitJuicesCategoryImg,
  tropicalJuicesCategoryImg,
  waterMelonJuiceImg
} from '../../../public/assets';
import { PiBasketFill } from 'react-icons/pi';

const textShadowStyle = {
  textShadow: '0 6px 8px rgba(0, 0, 0, 0.7)',
};

const MenuCategories = () => {
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
          <div className="lg:ml-[70px] cursor-pointer">
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
      <div className="pt-[131px] lg:pb-1 pb-16 overflow-hidden lg:px-[150px] px-5">
        {/* Combined Category Boxes */}
        <div
          className="flex flex-wrap justify-center items-center gap-5"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <Link href="/citrusjuices">
            <div className="relative w-[280px] h-[300px]">
              {/* Blurred Background */}
              <div className="absolute inset-0 bg-gradient-custom border border-white border-[1.5px] rounded-3xl blur-sm"></div>
              {/* Image */}
              <div className="absolute inset-0 flex justify-center items-center">
                <Image
                  src={citrusJuicesCategoryImg}
                  className="blur-sm"
                  alt="citrus juices"
                  height={230}
                  width={230}
                />
              </div>
              {/* Text */}
              <div className="relative z-10 flex justify-center items-center w-full h-full">
                <h5
                  className="text-center text-white text-5xl font-bold"
                  style={textShadowStyle}
                >
                  Citrus Juices
                </h5>
              </div>
            </div>
          </Link>

          <Link href="/berryjuices">
            <div className="relative w-[280px] h-[300px]">
              {/* Blurred Background */}
              <div className="absolute inset-0 bg-gradient-custom border border-white border-[1.5px] rounded-3xl blur-sm"></div>
              {/* Image */}
              <div className="absolute inset-0 flex justify-center items-center">
                <Image
                  src={blackBerryJuceImg}
                  className="blur-sm"
                  alt="berry juices"
                  height={160}
                  width={160}
                />
              </div>
              {/* Text */}
              <div className="relative z-10 flex justify-center items-center w-full h-full">
                <h5
                  className="text-center text-white text-5xl font-bold"
                  style={textShadowStyle}
                >
                  Berry Juices
                </h5>
              </div>
            </div>
          </Link>

          <Link href="/tropicaljuices">
            <div className="relative w-[280px] h-[300px]">
              {/* Blurred Background */}
              <div className="absolute inset-0 bg-gradient-custom border border-white border-[1.5px] rounded-3xl blur-sm"></div>
              {/* Image */}
              <div className="absolute inset-0 flex justify-center items-center">
                <Image
                  src={tropicalJuicesCategoryImg}
                  className="blur-sm"
                  alt="tropical juices"
                  height={500}
                  width={500}
                />
              </div>
              {/* Text */}
              <div className="relative z-10 flex justify-center items-center w-full h-full">
                <h5
                  className="text-center text-white text-5xl font-bold"
                  style={textShadowStyle}
                >
                  Tropical Juices
                </h5>
              </div>
            </div>
          </Link>

          <Link href="/exoticjuices">
            <div className="relative w-[280px] h-[300px]">
              {/* Blurred Background */}
              <div className="absolute inset-0 bg-gradient-custom border border-white border-[1.5px] rounded-3xl blur-sm"></div>
              {/* Image */}
              <div className="absolute inset-9 mt-[-23px] flex justify-center items-center">
                <Image
                  src={exoticJuicesCategoryImg}
                  className="blur-sm"
                  alt="exotic juices"
                  height={180}
                  width={180}
                />
              </div>
              {/* Text */}
              <div className="relative z-10 flex justify-center items-center w-full h-full">
                <h5
                  className="text-center text-white text-5xl font-bold"
                  style={textShadowStyle}
                >
                  Exotic Juices
                </h5>
              </div>
            </div>
          </Link>

          <Link href="/stonefruitjuices">
            <div className="relative w-[280px] h-[300px]">
              {/* Blurred Background */}
              <div className="absolute inset-0 bg-gradient-custom border border-white border-[1.5px] rounded-3xl blur-sm"></div>
              {/* Image */}
              <div className="absolute inset-0 flex justify-center items-center">
                <Image
                  src={stoneFruitJuicesCategoryImg}
                  className="blur-sm"
                  alt="stone fruit juices"
                  height={160}
                  width={160}
                />
              </div>
              {/* Text */}
              <div className="relative z-10 flex justify-center items-center w-full h-full">
                <h5
                  className="text-center text-white text-5xl font-bold"
                  style={textShadowStyle}
                >
                  Stone Fruit Juices
                </h5>
              </div>
            </div>
          </Link>

          <Link href="/melonjuices">
            <div className="relative w-[280px] h-[300px]">
              {/* Blurred Background */}
              <div className="absolute inset-0 bg-gradient-custom border border-white border-[1.5px] rounded-3xl blur-sm"></div>
              {/* Image */}
              <div className="absolute inset-0 flex justify-center items-center">
                <Image
                  src={waterMelonJuiceImg}
                  alt="watermelon juices"
                  className="blur-sm"
                  height={500}
                  width={500}
                />
              </div>
              {/* Text */}
              <div className="relative z-10 flex justify-center items-center w-full h-full">
                <h1
                  className="text-center text-white text-5xl font-bold"
                  style={textShadowStyle}
                >
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

export default MenuCategories;
