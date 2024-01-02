"use client"
import React, { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    window.addEventListener('mousemove', moveCursor);

    // Add hover effect for buttons
    document.querySelectorAll('button').forEach(button => {
      button.addEventListener('mouseover', () => cursor.classList.add('custom-cursor-hover'));
      button.addEventListener('mouseout', () => cursor.classList.remove('custom-cursor-hover'));
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return <div className="custom-cursor"></div>;
};

export default CustomCursor;
