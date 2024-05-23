"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Button, Card, CardBody } from '@nextui-org/react';

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

  const nextSlide = () => {
    if (slideRef.current) {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }
  };

  const prevSlide = () => {
    if (slideRef.current) {
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    }
  };

  useEffect(() => {
    // const slideInterval = setInterval(nextSlide, 5000);
    // return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-[632px]" ref={slideRef} style={{ backgroundColor: "#1F1F1F" }}>
      <Button auto light onClick={prevSlide} className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2">
        Prev
      </Button>
      <Button auto light onClick={nextSlide} className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2">
        Next
      </Button>
      <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.concat(slides).map((slide, index) => (
          <Card
          light
          radius='none'
            key={index}
            className="w-full flex-shrink-0 "
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
