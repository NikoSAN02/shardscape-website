import React, { useRef, useEffect } from 'react';

const MobileInfoModal = ({ character, onClose }) => {
  const modalRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener('mousedown', handleOutsideClick);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="fixed top-10 left-0 w-full h-full bg-transparent bg-opacity-75 flex items-center justify-center z-50 " style={{ backdropFilter: 'blur(3px)' }}>
      <div ref={modalRef} className="bg-white p-4 rounded-md w-80">
      <button className="absolute top-4 right-4 text-3xl cursor-pointer text-red-700 font-extrabold	z-50" onClick={onClose}>&#x2715;</button>
        <h2 className="text-2xl font-bold mb-4 font-lemon-milk">{character.name}</h2>
        <p className='font-lemon-milk'>{character.info}</p>
        {/* Add any additional information or components as needed */}
      </div>
    </div>
  );
};

export default MobileInfoModal;
