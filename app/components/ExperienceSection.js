'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);

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
    if (selectedCard) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedCard]);

  // Check if content is scrollable
  useEffect(() => {
    const checkScrollable = () => {
      if (scrollContainerRef.current) {
        const { scrollHeight, clientHeight } = scrollContainerRef.current;
        setIsScrollable(scrollHeight > clientHeight);
      }
    };

    if (selectedCard) {
      // Check after a small delay to ensure content is rendered
      setTimeout(checkScrollable, 100);
      window.addEventListener('resize', checkScrollable);
      return () => window.removeEventListener('resize', checkScrollable);
    }
  }, [selectedCard]);

  const experiences = [
    {
      id: 1,
      logo: '/ma-vision-logo.svg',
      title: 'Chairman',
      subtitle: 'MA VISION Developments',
      content: `MA VISION Developments takes pride in being one of the few homegrown professional development firms in the UAE, established in accordance with national regulations and built on a foundation of excellence, trust, and vision. We specialize in project development, project management, cost consultancy, and strategic advisory services, supporting transformative projects that shape communities and elevate urban living.

Since our inception, MA VISION has demonstrated consistent and remarkable growth—reflected not only in our financial success, but in our expanding client base, diverse portfolio of high-impact projects, and the strength of our expert team. We work closely with VIP clients to develop, scale, and position their projects for long-term success, helping them navigate rapid industry change and capitalize on emerging opportunities.

Through our international network and strategic joint ventures, we provide clients with the tools, insight, and resources needed to market and monetize mega developments. From concept to completion, we serve as a trusted partner and strategic advisor, offering deep sector expertise and end-to-end support.

At the forefront of our leadership is Marwa, a seasoned expert and pioneer in the UAE's property development sector since 2001. Her experience spans the full project lifecycle—from site selection and feasibility analysis to financial modeling, acquisition, master planning, design management, and tendering. Over her career, she has built an unparalleled track record in delivering exceptional results.`
    },
    {
      id: 2,
      logo: '/pdc-consult-logo.svg',
      title: 'Owner',
      subtitle: 'PDC Consult',
      content: `PDC CONSULT specializes in Development and Project management, Quantity surveying, Cost management consultancy services and Engineering Solutions with a high-performance network of international experts and staff.

What differentiates our company in the marketplace is our high capabilities in being able to undertake responsibilities for the client's needs during the pre-design and pre-construction phases of their projects; overseeing all design issues and coordinating with estimating and project management departments on all projects till the full turn key handover stages.

PDC Consult is proud to be selected to legally represent the signature Architect Carlos Ott & his reputable Architectural firm, Toronto, Canada to ensure providing signature concepts and architectural designs to our valuable clients.

Key Projects:
- Industrial development 10 million GFA (Sharjah, UAE) - AED 2 Billion
- Mixed Use development 3.5 million GFA (Riyadh, Saudi Arabia) - AED 3 Billion
- Mixed use development 11 million GFA (Bangalore, India)
- Mixed use tower G+ 60 Storey

Responsibilities include reporting to the MD on all operations and company activities related to design and development of construction documents, site supervision, business development, development and implementation of business plans, communication with clients and government authorities for approvals, establishing and controlling budgets, architectural design, working drawings, and presentations.`
    },
    {
      id: 3,
      logo: '/Head.png',
      title: 'Head of Development',
      subtitle: 'The Heart of Europe',
      content: `The Heart of Europe in Dubai is an ambitious and innovative island destination that represents a fusion of European designs, heritage, and hospitality set in a unique and breathtaking location. The project's primary goals are to create an exceptional lifestyle and vacation experience that encapsulates the very essence of European living and exceeds all expectations.

At its core, The Heart of Europe is a cluster of six islands situated on The World, Dubai. This engineering marvel comprises 300 islands shaped like the world map, reclaimed from the sea. The project aims to provide a serene and unmatched haven for visitors, located just 4km off the coast of Dubai and accessible with a short 10-minute boat ride.

As Head of Development, responsibilities included overseeing the entire development process of this mega project, coordinating with international architects and designers, managing project timelines and budgets, ensuring quality standards across all six islands, and working closely with stakeholders to bring this visionary concept to life.

The project represents a unique blend of luxury hospitality, innovative engineering, and European-inspired architecture, creating a world-class destination that has become one of Dubai's most prestigious developments.`
    },
    {
      id: 4,
      logo: '/noor.png',
      title: 'Client Projects Development Manager',
      subtitle: 'Noor Bank',
      content: `Served as Client Projects Development Manager and Head of Project Management Office at Noor Bank, one of the UAE's leading Islamic financial institutions.

In this strategic role, I was responsible for overseeing the bank's entire real estate and infrastructure portfolio, managing multiple high-value projects simultaneously, and ensuring alignment with the bank's strategic objectives and Islamic banking principles.

Key responsibilities included:
- Leading the Project Management Office (PMO) and establishing project governance frameworks
- Managing client-facing development projects from conception to completion
- Coordinating with internal stakeholders, external consultants, and contractors
- Ensuring projects met quality, budget, and timeline requirements
- Implementing best practices in project management methodologies
- Strategic planning and resource allocation across the project portfolio
- Risk management and mitigation strategies
- Stakeholder communication and reporting

This role required a deep understanding of both financial services requirements and real estate development, ensuring that all projects supported Noor Bank's business objectives while maintaining the highest standards of Islamic finance compliance.`
    },
    {
      id: 5,
      logo: '/client.png',
      title: 'Client Projects Manager / Head of PMO',
      subtitle: 'Al Rostamani Group',
      content: `Founded by Abdulla Hassan Al Rostamani in the early 1950's, Al Rostamani Group is a leading UAE family business conglomerate, guided by its core values of commitment, care, and vision.

With a legacy spanning over six decades, the group is one of the earliest established and most prominent companies in the country. It is renowned for its unwavering dedication to excellence and innovation across a range of diverse industries.

Al Rostamani Group's businesses operate in the automotive, general trading, real estate and construction, solar energy, financial services, travel and tourism, and technology solutions industries.

As Client Projects Manager and Head of the Project Management Office, I was responsible for:
- Overseeing the group's diverse real estate and construction portfolio
- Establishing and managing the centralized PMO function
- Implementing standardized project management processes across divisions
- Managing relationships with high-value clients and stakeholders
- Strategic planning and portfolio management
- Quality assurance and control across all projects
- Budget management and financial oversight
- Team leadership and development

This position required managing projects across multiple sectors while maintaining the group's reputation for excellence and ensuring alignment with the Al Rostamani Group's values and strategic vision.`
    },
    {
      id: 6,
      logo: '/architect.png',
      title: 'Architect / Project Manager',
      subtitle: 'Development Research & Urban Planning',
      content: `Served as Architect and Project Manager at Development Research & Urban Planning, handling comprehensive architectural and project management responsibilities across multiple high-value developments.

Key Projects Managed:
- Industrial development - 10 million GFA (Sharjah, UAE) valued at AED 2 Billion and AED 300 Million
- Mixed Use development - 3.5 million GFA (Riyadh, Saudi Arabia) valued at AED 3 Billion
- Mixed use development - 11 million GFA (Bangalore, India)
- Mixed use tower G+ 60 Storey

Job Responsibilities:
- Reported to the MD on all operations and company activities related to design and development of construction documents
- Site supervision and quality control
- Business development and client acquisition
- Development and implementation of business plans
- Communication with clients and government authorities for follow-up and granting approvals
- Establishing and controlling monthly budgets and expenditures
- Architectural design and working drawings
- Presentations of luxury villas and residential buildings
- Handling projects from initial to final design stages, including sketching, client approvals in accordance with Dubai Municipality rules and regulations
- Preparation of final production drawings and MEP drawings
- Project realization and tender management
- Discussion of specifications with clients and tender floating

This role provided comprehensive experience in managing large-scale, multi-million dollar developments across different markets and project types.`
    }
  ];

  return (
    <>
      <section ref={sectionRef} className="py-12 md:py-28 px-4 md:px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-red-900/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-red-900/5 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className={`text-center mb-8 md:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-white mb-3 md:mb-4 tracking-tighter">
              MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-red-700">EXPERIENCE</span>
            </h2>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-red-900 to-red-700 mx-auto mb-3 md:mb-6"></div>
            <p className="text-sm md:text-xl text-gray-400 font-light">Leadership roles across multiple organizations</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }} onMouseEnter={() => setHoveredCard(exp.id)} onMouseLeave={() => setHoveredCard(null)} onClick={() => setSelectedCard(exp)}>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-900 via-red-800 to-red-900 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-zinc-900 via-zinc-900 to-black border border-zinc-800 rounded-2xl md:rounded-3xl p-6 md:p-10 h-full transition-all duration-500 cursor-pointer group-hover:scale-[1.02] group-hover:border-transparent">
                  <div className="absolute top-0 right-0 w-16 md:w-24 h-16 md:h-24 bg-gradient-to-br from-red-900/20 to-transparent rounded-tr-2xl md:rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-16 md:w-24 h-16 md:h-24 bg-gradient-to-tl from-red-900/20 to-transparent rounded-bl-2xl md:rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="mb-4 md:mb-8 rounded-xl md:rounded-2xl p-4 md:p-6 h-32 md:h-40 lg:h-48 flex items-center justify-center relative">
                    <div className={`relative w-32 md:w-40 lg:w-48 h-full transition-all duration-500 ${hoveredCard === exp.id ? 'scale-110' : 'scale-100'}`}>
                      <Image src={exp.logo} alt={exp.subtitle} fill className="object-contain drop-shadow-2xl" />
                    </div>
                    <div className={`absolute inset-0 bg-red-900/10 rounded-xl md:rounded-2xl blur-xl transition-opacity duration-500 ${hoveredCard === exp.id ? 'opacity-100' : 'opacity-0'}`}></div>
                  </div>
                  <h3 className={`text-xl md:text-2xl lg:text-3xl font-black mb-2 md:mb-3 tracking-tight transition-all duration-500 ${hoveredCard === exp.id ? 'text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-red-700' : 'text-white'}`}>{exp.title}</h3>
                  <p className="text-sm md:text-base lg:text-lg text-gray-400 mb-4 md:mb-6 font-medium leading-snug transition-colors duration-300 group-hover:text-gray-300">{exp.subtitle}</p>
                  <div className="w-0 h-0.5 bg-gradient-to-r from-red-900 to-red-700 mb-4 md:mb-6 group-hover:w-full transition-all duration-500"></div>
                  <div className="flex items-center text-red-900 font-bold text-sm md:text-base group-hover:text-red-700 transition-colors duration-300">
                    <span className="relative">
                      View Details
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-700 group-hover:w-full transition-all duration-300"></span>
                    </span>
                    <svg className="w-4 md:w-5 h-4 md:h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-4 bg-black/95 backdrop-blur-md animate-fadeIn" onClick={() => setSelectedCard(null)}>
          <div className="bg-zinc-950 rounded-none md:rounded-3xl max-w-5xl w-full h-full md:h-[85vh] flex flex-col border-0 md:border-2 border-red-900 animate-slideUp overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex-shrink-0 bg-gradient-to-r from-zinc-900 to-black border-b-2 border-zinc-800 p-4 md:p-6 lg:p-8">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3 md:gap-4 lg:gap-6 flex-1 min-w-0">
                  <div className="flex-shrink-0 w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-lg md:rounded-xl lg:rounded-2xl flex items-center justify-center p-1 md:p-2">
                    <div className="relative w-full h-full">
                      <Image src={selectedCard.logo} alt={selectedCard.subtitle} fill className="object-contain" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-black text-white tracking-tight mb-1 leading-tight">{selectedCard.title}</h3>
                    <p className="text-red-800 font-bold text-xs md:text-sm lg:text-lg xl:text-xl">{selectedCard.subtitle}</p>
                  </div>
                </div>
                <button onClick={() => setSelectedCard(null)} className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full bg-red-900 hover:bg-red-800 active:scale-95 transition-all duration-300">
                  <svg className="w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div ref={scrollContainerRef} className="flex-1 overflow-y-auto modal-scrollbar p-4 md:p-6 lg:p-10">
              <div className="max-w-4xl mx-auto">
                {selectedCard.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-gray-300 leading-relaxed mb-4 md:mb-5 lg:mb-6 text-sm md:text-base lg:text-lg font-light">{paragraph}</p>
                ))}
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