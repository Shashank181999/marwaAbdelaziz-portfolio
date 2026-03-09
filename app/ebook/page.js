'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function EbookPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);
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

  const features = [
    {
      icon: '📚',
      title: '70 Proven Strategies',
      description: 'Comprehensive guide with 70 actionable ways to transform your life and achieve your dreams'
    },
    {
      icon: '💡',
      title: '20+ Years of Wisdom',
      description: 'Real-world insights from decades of leadership in real estate and business development'
    },
    {
      icon: '🎯',
      title: 'Actionable Steps',
      description: 'Practical advice you can implement immediately to see real results in your personal and professional life'
    },
    {
      icon: '🌟',
      title: 'Transformative Mindset',
      description: 'Learn to think like a leader and unlock your full potential through proven frameworks'
    }
  ];

  const chapters = [
    {
      number: '01',
      title: 'Foundation of Success',
      subtitle: 'Building the Right Mindset',
      description: 'Discover the fundamental principles that form the bedrock of a successful life journey.',
      ways: ['1-10'],
      ebookId: 'KjuRSdrOCyUn8LSz03eD'
    },
    {
      number: '02',
      title: 'Strategic Planning',
      subtitle: 'Vision & Goal Setting',
      description: 'Learn how to create powerful visions and set achievable goals that drive real results.',
      ways: ['11-20'],
      ebookId: 'nQmVVrNLPLxH1FG6Hr2e'
    },
    {
      number: '03',
      title: 'Personal Growth',
      subtitle: 'Continuous Development',
      description: 'Master the art of self-improvement and continuous learning for lasting success.',
      ways: ['21-30'],
      ebookId: 'EMwnd5hQTXs7AaBXjXAd'
    },
    {
      number: '04',
      title: 'Leadership Excellence',
      subtitle: 'Inspiring & Influencing',
      description: 'Develop leadership skills that inspire others and create lasting positive impact.',
      ways: ['31-40'],
      ebookId: '14GIC2FIcepKfeOv3GMP'
    },
    {
      number: '05',
      title: 'Financial Wisdom',
      subtitle: 'Wealth & Management',
      description: 'Build financial intelligence and learn strategies for sustainable wealth creation.',
      ways: ['41-50'],
      ebookId: 'fjrVQv9UfE8T2MaSIbAr'
    },
    {
      number: '06',
      title: 'Relationships & Network',
      subtitle: 'Building Connections',
      description: 'Create meaningful relationships and build a powerful network that supports your goals.',
      ways: ['51-60'],
      ebookId: 'BS7rkzT0FXX8J2d6Ywd0'
    },
    {
      number: '07',
      title: 'Legacy & Impact',
      subtitle: 'Making a Difference',
      description: 'Learn how to create lasting impact and build a legacy that inspires future generations.',
      ways: ['61-70'],
      ebookId: 'LZeb79jW1PXOGotACc3J'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Al-Mahmoud',
      role: 'Entrepreneur, Dubai',
      comment: 'This book completely transformed my approach to business and life. The 70 strategies are practical, powerful, and truly life-changing.',
      rating: 5
    },
    {
      name: 'Ahmed Hassan',
      role: 'Real Estate Developer',
      comment: 'Marwa\'s insights from 20+ years of experience shine through every page. A must-read for anyone serious about success.',
      rating: 5
    },
    {
      name: 'Fatima Al-Zahra',
      role: 'Business Executive',
      comment: 'The perfect blend of inspiration and practical advice. I\'ve already implemented several strategies with amazing results!',
      rating: 5
    }
  ];

  const stats = [
    { value: '70', label: 'Life-Changing Ways' },
    { value: '50K+', label: 'Readers Worldwide' },
    { value: '4.9★', label: 'Average Rating' },
    { value: '100+', label: 'Pages of Wisdom' }
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Left: Book Cover */}
            <div className="relative order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-r from-red-900/30 to-red-700/30 rounded-3xl blur-3xl"></div>
                <div className="relative">
                  {/* Decorative Frame */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 border-l-4 border-t-4 border-red-900 rounded-tl-3xl"></div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-4 border-b-4 border-red-900 rounded-br-3xl"></div>
                  
                  {/* Book Cover */}
                  <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border-2 border-red-900/50 shadow-2xl">
                    <Image
                      src="/ebook-cover.jpg"
                      alt="70 Ways to Live Your Dream Life"
                      fill
                      className="object-cover"
                      quality={100}
                      priority
                    />
                  </div>

                  {/* Badge */}
                  <div className="absolute -top-6 -right-6 px-6 py-3 bg-red-900 text-white font-black text-sm uppercase tracking-wider rounded-full shadow-xl">
                    Available Now
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-block mb-6">
                <span className="px-6 py-3 bg-red-900/20 border border-red-900 text-red-500 font-bold text-sm uppercase tracking-wider rounded-full">
                  Exclusive eBook
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tighter leading-none">
                70 Ways to Live Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                  Dream Life
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 font-light mb-4">
                By Marwa Abdelaziz
              </p>

              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mb-8"></div>

              <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8">
                Transform your life with 70 proven strategies from over 20 years of leadership experience 
                in real estate development and business excellence. Discover practical wisdom that will 
                unlock your full potential and help you achieve your dreams.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="https://e-bookdemo.web.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-lg rounded-full"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Read Online Free
                </a>
                <a 
                  href="#preview"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-red-900 bg-red-900/10 text-white font-bold text-lg rounded-full"
                >
                  Preview Chapters
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-black text-red-500 mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
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
        `}</style>
      </section>

      {/* Features Section */}
      <section className="relative py-20 md:py-32 px-4 md:px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
              What's <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Inside</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover the transformative content that will change your life
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-8">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-black text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapters Preview */}
      <section id="preview" ref={sectionRef} className="relative py-20 md:py-32 px-4 md:px-6 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
              Chapter <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Preview</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore the 7 comprehensive chapters covering all aspects of living your dream life
            </p>
          </div>

          <div className="space-y-6">
            {chapters.map((chapter, index) => (
              <a
                key={index}
                href={`https://e-bookdemo.web.app/?id=${chapter.ebookId}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block bg-gradient-to-br from-zinc-900/90 to-black/90 border-2 rounded-3xl p-6 md:p-8 transition-all duration-500 cursor-pointer ${
                  activeChapter === index ? 'border-red-500 scale-[1.02]' : 'border-zinc-800 hover:border-red-500/50'
                }`}
                onMouseEnter={() => setActiveChapter(index)}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* Chapter Number */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center">
                      <span className="text-3xl font-black text-white">{chapter.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="text-sm text-red-500 font-bold uppercase tracking-wider mb-2">
                      Ways {chapter.ways}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                      {chapter.title}
                    </h3>
                    <p className="text-lg text-red-500 font-bold mb-3">{chapter.subtitle}</p>
                    <p className="text-gray-400 leading-relaxed">{chapter.description}</p>
                    
                    {/* Read Chapter CTA */}
                    <div className="mt-4 inline-flex items-center gap-2 text-red-500 font-bold text-sm">
                      <span>Click to read this chapter</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0">
                    <svg 
                      className={`w-8 h-8 text-red-500 transition-transform duration-300 ${
                        activeChapter === index ? 'rotate-90' : ''
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20 md:py-32 px-4 md:px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
              Reader <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Reviews</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See what readers are saying about this transformative book
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-8">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonial.comment}"
                </p>

                <div className="border-t border-zinc-800 pt-4">
                  <p className="text-white font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="relative py-20 md:py-32 px-4 md:px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-br from-zinc-900 to-black border-2 border-red-900/30 rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative aspect-square lg:aspect-auto min-h-[400px]">
                <Image
                  src="/image2.png"
                  alt="Marwa Abdelaziz"
                  fill
                  className="object-cover"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:bg-gradient-to-r"></div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="inline-block mb-6">
                  <span className="px-6 py-2 bg-red-900/20 border border-red-900 text-red-500 font-bold text-sm uppercase tracking-wider rounded-full">
                    About the Author
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  Marwa Abdelaziz
                </h2>

                <p className="text-lg text-red-500 font-bold mb-6">
                  Chairman, MA VISION Developments
                </p>

                <div className="space-y-4 text-gray-300 leading-relaxed mb-8">
                  <p>
                    With over 20 years of experience in real estate development and business leadership, 
                    Marwa Abdelaziz has overseen projects worth over AED 10 billion across the UAE.
                  </p>
                  <p>
                    Her journey from ambitious beginnings to industry leadership embodies the principles 
                    she shares in this book. Through decades of strategic planning, project management, 
                    and stakeholder relations, she has developed insights that transform lives and businesses.
                  </p>
                </div>

                <a 
                  href="https://www.linkedin.com/in/marwaabdelazizofficial/?originalSubdomain=ae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-red-900 text-white font-bold rounded-full w-fit"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 md:py-32 px-4 md:px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Transformation</span> Today
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join thousands of readers who have transformed their lives with these 70 proven strategies
          </p>

          <a 
            href="https://e-bookdemo.web.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xl rounded-full"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Read the Book Now - Free
          </a>

          <p className="text-sm text-gray-500 mt-6">Available online • No download required • Start reading instantly</p>
        </div>
      </section>

      <Footer />
    </>
  );
}