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
      <iframe style={{ display: 'none' }} width="560" height="315" src="https://www.youtube.com/embed/Yf5d_Zx3AaI?si=dhLtRwB-UDKIqhRx" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  );
}

export default Preloader;
