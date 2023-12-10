import React from 'react'

function Poweredby() {
  return (
    <main>
        <div className='w-full bg-slate-400 h-8 text-lg font-lemon-milk'>
            <h1 className='header-text'>Powered By: </h1>
        </div>
        <div className="relative flex overflow-x-hidden bg-slate-300 font-lemon-milk">
        <div className="py-4 animate-marquee whitespace-nowrap">
        <span className=" header-text text-4xl mx-10">Epic Games</span>
        <span className=" header-text text-4xl mx-10">Unreal Engine</span>
        <span className=" header-text text-4xl mx-10">Ready Player ME</span>
        <span className=" header-text text-4xl mx-10">Polygon</span>
        <span className=" header-text text-4xl mx-10">Shardeum</span>
        </div>

        <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap bg-slate-300 font-lemon-milk">
        <span className=" header-text text-4xl mx-10">Epic Games</span>
        <span className=" header-text text-4xl mx-10">Unreal Engine</span>
        <span className=" header-text text-4xl mx-10">Ready Player ME</span>
        <span className=" header-text text-4xl mx-10">Polygon</span>
        <span className=" header-text text-4xl mx-10">Shardeum</span>
        </div>
        </div>
    </main>
  )
}

export default Poweredby