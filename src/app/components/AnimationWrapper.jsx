'use client';

import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function ClientSideWrapper({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Duration of animations
      easing: 'ease-in-out', // Easing function
      once: false, // Repeat animation on scroll
    });
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <>
      {children}
    </>
  );
}
