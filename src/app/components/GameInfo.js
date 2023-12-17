"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { VscArrowCircleLeft, VscArrowCircleRight } from 'react-icons/vsc';

function GameInfo() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/images/guns/1.png", "/images/guns/2.png", "/images/guns/3.png", "/images/guns/4.png"]; // Add more image paths as needed

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (event.key === 'ArrowRight') {
        handleNextImage();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentImageIndex]);

  return (
    <div className='bg-slate-500 font-lemon-milk pt-8 text-white'>
      <div className='grid md:grid-cols-2 gap-12 border-1 rounded-md border-inherit pt-14'>
        <div className='p-4'>
          <h1 className='text-center md:text-left'>
           GUNS and ROSES
          </h1>
        </div>

        <div className='md:mt-0 mt-6 relative'>
        <div className='md:h-[500px] md:w-[500px] h-[400px] w-[400px]'>
          {/* Use the currentImageIndex for the dynamic image source */}
          <Image
            src={images[currentImageIndex]}
            width={500}
            height={500}
            alt="Game Screenshot"
          />
          </div>
          <div className="flex mt-4">
            {/* Use the handlePrevImage and handleNextImage functions for button clicks */}
            <VscArrowCircleLeft
              size={60}
              className="absolute left-1/3 -translate-x-1/2 text-lg rounded-full p-2 text-white cursor-pointer"
              onClick={handlePrevImage}
            />
            <VscArrowCircleRight
              size={60}
              className="absolute left-1/3 translate-x-1/2 text-lg rounded-full p-2 text-white cursor-pointer"
              onClick={handleNextImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameInfo;
