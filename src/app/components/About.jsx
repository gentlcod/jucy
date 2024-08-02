/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image'
import { coconutMainImg, pineappleJuiceImg, waterMelonJuiceImg } from '../../../public/assets'

const About = () => {
  return (
    <section id='about' className='py-[30px] pt-[90px] lg:px-[100px] px-[25px] max-w-[1280px]'>
      <div className='flex items-center justify-between'>
        <h4 className='text-5xl text-[#53422B] font-bold mt-[150px] leading-loose'
        data-aos='fade-right'>
          Why you 
          <br /> should 
          <br /> choose us?
        </h4>

        {/* BOXES */}
        <div className='flex flex-wrap gap-4 mt-[250px] lg:mr-[-129px]'>
          <div className=' w-[150px] h-[200px] flex items-center justify-center rounded-xl bg-gradient-custom shadow-2xl'>
            <Image
              src={pineappleJuiceImg}
              alt='Pineapple juice'
              className='object-cover'
            />
          </div>

          <div className='w-[150px] lg:mt-[75px] lg:ml-0 md:ml-0 ml-[39px] h-[200px] flex items-center justify-center rounded-xl bg-gradient-custom shadow-2xl'>
            <Image
              src={waterMelonJuiceImg}
              alt='Watermelon juice'
              className='object-cover'
            />
          </div>

          <div className=' w-[150px] h-[200px] flex items-center justify-center rounded-xl bg-gradient-custom shadow-2xl'>
            <Image
              src={coconutMainImg}
              alt='Coconut water'
              className='object-cover'
            />
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <p className='text-[#53422B] text-md'
        data-aos='fade-up'>
          Our commitment to excellence 
          <br /> in the realm of juices sets us 
          <br /> apart from the competition.
        </p>
      </div>
    </section>
  )
}

export default About
