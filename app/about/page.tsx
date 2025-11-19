'use client';

import SiteBackground from "@/components/SiteBackground";
import { motion } from 'framer-motion';

export default function About() {
  return (
    <>
      <SiteBackground/>

      {/* Company Story */}
      <section className="py-20 px-4 bg-white">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our Story
          </h2>
          <motion.p 
            className="text-xl text-gray-700 mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Since 1997, GEM Builders has been delivering expert specialty contracting services across Colorado. 
            What started with one craftsman's dedication to quality framing has grown into a trusted name.
          </motion.p>
          <motion.p 
            className="text-xl text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            As a family-owned business, we combine decades of hands-on experience with modern project management 
            to deliver exceptional results on every job. Our reputation is built on precision, reliability, and 
            treating every project like it's our own.
          </motion.p>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Meet the Team
            </h2>
            <p className="text-xl text-gray-600">
              Leadership built on expertise and dedication
            </p>
          </motion.div>

          {/* Team Members */}
          <motion.div 
            className="grid md:grid-cols-2 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {/* Gustavo */}
            <motion.div 
              className="bg-white p-8 lg:p-10 border-2 border-gray-200"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02, borderColor: '#000' }}
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-black mb-2">
                  Gustavo Guzman
                </h3>
                <p className="text-lg font-bold text-black uppercase tracking-wide">
                  Co-Founder / Lead Project Manager
                </p>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                With over 25 years of experience in custom framing and specialty contracting, Gustavo brings 
                unmatched craftsmanship and precision to every project. Since 1997, he has built a reputation 
                for reliability, attention to detail, and deep knowledge of structural techniques.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                His expertise spans from complex framing systems to fine finish work, ensuring every aspect 
                of a project meets the highest standards. Outside of work, Gustavo enjoys horseback riding 
                and competitive team roping.
              </p>
            </motion.div>

            {/* Jonathan */}
            <motion.div 
              className="bg-white p-8 lg:p-10 border-2 border-gray-200"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02, borderColor: '#000' }}
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-black mb-2">
                  Jonathan Guzman
                </h3>
                <p className="text-lg font-bold text-black uppercase tracking-wide">
                  Founder / Project Manager
                </p>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Starting in the trades at just 15 years old, Jonathan quickly proved his dedication to the craft. 
                He went on to earn a degree in Computer Science with a minor in Construction Management from 
                Colorado State University, graduating in 2023.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                His unique blend of field experience and technical expertise allows him to bridge traditional 
                building practices with modern project management. When he's not on the job site, you'll find 
                him skiing, riding horses, or competing in team roping events.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Why Choose GEM Builders
            </h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
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
              className="text-center p-6 border-2 border-gray-200 bg-gray-50"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 }
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05, borderColor: '#000' }}
            >
              <div className="text-6xl font-bold mb-4 text-black">
                25+
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Years Experience</h3>
              <p className="text-gray-700">
                Over two decades of proven expertise in specialty contracting
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-6 border-2 border-gray-200 bg-gray-50"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 }
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05, borderColor: '#000' }}
            >
              <div className="text-6xl font-bold mb-4 text-black">
                100%
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Quality Focused</h3>
              <p className="text-gray-700">
                Every project receives our full attention to detail and craftsmanship
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-6 border-2 border-gray-200 bg-gray-50"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 }
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05, borderColor: '#000' }}
            >
              <div className="text-6xl font-bold mb-4 text-black">
                Local
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Colorado Based</h3>
              <p className="text-gray-700">
                Family-owned and operated, serving communities across Colorado
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Our Work
            </h2>
            <p className="text-xl text-gray-600">
              Quality craftsmanship you can see
            </p>
          </motion.div>
          
          <motion.div 
            className="w-full h-96 md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="/barnHome.jpg" 
              alt="GEM Builders Project"
              className="w-full h-full object-cover"
            />
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
            Ready to Work Together?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss your project and see how we can help bring it to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href='/contact'>
              <motion.button 
                className="px-8 py-4 text-lg font-semibold transition-all"
                style={{ backgroundColor: 'rgb(231, 212, 158)', color: '#000' }}
                whileHover={{ scale: 1.05, opacity: 0.9 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Free Estimate
              </motion.button>
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}