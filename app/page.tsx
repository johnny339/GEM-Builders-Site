'use client';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SplashScreen from "@/components/SplashScreen";
import { useState } from "react";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      
      {/* Transparent Header - Positioned absolutely over hero */}
      <div className="absolute top-0 left-0 right-0 z-30">
        <Header transparent={true} />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: "url('/vail-home.webp')" }}>
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Building Excellence,<br />One Project at a Time
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Premier construction and design-build services across Colorado
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
            <button
              className="px-8 py-4 text-lg font-semibold transition-all"
              style={{ backgroundColor: 'rgb(231, 212, 158)', color: '#000' }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              Start Your Project
            </button>
            </a>
            <a href="/projects">
            <button 
              className="px-8 py-4 border-2 border-white text-white text-lg font-semibold hover:bg-white hover:text-black transition-all"
            >
              View Portfolio
            </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}