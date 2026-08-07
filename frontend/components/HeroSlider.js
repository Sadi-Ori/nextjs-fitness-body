import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: "YOU ONLY FAIL, WHEN YOU STOP TRYING",
    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    image: "https://i.ibb.co.com/WNvcq0ZL/FIT0001.jpg",
    button: "TAKE A TOUR NOW",
  },
  {
    title: "Shape Your Perfect Body",
    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    image: "https://i.ibb.co.com/XZW4v7k5/De-Watermark-ai-1746478147533.png",
    button: "JOIN US TODAY",
  },
  {
    title: "Increase Your Muscle Power",
    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.!",
    image: "https://i.ibb.co.com/hRw3wqrK/SLo973.jpg",
    button: "START NOW",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[90vh] text-white overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-start px-6 md:px-20">
            <h1 className="text-4xl md:text-6xl lg:text-8xl leading-none max-w-2xl bebas-neue uppercase tracking-wider mb-4 drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-base md:text-xl max-w-md text-gray-200 mb-8 font-light leading-relaxed">
              {slide.description}
            </p>
            <a
              href="#services"
              className="bg-red-600 hover:bg-red-700 transition px-8 py-3.5 font-bold rounded-md uppercase tracking-wider text-lg shadow-lg"
            >
              {slide.button}
            </a>
          </div>
        </div>
      ))}

      {/* Slide Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/40 hover:bg-red-600 text-white rounded-full transition-colors"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/40 hover:bg-red-600 text-white rounded-full transition-colors"
        aria-label="Next Slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === current ? 'bg-red-600 w-8' : 'bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
