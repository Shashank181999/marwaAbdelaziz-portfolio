'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ArticlesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
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

  const articles = [
    {
      id: 1,
      title: "Project Management",
      subtitle: "Attention Management for Productivity",
      image: "/pm1.png",
      excerpt: "Your attention determines the experiences you have, and the experiences you have determine the life you live.",
      category: "Leadership",
      readTime: "5 min read",
      categorySlug: "leadership" // ✅ Added category slug
    },
    {
      id: 2,
      title: "70 Ways to Live Your Dream Life",
      subtitle: "Go Boldly",
      image: "/ways.png",
      excerpt: "What is worrying you? Our biggest fear is of fear itself and the greatest antidote to fear is BOLDNESS.",
      category: "Inspiration",
      readTime: "8 min read",
      categorySlug: "inspiration" // ✅ Added category slug
    },
    {
      id: 3,
      title: "Self Growth",
      subtitle: "7 Golden Tips for Self-Love",
      image: "/pm.jpg",
      excerpt: "We can never obtain peace in the outer world until we make peace with ourselves.",
      category: "Personal Development",
      readTime: "6 min read",
      categorySlug: "personal-development" // ✅ Added category slug
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-28 px-6 bg-black overflow-hidden">
      
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-900/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-900/5 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div 
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter">
            INSIGHTS <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-red-700">& ARTICLES</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-900 to-red-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Wisdom and practical guidance for leadership, personal growth, and living your dream life
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className={`group relative transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(article.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glowing border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-900 via-red-800 to-red-900 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>
              
              {/* ✅ FIXED: Wrapped entire card in Link */}
              <Link 
                href={`/articles/category/${article.categorySlug}`}
                className="relative bg-gradient-to-br from-zinc-900 to-black rounded-3xl overflow-hidden border border-zinc-800 group-hover:border-transparent transition-all duration-500 h-full flex flex-col block"
              >
                
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className={`object-cover transition-all duration-700 ${
                      hoveredCard === article.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                  
                  {/* Badges at bottom - Better UI */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <div className="flex items-center justify-between gap-3">
                      {/* Category badge */}
                      <div className="flex-shrink-0">
                        <span className="px-4 py-2.5 bg-red-900 text-white text-xs font-bold uppercase tracking-wider rounded-xl backdrop-blur-sm border border-red-800">
                          {article.category}
                        </span>
                      </div>

                      {/* Read time badge */}
                      <div className="flex-shrink-0">
                        <div className="px-4 py-2.5 bg-white/10 backdrop-blur-md text-white text-xs font-semibold rounded-xl flex items-center gap-2 border border-white/20">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {article.readTime}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  {/* Title */}
                  <h3 className={`text-3xl font-black mb-2 tracking-tight transition-all duration-500 ${
                    hoveredCard === article.id 
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-red-700' 
                      : 'text-white'
                  }`}>
                    {article.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-lg text-red-800 font-bold mb-4">
                    {article.subtitle}
                  </p>

                  {/* Divider */}
                  <div className={`h-0.5 bg-gradient-to-r from-red-900 to-red-700 mb-4 transition-all duration-500 ${
                    hoveredCard === article.id ? 'w-full' : 'w-16'
                  }`}></div>

                  {/* Excerpt */}
                  <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                    {article.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div className="inline-flex items-center text-red-900 font-bold text-base group-hover:text-red-700 transition-colors duration-300">
                    <span className="relative">
                      View Category Articles
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-700 group-hover:w-full transition-all duration-300"></span>
                    </span>
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-red-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-full"></div>
              </Link>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div 
          className={`mt-16 text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Link 
            href="/articles"
            className="inline-block px-10 py-5 bg-gradient-to-r from-red-900 to-red-700 text-white font-bold text-lg tracking-wide uppercase rounded-full hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-red-900/50"
          >
            View All Articles
          </Link>
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
  );
}