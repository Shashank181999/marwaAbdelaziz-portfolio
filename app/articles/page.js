'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ArticlesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const categories = [
    { id: 'all', name: 'All Articles', icon: '📰', slug: null },
    { id: 'Leadership', name: 'Leadership', icon: '👔', slug: 'leadership' },
    { id: 'Inspiration', name: 'Inspiration', icon: '✨', slug: 'inspiration' },
    { id: 'Personal Development', name: 'Growth', icon: '🌱', slug: 'personal-development' },
  ];

  // ← KEEP LOCAL DATA for main page preview
  const articles = [
    {
      id: '1751613550294',
      title: 'Project Management',
      subtitle: 'Attention Management for Productivity',
      excerpt: 'Your attention determines the experiences you have, and the experiences you have determine the life you live. Master the art of attention management to unlock unprecedented productivity and focus in your professional and personal life.',
      fullDescription: 'In today\'s world of constant distractions, managing your attention has become more critical than managing your time. This comprehensive guide explores proven strategies for maintaining focus, eliminating distractions, and channeling your mental energy towards what truly matters.',
      category: 'Leadership',
      date: 'January 15, 2025',
      // readTime: '5 min read',
      image: '/pm1.png',
      author: 'Marwa Abdelaziz',
      tags: ['Productivity', 'Focus', 'Time Management', 'Leadership'],
      featured: true,
      categorySlug: 'leadership'
    },
    {
      id: '1751616160250',
      title: '70 Ways to Live Your Dream Life',
      subtitle: 'Go Boldly',
      excerpt: 'What is worrying you? Our biggest fear is of fear itself and the greatest antidote to fear is BOLDNESS. Discover how to break through limitations and create the life you\'ve always envisioned through courage and decisive action.',
      fullDescription: 'This transformative guide presents 70 actionable strategies for living your dream life. Drawing from decades of real-world experience in leadership and personal development, you\'ll learn to overcome fear, take bold action, and design a life aligned with your deepest values and aspirations.',
      category: 'Inspiration',
      date: 'January 10, 2025',
      // readTime: '8 min read',
      image: '/ways.png',
      author: 'Marwa Abdelaziz',
      tags: ['Personal Growth', 'Motivation', 'Success', 'Courage'],
      featured: true,
      categorySlug: 'inspiration'
    },
    {
      id: '1751615311246',
      title: 'Self Growth',
      subtitle: '7 Golden Tips for Self-Love',
      excerpt: 'We can never obtain peace in the outer world until we make peace with ourselves. Self-love is the foundation of all personal growth, success, and meaningful relationships.',
      fullDescription: 'Self-love isn\'t selfish—it\'s essential. This article reveals seven powerful principles for developing genuine self-compassion, acceptance, and confidence.',
      category: 'Personal Development',
      date: 'January 5, 2025',
      // readTime: '6 min read',
      image: '/pm.jpg',
      author: 'Marwa Abdelaziz',
      tags: ['Self-Love', 'Wellness', 'Mindfulness', 'Personal Development'],
      featured: false,
      categorySlug: 'personal-development'
    },
  ];

  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  const featuredArticle = filteredArticles.find(a => a.featured && a.id === '1751613550294');
  const secondaryArticles = filteredArticles.filter(a => a.id !== '1751613550294');

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-black overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 py-16">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-block mb-6 animate-fadeIn">
              <span className="px-6 py-3 bg-red-900/20 border border-red-900 text-red-500 font-bold text-sm uppercase tracking-widest rounded-full">
                Insights & Knowledge
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter leading-none animate-fadeIn" style={{ animationDelay: '100ms' }}>
              Articles &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                Insights
              </span>
            </h1>

            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mb-8 animate-fadeIn" style={{ animationDelay: '200ms' }}></div>

            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed animate-fadeIn" style={{ animationDelay: '300ms' }}>
              Expert perspectives on leadership, personal growth, and living your dream life.
            </p>
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
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-float {
            animation: float 20s ease-in-out infinite;
          }
          .animate-float-delayed {
            animation: float-delayed 25s ease-in-out infinite;
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out forwards;
            opacity: 0;
          }
        `}</style>
      </section>

      {/* Category Filter with Navigation - CLICK GOES TO FIREBASE */}
      <section className="relative py-6 md:py-8 px-4 md:px-6 bg-black border-b border-zinc-900">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              category.slug ? (
                <Link
                  key={category.id}
                  href={`/articles/category/${category.slug}`}
                  className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-xs md:text-sm uppercase tracking-wider transition-all duration-300 bg-zinc-900 text-gray-400 hover:bg-red-900 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-red-900/50"
                >
                  <span className="text-base md:text-lg">{category.icon}</span>
                  <span className="hidden sm:inline">{category.name}</span>
                </Link>
              ) : (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-xs md:text-sm uppercase tracking-wider transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-red-900 text-white scale-105 shadow-lg shadow-red-900/50'
                      : 'bg-zinc-900 text-gray-400'
                  }`}
                >
                  <span className="text-base md:text-lg">{category.icon}</span>
                  <span className="hidden sm:inline">{category.name}</span>
                </button>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="relative py-10 md:py-16 px-4 md:px-6 bg-gradient-to-b from-black to-zinc-950">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-1">
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Article</span>
              </h2>
              <p className="text-gray-500 text-sm">Must-read insight of the week</p>
            </div>

            <Link 
              href={`/articles/category/${featuredArticle.categorySlug}`}
              className="group block relative bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl overflow-hidden hover:border-red-900/50 transition-all duration-500"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative bg-zinc-900 flex items-center justify-center p-4 md:p-6 lg:p-8">
                  <div className="relative w-full">
                    <Image
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      width={600}
                      height={700}
                      className="w-full h-auto rounded-xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
                      quality={100}
                      priority
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div className="absolute top-6 left-6 md:top-8 md:left-8">
                    <span className="px-3 py-1.5 bg-red-900 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-lg">
                      {featuredArticle.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                    <span>{featuredArticle.date}</span>
                    <span>•</span>
                    <span>{featuredArticle.readTime}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-2 leading-tight">
                    {featuredArticle.title}
                  </h3>

                  <p className="text-lg md:text-xl text-red-500 font-bold mb-4">
                    {featuredArticle.subtitle}
                  </p>

                  <div className="h-0.5 bg-gradient-to-r from-red-500 to-red-700 mb-4 w-16 group-hover:w-32 transition-all duration-500"></div>

                  <p className="text-gray-400 leading-relaxed mb-6 line-clamp-3">
                    {featuredArticle.fullDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredArticle.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-zinc-800 text-gray-500 text-xs font-semibold rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 mb-6 pb-6 border-b border-zinc-800">
                    <div className="text-center">
                      <div className="text-xl font-black text-red-500">10K+</div>
                      <div className="text-xs text-gray-500">Readers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-black text-red-500">4.9★</div>
                      <div className="text-xs text-gray-500">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-black text-red-500">250+</div>
                      <div className="text-xs text-gray-500">Shares</div>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-3 text-red-500 font-bold text-lg group-hover:gap-5 transition-all duration-300">
                    View Category Articles
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* More Articles */}
      <section ref={sectionRef} className="relative py-10 md:py-16 px-4 md:px-6 bg-gradient-to-b from-zinc-950 to-black">
        <div className="container mx-auto max-w-6xl">
          {secondaryArticles.length > 0 && (
            <>
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-1">
                  More <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Insights</span>
                </h2>
                <p className="text-gray-500 text-sm">
                  {activeCategory === 'all' 
                    ? 'Continue your journey of growth and discovery' 
                    : `More articles in ${categories.find(c => c.id === activeCategory)?.name}`
                  }
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {secondaryArticles.map((article, index) => (
                  <Link 
                    key={article.id}
                    href={`/articles/category/${article.categorySlug}`}
                    className={`group relative bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl overflow-hidden transition-all duration-700 hover:border-red-900/50 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="relative bg-zinc-900 p-4 md:p-6">
                      <div className="absolute top-6 left-6 z-10">
                        <span className="px-3 py-1.5 bg-red-900 text-white font-bold text-xs uppercase tracking-wider rounded-full">
                          {article.category}
                        </span>
                      </div>
                      <div className="absolute top-6 right-6 z-10">
                        <div className="px-3 py-1.5 bg-black/70 backdrop-blur-md text-white text-xs font-semibold rounded-full flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {article.readTime}
                        </div>
                      </div>
                      <Image
                        src={article.image}
                        alt={article.title}
                        width={600}
                        height={500}
                        className="w-full h-auto rounded-xl group-hover:scale-[1.02] transition-transform duration-500"
                        quality={100}
                        style={{ objectFit: 'contain' }}
                      />
                    </div>

                    <div className="p-5 md:p-6">
                      <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.author}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-white mb-2 leading-tight">
                        {article.title}
                      </h3>
                      <p className="text-base text-red-500 font-bold mb-3">
                        {article.subtitle}
                      </p>
                      <div className="h-0.5 bg-gradient-to-r from-red-500 to-red-700 mb-3 w-12 group-hover:w-24 transition-all duration-500"></div>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.slice(0, 3).map((tag, idx) => (
                          <span key={idx} className="px-2.5 py-1 bg-zinc-800 text-gray-500 text-xs font-semibold rounded-full">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-2 text-red-500 font-bold">
                        View Category
                        <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Author Bio */}
      <section className="relative py-12 md:py-16 px-4 md:px-6 bg-black">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-red-950/20 to-red-900/10 border border-red-900/30 rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-shrink-0">
                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-3 border-red-900">
                  <Image
                    src="/image5.png"
                    alt="Marwa Abdelaziz"
                    fill
                    className="object-cover"
                    quality={100}
                  />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-1">
                  Marwa Abdelaziz
                </h3>
                <p className="text-lg text-red-500 font-bold mb-3">
                  Author & Leadership Expert
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  With over 20 years of experience in real estate development and business leadership, 
                  Marwa shares practical wisdom on leadership, personal growth, and achieving excellence.
                </p>
                <Link 
                  href="/about"
                  className="inline-flex items-center gap-2 text-red-500 font-bold text-sm"
                >
                  Learn More About Marwa
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content-Focused Section - Clean Typography */}
      <section className="relative py-16 md:py-20 px-4 md:px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto max-w-4xl">
          
          {/* Main Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Transform Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                Leadership Journey
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mb-8"></div>
          </div>

          {/* Content Paragraphs */}
          <div className="space-y-8 text-center">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
              These articles are more than just words on a page—they're decades of real-world experience, 
              hard-won lessons, and proven strategies distilled into practical wisdom you can apply today.
            </p>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Whether you're navigating the complexities of leadership, seeking inspiration to break through 
              your limitations, or committed to personal growth, you'll find insights here that challenge 
              conventional thinking and illuminate new paths forward.
            </p>

            <div className="py-8">
              <div className="inline-block px-8 py-4 bg-gradient-to-r from-red-950/30 to-red-900/20 border border-red-900/40 rounded-2xl">
                <p className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 mb-2">
                  20+ Years of Experience
                </p>
                <p className="text-sm text-gray-500 uppercase tracking-widest">
                  Shared Through Every Article
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
              From attention management and productivity to bold living and self-love, each piece is crafted 
              to give you actionable strategies that create lasting change. This isn't theory—it's tested, 
              proven, and ready for you to implement.
            </p>

            {/* Call to Action Links */}
            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="https://e-bookdemo.web.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-lg shadow-red-900/50"
              >
                Explore My eBooks
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link 
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 border border-zinc-800 text-white font-bold text-lg rounded-full hover:border-red-900 hover:bg-zinc-800 transition-all duration-300"
              >
                Work With Me
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Stats - Minimalist */}
          <div className="mt-16 pt-12 border-t border-zinc-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-black text-red-500 mb-2">50K+</div>
                <div className="text-sm text-gray-500">Monthly Readers</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-red-500 mb-2">100+</div>
                <div className="text-sm text-gray-500">Articles</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-red-500 mb-2">20+</div>
                <div className="text-sm text-gray-500">Years</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-red-500 mb-2">4.9★</div>
                <div className="text-sm text-gray-500">Rating</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}