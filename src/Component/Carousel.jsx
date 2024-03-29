import React, { useState } from 'react';
import img from '../assets/image-folder/Kombi_Hero.png';
import img1 from '../assets/image-folder/engineering.png';
import img2 from '../assets/image-folder/projects.png';
import img3 from '../assets/image-folder/meeting-notes.png';

const Carousel = () => {
  const images = [img, img1, img2, img3];
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <>
      <div id="default-carousel" className="relative w-10/12 mx-auto" data-carousel="slide">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {images.map((image, index) => (
            <div key={index} className={`duration-700 ease-in-out ${index === currentSlide ? '' : 'hidden'}`} data-carousel-item>
              <img src={image} alt={`Slide ${index + 1}`} className="absolute block w-full  h-full object-cover flex mx-auto" />
            </div>
          ))}
        </div>
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-black' : 'bg-white'}`}
              aria-current={index === currentSlide}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
            ></button>
          ))}
        </div>
        <button type="button" onClick={handlePrevSlide} className="absolute top-0 start-0 z-30 flex items-center justify-center  px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-white-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" onClick={handleNextSlide} className="absolute top-0 end-0 z-30 flex items-center justify-center  px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full  bg-white dark:bg-white-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
            </svg>
            <span class="sr-only">Next</span>
          </span>

        </button>
      </div>
      <div className="text-center mt-32">
        <h1 className='text-4xl font-bold '> Millions run on Notion every day</h1>
        <p className=' font-normal text-lg font-semibold'>Powering the world’s best teams, from next-generation startups to established enterprises.</p>
            <div className=' mt-4'>
              <a href="#" className=' text-blue-600 hover:underline font-medium text-lg mt-10'>Read customer stories <span className='text-2xl'>→</span></a>

            </div>
      </div>
    </>
  );
};

export default Carousel;
