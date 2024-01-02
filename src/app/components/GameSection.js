"use client"
import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import { VscArrowCircleLeft, VscArrowCircleRight } from 'react-icons/vsc';

function GameSection() {

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
    <div className='bg-slate-200 font-lemon-milk pt-8 text-black'>
      <div className='grid md:grid-cols-2 gap-12 border-1 rounded-md border-inherit pt-14'>
        <div className='p-4'>
          <h1 className='text-center md:text-left md:mt-4 md:ml-20 md:mr-20 leading-10	'>
            Immerse yourself in the pulsating universe of "Shardscape," a meticulously crafted 3rd person shooter powered by Unreal Engine 5. Far beyond the ordinary, this isn't just a game; it's a groundbreaking blockchain odyssey set in the dynamic realm of the 3rd Web. Shardscape breaks free from the confines of a single chain – it's a multichain marvel, seamlessly compatible with the Ethereum Virtual Machine (EVM). Our mastery in Unreal Engine 5 and Unity ensures a feast for your senses with unparalleled visuals, smooth animations, and dynamic gameplay.
          </h1>
        </div>

        <div className='md:mt-0 mt-6 md:mr-12'>
        <div className='md:mt-4 md:ml-4 md:mr-4 md:mb-4 rounded-lg border-2 border-black md:h-[480px] md:w-[640px]	'>
         {/* Use the currentImageIndex for the dynamic image source */}
          <Image
            src={images[currentImageIndex]}
            width={500}
            height={500}
            alt="Game Screenshot"
          />
            <p className="text-center mt-4">{descriptions[currentImageIndex]}</p>
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

export default GameSection;
