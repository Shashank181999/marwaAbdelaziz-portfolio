'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function LoadMoreButton({ articles, searchQuery }) {
  const [visibleCount, setVisibleCount] = useState(8); // Start with 8 articles

  const displayedArticles = articles.slice(0, visibleCount);
  const hasMore = visibleCount < articles.length;
  const remainingCount = articles.length - visibleCount;

  const loadMore = () => {
    setVisibleCount(prev => prev + 6); // Load 6 more each time
  };

  return (
    <section className="relative py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-black to-zinc-950">
      <div className="container mx-auto max-w-7xl">
        {/* Results Count */}
        <div className="mb-8">
          {searchQuery ? (
            <p className="text-gray-400">
              Found <span className="text-white font-bold">{articles.length}</span> articles for 
              <span className="text-red-500 font-bold"> "{searchQuery}"</span>
            </p>
          ) : (
            <p className="text-gray-400">
              Showing <span className="text-white font-bold">{displayedArticles.length}</span> of <span className="text-white font-bold">{articles.length}</span> articles
            </p>
          )}
        </div>

        {displayedArticles.length > 0 ? (
          <>
            {/* Articles Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {displayedArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/articles/details/${article.id}`}
                  className="group bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl overflow-hidden hover:border-red-900/50 transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative aspect-video bg-zinc-900 overflow-hidden">
                    <Image
                      src={article.featuredImage || article.image || '/pm1.png'}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      quality={100}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Author */}
                    <p className="text-xs text-gray-500 mb-3">
                      {article.author}
                    </p>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-black text-white mb-3 leading-tight line-clamp-2 group-hover:text-red-500 transition-colors">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-red-500 to-transparent mb-4 w-12 group-hover:w-full transition-all duration-500"></div>

                    {/* Stats */}
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

                      {/* Read More Arrow */}
                      <svg className="w-5 h-5 text-red-500 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div className="text-center mt-12">
                <button
                  onClick={loadMore}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700 text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-red-900/50 hover:shadow-red-900/70 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span>Load More Articles</span>
                  <span className="px-2 py-1 bg-white/20 rounded-full text-sm">
                    +{remainingCount > 6 ? 6 : remainingCount}
                  </span>
                  <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <p className="text-gray-500 text-sm mt-4">
                  {remainingCount} more article{remainingCount !== 1 ? 's' : ''} available
                </p>
              </div>
            )}
          </>
        ) : (
          // Empty state
          <div className="text-center py-20">
            <div className="text-6xl mb-6">🔍</div>
            <h3 className="text-2xl font-black text-white mb-4">No Articles Found</h3>
            <p className="text-gray-400 mb-8">
              {searchQuery ? `No results for "${searchQuery}"` : 'No articles available in this category yet'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}