'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HomeBanner() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  // Detect mobile on initial render (before mount)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Preload both images
  useEffect(() => {
    const preloadImages = async () => {
      const mobileImg = new window.Image();
      const desktopImg = new window.Image();
      
      mobileImg.src = '/mobile1.png';
      desktopImg.src = '/home.png';

      await Promise.all([
        new Promise((resolve) => {
          mobileImg.onload = resolve;
          mobileImg.onerror = resolve; // Resolve even on error to prevent hanging
        }),
        new Promise((resolve) => {
          desktopImg.onload = resolve;
          desktopImg.onerror = resolve;
        })
      ]);

      setImagesPreloaded(true);
      // Small delay to ensure smooth transition
      setTimeout(() => setIsLoaded(true), 100);
    };

    preloadImages();
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <div
        className={`fixed inset-0 bg-black z-50 transition-opacity duration-500 ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600 mb-4"></div>
            <p className="text-white text-sm font-light">Loading...</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section
        className={`relative pt-0 md:pt-28 px-0 md:px-6 min-h-screen flex items-end md:items-center overflow-hidden transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Background Image - Different for Mobile */}
        <div className="absolute inset-0 z-0">
          {imagesPreloaded && (
            <Image
              src={isMobile ? "/mobile1.png" : "/home.png"}
              alt="Marwa Abdelaziz - Founder of PDC Groups"
              fill
              className="object-cover object-center"
              priority
              quality={100}
              loading="eager"
            />
          )}
        </div>

        {/* Content on top of background */}
        <div className="container mx-auto relative z-10 w-full">
          <div className="max-w-6xl mx-auto w-full">
            {/* Text Content with Animations */}
            <div className="text-left md:text-left max-w-full md:max-w-3xl animate-fade-in-up px-6 md:px-0 pb-12 md:pb-0 md:py-0">
              
              {/* Heading - smaller and moved down on mobile */}
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-2 sm:mb-4 md:mb-6 leading-tight md:leading-none tracking-tight mt-10 md:mt-0">
                MARWA
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 md:from-red-900 md:to-red-700">
                  ABDELAZIZ
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-3xl text-white md:text-red-800 font-semibold md:font-bold mb-4 md:mb-4">
                Founder of PDC Groups
              </p>
              
              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-white md:text-gray-300 font-normal md:font-light mb-3 leading-relaxed">
                Empowering businesses through strategic leadership and innovative solutions.
              </p>
              
              <p className="text-base sm:text-lg md:text-xl text-white md:text-gray-300 font-normal md:font-light mb-8 md:mb-8 leading-relaxed">
                Building digital excellence and transforming visions into reality.
              </p>
              
              {/* ✅ FIXED: Buttons with correct pages */}
              <div className="flex flex-row gap-3 md:flex-row md:gap-4 justify-start">
                <Link 
                  href="/contact"
                  className="flex-1 md:flex-none md:w-auto px-8 md:px-8 py-4 md:py-4 bg-red-900 text-white font-bold text-sm md:text-sm tracking-wider uppercase hover:bg-red-800 transition-all duration-300 hover:shadow-lg hover:shadow-red-900/50 active:scale-95 rounded-md text-center"
                >
                  GET IN TOUCH
                </Link>
                <Link 
                  href="/about"
                  className="flex-1 md:flex-none md:w-auto px-8 md:px-8 py-4 md:py-4 border-2 border-white md:border-red-900 text-white md:text-red-900 bg-transparent md:bg-transparent font-bold text-sm md:text-sm tracking-wider uppercase hover:bg-red-900 hover:text-white hover:border-red-900 transition-all duration-300 active:scale-95 rounded-md text-center"
                >
                  LEARN MORE
                </Link>
              </div>

              {/* Scroll Indicator - Mobile Only */}
              <div className="flex md:hidden justify-center mt-8 animate-bounce">
                <div className="flex flex-col items-center text-white">
                  <span className="text-sm font-light mb-1">Scroll ↓</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Simple fade-in animation */}
        <style jsx>{`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }
        `}</style>
      </section>
    </>
  );
}