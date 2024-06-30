"use client"
// hooks/useCarousel.js
import { useState, useEffect } from 'react';

const useCarousel = (items, interval = 3000) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const id = setInterval(handleNext, interval);
    return () => clearInterval(id);
  }, [interval, items.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return {
    currentIndex,
    goToNext,
    goToPrev,
  };
};

export default useCarousel;
