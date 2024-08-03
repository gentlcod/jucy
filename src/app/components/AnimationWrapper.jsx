// components/ClientSideWrapper.js
'use client';

import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function ClientSideWrapper({ children }) {
  useEffect(() => {
    // Function to initialize AOS
    const initializeAOS = () => {
      Aos.init({
        duration: 1000, // Duration of animations
        easing: 'ease-in-out', // Easing function
        once: false, // Repeat animation on scroll
        offset: 100, // Offset from the bottom of the viewport
      });
    };

    // Simulate preloader behavior
    const handlePreloader = () => {
      // Simulate a delay for preloader
      setTimeout(() => {
        // Preloader finished, initialize AOS
        initializeAOS();
      }, 1700); 
    };

    handlePreloader();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return <>{children}</>;
}
