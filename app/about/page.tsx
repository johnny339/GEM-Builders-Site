'use client';

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SiteBackground from "@/components/SiteBackground";

export default function About() {
  return (
    <>
    <SiteBackground 
        title="About GEM"
      />
{/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Building Dreams Since 2010
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                GEM Builders has established itself as Colorado's premier construction company, 
                specializing in luxury homes, commercial spaces, and high-end renovations.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our team of experienced craftsmen and designers work collaboratively to bring 
                your vision to life, ensuring every detail meets our exacting standards of quality.
              </p>
              <div className="grid grid-cols-3 gap-8 mt-8">
                <div>
                  <div className="text-4xl font-bold text-black mb-2">200+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-black mb-2">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-black mb-2">50+</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
              </div>
            </div>
            <div className="h-96 bg-gray-300 flex items-center justify-center text-gray-500">
              [About Image: Team photo or construction site]
            </div>
          </div>
        </div>
      </section>
      </>
  );
}