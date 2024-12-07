"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
];

const images = [
  '/2023-10-oludeniz1700-sunsetheart-compressed.webp',
  '/image2.jpg',
  '/image3.png',
  // Add more image URLs here
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadingOut(true); // Trigger fade-out

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFadingOut(false); // Trigger fade-in (by removing fade-out class)
      }, 1000); // Adjust timing to match your CSS transition duration

    }, 5000); // Change 5000 to your desired interval in milliseconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      className={`flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gray-900 bg-center bg-cover 
                 transition-opacity duration-1000 ${fadingOut ? 'opacity-0' : 'opacity-100'}`} 
    >
      {/* ... rest of your code ... */}
    </div>
  );
}