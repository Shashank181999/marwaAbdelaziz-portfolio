'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
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
    <section ref={sectionRef} className="py-12 md:py-28 px-4 md:px-6 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Text Content - Left Side */}
          <div 
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-20'
            }`}
          >
            {/* Title */}
            <div 
              className={`transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-2">
                MARWA
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-red-700">
                  ABDELAZIZ
                </span>
              </h2>
            </div>

            {/* Subtitle */}
            <div 
              className={`transition-all duration-1000 delay-300 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-red-800 relative inline-block">
                Chairman of MA VISION Developments
                <div className="absolute -bottom-2 left-0 w-20 h-1 bg-red-900"></div>
              </h3>
            </div>

            {/* Paragraph */}
            <div 
              className={`transition-all duration-1000 delay-500 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <p className="text-lg text-gray-300 leading-relaxed font-light">
                As Chairman of MA VISION Developments, I bring over two decades of experience in leading 
                large-scale real estate initiatives across the UAE, driving a portfolio worth more than 
                AED 10 billion. My work integrates strategic foresight with operational excellence — 
                overseeing all phases of development, from land acquisition and design to financial 
                management and execution.
              </p>
            </div>

            <div 
              className={`transition-all duration-1000 delay-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <p className="text-lg text-gray-300 leading-relaxed font-light">
                I believe in creating long-term value through sustainable and innovative urban solutions 
                that redefine quality living. By fostering collaboration and data-led decision-making, 
                I aim to ensure every project contributes meaningfully to the nation&apos;s evolving 
                architectural and economic vision.
              </p>
            </div>

            {/* Optional CTA */}
            <div 
              className={`pt-4 transition-all duration-1000 delay-900 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <button className="px-8 py-4 bg-red-900 text-white font-bold text-sm tracking-wider uppercase hover:bg-red-800 transition-all duration-300 hover:shadow-lg hover:shadow-red-900/50">
                Learn More
              </button>
            </div>
          </div>

          {/* Image - Right Side */}
          <div 
            className={`relative transition-all duration-1000 delay-400 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-20'
            }`}
          >
            {/* Decorative background elements */}
            <div className="absolute -inset-8 bg-gradient-to-br from-red-900/20 via-transparent to-transparent rounded-3xl blur-3xl"></div>

            {/* Main image container */}
            <div className="relative z-10">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/image3.png"
                  alt="Marwa Abdelaziz - Chairman of MA VISION Developments"
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  quality={100}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-red-900/30 rounded-2xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-red-900/30 rounded-2xl"></div>
            </div>

            {/* Floating accent element */}
            <div 
              className={`absolute top-1/2 -right-12 w-24 h-24 bg-red-900/10 rounded-full blur-2xl transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}
              style={{ transitionDelay: '1000ms' }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}