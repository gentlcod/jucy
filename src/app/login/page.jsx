/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from 'next/navigation'; // Correct import for Next.js
import { IoMdMail } from 'react-icons/io';
import { IoEye, IoEyeOff } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import { logoImg } from '../../../public/assets';
import Image from 'next/image';
import styles from '../signup/module.css'
import { useAuth } from '../contexts/authContext';
import Navbar from '../components/Navbar';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { signInWithEmail, signInWithGoogle } = useAuth(); // Use auth methods

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmail(email, password);
      router.push('/'); 
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      router.push('/'); 
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  return (
    
    <div data-aos='fade-up'>
      <div className='mt-12'>
        <Link href="/">
          <p className='max-sm:mt-[-1.7rem] max-sm:ml-[1.5rem] md:pl-[7.7rem]'><FaArrowLeft />Back</p>
        </Link>
      </div>

      <br />
      <br />
      <br />
      <div className='max-w-[400px] mx-auto min-h-[600px] mt-4 px-4'>
        <Link href='/'>
          <Image 
            src={logoImg}
            height={100}
            width={100}
            alt='logo'
            className='ml-[135px] py-4'
          />
        </Link>
        <h1 className={`${styles.h1Quicksand} text-2xl text-[#53422B] font-bold text-center`}>
          Sign In
        </h1>
        {error && <p className='bg-red-300 my-2 p-3'>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className='my-4'>
            <div className='my-2 w-full relative'>
              <input
                placeholder='Your Email'
                onChange={(e) => setEmail(e.target.value)}
                className='w-full p-3 rounded-lg'
                type="email" />
              <IoMdMail style={{ color: '#53422B', fontSize: '24px' }} className='absolute right-3 top-3 text-gray-400' />
            </div>
          </div>
          <div className='my-4'>
            <div className='my-2 w-full relative'>
              <input
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className='w-full p-3 bg-primary rounded-lg'
                type={showPassword ? "text" : "password"}
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-[#555555] opacity-[50%]"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoEye style={{ color: '#53422B', fontSize: '24px' }} /> : <IoEyeOff style={{ color: '#53422B', fontSize: '24px' }} />}
              </button>
            </div>
          </div>
          <button className='overflow-hidden w-[100px] ml-[133px] my-2 p-2 bg-[#FF9900] text-[#53422B] font-medium rounded-lg shadow-xl hover:shadow-2xl ease-in duration-300'>
            Sign In
          </button>
          <p className='my-2 text-[#555555] text-center text-sm font-regular opacity-[70%]'>
            Don't have an account?
            <Link href='/signup' className='text-accent ml-2 text-[#555555] font-semibold underline'>
              Sign Up
            </Link>
          </p>
          <p className='text-center text-[#555555] opacity-[70%] font-bold text-xl my-2'>or</p>
          <button onClick={handleGoogleSignIn} className='w-full my-2 p-3 bg-[#FF9900] text-[#53422B] rounded-lg shadow-xl hover:shadow-2xl ease-in duration-300'>
            <div className='flex items-center'>
              <FaGoogle className='ml-4' style={{ color: '#53422B', fontSize: '24px' }} />
              <p className='text-center text-[#53422B] font-medium ml-16'>Sign in with Google </p>
            </div>
          </button>
        </form>
      </div>


    </div>
  );
};

export default LogIn;
