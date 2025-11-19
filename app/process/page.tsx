'use client';

import SiteBackground from '@/components/SiteBackground';
import { motion } from 'framer-motion';

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
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach to specialty contracting that puts quality and communication first
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="border-2 border-gray-200 p-8 hover:border-black transition-all"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.03, borderColor: '#000' }}
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              What to Expect
            </h2>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            <motion.div 
              className="bg-white p-8 border-2 border-gray-200"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03, borderColor: '#000' }}
            >
              <h3 className="text-2xl font-bold text-black mb-4">On-Time Completion</h3>
              <p className="text-gray-700">
                We respect your time and stick to our schedule. Clear timelines and regular updates throughout your project.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 border-2 border-gray-200"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03, borderColor: '#000' }}
            >
              <h3 className="text-2xl font-bold text-black mb-4">Quality Materials</h3>
              <p className="text-gray-700">
                We work with trusted suppliers and use only professional-grade materials for lasting results.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 border-2 border-gray-200"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03, borderColor: '#000' }}
            >
              <h3 className="text-2xl font-bold text-black mb-4">Clean Work Sites</h3>
              <p className="text-gray-700">
                Daily cleanup and respect for your property. We leave your site clean and organized at the end of each day.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 border-2 border-gray-200"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03, borderColor: '#000' }}
            >
              <h3 className="text-2xl font-bold text-black mb-4">Direct Communication</h3>
              <p className="text-gray-700">
                No middlemen. You work directly with our team and can reach us whenever questions arise.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black text-white">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today for a free consultation and detailed estimate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href='/contact'>
              <motion.button 
                className="px-8 py-4 text-lg font-semibold transition-all"
                style={{ backgroundColor: 'rgb(231, 212, 158)', color: '#000' }}
                whileHover={{ scale: 1.05, opacity: 0.9 }}
                whileTap={{ scale: 0.98 }}
              >
                Request Free Estimate
              </motion.button>
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}