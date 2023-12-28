import React from 'react'
import { Shiba } from "./Shiba";
import Poweredby from './Poweredby';
import GameSection from './GameSection';
import GameInfo from './GameInfo';
import Image from 'next/image';
import Header from "./Header";


function Homepage() {
   
  return (
    <main>
       <div className="bg-slate-300 w-full h-20">
        <Header />
        </div>
        <div className='h-auto ' >
            <GameSection/>
        </div>
        <div className='h-auto'>
           <Shiba />
        </div>
        <div className='h-[780px]  pt-12' >
            <GameInfo/>
        </div>
        <div className='pt-2 '>
             <Poweredby />
        </div>
        <div className='content-center w-full'>
            <video width="480" height="480" autoPlay loop controls>
                <source src="/videos/team.mp4" type="video/mp4" />
            </video>
        </div>
       
    </main>
  )
}

export default Homepage