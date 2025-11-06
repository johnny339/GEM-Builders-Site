'use client';

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SiteBackground from "@/components/SiteBackground";

export default function Projects() {

    const projects = [
    {
      title: 'Modern Mountain Retreat',
      location: 'Vail, CO',
      category: 'Residential'
    },
    {
      title: 'Downtown Office Complex',
      location: 'Denver, CO',
      category: 'Commercial'
    },
    {
      title: 'Luxury Home Renovation',
      location: 'Aspen, CO',
      category: 'Renovation'
    },
    {
      title: 'Boutique Hotel',
      location: 'Boulder, CO',
      category: 'Hospitality'
    }
  ];

  return (
    <>
    <SiteBackground 
        title="Featured Projects" 
        // subtitle="A showcase of our finest work across residential and commercial builds"
      />
      {/* Portfolio Section */}
      <section className="py-20 px-4" style={{ backgroundColor: 'rgb(231, 212, 158)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white overflow-hidden group cursor-pointer hover:shadow-2xl transition-all"
              >
                <div className="h-64 bg-gray-300 flex items-center justify-center text-gray-500">
                  [Project Image: {project.title}]
                </div>
                <div className="p-6">
                  <span className="text-sm font-semibold text-black/60 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-black mt-2 mb-1">{project.title}</h3>
                  <p className="text-gray-600">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="text-center mt-12">
            <button 
              className="px-8 py-4 bg-black text-white text-lg font-semibold hover:bg-gray-800 transition-all"
            >
              View All Projects
            </button>
          </div> */}
        </div>
      </section>
      </>
  );
}