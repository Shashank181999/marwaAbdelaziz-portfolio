'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function GallerySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImage]);

  const galleryImages = [
    {
      id: 1,
      src: '/image1.png',
      alt: 'Marwa Abdelaziz - Professional Portrait',
      caption: 'Leadership in Action',
      category: 'Professional'
    },
    {
      id: 2,
      src: '/image2.png',
      alt: 'Marwa Abdelaziz - Business Event',
      caption: 'Industry Excellence',
      category: 'Events'
    },
    {
      id: 3,
      src: '/image3.png',
      alt: 'Marwa Abdelaziz - Executive Portrait',
      caption: 'Visionary Leader',
      category: 'Professional'
    },
    {
      id: 4,
      src: '/image4.png',
      alt: 'Marwa Abdelaziz - Speaking Engagement',
      caption: 'Inspiring Others',
      category: 'Events'
    },
    {
      id: 5,
      src: '/image5.png',
      alt: 'Marwa Abdelaziz - Corporate Meeting',
      caption: 'Strategic Vision',
      category: 'Professional'
    },
    {
      id: 6,
      src: '/image7.png',
      alt: 'Marwa Abdelaziz - Industry Conference',
      caption: 'Thought Leadership',
      category: 'Events'
    }
  ];

  return (
    <>
<section ref={sectionRef} className="py-12 md:py-28 px-4 md:px-6 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
        
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-900/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-900/5 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          
          {/* Section Header */}
          <div 
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter">
              PHOTO <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-red-700">GALLERY</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-900 to-red-700 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
              Moments of leadership, excellence, and professional achievement
            </p>
          </div>

          {/* Masonry Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-1000 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredImage(image.id)}
                onMouseLeave={() => setHoveredImage(null)}
                onClick={() => setSelectedImage(image)}
              >
                {/* Glowing border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-900 via-red-800 to-red-900 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>
                
                {/* Image container */}
                <div className="relative aspect-square overflow-hidden rounded-3xl border-2 border-zinc-800 group-hover:border-transparent transition-all duration-500">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className={`object-cover transition-all duration-700 ${
                      hoveredImage === image.id ? 'scale-110' : 'scale-100'
                    }`}
                    quality={100}
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-4 py-2 bg-red-900/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider rounded-full">
                      {image.category}
                    </span>
                  </div>

                  {/* Caption - Shows on hover */}
                  <div className={`absolute bottom-0 left-0 right-0 p-6 z-10 transition-all duration-500 ${
                    hoveredImage === image.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}>
                    <h3 className="text-2xl font-black text-white mb-2">
                      {image.caption}
                    </h3>
                    <div className="flex items-center text-red-800 font-bold text-sm">
                      <span>View Full Image</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Zoom icon - Shows on hover */}
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-500 ${
                    hoveredImage === image.id ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  }`}>
                    <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center shadow-2xl">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* Stats below gallery */}
          <div 
            className={`mt-20 grid grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-red-900 mb-2">20+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-red-900 mb-2">AED 10B+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">Portfolio Value</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-red-900 mb-2">100+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">Projects Delivered</div>
            </div>
          </div>

        </div>
      </section>

      {/* Lightbox Modal - Full Screen, No Scroll */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button - Fixed at top */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 flex items-center justify-center rounded-full bg-red-900 hover:bg-red-800 hover:scale-110 transition-all duration-300 z-50"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content Container - Centered */}
          <div 
            className="relative w-full h-full flex flex-col items-center justify-center p-4 md:p-8 animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Container - Takes available height */}
            <div className="relative w-full max-w-6xl flex-1 flex items-center justify-center mb-4">
              <div className="relative w-full h-full max-h-[calc(100vh-200px)] md:max-h-[calc(100vh-180px)]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  quality={100}
                  sizes="100vw"
                  priority
                />
              </div>
            </div>

            {/* Caption - Fixed at bottom */}
            <div className="text-center px-4 pb-4 flex-shrink-0">
              <h3 className="text-xl md:text-3xl font-black text-white mb-2">
                {selectedImage.caption}
              </h3>
              <p className="text-sm md:text-base text-gray-400">
                {selectedImage.alt}
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: scale(0.95);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(30px, -30px); }
          66% { transform: translate(-20px, 20px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(-30px, 30px); }
          66% { transform: translate(20px, -20px); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}