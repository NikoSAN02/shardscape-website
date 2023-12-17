"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Image from 'next/image';
import {VscArrowCircleLeft , VscArrowCircleRight  } from "react-icons/vsc"
import MobileInfoModal from "./MobileInfoModal";

const characters = [
  {
    path: "/shiba/XX/untitled.gltf",
    info: "Meet 'Azure Racer,' an enigmatic competitor with midnight hair, piercing azure eyes, and an aura of relentless determination. She's the embodiment of speed and style, dominating the arena with captivating finesse.",
    name: "Azure Racer",
  },
  {
    path: "/shiba/New Folder/untitled.gltf",
    info: "Meet 'Neon Echo,' a competitor who radiates an electrifying presence in the gaming world. With a unique style that captures the essence of a futuristic warrior, Neon Echo's vibrant energy and enigmatic demeanor set her apart, promising an unforgettable experience on the battlefield.",
    name: "Neon Echo",
  },
  {
    path: "/shiba/char22.gltf",
    info: "Enter the shadows with 'Shadowstalker,' an elusive and mysterious competitor who thrives in the dark corners of the arena. With a keen eye for concealment and lightning-quick reflexes, Shadowstalker moves silently, striking fear into the hearts of opponents. Beware the unseen presence, for they are a master of surprise and subterfuge.",
    name: "Shadowstalker",
  },
  {
    path: "/shiba/char2.gltf",
    info: "Enter the shadows with 'Shadowstalker,' an elusive and mysterious competitor who thrives in the dark corners of the arena. With a keen eye for concealment and lightning-quick reflexes, Shadowstalker moves silently, striking fear into the hearts of opponents. Beware the unseen presence, for they are a master of surprise and subterfuge.",
    name: "Shadowstalker",
  },
  // Add more character paths and info as needed
];

function MeshComponent({ characterIndex }) {
  const mesh = useRef();
  const gltf = useLoader(GLTFLoader, characters[characterIndex].path);

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh} scale={[2.5, 2.5, 2.5]} position={[0, -2.5, 0]}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

/* ... (imports) */

export function Shiba() {
  const [currentCharacter, setCurrentCharacter] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('#E5E7EB');
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const characterBackgroundColors = {
    0: '#FFC0CB',
    1: '#87CEEB',
    2: '#7E736F',
    3: '#A6C39C',
  };

  const handlePrevCharacter = () => {
    setCurrentCharacter((prev) => (prev - 1 + characters.length) % characters.length);
    updateBackgroundColor();
  };

  const handleNextCharacter = () => {
    setCurrentCharacter((prev) => (prev + 1) % characters.length);
    updateBackgroundColor();
  };

  const updateBackgroundColor = () => {
    const newBackgroundColor = characterBackgroundColors[currentCharacter] || '#E5E7EB';
    setBackgroundColor(newBackgroundColor);
  };

  const handleMoreInfoClick = () => {
    setShowMoreInfo(true);
  };

  const handleModalClose = () => {
    setShowMoreInfo(false);
  };

   // Add and remove the 'overflow-hidden' class on the body element based on menuOpen state
   useEffect(() => {
    if (showMoreInfo) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Cleanup effect
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [showMoreInfo]);


  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 background-change-container" style={{ backgroundColor }}>
    {/* Left Section (Column 1) */}
    <div className="hidden md:grid p-4 pt-28 font-lemon-milk">
      <h1 className="text-3xl font-lemon-milk-bold">{characters[currentCharacter].name}</h1>
      <p className="text-xl md:pt-3">{characters[currentCharacter].info}</p>
     
    </div>

      {/* Center Section (Column 2) */}
      <div className="flex-1 p-4 relative text-center md:text-left">
        <>
          <div className="md:h-[720px] h-[620px] cursor-pointer">
            <Canvas className="h-3xl w-3xl mx-auto" camera={<PerspectiveCamera makeDefault position={[0, 0, 10]} zoom={1} />}>
              <OrbitControls enableZoom={false} />
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <MeshComponent characterIndex={currentCharacter} />
            </Canvas>
          </div>
          <div className="h-8 gap-4">
            <VscArrowCircleLeft
              size={60}
              className="absolute left-1/2 -translate-x-1/2 text-lg rounded-full p-2 text-white cursor-pointer"
              onClick={handlePrevCharacter}
            />
            <VscArrowCircleRight
              size={60}
              className="absolute left-1/2 translate-x-1/2 text-lg rounded-full p-2 text-white cursor-pointer"
              onClick={handleNextCharacter}
            />
          </div>
        </>
      </div>

       {/* Right Section (Column 3) */}
       <div className="hidden md:flex md:flex-1 p-4 font-lemon-milk-bold text-center md:text-left">
        <h2 className="text-2xl pt-16">Character Info</h2>
        {/* Additional information for larger screens */}
      </div>

      {/* More Info Button for Mobile */}
      <div className="block md:hidden">
        <button className="text-xl bg-blue-500 text-white px-4 py-2 rounded" onClick={handleMoreInfoClick}>
          More Info
        </button>
      </div>

      {/* Mobile Info Modal (or Accordion) */}
      {showMoreInfo && (
        <MobileInfoModal character={characters[currentCharacter]} onClose={handleModalClose} />
      )}
    </div>
  );
}
