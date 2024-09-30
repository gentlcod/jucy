/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../menucategories/module.css';
import { RiDiscountPercentFill } from "react-icons/ri";
import { IoCheckbox } from "react-icons/io5";
import { TbBasketPlus } from "react-icons/tb";
import { 
         limeJuiceImg, 
         blueBerryJuiceImg, 
         mangoJuiceImg,
         passionFruitJuiceImg,
         lycheeJuiceImg,
         honeyDewJuiceImg
        } from '../../../public/assets';
import { PiBasketFill } from 'react-icons/pi';
import { logoImg } from '../../../public/assets';
import { db } from '../firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';

const discount = () => {
  const [shadow, setShadow] = useState(false);
  const [addedItems, setAddedItems] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleShadow = () => {
      setShadow(window.scrollY >= 5);
    };

    window.addEventListener('scroll', handleShadow);
    return () => {
      window.removeEventListener('scroll', handleShadow);
    };
  }, []);

  // Listen for user authentication changes
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set the user state when authenticated
    });
  }, []);

  // Add to basket function
  const addToBasket = async (item) => {

    if(!user) {
      alert("Please sign in to add items to the basket.");
    }

    if (user) {
        console.log(item); // Debugging item details
        // User is authenticated, proceed to add the item to the basket
        try {
            await addDoc(collection(db, `users/${user.uid}/basket`), { // Specify the user ID here
                name: item.name,
                price: item.price,
                imageUrl: item.imageUrl,
                description: item.description,
                quantity: 1,
                timestamp: new Date(),
            });

            setAddedItems([...addedItems, item.name]);
            // alert(`${item.name} added to the basket!`);
        } catch (error) {
            console.error("Error adding item to basket: ", error);
        }
    }
};

  

  const juices = [
    {
      name: 'Lime',
      price: 6.00,
      originalPrice: 7.50,
      imageUrl: limeJuiceImg,
      description: 'Crisp and tangy, this juice adds a vibrant splash of flavor to any beverage.',
    },
    {
      name: 'Blueberry',
      price: 8.00,
      originalPrice: 10.00,
      imageUrl: blueBerryJuiceImg,
      description: 'Rich in antioxidants, this juice offers a sweet and subtly tart flavor.',
    },
    {
      name: 'Mango',
      price: 12.00,
      originalPrice: 15.00,
      imageUrl: mangoJuiceImg,
      description: 'Sweet, creamy, and tropical, high in vitamins A and C.',
    },
    {
      name: 'Passion Fruit',
      price: 10.00,
      originalPrice: 12.50,
      imageUrl: passionFruitJuiceImg,
      description: 'Exotic, sweet, and tart, packed with flavor and a tropical vibe.',
    },
    {
      name: 'Lychee',
      price: 10.00,
      originalPrice: 12.50,
      imageUrl: lycheeJuiceImg,
      description: 'Delicate, floral, and sweet, perfect for a refreshing treat.',
    },
    {
      name: 'Honeydew',
      price: 12.00,
      originalPrice: 15.00,
      imageUrl: honeyDewJuiceImg,
      description: 'Mildly sweet and refreshing, with a smooth and mellow melon taste.',
    },
  ];

  addToBasket(juices);

  return (
    <>
      {/* Header Section */}
      <div className={`sticky-header ${shadow ? 'sticky-header-shadow' : ''}`}>
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
            Discount Menu
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

      {/* Juices Section */}
      <div className="pt-[121px] lg:pb-1 pb-42 overflow-hidden lg:px-[120px] px-5"
        data-aos="fade-down"
        data-aos-duration="1500">
        <h5 className='pb-6 font-medium text-[#53422B] text-2xl'>
          20% Discount juices on this season
        </h5>

        <div className="mb-[2rem] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {juices.map((juice) => (
            <Link key={juice.name} href={`/discount/${juice.name.toLowerCase()}`}>
              <div className="relative w-full h-[375px]">
                <div className="absolute inset-0 bg-gradient-custom border-white border-[1.5px] rounded-3xl blur-sm"></div>
                <div className="absolute inset-0 ml-7">
                  <div className='mt-[.7rem] flex items-center'>
                    <Image
                      src={juice.imageUrl}
                      alt={juice.name}
                      height={170}
                      width={170}
                      className={juice.name === 'Mango' ? '' : 'transform -scale-x-100'}
                      
                    />
                    <div className='absolute top-[-.45rem] left-[-2.7rem]'>
                      <RiDiscountPercentFill style={{ color: '#FF4D00', fontSize: '65px' }} />
                    </div>
                    <div className='absolute top-1 right-1 bg-[#FF9900] shadow-xl border-[#555555] rounded-tr-2xl rounded-bl-2xl py-2 px-3'>
                      {addedItems.includes(juice.name) ? (
                        <IoCheckbox style={{ color: '#fff', fontSize: '24px' }} />
                      ) : (
                        <TbBasketPlus
                          style={{ color: '#fff', fontSize: '24px' }}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation(); // Prevents the parent Link from triggering
                            addToBasket(juice); // Pass the juice item to addToBasket
                          }}
                        />

                      )}
                    </div>
                  </div>
                </div>
                <div className="z-10 absolute top-64 px-10">
                  <h5 className="text-[#473525] text-xl font-bold">{juice.name}</h5>
                  <p className='text-[#555555] text-xs'>{juice.description}</p>
                  <div className="flex items-center gap-2 pt-1">
                    <span className='mt-1 text-[#FF4D00] text-sm font-semibold'>$</span>
                    <p className='ml-[-9px] text-[#555555] opacity-[65%] text-xl font-semibold' style={{ textDecoration: 'line-through', textDecorationColor: 'red' }}>
                      {juice.originalPrice.toFixed(2)}
                    </p>
                    <p className='text-[#555555] text-xl font-semibold'>
                      <span className='text-[#FF4D00] text-sm font-semibold'>$</span>
                      {juice.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link href='/menucategories'>
          <p className='my-6 underline font-medium text-[#53422B]'>Back to menu categories</p>
        </Link>
      </div>
    </>
  );
};

export default discount;
