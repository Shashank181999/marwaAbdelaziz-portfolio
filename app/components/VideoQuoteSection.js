'use client';
import { useState, useEffect, useRef } from 'react';

export default function VideoQuoteSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Auto-play video when visible
          if (videoRef.current) {
            videoRef.current.play().catch(err => console.log('Autoplay prevented:', err));
          }
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px',
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-12 md:py-28 px-4 md:px-6 bg-black overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-red-900/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center mb-8 md:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-white mb-3 md:mb-4 tracking-tighter">
            PASSION <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-red-700">& PURPOSE</span>
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-red-900 to-red-700 mx-auto"></div>
        </div>

        {/* Video and Quote Container */}
        <div 
          className={`grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Video Side */}
          <div className="relative group">
            {/* Decorative border glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-900 via-red-800 to-red-900 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-75 blur transition-opacity duration-500"></div>
            
            {/* Video container */}
            <div className="relative aspect-[9/16] md:aspect-video rounded-2xl md:rounded-3xl overflow-hidden border-2 border-zinc-800 group-hover:border-red-900 transition-colors duration-500">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
              >
                <source src="/back.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>

              {/* Play/Pause overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                <button 
                  onClick={() => {
                    if (videoRef.current) {
                      if (videoRef.current.paused) {
                        videoRef.current.play();
                      } else {
                        videoRef.current.pause();
                      }
                    }
                  }}
                  className="w-16 md:w-20 h-16 md:h-20 bg-red-900/90 rounded-full flex items-center justify-center hover:bg-red-800 transition-colors duration-300 backdrop-blur-sm"
                >
                  <svg className="w-8 md:w-10 h-8 md:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Decorative corner accents - Hidden on mobile */}
            <div className="hidden md:block absolute -top-4 -left-4 w-20 h-20 border-l-4 border-t-4 border-red-900/30 rounded-tl-3xl"></div>
            <div className="hidden md:block absolute -bottom-4 -right-4 w-20 h-20 border-r-4 border-b-4 border-red-900/30 rounded-br-3xl"></div>
          </div>

          {/* Quote Side */}
          <div className="relative">
            {/* Quote card */}
            <div className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-black border border-zinc-800 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 relative overflow-hidden group hover:border-red-900 transition-colors duration-500">
              {/* Background decorative element */}
              <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-red-900/5 rounded-full blur-3xl group-hover:bg-red-900/10 transition-colors duration-500"></div>

              {/* Quote mark */}
              <div className="relative mb-4 md:mb-8">
                <svg className="w-10 md:w-16 h-10 md:h-16 text-red-900 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
              </div>

              {/* Quote text */}
              <div className="relative space-y-4 md:space-y-6">
                <blockquote className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white leading-tight tracking-tight">
                  Master every hour of{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-red-700">
                    your life
                  </span>
                </blockquote>

                {/* Divider */}
                <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-red-900 to-red-700"></div>

                {/* Attribution */}
                <div className="space-y-1 md:space-y-2">
                  <p className="text-lg md:text-xl lg:text-2xl font-bold text-white">
                    Marwa Abdelaziz
                  </p>
                  <p className="text-sm md:text-base text-gray-400 font-medium">
                    Chairman, MA VISION Developments
                  </p>
                </div>

                {/* Additional decorative quote mark (closing) - Hidden on mobile */}
                <div className="hidden md:block absolute -bottom-4 -right-4 opacity-10">
                  <svg className="w-20 md:w-24 h-20 md:h-24 text-red-900 transform rotate-180" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Floating accent elements - Hidden on mobile */}
            <div className="hidden md:block absolute -top-8 -right-8 w-32 h-32 bg-red-900/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="hidden md:block absolute -bottom-8 -left-8 w-32 h-32 bg-red-900/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Bottom caption */}
        <div 
          className={`mt-8 md:mt-12 text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-gray-500 italic text-xs md:text-sm lg:text-base px-4">
            &quot;Leadership is not just about building portfolios—it&apos;s about building futures, 
            one strategic decision at a time.&quot;
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.1); }
        }
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}