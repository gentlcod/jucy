/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../menucategories/module.css';
import { RiDiscountPercentFill } from "react-icons/ri";
import { TbBasketPlus } from "react-icons/tb";
import { IoCheckbox } from "react-icons/io5"; // Checkbox icon
import { guavaJuiceImg, mangoJuiceImg, papayaJuiceImg, passionFruitJuiceImg, pineappleJuiceImg } from '../../../public/assets';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { PiBasketFill } from 'react-icons/pi';
import { logoImg } from '../../../public/assets';

const tropicalJuices = () => {
  const [shadow, setShadow] = useState(false);
  const [user, setUser] = useState(null);
  const [addedItems, setAddedItems] = useState([]); // State to track added items

  useEffect(() => {
    const handleShadow = () => {
      setShadow(window.scrollY >= 5);
    };

    window.addEventListener('scroll', handleShadow);
    return () => {
      window.removeEventListener('scroll', handleShadow);
    };
  }, []);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set the user state when authenticated
    });
  }, []);

  const addToBasket = async (item) => {
    if (!user) {
      alert("Please sign in to add items to the basket.");
      return;
    }

    try {
      await addDoc(collection(db, 'basket'), {
        uid: user.uid, // Store the user's unique ID with the basket item
        name: item.name,
        price: item.price,
        imageUrl: item.imageUrl,
        description: item.description,
        quantity: 1, // default quantity
        timestamp: new Date(),
      });

      setAddedItems([...addedItems, item.name]); // Add the item name to the addedItems state
      alert(`${item.name} added to basket!`);
    } catch (error) {
      console.error("Error adding item to basket: ", error);
    }
  };

  const items = [
    {
      name: 'Pineapple',
      price: 8.50,
      imageUrl: pineappleJuiceImg,
      description: 'Sweet and tangy, rich in vitamin C and enzymes that aid digestion.',
    },
    {
      name: 'Mango',
      originalPrice: 15.00,
      price: 12.00,
      hasDiscount: true,
      imageUrl: mangoJuiceImg,
      description: 'Sweet, creamy, and tropical, high in vitamins A and C.',
    },
    {
      name: 'Guava',
      price: 9.00,
      imageUrl: guavaJuiceImg,
      description: 'Tropical and rich in nutrients, with a unique flavor that’s a mix of pear and strawberry.'
    },
    {
      name: 'Papaya',
      price: 10.50,
      imageUrl: papayaJuiceImg,
      description: 'Mild and sweet with a buttery texture, full of antioxidants and nutrients.',
    },
    {
      name: 'Passion Fruit',
      price: 11.00,
      imageUrl: passionFruitJuiceImg,
      description: 'Tangy and aromatic, packed with vitamins and minerals, perfect for a refreshing drink.',
    },

  ];

  return (
    <>
      {/* Header Section */}
      <div className={`sticky-header ${shadow ? 'sticky-header-shadow' : ''}`}>
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
          <div className="lg:ml-[85px] cursor-pointer">
            <Link href="/">
              <div className="mt-3" />
              <Image src={logoImg} alt="logo" height={85} width={85} data-aos="fade-right" data-aos-duration="1500" />
            </Link>
          </div>
          <h5 className="text-[#53422B] font-bold" data-aos="fade-down">Menu</h5>
          <div className="lg:mr-[6.9rem] mr-[35px] ml-[1rem]">
            <Link href="/basket">
              <PiBasketFill style={{ color: '#53422B', fontSize: '33px' }} data-aos="fade-left" />
            </Link>
          </div>
        </div>
      </div>

      {/* Categories Boxes */}
      <div className="pt-[121px] lg:pb-1 pb-42 overflow-hidden lg:px-[120px] px-5" data-aos="fade-down" data-aos-duration="1500">
        <h5 className='pb-6 font-medium text-[#53422B] text-2xl'>Tropical Juices</h5>

        <div className="mb-[2rem] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {items.map((item, index) => (
            <div key={index} className="relative w-full h-[375px]">
              <Link href={`/tropicaljuices/${item.name.toLowerCase().replace(' ', '')}`}>
                {/* Blurred Background */}
                <div className="absolute inset-0 bg-gradient-custom border-white border-[1.5px] rounded-3xl blur-sm"></div>
                {/* Image */}
                <div className="absolute inset-0 ml-7">
                  <div className="mt-[1rem] flex items-center">
                    <Image
                      src={item.imageUrl}
                      alt={`${item.name} juice`}
                      height={165} 
                      width={165} 
                      className={item.name === 'Papaya' || item.name === 'Passion Fruit' || item.name === 'Pineapple' ? 'flip-image' : ''}
                      style={{marginTop: '-1.55rem'}}
                    />
                    <div className="absolute top-1 right-1 bg-[#FF9900] shadow-xl border-[#555555] rounded-tr-2xl rounded-bl-2xl py-2 px-3">
                      {addedItems.includes(item.name) ? (
                        <IoCheckbox style={{ color: '#fff', fontSize: '24px' }} /> // Display IoCheckbox if the item is added
                      ) : (
                        <TbBasketPlus
                          style={{ color: '#fff', fontSize: '24px' }}
                          onClick={(e) => {
                            e.preventDefault();
                            addToBasket(item);
                          }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </Link>
              {/* Text */}
              <div className="z-10 absolute top-64 px-10">
                <h5 className="text-[#473525] text-xl font-bold">{item.name}</h5>
                <p className="text-[#555555] text-xs">{item.description}</p>
                <div className="flex items-center">
                  {/* Displaying the original price with a red line for discounted items */}
                  {item.hasDiscount && (
                    <p className="text-md font-semibold line-through mr-2 text-[#555555] opacity-[75%] flex items-center">
                      <span className='text-red-500'>$</span>{item.originalPrice.toFixed(2)}
                    </p>
                  )}
                  <p className="text-[#555555] text-xl font-semibold flex items-center">
                    <span className='text-[#FF4D00]'>$</span>{item.price.toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Discount Icon for Discounted Items */}
              {item.hasDiscount && (
                <div className="absolute top-1 left-1">
                  <RiDiscountPercentFill style={{color: '#FF4D00', fontSize: '65px'}}/>
                </div>
              )}
            </div>
          ))}
        </div>

        <Link href='/menucategories'>
          <p className='my-6 underline font-medium text-[#53422B]'>Back to menu categories</p>
        </Link>

      </div>
    </>
  );
};

export default tropicalJuices;
