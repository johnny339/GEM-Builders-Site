
import SiteBackground from '@/components/SiteBackground';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Process - Simple & Professional',
  description: 'Learn about our streamlined specialty contracting process. From consultation to completion, we make your siding, window, framing, or deck project easy.',
  openGraph: {
    title: 'GEM Builders Process | How We Work',
    url: 'https://gembuildsco.com/process',
  },
};

export default function Process() {
  const steps = [
    {
      number: '1',
      title: 'Initial Consultation',
      description: 'We assess your project scope, discuss material options, and provide expert recommendations for your specific needs.'
    },
    {
      number: '2',
      title: 'Estimate & Planning',
      description: 'Detailed measurements, material selection, and transparent pricing with no hidden costs.'
    },
    {
      number: '3',
      title: 'Scheduling & Prep',
      description: 'We coordinate timelines, order materials, and prepare the work site for efficient installation.'
    },
    {
      number: '4',
      title: 'Expert Installation',
      description: 'Our skilled craftsmen execute the work with precision, following manufacturer specifications and building codes.'
    },
    {
      number: '5',
      title: 'Quality Inspection',
      description: 'Thorough review of workmanship, proper installation, and attention to finishing details.'
    },
    {
      number: '6',
      title: 'Final Walkthrough',
      description: 'Complete project review, cleanup, and ensuring your complete satisfaction with the finished work.'
    }
  ];

  return (
    <>
      <SiteBackground/>

      {/* Process Steps */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach to specialty contracting that puts quality and communication first
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="border-2 border-gray-200 p-8 hover:border-black transition-all"
              >
                <div 
                  className="text-7xl font-bold mb-4"
                  style={{ color: 'rgb(231, 212, 158)' }}
                >
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              What to Expect
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-black mb-4">On-Time Completion</h3>
              <p className="text-gray-700">
                We respect your time and stick to our schedule. Clear timelines and regular updates throughout your project.
              </p>
            </div>
            
            <div className="bg-white p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-black mb-4">Quality Materials</h3>
              <p className="text-gray-700">
                We work with trusted suppliers and use only professional-grade materials for lasting results.
              </p>
            </div>
            
            <div className="bg-white p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-black mb-4">Clean Work Sites</h3>
              <p className="text-gray-700">
                Daily cleanup and respect for your property. We leave your site clean and organized at the end of each day.
              </p>
            </div>
            
            <div className="bg-white p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-black mb-4">Direct Communication</h3>
              <p className="text-gray-700">
                No middlemen. You work directly with our team and can reach us whenever questions arise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today for a free consultation and detailed estimate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href='/contact'>
              <button 
                className="px-8 py-4 text-lg font-semibold transition-all"
                style={{ backgroundColor: 'rgb(231, 212, 158)', color: '#000' }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                Request Free Estimate
              </button>
            </a>
            <a href='tel:9703315599'>
              <button 
                className="px-8 py-4 border-2 border-white text-white text-lg font-semibold hover:bg-white hover:text-black transition-all"
              >
                Call (970) 331-5599
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}