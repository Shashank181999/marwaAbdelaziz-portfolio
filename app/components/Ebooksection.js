'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function EbookSection() {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-12 md:py-28 px-4 md:px-6 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-red-900/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-red-900/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 to-red-700/30 rounded-2xl md:rounded-3xl blur-2xl md:blur-3xl group-hover:blur-xl md:group-hover:blur-2xl transition-all duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 border border-zinc-800 group-hover:border-red-900 transition-all duration-500 group-hover:scale-[1.02]">
                <div className="hidden md:block absolute -top-4 -left-4 w-20 h-20 border-l-4 border-t-4 border-red-900/50 rounded-tl-3xl"></div>
                <div className="hidden md:block absolute -bottom-4 -right-4 w-20 h-20 border-r-4 border-b-4 border-red-900/50 rounded-br-3xl"></div>
                
                <div className="relative aspect-[210/297] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-red-900/50 transition-shadow duration-500">
                  <Image
                    src="/ebook-cover.jpg"
                    alt="70 Ways to Live Your Dream Life by Marwa Abdelaziz"
                    fill
                    className="object-cover"
                    quality={100}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                <div className="absolute -top-4 md:-top-6 -right-4 md:-right-6 px-4 md:px-6 py-2 md:py-3 bg-red-900 text-white font-black text-xs md:text-sm uppercase tracking-wider rounded-full shadow-xl animate-bounce-slow">
                  Read Now
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="inline-block mb-4 md:mb-6">
              <span className="px-4 md:px-6 py-2 md:py-3 bg-red-900/20 border border-red-900 text-red-800 font-bold text-xs md:text-sm uppercase tracking-wider rounded-full">
                Exclusive eBook
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-white mb-4 md:mb-6 tracking-tighter leading-tight">
              70 Ways to Live Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-red-700">Dream Life</span>
            </h2>

            <p className="text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed mb-6 md:mb-8">
              Discover 70 transformative strategies to achieve your dreams and live your best life. 
              Drawing from over 20 years of experience in leadership, real estate development, and personal growth, 
              this eBook provides practical wisdom to help you unlock your full potential.
            </p>

            <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
              {['Proven strategies for personal and professional success', 'Real-world insights from decades of leadership experience', 'Actionable steps you can implement immediately', 'Inspiration to transform your mindset and approach'].map((feature, index) => (
                <div key={index} className={`flex items-start gap-3 md:gap-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`} style={{ transitionDelay: `${400 + index * 100}ms` }}>
                  <div className="flex-shrink-0 w-5 md:w-6 h-5 md:h-6 bg-red-900 rounded-full flex items-center justify-center mt-0.5 md:mt-1">
                    <svg className="w-3 md:w-4 h-3 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-sm md:text-base lg:text-lg font-medium">{feature}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a href="https://e-bookdemo.web.app" target="_blank" rel="noopener noreferrer" className="group relative px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-red-900 to-red-700 text-white font-bold text-base md:text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-900/50 flex items-center justify-center gap-2 md:gap-3">
                <span className="relative z-10">Read eBook Online</span>
                <svg className="w-4 md:w-5 h-4 md:h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </a>
            </div>

            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-zinc-800 grid grid-cols-3 gap-4 md:gap-6">
              <div>
                <div className="text-2xl md:text-3xl font-black text-red-900 mb-1">70</div>
                <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wide">Ways</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-black text-red-900 mb-1">20+</div>
                <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wide">Years Exp</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-black text-red-900 mb-1">Online</div>
                <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wide">Reading</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-30px, 30px) scale(1.05); }
          66% { transform: translate(20px, -20px) scale(0.95); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 25s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 30s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}