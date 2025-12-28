'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
      <nav className="px-4 md:px-8 py-3 md:py-4 lg:py-5">
        <div className="flex items-center justify-between md:justify-between max-w-7xl mx-auto">
          {/* Mobile: Empty space for balance */}
          <div className="md:hidden w-10"></div>
          
          {/* Logo - Centered on mobile, left on desktop - BIGGER SIZE */}
          <Link href="/" className="flex-shrink-0 md:mr-auto">
            <img
              src="/GEM-company-logo.png"
              alt="GEM Builders Logo"
              className={`h-50 w-auto ${transparent ? 'brightness-0 invert' : ''}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10 nav-links">
            <Link href="/" className={`${linkClass} transition-colors font-medium text-base lg:text-lg`}>
              Home
            </Link>
            <Link href="/services" className={`${linkClass} transition-colors text-base lg:text-lg`}>
              Services
            </Link>
            <Link href="/projects" className={`${linkClass} transition-colors text-base lg:text-lg`}>
              Projects
            </Link>
            <Link href="/process" className={`${linkClass} transition-colors text-base lg:text-lg`}>
              Process
            </Link>
            <Link href="/about" className={`${linkClass} transition-colors text-base lg:text-lg`}>
              About
            </Link>

            {/* Contact Button */}
            <Link 
              href="/contact"
              className={`px-6 lg:px-8 py-2 lg:py-3 border-2 transition-colors text-base lg:text-lg font-medium ${
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
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Dark Overlay Background */}
              <motion.div 
                className="fixed inset-0 bg-black/80 z-40 md:hidden"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
              
              {/* Mobile Menu Panel */}
              <motion.div 
                className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-white z-50 md:hidden shadow-2xl"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              >
                <div className="flex flex-col h-full">
                  {/* Close Button */}
                  <div className="flex justify-end p-6 border-b border-gray-200">
                    <motion.button 
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-gray-900 p-2"
                      aria-label="Close menu"
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </motion.button>
                  </div>

                  {/* Menu Links */}
                  <nav className="flex-1 overflow-y-auto p-6">
                    <motion.div 
                      className="flex flex-col space-y-6"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: {},
                        visible: {
                          transition: {
                            staggerChildren: 0.1
                          }
                        }
                      }}
                    >
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0 }
                        }}
                      >
                        <Link 
                          href="/" 
                          className="text-gray-900 hover:text-gray-600 transition-colors font-semibold text-xl"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Home
                        </Link>
                      </motion.div>
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0 }
                        }}
                      >
                        <Link 
                          href="/services" 
                          className="text-gray-900 hover:text-gray-600 transition-colors text-xl"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Services
                        </Link>
                      </motion.div>
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0 }
                        }}
                      >
                        <Link 
                          href="/process" 
                          className="text-gray-900 hover:text-gray-600 transition-colors text-xl"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Process
                        </Link>
                      </motion.div>
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0 }
                        }}
                      >
                        <Link 
                          href="/about" 
                          className="text-gray-900 hover:text-gray-600 transition-colors text-xl"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          About
                        </Link>
                      </motion.div>
                      
                      <motion.div 
                        className="pt-4 border-t border-gray-200"
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0 }
                        }}
                      >
                        <Link 
                          href="/contact"
                          className="block px-6 py-3 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white text-center transition-colors font-semibold"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Get Started
                        </Link>
                      </motion.div>
                    </motion.div>
                  </nav>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}