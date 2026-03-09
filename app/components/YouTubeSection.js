'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function YouTubeSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [playingVideo, setPlayingVideo] = useState(null);
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

  // Marwa's actual YouTube videos
  const featuredVideos = [
    { 
      id: '3crRYXqy_o0', 
      title: 'Leadership & Real Estate Insights',
      thumbnail: '/thumb1.png'  // Custom thumbnail
    },
    { 
      id: 'qGYbhZCG3WQ', 
      title: 'Business Success Strategies',
      thumbnail: '/thumb2.png'  // Custom thumbnail
    },
    { 
      id: '8Z55TFQAslE', 
      title: 'Personal Development & Growth'
      // No thumbnail - will show iframe directly
    },
  ];

  const handlePlayVideo = (videoId) => {
    setPlayingVideo(videoId);
  };

  return (
    <section ref={sectionRef} className="py-12 md:py-28 px-4 md:px-6 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-900/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-900/5 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter">
            YOUTUBE <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-red-700">VIDEOS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-900 to-red-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Watch exclusive content on leadership, real estate development, and personal growth
          </p>
        </div>

        {/* Channel Info Banner */}
        <div 
          className={`mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative group">
            {/* Glowing border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-900 via-red-800 to-red-900 rounded-3xl opacity-75 group-hover:opacity-100 blur transition-opacity duration-500"></div>
            
            {/* Banner content */}
            <div className="relative bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 rounded-3xl p-8 md:p-12 border border-red-900">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                
                {/* Left side - Channel info */}
                <div className="flex items-center gap-6">
                  {/* YouTube logo */}
                  <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12 md:w-14 md:h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  
                  {/* Channel details */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                      Marwa Abdelaziz
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base">
                      @marwaabdelaziz8960
                    </p>
                  </div>
                </div>

                {/* Right side - Subscribe button */}
                <a
                  href="https://www.youtube.com/@marwaabdelaziz8960"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-base md:text-lg rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-3"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div 
          className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVideos.map((video, index) => (
              <div
                key={index}
                className="group relative transition-all duration-700"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Glowing border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-900 via-red-800 to-red-900 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>
                
                {/* Video container */}
                <div className="relative bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 group-hover:border-transparent transition-all duration-500">
                  {/* Video embed or Thumbnail */}
                  <div className="relative aspect-video">
                    {/* If video has thumbnail and not playing yet - show thumbnail */}
                    {video.thumbnail && playingVideo !== video.id ? (
                      <>
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          fill
                          className="object-cover"
                          quality={100}
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                        
                        {/* Play Button */}
                        <button
                          onClick={() => handlePlayVideo(video.id)}
                          className="absolute inset-0 flex items-center justify-center cursor-pointer"
                        >
                          <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-300 shadow-2xl shadow-red-900/50">
                            <svg className="w-7 h-7 md:w-8 md:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </button>
                      </>
                    ) : (
                      /* Show iframe - either no thumbnail or video is playing */
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${video.id}${playingVideo === video.id ? '?autoplay=1' : ''}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    )}
                  </div>
                  
                  {/* Video title */}
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-900 group-hover:to-red-700 transition-all duration-300">
                      {video.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visit Channel CTA */}
        <div 
          className={`mt-16 text-center transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a
            href="https://www.youtube.com/@marwaabdelaziz8960"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-red-900 to-red-700 text-white font-bold text-lg tracking-wide uppercase rounded-full hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-red-900/50"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Watch More Videos
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
      `}</style>
    </section>
  );
}