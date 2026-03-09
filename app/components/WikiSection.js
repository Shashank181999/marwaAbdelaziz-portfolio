'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function WikiSection() {
  const [isVisible, setIsVisible] = useState(false);
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

  const infoBoxData = [
    { 
      label: "Born", 
      value: "Egypt 🇪🇬",
      subtext: "Egyptian national"
    },
    { 
      label: "Residence", 
      value: "Dubai, UAE 🇦🇪",
      subtext: "Based in United Arab Emirates"
    },
    { 
      label: "Nationality", 
      value: "Egyptian"
    },
    { 
      label: "Occupation", 
      value: "Business Executive",
      subtext: "Real Estate Developer"
    },
    { 
      label: "Title", 
      value: "Chairman",
      subtext: "MA VISION Developments"
    },
    { 
      label: "Years Active", 
      value: "2001 - Present",
      subtext: "24 years in industry"
    },
    { 
      label: "Known For", 
      value: "AED 10+ Billion Portfolio",
      subtext: "UAE Real Estate Development"
    },
    { 
      label: "Notable Roles", 
      value: "PDC Consult (13+ years)",
      subtext: "Senior Leadership Position"
    },
  ];

  const achievements = [
    "Oversees portfolio exceeding AED 10 billion",
    "24 years of experience in UAE property development",
    "Pioneer in UAE real estate sector since 2001",
    "Led multiple large-scale development projects",
    "Expert in sustainable urban development",
    "Strategic advisor for VIP real estate clients"
  ];

  return (
    <section ref={sectionRef} className="py-12 md:py-28 px-4 md:px-6 bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-6 md:gap-12">
          {/* Main Content - Left Side (2 columns) */}
          <div className="lg:col-span-2 space-y-4 md:space-y-8">
            {/* Header */}
            <div 
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-3xl md:text-7xl font-black text-white mb-2 md:mb-4 tracking-tighter">
                MARWA <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-red-700">ABDELAZIZ</span>
              </h2>
              <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-red-900 to-red-700 mb-3 md:mb-6"></div>
              <p className="text-sm md:text-xl text-gray-400 font-light italic">
                Egyptian Business Executive & Real Estate Developer Based in Dubai
              </p>
            </div>

            {/* Introduction */}
            <div 
              className={`bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl md:rounded-3xl p-5 md:p-10 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="space-y-3 md:space-y-6 text-gray-300 leading-relaxed text-sm md:text-lg font-light">
                <p>
                  <span className="text-white font-bold text-lg md:text-2xl">Marwa Abdelaziz</span> <span className="text-gray-500 text-xs md:text-base">(Arabic: مروة عبد العزيز)</span> is an Egyptian business executive and real estate developer 
                  currently based in <span className="text-white font-semibold">Dubai, United Arab Emirates</span>. Born in <span className="text-white font-semibold">Egypt</span>, 
                  she has established herself as a prominent figure in the UAE's property development sector, 
                  serving as <span className="text-red-800 font-bold">Chairman of MA VISION Developments</span>.
                </p>
                <p>
                  With over <span className="text-white font-semibold">two decades of experience</span> in the UAE real estate market, 
                  Marwa oversees a development portfolio exceeding <span className="text-red-800 font-bold">AED 10 billion</span>. 
                  Her career in the Emirates began in 2001, making her one of the pioneering women in the region's 
                  property development industry during a transformative period of growth.
                </p>
              </div>
            </div>

            {/* Early Life and Education */}
            <div 
              className={`bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl md:rounded-3xl p-5 md:p-10 transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="text-xl md:text-3xl font-black text-white mb-3 md:mb-6 tracking-tight">Background</h3>
              <div className="space-y-3 md:space-y-6 text-gray-300 leading-relaxed text-sm md:text-lg font-light">
                <p>
                  Marwa Abdelaziz was born in <span className="text-white font-semibold">Egypt</span> and later 
                  relocated to the <span className="text-white font-semibold">United Arab Emirates</span>, where she 
                  has built her career in real estate development. Based in <span className="text-white font-semibold">Dubai</span>, 
                  she has become an integral part of the UAE's business community, contributing significantly to the 
                  nation's real estate sector over the past 24 years.
                </p>
              </div>
            </div>

            {/* Career */}
            <div 
              className={`bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl md:rounded-3xl p-5 md:p-10 transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="text-xl md:text-3xl font-black text-white mb-3 md:mb-6 tracking-tight">Career</h3>
              <div className="space-y-4 md:space-y-6">
                <div className="space-y-2 md:space-y-4">
                  <h4 className="text-lg md:text-2xl font-bold text-white">MA VISION Developments (Present)</h4>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    As Chairman of MA VISION Developments, Marwa brings her extensive expertise to lead one of the UAE's 
                    prominent homegrown professional development firms. The company specializes in project development, 
                    project management, cost consultancy, and strategic advisory services.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    Her responsibilities encompass the full spectrum of development activities, including site identification, 
                    feasibility planning, financial structuring, acquisition, master planning, design management, and tendering. 
                    Under her leadership, MA VISION has demonstrated consistent growth and serves VIP clients on transformative 
                    projects that shape communities and elevate urban living.
                  </p>
                </div>
                <div className="h-px bg-zinc-800 my-3 md:my-6"></div>
                <div className="space-y-2 md:space-y-4">
                  <h4 className="text-lg md:text-2xl font-bold text-white">PDC Consult (13+ Years)</h4>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    Prior to her current role, Marwa held a senior leadership position at PDC Consult for over 13 years, 
                    where she built foundational expertise in property development, project management, and strategic consulting 
                    across diverse real estate sectors. This experience established her as a trusted advisor in the industry.
                  </p>
                </div>
                <div className="h-px bg-zinc-800 my-3 md:my-6"></div>
                <div className="space-y-2 md:space-y-4">
                  <h4 className="text-lg md:text-2xl font-bold text-white">Early Career (2001-2011)</h4>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    Marwa entered the UAE property development sector in 2001, establishing herself during one of the 
                    region's most dynamic growth periods. Over the subsequent decade, she gained comprehensive experience 
                    spanning the complete project lifecycle, from initial concept through to final delivery.
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Expertise */}
            <div 
              className={`bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl md:rounded-3xl p-5 md:p-10 transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="text-xl md:text-3xl font-black text-white mb-3 md:mb-6 tracking-tight">Professional Expertise</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-lg mb-4 md:mb-6">
                Marwa's expertise encompasses comprehensive knowledge across all phases of property development:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                {[
                  "Site Identification & Analysis",
                  "Feasibility Planning",
                  "Financial Structuring & Modeling",
                  "Property Acquisition",
                  "Master Planning",
                  "Design Management",
                  "Project Management",
                  "Cost Consultancy",
                  "Strategic Advisory",
                  "Sustainable Development",
                  "Tendering & Procurement",
                  "Client Relationship Management"
                ].map((expertise, index) => (
                  <div key={index} className="flex items-center gap-2 md:gap-3 group hover:translate-x-1 transition-transform duration-300">
                    <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-red-900 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm md:text-base">{expertise}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div 
              className={`bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl md:rounded-3xl p-5 md:p-10 transition-all duration-1000 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="text-xl md:text-3xl font-black text-white mb-3 md:mb-6 tracking-tight">Notable Achievements</h3>
              <div className="space-y-2 md:space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-2 md:gap-3 group hover:translate-x-1 transition-transform duration-300">
                    <div className="flex-shrink-0 mt-1 md:mt-2">
                      <svg className="w-4 md:w-5 h-4 md:h-5 text-red-900" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300 text-sm md:text-base">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Right Side (1 column) */}
          <div className="space-y-4 md:space-y-6">
            {/* Profile Card with Wikipedia-style Infobox */}
            <div 
              className={`bg-gradient-to-br from-zinc-900 to-black border-2 border-red-900 rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Profile Image */}
              <div className="relative aspect-square">
                <Image
                  src="/image5.png"
                  alt="Marwa Abdelaziz"
                  fill
                  className="object-cover"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
                  <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
                    Marwa Abdelaziz
                  </h3>
                  <p className="text-gray-300 text-xs md:text-sm">
                    مروة عبد العزيز
                  </p>
                </div>
              </div>

              {/* Info Box - Wikipedia Style */}
              <div className="p-4 md:p-6">
                <div className="space-y-3 md:space-y-4">
                  {infoBoxData.map((item, index) => (
                    <div key={index}>
                      <div className="flex flex-col">
                        <span className="text-xs text-red-800 uppercase tracking-wider font-bold mb-1">
                          {item.label}
                        </span>
                        <span className="text-sm md:text-base text-white font-semibold">
                          {item.value}
                        </span>
                        {item.subtext && (
                          <span className="text-xs text-gray-400 mt-0.5">
                            {item.subtext}
                          </span>
                        )}
                      </div>
                      {index < infoBoxData.length - 1 && (
                        <div className="h-px bg-zinc-800 mt-3 md:mt-4"></div>
                      )}
                    </div>
                  ))}
                </div>

                {/* LinkedIn Button */}
                <a 
                  href="https://www.linkedin.com/in/marwaabdelazizofficial/?originalSubdomain=ae" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 md:mt-6 w-full flex items-center justify-center gap-2 bg-red-900 hover:bg-red-800 text-white font-bold py-2.5 md:py-3 px-4 md:px-6 rounded-xl transition-all duration-300 hover:scale-105 text-sm md:text-base"
                >
                  <svg className="w-4 md:w-5 h-4 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  View LinkedIn
                </a>
              </div>
            </div>

            {/* External Links */}
            <div 
              className={`bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl md:rounded-3xl p-4 md:p-6 transition-all duration-1000 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="text-lg md:text-xl font-black text-white mb-3 md:mb-4 tracking-tight">External Links</h3>
              <div className="space-y-2 md:space-y-3">
                <a 
                  href="https://www.linkedin.com/in/marwaabdelazizofficial/?originalSubdomain=ae" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-red-800 transition-colors duration-300 group"
                >
                  <svg className="w-3.5 md:w-4 h-3.5 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span className="text-xs md:text-sm group-hover:underline">LinkedIn Profile</span>
                </a>
                <a 
                  href="https://mavdevelopments.com" 
                  className="flex items-center gap-2 text-gray-300 hover:text-red-800 transition-colors duration-300 group"
                >
                  <svg className="w-3.5 md:w-4 h-3.5 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span className="text-xs md:text-sm group-hover:underline">MA VISION Developments</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}