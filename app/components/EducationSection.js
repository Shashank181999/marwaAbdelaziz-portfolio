'use client';

import { useState, useEffect, useRef } from 'react';

export default function EducationSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedEdu, setSelectedEdu] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [visibleItems, setVisibleItems] = useState([]);
  const [isScrollable, setIsScrollable] = useState(false);
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);
  const modalScrollRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.05,
        rootMargin: '100px',
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

  useEffect(() => {
    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '50px',
      }
    );

    const currentRefs = itemRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) itemObserver.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) itemObserver.unobserve(ref);
      });
    };
  }, []);

  useEffect(() => {
    if (selectedEdu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedEdu]);

  // Check if modal content is scrollable
  useEffect(() => {
    const checkScrollable = () => {
      if (modalScrollRef.current) {
        const { scrollHeight, clientHeight } = modalScrollRef.current;
        setIsScrollable(scrollHeight > clientHeight);
      }
    };

    if (selectedEdu) {
      setTimeout(checkScrollable, 100);
      window.addEventListener('resize', checkScrollable);
      return () => window.removeEventListener('resize', checkScrollable);
    }
  }, [selectedEdu]);

  const education = [
    {
      id: 1,
      institution: 'Heriot-Watt University',
      degree: 'Master of Science',
      field: 'Real Estate Management and Development',
      years: '2019-2020',
      description: 'Advanced studies in real estate management, property development, investment analysis, and strategic planning. Specialized in commercial and residential development projects with a focus on sustainable urban solutions.',
      location: 'Dubai, UAE',
      type: 'Masters',
      highlights: [
        'Real Estate Investment & Finance',
        'Property Development & Planning',
        'Sustainable Urban Development',
        'Project Management in Real Estate'
      ]
    },
    {
      id: 2,
      institution: 'American Academy of Project Management',
      degree: 'Executive Master',
      field: 'Project Management',
      years: '2006-2007',
      description: 'Executive-level program focusing on advanced project management methodologies, strategic planning, and leadership in complex project environments. Emphasis on real-world applications in large-scale developments.',
      location: 'International',
      type: 'Executive',
      highlights: [
        'Advanced Project Management',
        'Strategic Leadership',
        'Risk Management',
        'Stakeholder Management'
      ]
    },
    {
      id: 3,
      institution: 'Faculty of Engineering, Architecture',
      degree: 'Bachelor of Science',
      field: 'Architectural Engineering',
      years: '1995-2001',
      description: 'Comprehensive foundation in architectural engineering, design principles, structural systems, and construction management. Combined technical expertise with creative design thinking.',
      location: 'Egypt',
      type: 'Bachelors',
      highlights: [
        'Architectural Design',
        'Structural Engineering',
        'Construction Management',
        'Building Systems & Technology'
      ]
    },
    {
      id: 4,
      institution: 'Saint Fatima Language School',
      degree: 'High School Diploma',
      field: 'Science Section',
      years: '1989-1995',
      description: 'Strong academic foundation with focus on mathematics, sciences, and languages. Developed analytical and problem-solving skills that formed the basis for future engineering studies.',
      location: 'Egypt',
      type: 'Secondary',
      highlights: [
        'Mathematics & Sciences',
        'Language Proficiency',
        'Academic Excellence',
        'Analytical Thinking'
      ]
    }
  ];

  return (
    <>
      <section ref={sectionRef} className="py-12 md:py-28 px-4 md:px-6 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-900/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-900/5 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter">
              EDUCATION <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-red-700">JOURNEY</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-900 to-red-700 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
              A commitment to continuous learning and academic excellence
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-zinc-800 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-red-900 via-red-800 to-red-900 transition-all duration-1000 ease-out" style={{ height: isVisible ? '100%' : '0%', transitionDelay: '300ms' }}></div>
            </div>

            <div className="space-y-16">
              {education.map((edu, index) => {
                const isItemVisible = visibleItems.includes(index);
                
                return (
                  <div key={edu.id} ref={(el) => (itemRefs.current[index] = el)} data-index={index} className="relative" onMouseEnter={() => setHoveredItem(edu.id)} onMouseLeave={() => setHoveredItem(null)}>
                    <div className={`absolute left-0 md:left-1/2 transform -translate-x-1/2 z-10 transition-all duration-700 ${isItemVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                      <div className="relative">
                        <div className="w-6 h-6 bg-red-900 rounded-full border-4 border-black"></div>
                        {isItemVisible && (
                          <>
                            <div className="absolute inset-0 w-6 h-6 bg-red-900 rounded-full animate-ping-slow opacity-75"></div>
                            <div className="absolute inset-0 w-6 h-6 bg-red-900 rounded-full animate-pulse"></div>
                          </>
                        )}
                      </div>
                    </div>

                    <div className={`md:w-[calc(50%-3rem)] ml-12 md:ml-0 transition-all duration-1000 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} ${isItemVisible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 translate-y-10 ${index % 2 === 0 ? 'md:-translate-x-10' : 'md:translate-x-10'}`}`} style={{ transitionDelay: `${index * 150}ms` }}>
                      <div className="group relative cursor-pointer" onClick={() => setSelectedEdu(edu)}>
                        <div className="absolute -inset-4 bg-gradient-to-r from-red-900/10 to-red-700/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                        
                        <div className="relative bg-gradient-to-br from-zinc-900/50 to-black/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 group-hover:border-red-900 transition-all duration-500 group-hover:scale-[1.02]">
                          <div className={`flex items-center gap-3 mb-4 transition-all duration-700 ${isItemVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: `${index * 150 + 200}ms` }}>
                            <span className="px-4 py-2 bg-red-900 text-white text-sm font-bold uppercase tracking-wider rounded-full">{edu.years}</span>
                            <span className="px-4 py-2 bg-zinc-800 text-gray-300 text-xs font-semibold uppercase tracking-wider rounded-full">{edu.type}</span>
                          </div>

                          <h3 className={`text-3xl md:text-4xl font-black mb-2 tracking-tight transition-all duration-1000 ${hoveredItem === edu.id ? 'text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-red-700' : 'text-white'} ${isItemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: `${index * 150 + 300}ms` }}>{edu.degree}</h3>

                          <p className={`text-xl text-red-800 font-bold mb-3 transition-all duration-700 ${isItemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: `${index * 150 + 400}ms` }}>{edu.field}</p>

                          <div className={`flex items-center gap-2 text-gray-400 mb-4 transition-all duration-700 ${isItemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: `${index * 150 + 500}ms` }}>
                            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            <span className="font-semibold">{edu.institution}</span>
                            <span className="text-gray-600">•</span>
                            <span>{edu.location}</span>
                          </div>

                          <div className={`h-0.5 bg-gradient-to-r from-red-900 to-transparent mb-4 transition-all duration-1000 ${isItemVisible ? 'w-24' : 'w-0'} ${hoveredItem === edu.id ? 'w-full' : ''}`} style={{ transitionDelay: `${index * 150 + 600}ms` }}></div>

                          <p className={`text-gray-400 leading-relaxed mb-4 line-clamp-2 transition-all duration-700 ${isItemVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${index * 150 + 700}ms` }}>{edu.description}</p>

                          <div className={`flex items-center text-red-900 font-bold text-sm group-hover:text-red-700 transition-all duration-700 ${isItemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: `${index * 150 + 800}ms` }}>
                            <span className="relative">
                              View Full Details
                              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-700 group-hover:w-full transition-all duration-300"></span>
                            </span>
                            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {selectedEdu && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-4 bg-black/95 backdrop-blur-md animate-fadeIn" onClick={() => setSelectedEdu(null)}>
          <div className="bg-zinc-950 rounded-none md:rounded-3xl max-w-4xl w-full h-full md:max-h-[85vh] flex flex-col border-0 md:border-2 border-red-900 animate-slideUp overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex-shrink-0 bg-gradient-to-r from-zinc-900 to-black border-b-2 border-zinc-800 p-6 md:p-8">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 flex-wrap">
                    <span className="px-3 md:px-4 py-1.5 md:py-2 bg-red-900 text-white text-xs md:text-sm font-bold uppercase tracking-wider rounded-full">{selectedEdu.years}</span>
                    <span className="px-3 md:px-4 py-1.5 md:py-2 bg-zinc-800 text-gray-300 text-xs font-semibold uppercase tracking-wider rounded-full">{selectedEdu.type}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tight mb-2 leading-tight">{selectedEdu.degree}</h3>
                  <p className="text-red-800 font-bold text-base md:text-lg lg:text-xl mb-2">{selectedEdu.field}</p>
                  <p className="text-gray-400 text-sm md:text-base">{selectedEdu.institution} • {selectedEdu.location}</p>
                </div>
                <button onClick={() => setSelectedEdu(null)} className="flex-shrink-0 w-9 h-9 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-red-900 hover:bg-red-800 active:scale-95 transition-all duration-300">
                  <svg className="w-5 md:w-6 h-5 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div ref={modalScrollRef} className="flex-1 overflow-y-auto modal-scrollbar p-6 md:p-8">
              <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
                <div>
                  <h4 className="text-xl md:text-2xl font-black text-white mb-3 md:mb-4">About the Program</h4>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base lg:text-lg">{selectedEdu.description}</p>
                </div>

                <div>
                  <h4 className="text-xl md:text-2xl font-black text-white mb-3 md:mb-4">Key Areas of Study</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    {selectedEdu.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 md:gap-3 bg-zinc-900 p-3 md:p-4 rounded-lg md:rounded-xl border border-zinc-800 hover:border-red-900 transition-colors duration-300">
                        <div className="flex-shrink-0 w-2 h-2 bg-red-900 rounded-full"></div>
                        <span className="text-gray-300 font-medium text-sm md:text-base">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {isScrollable && (
              <div className="absolute bottom-0 left-0 right-0 h-12 md:h-16 lg:h-20 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent pointer-events-none flex items-end justify-center pb-2 md:pb-3 lg:pb-4">
                <div className="text-gray-500 text-xs md:text-sm flex items-center gap-1.5 md:gap-2 animate-bounce">
                  <svg className="w-3 md:w-4 lg:w-5 h-3 md:h-4 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  <span>Scroll for more</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
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
        @keyframes ping-slow {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .modal-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        @media (min-width: 768px) {
          .modal-scrollbar::-webkit-scrollbar {
            width: 10px;
          }
        }
        @media (min-width: 1024px) {
          .modal-scrollbar::-webkit-scrollbar {
            width: 12px;
          }
        }
        .modal-scrollbar::-webkit-scrollbar-track {
          background: #18181b;
          border-radius: 10px;
          margin: 10px 0;
        }
        .modal-scrollbar::-webkit-scrollbar-thumb {
          background: #7f1d1d;
          border-radius: 10px;
          border: 2px solid #18181b;
        }
        .modal-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #991b1b;
        }
        .modal-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #7f1d1d #18181b;
        }
      `}</style>
    </>
  );
}