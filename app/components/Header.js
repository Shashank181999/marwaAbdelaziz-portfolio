'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set background after 50px scroll
      setScrolled(currentScrollY > 50);
      
      // Show/hide header after scrolling down
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowHeader(false); // scrolling down
      } else {
        setShowHeader(true); // scrolling up
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ FIX: Disable body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Articles', href: '/articles' },
    { name: 'Ebook', href: '/ebook' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 overflow-visible transition-transform duration-500 ease-in-out transform ${
        scrolled || menuOpen
          ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-red-900/10'
          : 'bg-transparent'
      } ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <nav className="container mx-auto px-6 py-1 overflow-visible">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative">
            {/* ✅ FIXED: Smaller logo on mobile */}
            <div className="relative">
              <Image
                src="/signature-logo.png"
                alt="Marwa Abdelaziz"
                width={120}  // Mobile: smaller (was 160)
                height={38}  // Mobile: smaller (was 50)
                priority
                className="md:hidden"
              />
              <Image
                src="/signature-logo.png"
                alt="Marwa Abdelaziz"
                width={160}  // Desktop: original size
                height={50}
                priority
                className="hidden md:block"
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative px-4 py-2 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10 text-sm font-bold tracking-wider text-white uppercase transition-colors duration-300 group-hover:text-red-500">
                  {item.name}
                </span>
                <div className="absolute inset-0 bg-white/5 scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 relative px-6 py-2 bg-red-900 text-white font-bold text-sm tracking-wider uppercase overflow-hidden group hover:bg-red-800 transition-all duration-300 rounded-full"
            >
              <span className="relative z-10">Let&apos;s Talk</span>
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* ✅ FIXED: Mobile menu - no flute effect */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            menuOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-2 pb-4">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="group relative px-4 py-2 bg-white/5 hover:bg-white/10 transition-colors duration-300 rounded-xl"
                style={{
                  animationDelay: `${index * 50}ms`,
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateX(0)' : 'translateX(-20px)',
                  transition: `all 300ms ease ${index * 50}ms`,
                }}
              >
                <span className="text-lg font-bold tracking-wide text-white uppercase">
                  {item.name}
                </span>
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-900 scale-y-0 transition-transform duration-300 group-hover:scale-y-100 rounded-l-xl" />
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-6 py-2 bg-red-900 text-white font-bold text-lg tracking-wide uppercase hover:bg-red-800 hover:shadow-lg hover:shadow-red-900/50 transition-all duration-300 rounded-full text-center"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </nav>

      <div
        className={`h-px bg-gradient-to-r from-transparent via-red-900/50 to-transparent transition-opacity duration-500 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </header>
  );
}