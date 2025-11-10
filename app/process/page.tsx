'use client';

import Footer from '@/components/Footer';
import SiteBackground from '@/components/SiteBackground';

export default function Process() {
  const steps = [
    {
      number: '1',
      title: 'Consultation',
      description: 'We meet to understand your vision, needs, and goals for your project.'
    },
    {
      number: '2',
      title: 'Design & Proof of Concept',
      description: 'Our team develops detailed renderings that bring your vision to life.'
    },
    {
      number: '3',
      title: 'Pre-Construction',
      description: 'We finalize budgets, pricing, and comprehensive project planning.'
    },
    {
      number: '4',
      title: 'Construction',
      description: 'Our skilled team executes the build with precision, quality, and regular communication.'
    },
    {
      number: '5',
      title: 'Quality Assurance',
      description: 'Thorough inspections ensure every detail meets our standards and building codes.'
    },
    {
      number: '6',
      title: 'Project Completion',
      description: 'Final walkthrough, handover, and ongoing support for your completed project.'
    }
  ];

  return (
    <>
      <SiteBackground />

      {/* Process Steps */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Our Process
            </h2>
            <p className="text-lg md:text-xl">
              From concept to completion, we guide you through every step
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="border-2 border-gray-200 p-8 hover:border-black transition-all"
              >
                <div 
                  className="text-6xl font-bold mb-4"
                  style={{ color: 'rgb(231, 212, 158)' }}
                >
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-700">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black/85 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss your vision and create something extraordinary together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href='/contact'>
            <button 
              className="px-8 py-4 text-lg font-semibold transition-all"
              style={{ backgroundColor: 'rgb(231, 212, 158)', color: '#000' }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              Schedule Free Consultation
            </button>
            </a>
            <button 
              className="px-8 py-4 border-2 border-white text-white text-lg font-semibold hover:bg-white hover:text-black transition-all"
            >
              Call (970) 331-5599
            </button>
          </div>
        </div>
      </section>
    </>
  );
}