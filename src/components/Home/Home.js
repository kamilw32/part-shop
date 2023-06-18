import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import '../Home/Home.css'
import Image1 from '../../images/1P.jpeg';
import Image2 from '../../images/2P.jpeg';
import Image3 from '../../images/4P.jpeg';
import Image4 from '../../images/5P.jpeg';
import Image5 from '../../images/6P.jpeg';
import Image6 from '../../images/7P.jpeg';
import Image7 from '../../images/8P.jpeg';

const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];
const SLIDE_DURATION = 5000; // duration of each slide in milliseconds

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    // start the automatic slideshow
    const interval = setInterval(() => {
      if (autoPlay) {
        setIndex((index + 1) % images.length);
      }
    }, SLIDE_DURATION);

    // stop the slideshow when the component unmounts
    return () => clearInterval(interval);
  }, [autoPlay, index]);

  const handleNext = () => {
    setAutoPlay(false); // stop the automatic slideshow when the user interacts with the carousel
    setIndex((index + 1) % images.length);
  };

  const handlePrev = () => {
    setAutoPlay(false);
    setIndex((index - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div className="relative overflow-hidden hero-content">
        {/* image container */}
        <div className="absolute inset-0 z-0">
          {images.map((image, i) => (
            <img
              key={i}
              src={image}
              alt=""
              loading='lazy'
              className={`absolute inset-0 w-full h-full object-contain object-center transition-opacity duration-500 ${i === index ? 'opacity-100' : 'opacity-0'
                }`}
            />
          ))}
        </div>

        {/* overlay */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">A dzien dobry</h1>
          <p className="text-lg md:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button
            className="bg-white text-black font-bold px-6 py-3 mt-6 rounded-lg hover:bg-gray-200"
            onClick={() =>{
               console.log('Shop Now')
               return window.location.href = '/nasza-oferta' 
               }}
          >
            Shop Now
          </button>
        </div>

        {/* controls */}
        <button
          className="absolute inset-y-1/2 left-0 z-20 transform -translate-y-1/2 bg-black text-white rounded-full w-10 h-10 flex justify-center items-center hover:bg-gray-700"
          onClick={handlePrev}
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button
          className="absolute inset-y-1/2 right-0 z-20 transform -translate-y-1/2 bg-black text-white rounded-full w-10 h-10 flex justify-center items-center hover:bg-gray-700"
          onClick={handleNext}
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>

      </div>

      <div className="home h-1/2">

        <div className="flex flex-col md:flex-row">
          {/* Hero section */}
          <div className="md:w-1/2 bg-black">
            <div className='text-4xl font-bold text-white p-5 translate-y-5'><span className='our-products p-1'>Our Products</span></div>
            <div className="w-full flex items-center justify-center">
              <div className="w-1/2 md:w-3/4 h-4/5 md:h-1/4">
              </div>
            </div>
          </div>
          {/* Gallery section */}
          <div className="w-full md:w-1/2 py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-8">Featured Items</h2>
              Gallery
            </div>
          </div>
        </div>
        {/* Shop now section */}
        <div className='divider'></div>
        <div className='grayborder'>
          <div className="pt-32 pb-16">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-white mb-8">Ready to Shop?</h2>
              <p className="text-white text-lg mb-8">
                We offer a wide variety of high-quality products at affordable prices.
              </p>
              <p className="text-white text-lg mb-8">
                We offer a wide variety of high-quality products at affordable prices.
              </p>
              <button className="bg-white text-gray-800 font-bold py-3 px-6 hover:bg-gray-200"
              onClick={()=> window.location.href = '/nasza-oferta'}
              >
                Shop Now
              </button>
            </div>
          </div>

          {/* Reviews section */}
          <div className="py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-8">What Our Customers Say</h2>
              <div className='p-32'>Reviews</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroCarousel;
