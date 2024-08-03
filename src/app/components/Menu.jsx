import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { blueBerryJuiceImg, kiwiJuiceImg, mangoJuiceImg } from '../../../public/assets'

const Menu = () => {
  return (
    <section id='menu' className='py-[30px] lg:px-[100px] px-[25px] max-w-[1280px]'>
    <div>
      <h2 className='mt-[111px] text-[#53422B] xl:text-5xl text-3xl mb-5 
      lg:mb-0 font-bold leading-loose'
      data-aos="fade-right" data-aos-duration="1500" >
        Explore best <br />
        menu sections
      </h2>

      <br />
      <br />
     

      {/* menu boxes  */}
      <div className='flex items-center flex-wrap xl:justify-between xl:w-[1135px] md:w-[725px]'  data-aos="fade-down" data-aos-duration="1500">


        
      <div className='relative w-[250px] h-[270px] xl:m-0 m-5'>
      <div className='absolute inset-0 bg-gradient-custom border border-[1.5px] border-white rounded-3xl blur-sm'></div>
      <div className='relative p-[10px] z-10 flex flex-col'>

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
            <p className='mt-2 text-xs font-thin text-[#555555]'>
                Rich in antioxidants, this juice 
                <br /> offers a sweet and subtly
                <br /> tart flavor.
            </p>

            </div>
        </div>
      </div>





      <div className='relative w-[250px] h-[270px] xl:m-0 m-5'>
      <div className='absolute inset-0 bg-gradient-custom border border-white border-[1.5px] rounded-3xl blur-sm'></div>
            <div  className='relative ml-4 mt-[-19px]'>
            <Image
            src={mangoJuiceImg}
            alt='mango juice'
            height={150}
            width={150}
            />
            <h5 className='mt-[-9px] text-[#53422B] font-semibold'>
            Mango Bliss Burst
            </h5>

            <p className='mt-2 text-xs font-thin text-[#555555]'>
            Sweet, creamy, and tropical, high  
            <br /> in vitamins A and C.

            </p>
            </div>
        </div>
     



      <div className='relative w-[250px] h-[270px] lg:mr-[-120px] xl:m-0 m-5'>
      <div className='absolute inset-0  bg-gradient-custom border border-white border-[1.5px] rounded-3xl blur-sm'></div>
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

            <p className='mt-2 text-xs font-thin text-[#555555]'>
            Tangy and sweet with vibrant green color,
           is packed with vitamins C and K.
            </p>
        </div>
        </div>
      </div>
      </div>


      <div className='lg:ml-[533px] mt-7'>
      <Link
      href='/menu-categories'
      >
      <button className='rounded-md bg-[#53422B] text-white py-4 px-7 xl:ml-0 ml-[3rem]'
      data-aos="zoom-in" data-aos-duration="1500">
        See All
      </button>
      </Link>
      </div>


      
      
      </section>
  )
}

export default Menu
