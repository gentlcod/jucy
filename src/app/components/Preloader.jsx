'use client'

import React, { useEffect } from 'react';

const Preloader = () => {

  useEffect(() => {
    const timeout = setTimeout(() => {
      const preloader = document.querySelector('#preloader');
      if (preloader) {
        preloader.style.display = 'none';
      }
    }, 1700); // 1700 milliseconds = 1.7 seconds

    // Clean up the timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {/* <!-- preloader --> */}
      <div id="preloader"></div>
    </div>
  );
}

export default Preloader;
