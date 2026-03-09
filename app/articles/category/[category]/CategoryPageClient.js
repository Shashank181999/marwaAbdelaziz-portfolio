// app/articles/category/[category]/CategoryPageClient.js
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import SearchBar from './SearchBar';
import { getArticlesByTag } from '../../../../lib/getArticles';

const categoryMap = {
  leadership: {
    tag: 'PM',
    name: 'Leadership',
    icon: '👔',
    color: 'from-red-600 to-red-800',
    description: 'Project management and leadership excellence',
  },
  inspiration: {
    tag: '70Ways',
    name: 'Inspiration',
    icon: '✨',
    color: 'from-red-600 to-red-800',
    description: '70 ways to live your dream life',
  },
  'personal-development': {
    tag: 'SG',
    name: 'Self Growth',
    icon: '🌱',
    color: 'from-red-600 to-red-800',
    description: 'Personal growth and self-improvement',
  },
};

export default function CategoryPageClient({ params, searchParams }) {
  const [visibleCount, setVisibleCount] = useState(8);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [categorySlug, setCategorySlug] = useState('leadership');
  const [searchQuery, setSearchQuery] = useState('');

useEffect(() => {
  async function unwrapParams() {
    const resolvedParams = params instanceof Promise ? await params : params;
    setCategorySlug(resolvedParams?.category || 'leadership');
    setMounted(true);
  }
  unwrapParams();
}, [params]);

// Handle search params from URL on client side only
useEffect(() => {
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    setSearchQuery(urlParams.get('search') || '');
  }
}, []);

  const currentCategory = categoryMap[categorySlug] || categoryMap['leadership'];

  useEffect(() => {
    if (!mounted) return;
    
    async function fetchArticles() {
      try {
        console.log('🔥 Fetching articles for tag:', currentCategory.tag);
        setLoading(true);
        
        const articles = await getArticlesByTag(currentCategory.tag);
        console.log('✅ Articles fetched:', articles.length);
        
        let filtered = articles;
        if (searchQuery) {
          const query = searchQuery.toLowerCase();
          filtered = articles.filter(article => {
            return (
              article.title?.toLowerCase().includes(query) ||
              article.excerpt?.toLowerCase().includes(query) ||
              article.author?.toLowerCase().includes(query)
            );
          });
        }
        
        setFilteredArticles(filtered);
      } catch (error) {
        console.error('❌ Error fetching articles:', error);
        setFilteredArticles([]);
      } finally {
        setLoading(false);
      }
    }
    
    fetchArticles();
  }, [mounted, currentCategory.tag, searchQuery]);

  if (!mounted) {
    return (
      <>
        <Header />
        <section className="relative min-h-screen flex items-center justify-center bg-black">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500 mb-4"></div>
            <p className="text-gray-400">Loading...</p>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  const displayedArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;
  const remainingCount = filteredArticles.length - visibleCount;
  const loadMore = () => setVisibleCount(prev => prev + 6);
  const otherCategories = Object.entries(categoryMap).filter(([slug]) => slug !== categorySlug);

  return (
    <>
      <Header />
      <section className="relative min-h-[50vh] flex items-center justify-center bg-black overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <Link href="/articles" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to All Articles
            </Link>
            <div className="flex justify-center mb-6">
              <div className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${currentCategory.color} rounded-2xl`}>
                <span className="text-3xl">{currentCategory.icon}</span>
                <span className="text-white font-black text-lg uppercase tracking-wider">{currentCategory.name}</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tighter leading-tight">
              {currentCategory.name}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Articles</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Explore our collection of {filteredArticles.length} expert articles on {currentCategory.name.toLowerCase()}
            </p>
            <SearchBar />
          </div>
        </div>
      </section>
      <section className="relative py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            {searchQuery ? (
              <p className="text-gray-400">
                Found <span className="text-white font-bold">{filteredArticles.length}</span> articles for 
                <span className="text-red-500 font-bold"> "{searchQuery}"</span>
              </p>
            ) : (
              <p className="text-gray-400">
                Showing <span className="text-white font-bold">{displayedArticles.length}</span> of <span className="text-white font-bold">{filteredArticles.length}</span> articles
              </p>
            )}
          </div>
          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[1,2,3,4,5,6,7,8].map((i) => (
                <div key={i} className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl overflow-hidden animate-pulse">
                  <div className="relative aspect-video bg-zinc-800"></div>
                  <div className="p-6">
                    <div className="h-3 bg-zinc-800 rounded w-20 mb-3"></div>
                    <div className="h-5 bg-zinc-800 rounded w-full mb-2"></div>
                    <div className="h-5 bg-zinc-800 rounded w-3/4 mb-3"></div>
                    <div className="h-3 bg-zinc-800 rounded w-full mb-2"></div>
                    <div className="h-3 bg-zinc-800 rounded w-5/6 mb-4"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : displayedArticles.length > 0 ? (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {displayedArticles.map((article) => (
                  <Link key={article.id} href={`/articles/details/${article.id}`} className="group bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl overflow-hidden hover:border-red-900/50 transition-all duration-500">
                    <div className="relative aspect-video bg-zinc-900 overflow-hidden">
                      <Image src={article.featuredImage || article.image || '/pm1.png'} alt={article.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" quality={100} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                      <div className="absolute top-4 right-4">
                        <div className="px-3 py-1.5 bg-black/70 backdrop-blur-md text-white text-xs font-semibold rounded-full flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {article.readTime}
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.author}</span>
                      </div>
                      <h3 className="text-lg md:text-xl font-black text-white mb-3 leading-tight line-clamp-2 group-hover:text-red-500 transition-colors">{article.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">{article.excerpt}</p>
                      <div className="h-px bg-gradient-to-r from-red-500 to-transparent mb-4 w-12 group-hover:w-full transition-all duration-500"></div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <div className="flex items-center gap-1.5">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            {article.views}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            {article.likes}
                          </div>
                        </div>
                        <svg className="w-5 h-5 text-red-500 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              {hasMore && (
                <div className="text-center mt-12">
                  <button onClick={loadMore} className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700 text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-red-900/50 hover:shadow-red-900/70 hover:scale-105">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <span>Load More Articles</span>
                    <span className="px-2 py-1 bg-white/20 rounded-full text-sm">+{remainingCount > 6 ? 6 : remainingCount}</span>
                  </button>
                  <p className="text-gray-500 text-sm mt-4">{remainingCount} more article{remainingCount !== 1 ? 's' : ''} available</p>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-black text-white mb-4">No Articles Found</h3>
              <p className="text-gray-400 mb-8">{searchQuery ? `No results for "${searchQuery}"` : 'No articles available in this category yet'}</p>
            </div>
          )}
        </div>
      </section>
      <section className="relative py-16 md:py-24 px-4 md:px-6 bg-black">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-900/50 to-transparent"></div>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-red-900/20 border border-red-900/30 text-red-500 text-xs font-bold uppercase tracking-widest rounded-full mb-4">Continue Exploring</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
              Discover More{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Categories</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Expand your knowledge with our other curated collections</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {otherCategories.map(([slug, cat]) => (
              <Link key={slug} href={`/articles/category/${slug}`} className="group bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl p-8 md:p-10 border border-zinc-800 hover:border-red-900/50 transition-colors duration-300">
                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${cat.color} rounded-2xl flex items-center justify-center shadow-lg shadow-red-900/20`}>
                    <span className="text-3xl md:text-4xl">{cat.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2">{cat.name}</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">{cat.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                        <span>View Articles</span>
                      </div>
                      <div className="flex items-center gap-2 text-red-500 font-bold text-sm">
                        <span>Explore</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/articles" className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 border border-zinc-800 hover:border-red-900/50 text-white font-bold rounded-full transition-colors duration-300">
              <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              View All Articles
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}