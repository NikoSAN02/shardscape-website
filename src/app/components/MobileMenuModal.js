import React, { useRef, useEffect } from 'react';

function MobileMenuModal({ isOpen, onClose }) {
  const modalRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      // Add event listener when the component mounts
      document.addEventListener('mousedown', handleOutsideClick);
    }

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className={`fixed inset-0 overflow-y-auto pt-6  ${isOpen ? 'block' : 'hidden'}`} style={{ backdropFilter: isOpen ? 'blur(5px)' : 'none' }}>
      <div ref={modalRef} className="flex items-center justify-center">
        <button className="absolute top-4 right-4 text-3xl cursor-pointer text-red-700 font-extrabold	z-50" onClick={onClose}>&#x2715;</button>
        <div className="bg-white p-6 rounded-md w-full max-w-md">
          <ul className="flex flex-col gap-4 items-center justify-center">
            <li><a href="#" className='font-lemon-milk text-black hover:text-gray-500' onClick={onClose}>Downgrade</a></li>
            <li><a href="#" className='font-lemon-milk text-black hover:text-gray-500' onClick={onClose}>Staking</a></li>
            <li><a href="#" className='font-lemon-milk text-black hover:text-gray-500' onClick={onClose}>Explore</a></li>
            <li><a href="#" className='font-lemon-milk text-black hover:text-gray-500' onClick={onClose}>Clubs</a></li>
            <li><a href="#" className='font-lemon-milk text-black hover:text-gray-500' onClick={onClose}>Events</a></li>
            <li><a href="#" className='font-lemon-milk text-black hover:text-gray-500' onClick={onClose}>Download</a></li>
          </ul>
          <button className='rounded-lg bg-slate-500 px-6 py-2 font-lemon-milk text-white mt-4 w-full' onClick={onClose}>Connect Wallet</button>
        </div>
      </div>
    </div>
  );
}

export default MobileMenuModal;
