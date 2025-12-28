'use client';

import { useState } from 'react';
import SiteBackground from "@/components/SiteBackground";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: 'Modern Wild Hog Deck Railing',
      location: 'Eagle, CO',
      category: 'Residential',
      images: [
        '/deckrailing6.jpg',
        '/deckrailing4.jpg',
        '/deckrailing5.jpg',
        '/deckrailing3.jpg',
        '/deckrailing1.jpg',
        '/deckrailing2.jpg'
      ]
    },
    // Add more projects with their image arrays
  ];

  // Track current image index for each project
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>(
    projects.reduce((acc, _, index) => ({ ...acc, [index]: 0 }), {})
  );

  const nextImage = (projectIndex: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: (prev[projectIndex] + 1) % projects[projectIndex].images.length
    }));
  };

  const prevImage = (projectIndex: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: prev[projectIndex] === 0 
        ? projects[projectIndex].images.length - 1 
        : prev[projectIndex] - 1
    }));
  };

  const goToImage = (projectIndex: number, imageIndex: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: imageIndex
    }));
  };

  return (
    <>
      <SiteBackground/>
      
      {/* Portfolio Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Featured Projects
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, projectIndex) => (
              <motion.div 
                key={projectIndex} 
                className="bg-white overflow-hidden group cursor-pointer hover:shadow-2xl transition-all"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: projectIndex * 0.1 }}
              >
                {/* Image Carousel */}
                <div className="relative h-64 bg-gray-300 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex[projectIndex]}
                      src={project.images[currentImageIndex[projectIndex]]}
                      alt={`${project.title} - Image ${currentImageIndex[projectIndex] + 1}`}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </AnimatePresence>

                  {/* Navigation Arrows - Only show if multiple images */}
                  {project.images.length > 1 && (
                    <>
                      {/* Previous Button */}
                      <button
                        onClick={(e) => prevImage(projectIndex, e)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
                        aria-label="Previous image"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>

                      {/* Next Button */}
                      <button
                        onClick={(e) => nextImage(projectIndex, e)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
                        aria-label="Next image"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      {/* Dot Indicators */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                        {project.images.map((_, imageIndex) => (
                          <button
                            key={imageIndex}
                            onClick={(e) => goToImage(projectIndex, imageIndex, e)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              currentImageIndex[projectIndex] === imageIndex
                                ? 'bg-white w-6'
                                : 'bg-white/50 hover:bg-white/75'
                            }`}
                            aria-label={`Go to image ${imageIndex + 1}`}
                          />
                        ))}
                      </div>

                      {/* Image Counter */}
                      <div className="absolute top-3 right-3 bg-black/50 text-white text-sm px-3 py-1 rounded-full">
                        {currentImageIndex[projectIndex] + 1} / {project.images.length}
                      </div>
                    </>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <span className="text-sm font-semibold text-black/60 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-black mt-2 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
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