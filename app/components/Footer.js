'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribe email:', email);
    setEmail('');
  };

  const footerLinks = {
    company: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Articles', href: '/articles' },
      { name: 'Ebook', href: '/ebook' },
      { name: 'Contact', href: '/contact' },
    ],
    connect: [
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/marwaabdelazizofficial/?originalSubdomain=ae' },
      { name: 'YouTube', href: 'https://www.youtube.com/@marwaabdelaziz8960' },
      { name: 'Email', href: 'mailto:contact@marwaabdelaziz.com' },
    ],
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      href: 'https://www.linkedin.com/in/marwaabdelazizofficial/?originalSubdomain=ae'
    },
    {
      name: 'YouTube',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      href: 'https://www.youtube.com/@marwaabdelaziz8960'
    },
    {
      name: 'Email',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      href: 'mailto:contact@marwaabdelaziz.com'
    },
  ];

  return (
    <footer className="relative bg-black border-t border-zinc-900 overflow-hidden">
      
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-red-900/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-900/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Logo & Description */}
          <div className="lg:col-span-5">
            <div className="mb-8">
              <div className="relative w-64 h-24">
                <Image
                  src="/signature-logo.png"
                  alt="Marwa Abdelaziz Signature"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
              Chairman of MA VISION Developments. Over 20 years of experience in UAE real estate development, 
              managing projects worth AED 10+ billion.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-900 text-gray-400 hover:bg-red-900 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Company / Explore Links */}
            <div>
              <h3 className="text-white font-black text-lg mb-6 uppercase tracking-wider">
                Explore
              </h3>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-red-800 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-red-800 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect Links */}
            <div>
              <h3 className="text-white font-black text-lg mb-6 uppercase tracking-wider">
                Connect
              </h3>
              <ul className="space-y-4">
                {footerLinks.connect.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-red-800 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-red-800 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Marwa Abdelaziz. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
