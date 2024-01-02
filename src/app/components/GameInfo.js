"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { VscArrowCircleLeft, VscArrowCircleRight } from 'react-icons/vsc';

function GameInfo() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/images/guns/1.png", "/images/guns/2.png", "/images/guns/3.png"]; // Add more image paths as needed
  const descriptions = [
    "The AR-15, a versatile and powerful assault rifle, is known for its accuracy and adaptability on the battlefield.",
    "The 12-gauge shotgun, a close-quarters powerhouse, delivers devastating firepower at short range.",
    "The 9mm pistol, a classic sidearm, offers reliability and precision for tactical versatility."
  ];

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
    <div className='bg-gray-200 font-lemon-milk pt-8 text-black'>
      <div className='grid md:grid-cols-2 gap-12 border-1 rounded-md border-inherit pt-14'>
        <div className='p-4'>
          <h1 className='text-center text-3xl md:text-left'>
           Weapons & Equipments
          </h1>
          <h1 className='text-center text-3xl md:text-left md:mt-16 md:ml-9'>
           AR-15
          </h1>
          <h1 className="text-left mt-10 ml-9 w-[380px]">{descriptions[currentImageIndex]}</h1>
          
        </div>
        

        <div className='md:mt-6 mt-6 relative'>
        <div className='md:h-[250px] md:w-[500px] h-[200px] w-[400px]'>
          {/* Use the currentImageIndex for the dynamic image source */}
          <Image
            src={images[currentImageIndex]}
            width={500}
            height={200}
            alt="Game Screenshot"
          />
           

          </div>
          <div className="md:mb-14 md:mr-10 md:mt-9">
            <div className="flex items-center font-lemon-milk justify-between border-t border-b-2 border-dashed border-black py-1">
              <div className="flex-1 text-center">
                <h3>Height</h3>
                <h3>6' 2"</h3>
              </div>
              <div className="border-l-2 border-dashed border-green-800 h-10"></div>
              <div className="flex-1 text-center">
                <h3>Weight</h3>
                <h3>185 lbs</h3>
              </div>
            </div>
            <div className="flex items-center font-lemon-milk justify-between border-b border-dotted border-black py-1">
              <div className="flex-1 text-center">
                <h3>Age</h3>
                <h3>24</h3>
              </div>
              <div className="border-l border-dotted border-black h-8"></div>
              <div className="flex-1 text-center">
                <h3>Special Ability</h3>
                <h3>?????</h3>
              </div>
            </div>
         </div>
          <div className="flex mt-4">
            {/* Use the handlePrevImage and handleNextImage functions for button clicks */}
            <VscArrowCircleLeft
              size={60}
              className="absolute left-1/3 -translate-x-1/2 text-lg rounded-full p-2 text-orange-400 cursor-pointer"
              onClick={handlePrevImage}
            />
            <VscArrowCircleRight
              size={60}
              className="absolute left-1/3 translate-x-1/2 text-lg rounded-full p-2 text-purple-800 cursor-pointer"
              onClick={handleNextImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameInfo;
