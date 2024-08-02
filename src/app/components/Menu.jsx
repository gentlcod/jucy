import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { blueBerryJuiceImg, kiwiJuiceImg, mangoJuiceImg } from '../../../public/assets'

const Menu = () => {
  return (
    <section id='menu' className='py-[30px] pt-[90px] lg:px-[100px] px-[25px] max-w-[1280px]'>
    <div>
      <h2 className='mt-[150px] text-[#53422B] xl:text-5xl text-3xl mb-5 
      lg:mb-0 font-bold leading-loose'
    >
        Explore best <br />
        menu sections
      </h2>

      <br />
      <br />
     

      {/* menu boxes  */}
      <div className='flex items-center flex-wrap justify-between'>
      <div>
        <div className='relative p-[10px] w-[250px] h-[270px] bg-gradient-custom border-[3px] border-[#fff] rounded-xl'>
              {/* Pseudo-element for background blur */}
  <div className='absolute inset-0 bg-white/30' style={{ backdropFilter: 'blur(24px)' }}></div>
            <div  className='relative ml-4'>
            <Image
            src={blueBerryJuiceImg}
            alt='berry juice'
            height={120}
            width={120}
            />
            <h5 className='mt-2 text-[#53422B] font-semibold'>
            Berry Burst Bliss
            </h5>
            <p className='mt-2 text-xs text-[#555555]'>
                Rich in antioxidants, this juice 
                <br /> offers a sweet and subtly
                <br /> tart flavor.
            </p>

            </div>
        </div>
      </div>





      <div>
        <div className='relative p-[10px] w-[250px] lg:mr-[-15px] h-[270px] bg-gradient-custom border-[3px] border-[#fff] rounded-xl'>
            <div  className='relative ml-4 mt-[-31px]'>
            <Image
            src={mangoJuiceImg}
            alt='mango juice'
            height={150}
            width={150}
            />
            <h5 className='mt-[-9px] text-[#53422B] font-semibold'>
            Mango Bliss Burst
            </h5>

            <p className='mt-2 text-xs text-[#555555]'>
            Sweet, creamy, and tropical, high  
            <br /> in vitamins A and C.

            </p>
            </div>
        </div>
      </div>



      <div>
        <div className='relative p-[10px] w-[250px] h-[270px] lg:mr-[-120px] bg-gradient-custom border-[3px] border-[#fff] rounded-xl'>
            <div  className='relative ml-4 mt-[-17px]'>
            <Image
            src={kiwiJuiceImg}
            alt='kiwi juice'
            height={400}
            width={400}
            />

            <h5 className='text-[#53422B] font-semibold'>
            Pure Kiwi Joy
            </h5>

            <p className='mt-2 text-xs text-[#555555]'>
                Rich in antioxidants, this juice 
                <br /> offers a sweet and subtly
                <br /> tart flavor.
            </p>
        </div>
        </div>
      </div>
      </div>
      </div>


      <div className='lg:ml-[533px] mt-7'>
      <Link
      href='/menu-categories'
      >
      <button className='rounded-md bg-[#53422B] text-white py-4 px-12'>
        See All
      </button>
      </Link>
      </div>


      
      
      </section>
  )
}

export default Menu
