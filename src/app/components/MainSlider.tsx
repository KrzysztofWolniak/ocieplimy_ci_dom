"use client"
import React, { useState, useRef } from 'react';
import { Card, CardBody } from '@nextui-org/react';

const slides = [
  {
    title: "Profesjonalne podejście",
    subtitle: "Kompleksowe usługi",
    description: "OcieplimyCiDom oferuje kompleksowe usługi związane z ocieplaniem domów, zapewniając profesjonalne podejście i wysoką jakość wykonania.",
    background: "https://static.cyberfolks.pl/img/cpx/construction%20company-50662-hi_res.webp"
  },
  {
    title: "Metoda nadmuchowa",
    subtitle: "Efektywne izolacje",
    description: "Nasza firma specjalizuje się w efektywnych izolacjach domów, wykorzystując nowoczesną metodę nadmuchową, zapewniającą doskonałą ochronę przed stratami ciepła.",
    background: "https://static.cyberfolks.pl/img/cpx/construction%20company-12255-hi_res.webp"
  },
  {
    title: "Ekologiczne rozwiązania",
    subtitle: "Innowacyjne ocieplanie",
    description: "OcieplimyCiDom oferuje innowacyjne metody ocieplania domów, wykorzystując ekologiczne materiały takie jak rockwool.",
    background: "https://static.cyberfolks.pl/img/cpx/construction%20company-8482646-hi_res.webp"
  }
];

const MainSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const totalSlides = slides.length;
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    } else if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
    }
  };

  return (
    <div
      className="relative overflow-hidden w-full h-[632px] group"
      ref={slideRef}
      style={{ backgroundColor: "#1F1F1F" }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div>
      <div
        onClick={prevSlide}
        className="opacity-0 hover:!opacity-[1]   xl:group-hover:opacity-50 absolute   top-1/2 left-4 z-10 transform -translate-y-1/2 cursor-pointer transition-all duration-300 ease-in-out"
        style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
          borderRadius: '50%', 
          padding: '20px',
          transition: 'opacity 0.3s, transform 0.3s'
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </div>
      </div>
      
      <div
        onClick={nextSlide}
        className="opacity-0 hover:!opacity-[1]   xl:group-hover:opacity-50 absolute  hover:opacity-[1] top-1/2 right-4 z-10 transform -translate-y-1/2 cursor-pointer transition-all duration-300 ease-in-out"
        style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
          borderRadius: '50%', 
          padding: '20px',
          transition: 'opacity 0.3s, transform 0.3s'
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </div>
      <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <Card
            key={index}
            className="w-full flex-shrink-0"
            style={{
              backgroundImage: `url(${slide.background})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '632px'
            }}
          >
            <CardBody className="flex flex-col items-center justify-center bg-black bg-opacity-40 h-full text-center text-white">
              <h1 className="text-3xl font-bold">{slide.title}</h1>
              <h2 className="text-xl font-semibold">{slide.subtitle}</h2>
              <p className="text-md">{slide.description}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MainSlider;
