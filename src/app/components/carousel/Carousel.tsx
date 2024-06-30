// components/Carousel.js
"use client";
import { useState } from 'react';

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex + 3 < children.length) {
        return prevIndex + 3;
      } else if (prevIndex + 2 < children.length) {
        return prevIndex + 2;
      } else {
        return prevIndex + 1;
      }
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 < 0 ? 0 : prevIndex - 3));
  };

  return (
    <div className="relative w-full overflow-hidden">
      <button onClick={handlePrev} className="absolute left-0 z-10 p-2 text-2xl">sad</button>
      <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {children}
      </div>
      <button onClick={handleNext} className="absolute right-0 z-10 p-2 text-2xl">dsa</button>
    </div>
  );
};

export default Carousel;
