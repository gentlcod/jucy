/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../menucategories/module.css';
import { IoCheckbox } from "react-icons/io5"; // after the user taps to save a juice to basket, this icon should display 
import { TbBasketPlus } from "react-icons/tb";
import {
  grapeFruitJuiceImg,
  lemonJuiceImg,
  limeJuiceImg,
  logoImg,
  orangeJuiceImg,
  tangerineJuiceImg
} from '../../../public/assets';
import { RiDiscountPercentFill } from "react-icons/ri";
import { PiBasketFill } from 'react-icons/pi';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const citrusJuices = () => {
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

  // Listen for user authentication changes
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set the user state when authenticated
      if (currentUser) {
        fetchBasketItems(currentUser.uid); // Fetch items on user authentication
      }
    });
    return () => unsubscribe(); // Cleanup subscription
  }, []);

  // Fetch items from Firestore
  const fetchBasketItems = async (uid) => {
    const basketRef = collection(db, `users/${uid}/basket`);
    const snapshot = await getDocs(basketRef);
    const items = snapshot.docs.map(doc => doc.data().name); // Get item names
    setAddedItems(items); // Set added items
  };

  // Add to basket function
  const addToBasket = async (item) => {
    if (!user) {
      alert("Please sign in to add items to the basket.");
      return;
    }

    try {
      await addDoc(collection(db, `users/${user.uid}/basket`), {
        name: item.name,
        price: item.price,
        imageUrl: item.imageUrl,
        description: item.description,
        quantity: 1,
        timestamp: new Date(),
      });

      setAddedItems([...addedItems, item.name]);
    } catch (error) {
      console.error("Error adding item to basket: ", error);
    }
  };

  // Remove from basket function
  const removeFromBasket = async (item) => {
    if (!user) return;

    try {
      const basketRef = collection(db, `users/${user.uid}/basket`);
      const querySnapshot = await getDocs(basketRef);
      const itemToDelete = querySnapshot.docs.find(doc => doc.data().name === item.name);

      if (itemToDelete) {
        await deleteDoc(doc(basketRef, itemToDelete.id));
        setAddedItems((prev) => prev.filter(name => name !== item.name)); // Update local state
      }
    } catch (error) {
      console.error("Error removing item from basket: ", error);
    }
  };

  const items = [
    {
      name: 'Orange',
      price: 7.00,
      imageUrl: orangeJuiceImg,
      description: 'A classic favorite, rich in vitamin C and bursting with refreshing, tangy-sweet flavor.',
    },
    {
      name: 'Lemon',
      price: 7.00,
      imageUrl: lemonJuiceImg,
      description: 'Bright and zesty, perfect for adding a refreshing tartness to any drink or dish.',
    },
    {
      name: 'Lime',
      originalPrice: 7.50,
      price: 6.00,
      imageUrl: limeJuiceImg,
      hasDiscount: true,
      description: 'Tart and aromatic, an excellent source of vitamin C, perfect for refreshing summer drinks.',
    },
    {
      name: 'Tangerine',
      price: 7.50,
      imageUrl: tangerineJuiceImg,
      description: 'Sweet and tangy, full of flavor, perfect for a refreshing drink on a hot day.',
    },
    {
      name: 'Grapefruit',
      price: 8.00,
      imageUrl: grapeFruitJuiceImg,
      description: 'A perfect balance of sweet and tart, packed with vitamin C and antioxidants.',
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
            Citrus Juices Menu
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
          Our Selection of Citrus Juices
        </h5>

        <div className="mb-[2rem] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {items.map((item) => (
            <div key={item.name} className="relative w-full h-[375px]">
              <Link href={`/citrusJuices/${item.name.toLowerCase()}`}>
                <div className="absolute inset-0 bg-gradient-custom border-white border-[1.5px] rounded-3xl blur-sm"></div>
                <div className="absolute inset-0 ml-7">
                  <div className='flex items-center'>
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      height={170}
                      width={170}
                    />
                    {item.hasDiscount && (
                      <div className='absolute top-[-.45rem] left-[-2.7rem]'>
                        <RiDiscountPercentFill style={{ color: '#FF4D00', fontSize: '65px' }} />
                      </div>
                    )}
                    <div className='absolute top-1 right-1 bg-[#FF9900] shadow-xl border-[#555555] rounded-tr-2xl rounded-bl-2xl py-2 px-3'
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation(); // Prevents the parent Link from triggering
                        if (addedItems.includes(item.name)) {
                          removeFromBasket(item); // Remove item if already added
                        } else {
                          addToBasket(item); // Pass the juice item to addToBasket
                        }
                      }}
                    >
                      {addedItems.includes(item.name) ? (
                        <IoCheckbox style={{ color: '#fff', fontSize: '24px' }} />
                      ) : (
                        <TbBasketPlus
                          style={{ color: '#fff', fontSize: '24px' }}
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="z-10 absolute top-64 px-10">
                  <h5 className="text-[#473525] text-xl font-bold">{item.name}</h5>
                  <p className='text-[#555555] text-xs'>{item.description}</p>
                  <div className="flex items-center gap-2 pt-1">
                    <span className='mt-1 text-[#FF4D00] text-sm font-semibold'>$</span>
                    {item.hasDiscount && (
                      <p className='ml-[-9px] text-[#555555] opacity-[65%] text-xl font-semibold' style={{ textDecoration: 'line-through', textDecorationColor: 'red' }}>
                        {item.originalPrice.toFixed(2)}
                      </p>
                    )}
                    <p className='text-[#555555] text-xl font-semibold'>
                      <span className='text-[#FF4D00]'>$</span>
                      {item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </Link>
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

export default citrusJuices;
