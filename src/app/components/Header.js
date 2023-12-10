// Header.js
"use client";
import React, { useState, useEffect } from 'react';
import MobileMenuModal from './MobileMenuModal';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle toggling the mobile menu
  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to handle closing the mobile menu
  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  // Add and remove the 'overflow-hidden' class on the body element based on menuOpen state
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Cleanup effect
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [menuOpen]);

  return (
    <main>
      <nav className='flex justify-between items-center w-[92%] mx-auto relative'>
        {/* Logo */}
        <div className='flex-shrink-0'>
          <img className="w-16 cursor-pointer" src="/images/logo.png" alt="..." />
        </div>
        {/* Mobile Menu Button */}
        {menuOpen ? null : (
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-3xl cursor-pointer font-extrabold z-50">&#9776;</button>
          </div>
        )}
        {/* Mobile Menu Modal */}
        <MobileMenuModal isOpen={menuOpen} onClose={closeMobileMenu} />
        {/* Connect Wallet Button for Larger Screens */}
        <div className={`hidden md:flex items-center gap-6 ${menuOpen ? 'hidden' : 'flex'}`}>
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li><a href="#" className='font-lemon-milk text-white hover:text-gray-500'>Downgrade</a></li>
            <li><a href="#" className='font-lemon-milk text-white hover:text-gray-500'>Staking</a></li>
            <li><a href="#" className='font-lemon-milk text-white hover:text-gray-500'>Explore</a></li>
            <li><a href="#" className='font-lemon-milk text-white hover:text-gray-500'>Clubs</a></li>
            <li><a href="#" className='font-lemon-milk text-white hover:text-gray-500'>Events</a></li>
            <li><a href="#" className='font-lemon-milk text-white hover:text-gray-500'>Download</a></li>
          </ul>
          <button className='rounded-lg bg-slate-500 px-6 py-2 font-lemon-milk text-white'>Connect Wallet</button>
        </div>
      </nav>
    </main>
  );
}

export default Header;
