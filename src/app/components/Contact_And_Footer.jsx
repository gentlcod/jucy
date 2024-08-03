/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image'
import { FaMapPin } from "react-icons/fa";
import { ImPhone } from "react-icons/im";
import { MdStorefront } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { logoImg, mapLocationImg } from '../../../public/assets'

const Contact_And_Footer = () => {
  return (
    <section id='contact' >

      
      <div className='mt-[120px] py-[30px] lg:pt-[90px] pt-[225px] lg:px-[100px] px-[25px] max-w-[1280px]'>

  
       <h2 className='text-[#53422B] xl:text-5xl text-3xl mb-5 
      lg:mb-0 font-bold lg:mt-[-50px]'
      data-aos="fade-right" data-aos-duration="1500" >
       Contact Us
      </h2>

      <div className='flex flex-col lg:flex-row items-center gap-9 justify-between lg:w-[1180px]' data-aos="fade-down" data-aos-duration="1500">


         {/* location  */}

    <div className='mt-12'>
      <div className='ml-[30px]'>

      <Image
      src={mapLocationImg}
      alt='map location'
      width={150}
      height={150}
      />  
      </div>


      <div className='flex items-center'>
      <FaMapPin style={{color: '#53422B', fontSize: '24px'}}/>
      <p className='ml-3 text-[#53422B] text-sm'>
        The adress of the main 
        <br /> company branch goes here
      </p>
      </div>

      <div className='mt-2 flex items-center'>
      <MdStorefront style={{color: '#53422B', fontSize: '24px'}}/>
      <p className='ml-3 text-[#53422B] text-sm'>
      Branch 1 link
      </p>
      </div>

      <div className='mt-2 flex items-center'>
      <MdStorefront style={{color: '#53422B', fontSize: '24px'}}/>
      <p className='ml-3 text-[#53422B] text-sm'>
      Branch 2 link
      </p>
      </div>

      <div className='mt-2 flex items-center'>
      <MdStorefront style={{color: '#53422B', fontSize: '24px'}}/>
      <p className='ml-3 text-[#53422B] text-sm'>
      Branch 3 link
      </p>
      </div>

    
      </div>

        {/* send message form  */}

      <div className='mt-12 '>
        <h4 className='mb-3 text-[#555555] opacity-[70%] ml-16 font-semibold'>
          Send Message
        </h4>



        <form>
          <input className='p-2 rounded-lg text-[#555555] opacity-[%50] w-[250px]' type="text" placeholder='Full name' />
          <br />
          <input className='mt-2 p-2 rounded-lg text-[#555555] opacity-[%50] w-[250px]' type="email" placeholder='Email' />
          <br />

          <textarea className='mt-2 p-2 rounded-lg w-[250px]' placeholder='Message' rows={3}/>
        
        </form>
        <button 
        type='submit'
        className='mt-3 p-2 px-7 font-medium ml-[4.5rem] rounded-lg bg-[#FF9900] text-[#53422B]'
        >
            Submit
          </button>
      </div>


      {/* socials  */}

      <div className='mt-12'>
       <Image
       src={logoImg}
       alt='logo'
       width={150}
       height={150}
       />
       <div className='mt-2'>
        <div className='flex items-center'>
          <ImPhone style={{color: '#53422B', fontSize: '24px'}}/>
          <p className='text-[#53422B] text-sm ml-2'>
            0 000 00 00
          </p>
        </div>

        <div className='mt-2 flex items-center'>
          <IoMdMail style={{color: '#53422B', fontSize: '24px'}}/>
          <p className='text-[#53422B] text-sm ml-2'>
          info@company.com
          </p>
        </div>

        <div className='mt-2 flex items-center'>
          <FaFacebook style={{color: '#53422B', fontSize: '24px'}}/>
          <p className='text-[#53422B] text-sm ml-2'>
          facebook-account
          </p>
        </div>

        <div className='mt-2 flex items-center'>
          <AiFillInstagram style={{color: '#53422B', fontSize: '24px'}}/>
          <p className='text-[#53422B] text-sm ml-2'>
          @instagram-account
         </p>
        </div>

        <div className='mt-2 flex items-center'>
          <FaTwitter style={{color: '#53422B', fontSize: '24px'}}/>
          <p className='text-[#53422B] text-sm ml-2'>
          twitter/x-account
          </p>
        </div>

        

       </div>
      </div>

      </div>
      </div>

      <br />


      {/* footer  */}

      <footer>
        <div className='border border-[0.1px] border-[#53422B] w-full' style={{color: '#53422B'}}/>
        <p className='text-[#53422B] text-md py-4 text-center'>
          &copy; 2024 All Rights Reserved By Jucy 
        </p>
      </footer>

     
    </section>
  )
}

export default Contact_And_Footer
