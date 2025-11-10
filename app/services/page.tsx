'use client';

import Footer from '@/components/Footer';
import SiteBackground from '@/components/SiteBackground';

export default function Services() {
  const services = [
    {
      title: 'Home Remodels & Renovations',
      description: 'Transform your existing space with high-end remodeling and expert craftsmanship.'
    },
    {
      title: 'Design-Build Services',
      description: 'In house streamlined process combining design and construction under one roof.'
    },
    {
      title: 'Project Management',
      description: 'Get your project completed in a simple and streamlined process.'
    }
  ];
  
  return (
    <>
      <SiteBackground/>
      
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Our Services
            </h2>
            <p className="text-lg md:text-xl">
              Comprehensive construction solutions tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="p-8 border-2 border-gray-200 hover:border-black transition-all group cursor-pointer"
              >
                {/* Using your favicon as icon */}
                <div className="mb-4 flex justify-center">
                  <img
                    src="/favicon.ico"
                    alt="GEM Builders"
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-black mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}