'use client';

import { useState, useEffect, useRef } from 'react';

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      title: 'CEO, Real Estate Group',
      company: 'Global Properties',
      image: null,
      rating: 5,
      text: 'Working with Marwa has been transformative for our business. Her expertise in real estate development and strategic vision helped us achieve unprecedented growth. A true leader in the industry.',
      linkedin: 'https://www.linkedin.com/in/marwaabdelazizofficial/?originalSubdomain=ae',
      date: '2024'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      title: 'Managing Director',
      company: 'Investment Holdings',
      image: null,
      rating: 5,
      text: 'Marwa\'s insights into property development and project management are exceptional. Her ability to navigate complex projects and deliver results is unmatched. Highly recommended for any major development initiative.',
      linkedin: 'https://www.linkedin.com/in/marwaabdelazizofficial/?originalSubdomain=ae',
      date: '2024'
    },
    {
      id: 3,
      name: 'Ahmed Al-Mansouri',
      title: 'Investment Director',
      company: 'UAE Development Fund',
      image: null,
      rating: 5,
      text: 'An outstanding professional with deep knowledge of the UAE real estate market. Marwa\'s leadership at MA VISION Developments has set new standards for excellence in the industry.',
      linkedin: 'https://www.linkedin.com/in/marwaabdelazizofficial/?originalSubdomain=ae',
      date: '2023'
    },
    {
      id: 4,
      name: 'Michael Chen',
      title: 'Partner',
      company: 'International Ventures',
      image: null,
      rating: 5,
      text: 'Marwa brings unparalleled expertise and professionalism to every project. Her strategic approach to real estate development and proven track record make her an invaluable partner.',
      linkedin: 'https://www.linkedin.com/in/marwaabdelazizofficial/?originalSubdomain=ae',
      date: '2023'
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef} className="relative py-12 md:py-28 px-4 md:px-6 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-red-900/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-red-900/5 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className={`text-center mb-12 md:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-white mb-3 md:mb-4 tracking-tighter">
            CLIENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-red-700">TESTIMONIALS</span>
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-red-900 to-red-700 mx-auto mb-4 md:mb-6"></div>
          <p className="text-sm md:text-lg lg:text-xl text-gray-400 font-light max-w-2xl mx-auto px-4">
            What industry leaders say about working with Marwa Abdelaziz
          </p>
        </div>

        <div className={`relative max-w-5xl mx-auto mb-12 md:mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute -inset-4 md:-inset-8 bg-gradient-to-r from-red-900/10 to-red-700/10 rounded-2xl md:rounded-3xl blur-2xl md:blur-3xl"></div>
          
          <div className="relative bg-gradient-to-br from-zinc-900 to-black border-2 border-zinc-800 rounded-2xl md:rounded-3xl p-6 md:p-12 lg:p-16">
            <div className="absolute -top-6 md:-top-8 left-6 md:left-12">
              <div className="w-12 md:w-16 h-12 md:h-16 bg-red-900 rounded-xl md:rounded-2xl flex items-center justify-center shadow-2xl">
                <svg className="w-6 md:w-8 h-6 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
              </div>
            </div>

            <div className="absolute -top-4 md:-top-6 right-6 md:right-12">
              <a href={testimonials[activeSlide].linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-[#0077B5] text-white text-xs md:text-sm font-semibold rounded-full hover:bg-[#006399] transition-colors duration-300">
                <svg className="w-3 md:w-4 h-3 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>

            <div className="flex items-center gap-0.5 md:gap-1 mb-4 md:mb-6 mt-8 md:mt-0">
              {[...Array(testimonials[activeSlide].rating)].map((_, i) => (
                <svg key={i} className="w-4 md:w-6 h-4 md:h-6 text-red-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>

            <p className="text-base md:text-2xl lg:text-3xl text-gray-300 leading-relaxed mb-6 md:mb-8 font-light italic">
              "{testimonials[activeSlide].text}"
            </p>

            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-red-900 to-red-700 rounded-full flex items-center justify-center text-white text-lg md:text-2xl font-black flex-shrink-0">
                {testimonials[activeSlide].name.charAt(0)}
              </div>
              <div>
                <h4 className="text-base md:text-xl font-black text-white mb-0.5 md:mb-1">
                  {testimonials[activeSlide].name}
                </h4>
                <p className="text-sm md:text-base text-red-800 font-semibold">
                  {testimonials[activeSlide].title}
                </p>
                <p className="text-gray-500 text-xs md:text-sm">
                  {testimonials[activeSlide].company} • {testimonials[activeSlide].date}
                </p>
              </div>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:left-0 -right-4 md:right-0 flex justify-between px-0 md:px-4 pointer-events-none">
              <button onClick={prevSlide} className="w-10 md:w-12 h-10 md:h-12 bg-red-900 hover:bg-red-800 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl pointer-events-auto">
                <svg className="w-5 md:w-6 h-5 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button onClick={nextSlide} className="w-10 md:w-12 h-10 md:h-12 bg-red-900 hover:bg-red-800 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl pointer-events-auto">
                <svg className="w-5 md:w-6 h-5 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 md:gap-3 mt-6 md:mt-8">
            {testimonials.map((_, index) => (
              <button key={index} onClick={() => setActiveSlide(index)} className={`transition-all duration-300 rounded-full ${index === activeSlide ? 'w-8 md:w-12 h-2 md:h-3 bg-red-900' : 'w-2 md:w-3 h-2 md:h-3 bg-zinc-700 hover:bg-zinc-600'}`} />
            ))}
          </div>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="group relative bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-xl md:rounded-2xl p-5 md:p-6 hover:border-red-900 transition-all duration-300 cursor-pointer" onClick={() => setActiveSlide(index)}>
              <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-br from-red-900 to-red-700 rounded-full flex items-center justify-center text-white text-base md:text-lg font-black mb-3 md:mb-4">
                {testimonial.name.charAt(0)}
              </div>
              <h4 className="text-base md:text-lg font-bold text-white mb-1 group-hover:text-red-800 transition-colors duration-300">
                {testimonial.name}
              </h4>
              <p className="text-xs md:text-sm text-gray-400 mb-2">{testimonial.title}</p>
              <div className="flex items-center gap-0.5 mb-2 md:mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-3 md:w-4 h-3 md:h-4 text-red-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="text-xs md:text-sm text-gray-500 line-clamp-3">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <a href="https://www.linkedin.com/in/marwaabdelazizofficial/?originalSubdomain=ae" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 md:gap-3 px-8 md:px-10 py-4 md:py-5 bg-[#0077B5] hover:bg-[#006399] text-white font-bold text-base md:text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#0077B5]/50">
            <svg className="w-5 md:w-6 h-5 md:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span className="hidden sm:inline">View Full LinkedIn Profile</span>
            <span className="sm:hidden">LinkedIn Profile</span>
          </a>
        </div>
      </div>

      <style jsx>{`
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
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}