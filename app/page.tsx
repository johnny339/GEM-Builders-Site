'use client';
import Header from "@/components/Header";
import SplashScreen from "@/components/SplashScreen";
import { useState } from "react";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  
  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      
      {/* Transparent Header */}
      <div className="absolute top-0 left-0 right-0 z-30">
        <Header transparent={true} />
      </div>

      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/vail-home.webp')" }}
        aria-label="Hero section"
      >
        <div className="absolute inset-0 bg-black/30 z-10" aria-hidden="true"></div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Expert Specialty Contracting<br />You Can Trust
          </h1>
          <br></br>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block">
              <button
                className="w-full px-8 py-4 text-lg font-semibold transition-all"
                style={{ backgroundColor: 'rgb(231, 212, 158)', color: '#000' }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                aria-label="Get free estimate for your project"
              >
                Get Free Estimate
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: 'rgb(231, 212, 158)' }}>25+</div>
              <div className="text-sm uppercase tracking-wide">Years Experience</div>
            </div>
            {/* <div>
              <div className="text-4xl font-bold mb-2" style={{ color: 'rgb(231, 212, 158)' }}>100%</div>
              <div className="text-sm uppercase tracking-wide">Licensed & Insured</div>
            </div> */}
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: 'rgb(231, 212, 158)' }}>Local</div>
              <div className="text-sm uppercase tracking-wide">Family Owned</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: 'rgb(231, 212, 158)' }}>Free</div>
              <div className="text-sm uppercase tracking-wide">Estimates</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Specialty Services
            </h2>
            <p className="text-xl text-gray-600">
              Professional craftsmanship for your home or business
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {['Siding', 'Windows', 'Framing', 'Trim Carpentry', 'Decks'].map((service, index) => (
              <a href="/services" key={index}>
                <div className="p-6 border-2 border-gray-200 hover:border-black transition-all text-center group cursor-pointer">
                  <h3 className="text-xl font-bold text-black group-hover:underline">{service}</h3>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/services">
              <button className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition-all font-semibold">
                View All Services
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Why Choose GEM Builders?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border-2 border-gray-200">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-2xl font-bold text-black mb-3">Expert Craftsmanship</h3>
              <p className="text-gray-700">
                Over 25 years of hands-on experience delivering precision work that stands the test of time.
              </p>
            </div>

            <div className="bg-white p-8 border-2 border-gray-200">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-black mb-3">Transparent Pricing</h3>
              <p className="text-gray-700">
                Detailed estimates with no hidden costs. You'll know exactly what to expect from start to finish.
              </p>
            </div>

            <div className="bg-white p-8 border-2 border-gray-200">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-2xl font-bold text-black mb-3">On-Time Delivery</h3>
              <p className="text-gray-700">
                We respect your schedule and complete projects on time without compromising quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonial
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-4xl" style={{ color: 'rgb(231, 212, 158)' }}>★</span>
            ))}
          </div>
          <blockquote className="text-2xl md:text-3xl text-gray-700 italic mb-6">
            "Professional, reliable, and exceptional quality. GEM Builders transformed our home and exceeded every expectation."
          </blockquote>
          <p className="text-lg font-semibold text-black">— Satisfied Homeowner, Fort Collins</p>
        </div>
      </section> */}

      {/* Service Area
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Serving Northern Colorado
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Fort Collins • Loveland • Windsor • Greeley • Longmont • And Surrounding Areas
          </p>
          <p className="text-lg text-gray-600">
            Contact us to see if we service your area
          </p>
        </div>
      </section> */}

      {/* Final CTA */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get your free, no-obligation estimate today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="/contact">
              <button
                className="px-8 py-4 text-lg font-semibold transition-all"
                style={{ backgroundColor: 'rgb(231, 212, 158)', color: '#000' }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                Request Free Estimate
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}