'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedModal, setSelectedModal] = useState(null);
  const [activeTab, setActiveTab] = useState('journey');
  const [bioVisible, setBioVisible] = useState(false);
  const [activeYear, setActiveYear] = useState(0);
  const sectionRef = useRef(null);
  const bioRef = useRef(null);

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

    const bioObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBioVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px',
      }
    );

    const currentRef = sectionRef.current;
    const currentBioRef = bioRef.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    if (currentBioRef) {
      bioObserver.observe(currentBioRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      if (currentBioRef) {
        bioObserver.unobserve(currentBioRef);
      }
    };
  }, []);

  useEffect(() => {
    if (selectedModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedModal]);

  const stats = [
    { 
      value: '24+', 
      label: 'Years Experience', 
      icon: '🏆',
      details: {
        title: '24+ Years of Excellence',
        description: 'Over two decades of pioneering leadership in UAE real estate development, managing projects worth billions of dirhams.',
        highlights: [
          'Started career in UAE real estate in 2001',
          'Led multiple high-profile developments',
          'Established industry best practices',
          'Mentored countless professionals'
        ]
      }
    },
    { 
      value: 'AED 10B+', 
      label: 'Portfolio Value', 
      icon: '💎',
      details: {
        title: 'AED 10+ Billion Portfolio',
        description: 'Successfully managed and delivered an extensive portfolio of premium real estate developments across the UAE.',
        highlights: [
          'Mixed-use developments',
          'Residential communities',
          'Commercial projects',
          'Hospitality developments'
        ]
      }
    },
    { 
      value: '2001', 
      label: 'Started in UAE', 
      icon: '📅',
      details: {
        title: 'UAE Pioneer Since 2001',
        description: 'Among the early professionals who helped shape the modern UAE real estate landscape.',
        highlights: [
          'Witnessed UAE transformation',
          'Part of iconic developments',
          'Built lasting relationships',
          'Contributed to national vision'
        ]
      }
    },
    { 
      value: '100+', 
      label: 'Projects Delivered', 
      icon: '🏗️',
      details: {
        title: '100+ Successful Projects',
        description: 'A proven track record of delivering exceptional projects on time and exceeding stakeholder expectations.',
        highlights: [
          'Residential developments',
          'Commercial towers',
          'Master-planned communities',
          'Infrastructure projects'
        ]
      }
    }
  ];

  const expertise = [
    {
      title: 'Strategic Planning',
      description: 'Long-term vision and strategic development planning for large-scale real estate projects',
      icon: '🎯',
    },
    {
      title: 'Project Management',
      description: 'End-to-end project oversight from conception to completion and handover',
      icon: '📊',
    },
    {
      title: 'Financial Modeling',
      description: 'Comprehensive financial analysis and investment structuring for maximum ROI',
      icon: '💰',
    },
    {
      title: 'Stakeholder Management',
      description: 'Building and maintaining relationships with investors, partners, and government entities',
      icon: '🤝',
    },
    {
      title: 'Design Management',
      description: 'Coordinating architectural and engineering excellence across all project phases',
      icon: '🏛️',
    },
    {
      title: 'Sustainability',
      description: 'Implementing sustainable practices and green building solutions in development',
      icon: '🌱',
    }
  ];

  const achievements = [
    {
      year: '2020',
      title: 'Masters in Real Estate',
      subtitle: 'Heriot-Watt University',
      description: 'Advanced expertise in real estate development and management',
      icon: '🎓',
      gradient: 'from-red-900 to-red-800',
    },
    {
      year: '2007',
      title: 'Executive Leadership',
      subtitle: 'Project Management Certification',
      description: 'Strategic leadership in complex project environments',
      icon: '💼',
      gradient: 'from-red-800 to-red-700',
    },
    {
      year: '2001',
      title: 'Architectural Engineering',
      subtitle: 'Bachelor of Science',
      description: 'Technical foundation in design and construction',
      icon: '🏗️',
      gradient: 'from-red-700 to-red-600',
    },
    {
      year: '2001-Present',
      title: 'UAE Real Estate Pioneer',
      subtitle: 'MA VISION Developments',
      description: 'Leading transformative developments across the UAE',
      icon: '🌟',
      gradient: 'from-red-600 to-red-500',
    }
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'Committed to delivering the highest quality in every project',
      icon: '⭐',
      color: 'from-red-900 to-red-800',
    },
    {
      title: 'Innovation',
      description: 'Embracing cutting-edge solutions and forward-thinking strategies',
      icon: '💡',
      color: 'from-red-800 to-red-700',
    },
    {
      title: 'Integrity',
      description: 'Operating with transparency, honesty, and ethical standards',
      icon: '🛡️',
      color: 'from-red-700 to-red-600',
    },
    {
      title: 'Sustainability',
      description: 'Building for today while protecting tomorrow',
      icon: '🌍',
      color: 'from-red-600 to-red-500',
    }
  ];

  const tabs = [
    { id: 'journey', label: 'My Journey', icon: '🚀' },
    { id: 'milestones', label: 'Milestones', icon: '🎯' },
    { id: 'values', label: 'Values', icon: '💎' },
    { id: 'expertise', label: 'Expertise', icon: '⭐' }
  ];

  const careerJourney = [
    {
      year: "2001",
      title: "The Beginning",
      role: "Entry into UAE Real Estate",
      company: "",
      description: "Embarked on a transformative journey in UAE's property development sector during one of the region's most dynamic growth periods.",
      achievements: [
        "Established foundational expertise in development",
        "Built strategic industry relationships",
        "Gained comprehensive project lifecycle knowledge"
      ],
      color: "from-red-950 to-red-900"
    },
    {
      year: "2001-2011",
      title: "Foundation Decade",
      role: "Real Estate Professional",
      company: "",
      description: "A decade of intensive learning and hands-on experience across all facets of property development.",
      achievements: [
        "Mastered project feasibility and planning",
        "Developed financial modeling expertise",
        "Led multiple successful projects"
      ],
      color: "from-red-900 to-red-800"
    },
    {
      year: "2011-2024",
      title: "Leadership Era",
      role: "Senior Leadership",
      company: "PDC Consult",
      description: "Over 13 years of strategic leadership, shaping major developments and establishing industry standards.",
      achievements: [
        "Managed portfolio exceeding AED 10 billion",
        "Advised VIP clients on transformative projects",
        "Built reputation as trusted industry expert"
      ],
      color: "from-red-800 to-red-700"
    },
    {
      year: "2024-Present",
      title: "Visionary Leadership",
      role: "Chairman",
      company: "MA VISION Developments",
      description: "Leading one of UAE's premier homegrown professional development firms into the future.",
      achievements: [
        "Driving strategic growth and innovation",
        "Pioneering sustainable development practices",
        "Mentoring next generation of leaders"
      ],
      color: "from-red-700 to-red-600"
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
          <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-red-900/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-red-900/10 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 py-12 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-block mb-4 md:mb-6">
                <span className="px-4 md:px-6 py-2 md:py-3 bg-red-900/20 border border-red-900 text-red-500 font-bold text-xs md:text-sm uppercase tracking-wider rounded-full">
                  About Me
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white mb-4 md:mb-6 tracking-tighter leading-tight animate-fadeIn">
                MARWA{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                  ABDELAZIZ
                </span>
              </h1>
              <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mb-4 md:mb-8"></div>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
                Chairman of MA VISION Developments | Pioneering Excellence in Real Estate Since 2001
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="absolute -inset-4 bg-gradient-to-r from-red-900/30 to-red-700/30 rounded-2xl md:rounded-3xl blur-2xl"></div>
                <div className="relative aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden border-2 border-red-900">
                  <Image src="/image1.png" alt="Marwa Abdelaziz" fill className="object-cover" quality={100} priority />
                </div>
              </div>

              <div className="order-1 lg:order-2 space-y-4 md:space-y-6">
                <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl md:rounded-3xl p-6 md:p-8">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-red-900 rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-2xl">
                      🎯
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-black text-white mb-2">Mission</h3>
                      <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                        To deliver exceptional real estate developments that create long-term value and contribute to the UAE&apos;s vision for sustainable urban growth.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl md:rounded-3xl p-6 md:p-8">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-red-900 rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-2xl">
                      👁️
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-black text-white mb-2">Vision</h3>
                      <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                        To be recognized as the leading force in transformative real estate development, setting new standards for excellence and innovation in the region.
                      </p>
                    </div>
                  </div>
                </div>
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
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
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
          .animate-float {
            animation: float 20s ease-in-out infinite;
          }
          .animate-float-delayed {
            animation: float-delayed 25s ease-in-out infinite;
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out;
          }
          .animate-slideUp {
            animation: slideUp 0.4s ease-out;
          }
          .modal-scrollbar::-webkit-scrollbar {
            width: 4px;
          }
          .modal-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .modal-scrollbar::-webkit-scrollbar-thumb {
            background: #7f1d1d;
            border-radius: 10px;
          }
          .modal-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #991b1b;
          }
          .modal-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: #7f1d1d transparent;
          }
        `}</style>
      </section>

      {/* Interactive Stats Section */}
      <section className="relative py-12 md:py-20 px-4 md:px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Impact in <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Numbers</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="relative bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-xl md:rounded-2xl p-4 md:p-6 text-center">
                <div className="relative">
                  <div className="text-3xl md:text-4xl mb-2">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-black text-red-500 mb-1 md:mb-2">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wide">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Cinematic Biography Section */}
      <section ref={bioRef} className="relative py-20 md:py-32 px-4 md:px-6 bg-black overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/5 via-black to-black"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-700/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Section Header */}
          <div className={`text-center mb-16 md:mb-24 transition-all duration-1000 ${bioVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-4">
              <span className="px-6 py-2 bg-red-900/20 border border-red-900/50 text-red-500 font-bold text-sm uppercase tracking-widest rounded-full">
                The Story
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6">
              A Journey of <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Excellence</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              From ambitious beginnings to industry leadership — a 24-year legacy of transforming visions into iconic developments
            </p>
          </div>

          {/* Immersive Content Grid */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left: Portrait & Quick Facts */}
            <div className={`lg:col-span-2 transition-all duration-1000 delay-200 ${bioVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="sticky top-24 space-y-6">
                {/* Hero Portrait */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-red-500 to-red-700 rounded-3xl blur opacity-25"></div>
                  <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border-2 border-red-900/50">
                    <Image
                      src="/image3.png"
                      alt="Marwa Abdelaziz"
                      fill
                      className="object-cover"
                      quality={100}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    {/* Floating Info Badge */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
                        <h3 className="text-2xl font-black text-white mb-1">Marwa Abdelaziz</h3>
                        <p className="text-red-500 font-bold text-sm">Chairman, MA VISION Developments</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-zinc-900 to-black border border-red-900/30 rounded-2xl p-4">
                    <div className="text-3xl font-black text-red-500 mb-1">24+</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">Years</div>
                  </div>
                  <div className="bg-gradient-to-br from-zinc-900 to-black border border-red-900/30 rounded-2xl p-4">
                    <div className="text-3xl font-black text-red-500 mb-1">10B+</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">AED Value</div>
                  </div>
                  <div className="bg-gradient-to-br from-zinc-900 to-black border border-red-900/30 rounded-2xl p-4">
                    <div className="text-3xl font-black text-red-500 mb-1">100+</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">Projects</div>
                  </div>
                  <div className="bg-gradient-to-br from-zinc-900 to-black border border-red-900/30 rounded-2xl p-4">
                    <div className="text-3xl font-black text-red-500 mb-1">2001</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">Started</div>
                  </div>
                </div>

                {/* Connect Button */}
                <a 
                  href="https://www.linkedin.com/in/marwaabdelazizofficial/?originalSubdomain=ae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-4 px-6 rounded-2xl text-center"
                >
                  <div className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    Connect on LinkedIn
                  </div>
                </a>
              </div>
            </div>

            {/* Right: Story Content */}
            <div className={`lg:col-span-3 space-y-8 transition-all duration-1000 delay-400 ${bioVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              {/* Introduction */}
              <div className="bg-gradient-to-br from-zinc-900/80 to-black/80 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-6">The Beginning</h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    Born in <span className="text-white font-semibold">Egypt</span>, Marwa Abdelaziz relocated to the <span className="text-white font-semibold">United Arab Emirates</span> in 2001 — a pivotal moment that would define her extraordinary career in real estate development.
                  </p>
                  <p>
                    With over <span className="text-red-500 font-bold">two decades of experience</span>, she has become a cornerstone of the UAE's property development landscape, overseeing a portfolio exceeding <span className="text-red-500 font-bold">AED 10 billion</span> as Chairman of MA VISION Developments.
                  </p>
                  <p>
                    Her journey represents not just professional success, but a commitment to shaping the future of urban development in one of the world's most dynamic markets.
                  </p>
                </div>
              </div>

              {/* Career Timeline - Interactive */}
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-8">Career Milestones</h3>
                
                <div className="space-y-6">
                  {careerJourney.map((item, index) => (
                    <div 
                      key={index}
                      className="relative"
                      onMouseEnter={() => setActiveYear(index)}
                    >
                      <div className={`bg-gradient-to-br from-zinc-900/90 to-black/90 border-2 rounded-3xl p-6 md:p-8 transition-all duration-500 ${activeYear === index ? 'border-red-500 scale-[1.02]' : 'border-zinc-800'}`}>
                        <div className="flex flex-col md:flex-row md:items-start gap-6">
                          {/* Year Badge */}
                          <div className={`flex-shrink-0 bg-gradient-to-r ${item.color} rounded-2xl p-6 min-w-[140px]`}>
                            <div className="text-center">
                              <div className="text-3xl font-black text-white mb-2">{item.year}</div>
                              <div className="text-xs text-white/80 uppercase tracking-wider">{item.title}</div>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                            <div className="mb-4">
                              <h4 className="text-xl md:text-2xl font-black text-white mb-2">{item.role}</h4>
                              {item.company && (
                                <p className="text-red-500 font-bold text-sm mb-3">{item.company}</p>
                              )}
                              <p className="text-gray-400 leading-relaxed">{item.description}</p>
                            </div>

                            {/* Achievements */}
                            <div className="space-y-2">
                              {item.achievements.map((achievement, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <div className="flex-shrink-0 w-1.5 h-1.5 bg-red-500 rounded-full mt-2"></div>
                                  <span className="text-sm text-gray-400">{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expertise Showcase */}
              <div className="bg-gradient-to-br from-red-950/20 to-red-900/10 border border-red-900/30 rounded-3xl p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-6">Core Expertise</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Strategic Planning & Vision",
                    "Financial Modeling & Analysis",
                    "Project Management",
                    "Stakeholder Relations",
                    "Design Coordination",
                    "Sustainable Development",
                    "Market Analysis",
                    "Risk Management",
                    "Master Planning",
                    "Cost Consultancy",
                    "Legal & Compliance",
                    "Team Leadership"
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center gap-3 bg-black/40 border border-red-900/20 rounded-xl p-4">
                      <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-300 text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Statement */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-900/10 rounded-3xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-zinc-900 to-black border border-red-900/50 rounded-3xl p-8 md:p-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 text-4xl">💡</div>
                    <div>
                      <h3 className="text-2xl font-black text-white mb-3">Philosophy & Vision</h3>
                      <p className="text-lg text-gray-300 leading-relaxed italic">
                        "Leadership is not just about building portfolios — it's about building futures, one strategic decision at a time."
                      </p>
                    </div>
                  </div>
                  <div className="h-px bg-red-900/30 my-6"></div>
                  <p className="text-gray-400 leading-relaxed">
                    This philosophy has guided every project, every partnership, and every decision throughout a remarkable 24-year journey. It represents a commitment to excellence that goes beyond profit margins to create lasting value for communities, stakeholders, and the UAE's urban landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* eBook Section */}
      <section className="relative py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-br from-zinc-900 via-black to-zinc-900 border-2 border-red-900 rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left - eBook Cover */}
              <div className="relative min-h-[350px] md:min-h-[450px] lg:min-h-[550px] flex items-center justify-center bg-gradient-to-br from-zinc-900 to-black p-8 md:p-12 lg:p-16">
                <div className="relative w-full max-w-[240px] md:max-w-[280px] lg:max-w-[320px] aspect-[3/4]">
                  <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-br from-red-900/30 to-red-700/30 rounded-3xl blur-2xl"></div>
                  <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden border-2 border-red-900/50 shadow-2xl shadow-red-900/20">
                    <Image src="/ebook-cover.jpg" alt="70 Ways to Live Your Dream Life" fill className="object-contain p-2" quality={100} priority />
                  </div>
                </div>
                <div className="absolute top-4 left-4 md:top-6 md:left-6">
                  <span className="px-3 md:px-4 py-1.5 md:py-2 bg-red-900 text-white font-bold text-xs md:text-sm uppercase tracking-wider rounded-full shadow-lg">
                    View Online
                  </span>
                </div>
              </div>

              {/* Right - eBook Details */}
              <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight leading-tight">
                    70 Ways to Live Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Dream Life</span>
                  </h2>
                  <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-red-500 to-red-700 mb-6"></div>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
                    Discover my comprehensive guide on real estate development, strategic planning, personal growth, and building lasting value through proven strategies and real-world insights.
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3 md:space-y-4 mb-8">
                  {[
                    "70 actionable strategies for success",
                    "24+ years of industry insights",
                    "Real-world case studies & examples",
                    "Life-changing wisdom & frameworks"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-red-900 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm md:text-base text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a href="https://e-bookdemo.web.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 w-full md:w-auto px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-base md:text-lg rounded-full">
                  <svg className="w-5 md:w-6 h-5 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View eBook Online
                </a>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-zinc-800">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-black text-red-500 mb-1">100+</div>
                    <div className="text-xs md:text-sm text-gray-400 uppercase">Pages</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-black text-red-500 mb-1">50K+</div>
                    <div className="text-xs md:text-sm text-gray-400 uppercase">Readers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-black text-red-500 mb-1">4.9★</div>
                    <div className="text-xs md:text-sm text-gray-400 uppercase">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabbed Content Section */}
      <section ref={sectionRef} className="relative py-12 md:py-20 lg:py-32 px-4 md:px-6 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-sm md:text-base uppercase tracking-wider transition-all duration-300 ${activeTab === tab.id ? 'bg-red-900 text-white' : 'bg-zinc-800 text-gray-400'}`}>
                <span className="text-lg md:text-xl">{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>

          <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {activeTab === 'journey' && (
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 md:mb-8 tracking-tight">
                  My <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Journey</span>
                </h2>
                <div className="space-y-4 md:space-y-6 text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed bg-gradient-to-br from-zinc-900/50 to-black/50 border border-zinc-800 rounded-2xl md:rounded-3xl p-6 md:p-10">
                  <p>
                    As Chairman of MA VISION Developments, I bring over two decades of experience in leading 
                    large-scale real estate initiatives across the UAE, driving a portfolio worth more than 
                    AED 10 billion. My work integrates strategic foresight with operational excellence — 
                    overseeing all phases of development, from land acquisition and design to financial 
                    management and execution.
                  </p>
                  <p>
                    Since entering the UAE&apos;s property development sector in 2001, I have built an 
                    unparalleled track record in delivering exceptional results. My experience spans the 
                    full project lifecycle—from site selection and feasibility analysis to financial 
                    modeling, acquisition, master planning, design management, and tendering.
                  </p>
                  <p>
                    I believe in creating long-term value through sustainable and innovative urban solutions 
                    that redefine quality living. By fostering collaboration and data-led decision-making, 
                    I aim to ensure every project contributes meaningfully to the nation&apos;s evolving 
                    architectural and economic vision.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'milestones' && (
              <div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 md:mb-8 tracking-tight">
                  Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Milestones</span>
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className={`relative bg-gradient-to-br ${achievement.gradient} rounded-xl md:rounded-2xl p-6 md:p-8 overflow-hidden`}>
                      <div className="absolute top-0 right-0 text-8xl md:text-9xl opacity-5 font-black">{achievement.icon}</div>
                      <div className="relative z-10">
                        <div className="text-4xl md:text-5xl mb-4">{achievement.icon}</div>
                        <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-white font-black text-sm mb-4">{achievement.year}</div>
                        <h4 className="text-xl md:text-2xl font-black text-white mb-2">{achievement.title}</h4>
                        <p className="text-sm md:text-base text-white/80 font-semibold mb-3">{achievement.subtitle}</p>
                        <p className="text-sm text-white/70">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'values' && (
              <div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 md:mb-8 tracking-tight">
                  Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Values</span>
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  {values.map((value, index) => (
                    <div key={index} className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-xl md:rounded-2xl p-6 md:p-8">
                      <div className="text-3xl md:text-4xl mb-3 md:mb-4">{value.icon}</div>
                      <h3 className="text-xl md:text-2xl font-black text-white mb-2 md:mb-3">{value.title}</h3>
                      <p className="text-sm md:text-base text-gray-400 leading-relaxed">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'expertise' && (
              <div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 md:mb-8 tracking-tight">
                  Areas of <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Expertise</span>
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {expertise.map((item, index) => (
                    <div key={index} className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-xl md:rounded-2xl p-4 md:p-6">
                      <div className="text-3xl md:text-4xl mb-3 md:mb-4">{item.icon}</div>
                      <h4 className="text-lg md:text-xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-sm md:text-base text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Philosophy Quote Section */}
      <section className="relative py-12 md:py-20 px-4 md:px-6 bg-black">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-zinc-900 to-black border-2 border-red-900 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-red-900/10 rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="mb-4 md:mb-6">
                <svg className="w-10 md:w-16 h-10 md:h-16 text-red-900 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 md:mb-6">My Philosophy</h3>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed italic">
                &quot;Leadership is not just about building portfolios—it&apos;s about building futures, 
                one strategic decision at a time.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6">
            Let&apos;s Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Future Together</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8">
            Interested in collaborating or learning more about my work?
          </p>
          <a href="https://www.linkedin.com/in/marwaabdelazizofficial/?originalSubdomain=ae" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 md:gap-3 px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-base md:text-lg rounded-full">
            <svg className="w-5 md:w-6 h-5 md:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            Connect on LinkedIn
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}