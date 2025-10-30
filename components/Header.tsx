'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="position: relative bg-white border-b border-gray-200">
      <nav className=" mx-auto py-6 nav-bar">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <img
              src="/GEM-logo-official.png"
              alt="Company Logo"
              className="logo-img"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className="text-gray-900 hover:text-gray-600 transition-colors font-medium underline"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-900 hover:text-gray-600 transition-colors"
            >
              About
            </Link>
            <Link 
              href="/product" 
              className="text-gray-900 hover:text-gray-600 transition-colors"
            >
              Product
            </Link>
            <Link 
              href="/process" 
              className="text-gray-900 hover:text-gray-600 transition-colors"
            >
              Process
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-900 hover:text-gray-600 transition-colors"
            >
              Contact
            </Link>

            {/* Social Icons */}

            {/* Contact Button */}
            <Link 
              href="/contact"
              className="px-6 py-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-900"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}