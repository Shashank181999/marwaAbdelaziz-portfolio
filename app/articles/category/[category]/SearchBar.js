'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';


export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');

  // Load search query from URL on mount
  useEffect(() => {
    const query = searchParams.get('search');
    if (query) {
      setSearchQuery(query);
    }
  }, [searchParams]);

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Update URL with search query
      router.push(`?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      // Clear search
      router.push(window.location.pathname);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    // Auto-search after typing stops (optional)
    // Remove this if you only want search on Enter/button click
  };

  // Handle clear
  const handleClear = () => {
    setSearchQuery('');
    router.push(window.location.pathname);
  };

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={handleChange}
          className="w-full px-6 py-4 pl-12 pr-12 bg-zinc-900 border border-zinc-800 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
        />
        <svg 
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        
        {/* Clear button */}
        {searchQuery && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 hover:text-white transition-colors"
            aria-label="Clear search"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </form>
    </div>
  );
}