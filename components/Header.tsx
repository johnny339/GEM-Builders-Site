'use client';

import Link from 'next/link';
import { useState } from 'react';

interface HeaderProps {
  transparent?: boolean;
}

export default function Header({ transparent = false }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linkClass = transparent 
    ? 'text-white hover:text-gray-300' 
    : 'text-gray-900 hover:text-gray-600';

  return (
    <header className={transparent ? "bg-transparent" : "bg-white border-b border-gray-200"}>
      <nav className="px-4 md:px-8 py-3 md:py-4">
        <div className="flex items-center justify-between md:justify-between">
          {/* Mobile: Empty space for balance */}
          <div className="md:hidden w-10"></div>
          
          {/* Logo - Centered on mobile, left on desktop */}
          <Link href="/" className="flex-shrink-0 md:mr-auto">
            <img
              src="/GEM-company-logo.png"
              alt="GEM Builders Logo"
              className={`logo-img ${transparent ? 'brightness-0 invert' : ''}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 nav-links">
            <Link href="/" className={`${linkClass} transition-colors font-medium`}>
              Home
            </Link>
            <Link href="/services" className={`${linkClass} transition-colors`}>
              Services
            </Link>
            <Link href="/projects" className={`${linkClass} transition-colors`}>
              Projects
            </Link>
            <Link href="/process" className={`${linkClass} transition-colors`}>
              Process
            </Link>
            <Link href="/about" className={`${linkClass} transition-colors`}>
              About
            </Link>

            {/* Contact Button */}
            <Link 
              href="/contact"
              className={`px-4 lg:px-6 py-2 border-2 transition-colors ${
                transparent 
                  ? 'border-white text-white hover:bg-white hover:text-black' 
                  : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 ${transparent ? 'text-white' : 'text-gray-900'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <>
            {/* Dark Overlay Background */}
            <div 
              className="fixed inset-0 bg-black/80 z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            ></div>
            
            {/* Mobile Menu Panel */}
            <div className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-white z-50 md:hidden shadow-2xl">
              <div className="flex flex-col h-full">
                {/* Close Button */}
                <div className="flex justify-end p-6 border-b border-gray-200">
                  <button 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-900 p-2"
                    aria-label="Close menu"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Menu Links */}
                <nav className="flex-1 overflow-y-auto p-6">
                  <div className="flex flex-col space-y-6">
                    <Link 
                      href="/" 
                      className="text-gray-900 hover:text-gray-600 transition-colors font-semibold text-xl"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <Link 
                      href="/services" 
                      className="text-gray-900 hover:text-gray-600 transition-colors text-xl"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Services
                    </Link>
                    <Link 
                      href="/projects" 
                      className="text-gray-900 hover:text-gray-600 transition-colors text-xl"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Projects
                    </Link>
                    <Link 
                      href="/process" 
                      className="text-gray-900 hover:text-gray-600 transition-colors text-xl"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Process
                    </Link>
                    <Link 
                      href="/about" 
                      className="text-gray-900 hover:text-gray-600 transition-colors text-xl"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      About
                    </Link>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <Link 
                        href="/contact"
                        className="block px-6 py-3 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white text-center transition-colors font-semibold"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}