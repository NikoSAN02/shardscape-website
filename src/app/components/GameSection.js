import React from 'react';
import Image from 'next/image';

function GameSection() {
  return (
    <div className='bg-slate-200 font-lemon-milk pt-8 text-black'>
      <div className='grid md:grid-cols-2 gap-12 border-1 rounded-md border-inherit pt-14'>
        <div className='p-4'>
          <h1 className='text-center md:text-left md:mt-4 md:ml-20 md:mr-20 leading-10	'>
            Immerse yourself in the pulsating universe of "Shardscape," a meticulously crafted 3rd person shooter powered by Unreal Engine 5. Far beyond the ordinary, this isn't just a game; it's a groundbreaking blockchain odyssey set in the dynamic realm of the 3rd Web. Shardscape breaks free from the confines of a single chain – it's a multichain marvel, seamlessly compatible with the Ethereum Virtual Machine (EVM). Our mastery in Unreal Engine 5 and Unity ensures a feast for your senses with unparalleled visuals, smooth animations, and dynamic gameplay.
          </h1>
        </div>

        <div className='md:mt-0 mt-6 md:mr-12'>
        <div className='md:mt-4 md:ml-4 md:mr-4 md:mb-4 rounded-lg border-2 border-black 	'>
          <video className='w-full' width="640" height="480 " autoPlay loop muted>
            <source src="/videos/Victorian-Train-Station.mp4" type="video/mp4" />
          </video>
        </div>
        </div>
      </div>
    </div>
  );
}

export default GameSection;
