'use client';

import SiteBackground from '@/components/SiteBackground';

export default function Services() {
  const services = [
    {
      title: 'Siding Installation & Repair',
      description: 'Expert installation of fiber cement, vinyl, and wood siding with precision and lasting quality.'
    },
    {
      title: 'Window Installation',
      description: 'Professional window replacement and installation for enhanced energy efficiency and curb appeal.'
    },
    {
      title: 'Framing Services',
      description: 'Structural framing for new construction, additions, and remodels built to code and engineered standards.'
    },
    {
      title: 'Interior Trim Carpentry',
      description: 'Custom trim work, crown molding, baseboards, and fine finish carpentry for a polished interior.'
    },
    {
      title: 'Deck Construction',
      description: 'Custom deck design and construction using composite, pressure-treated lumber, or hardwood materials.'
    }
  ];
  
  return (
    <>
      <SiteBackground/>
      
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional specialty contracting with expert craftsmanship and attention to detail
            </p>
          </div>
          
          {/* Grid changes to 3 columns to accommodate 5 services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`p-8 lg:p-10 border-2 border-gray-200 hover:border-black transition-all group cursor-pointer ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <img
                    src="/favicon.ico"
                    alt="GEM Builders"
                    className="w-16 h-16 md:w-20 md:h-20 object-contain"
                  />
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4 text-center">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}