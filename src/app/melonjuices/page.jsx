/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../menucategories/module.css';
import { TbBasketPlus } from "react-icons/tb";
import { RiDiscountPercentFill } from "react-icons/ri";
import { PiBasketFill } from 'react-icons/pi';
import { IoCheckbox } from "react-icons/io5";
import { cantalopeJuiceImg, honeyDewJuiceImg, waterMelonJuiceImg } from '../../../public/assets';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { logoImg } from '../../../public/assets';

const melonJuices = () => {
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
      name: 'Watermelon',
      price: 10.00,
      imageUrl: waterMelonJuiceImg,
      description: 'Refreshing and hydrating, with a mild, sweet flavor.',
    },
    {
      name: 'Cantaloupe',
      price: 9.50,
      imageUrl: cantalopeJuiceImg,
      description: 'Rich in antioxidants, this juice offers a sweet and subtly tart flavor.',
    },
    {
      name: 'Honey Dew',
      originalPrice: 15.00,
      price: 12.00,
      hasDiscount: true,
      imageUrl: honeyDewJuiceImg,
      description: 'Light and sweet, honey dew juice is perfect for a refreshing drink.',
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
        <h5 className='pb-6 font-medium text-[#53422B] text-2xl'>Melon Juices</h5>

        <div className="mb-[2rem] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {items.map((item, index) => (
            <div key={index} className="relative w-full h-[375px]">
              <Link href={`/melonjuices/${item.name.toLowerCase().replace(' ', '')}`}>
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
                      className={item.name === 'Watermelon' || item.name === 'Honey Dew' ? 'flip-image' : ''}
                      style={{marginTop: '-1rem'}}
                    />
                    <div className="absolute top-1 right-1 bg-[#FF9900] shadow-xl border-[#555555] rounded-tr-2xl rounded-bl-2xl py-2 px-3"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation(); // Prevents the parent Link from triggering
                      if(addedItems.includes(item.name)) {
                        removeFromBasket(item) // Remove item if already added
                      } else {
                      addToBasket(item); // Pass the juice item to addToBasket
                      }
                    }}
                    >
                      {addedItems.includes(item.name) ? (
                        <IoCheckbox style={{ color: '#fff', fontSize: '24px' }} /> // Display IoCheckbox if the item is added
                      ) : (
                        <TbBasketPlus
                          style={{ color: '#fff', fontSize: '24px' }}
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

export default melonJuices;
