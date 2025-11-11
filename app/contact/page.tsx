'use client';

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SiteBackground from "@/components/SiteBackground";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    show: boolean;
    type: 'success' | 'error';
    message: string;
  }>({
    show: false,
    type: 'success',
    message: ''
  });

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ show: true, type, message });
    setTimeout(() => {
      setNotification({ show: false, type, message: '' });
    }, 5000); // Auto-hide after 5 seconds
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        showNotification('success', 'Thank you for your inquiry! We will contact you soon.');
        setFormData({ name: '', email: '', location: '', phone: '', projectType: '', message: '' });
      } else {
        showNotification('error', 'Something went wrong. Please try again or call us at (970) 331-5599.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      showNotification('error', 'Something went wrong. Please try again or call us at (970) 331-5599.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* <Header transparent={false} /> */}

          <SiteBackground/>
      
      {/* Custom Notification Toast */}
      {notification.show && (
        <div className="fixed top-4 right-4 z-50 animate-slide-in">
          <div 
            className={`px-6 py-4 rounded-lg shadow-2xl border-2 max-w-md ${
              notification.type === 'success' 
                ? 'bg-white border-black' 
                : 'bg-black border-white'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                {notification.type === 'success' ? (
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center text-black font-bold"
                    style={{ backgroundColor: 'rgb(231, 212, 158)' }}
                  >
                    ✓
                  </div>
                ) : (
                  <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">
                    !
                  </div>
                )}
              </div>
              <div className="flex-1">
                <p className={`font-semibold ${notification.type === 'success' ? 'text-black' : 'text-white'}`}>
                  {notification.type === 'success' ? 'Success!' : 'Error'}
                </p>
                <p className={`text-sm mt-1 ${notification.type === 'success' ? 'text-gray-700' : 'text-gray-300'}`}>
                  {notification.message}
                </p>
              </div>
              <button
                onClick={() => setNotification({ ...notification, show: false })}
                className={`flex-shrink-0 ${notification.type === 'success' ? 'text-gray-500 hover:text-black' : 'text-gray-400 hover:text-white'}`}
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
      
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Start Your Project</h2>
            <p className="text-xl text-gray-600">
              Get in touch for a free consultation and quote
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none text-black"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none text-black"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Project Location</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none text-black"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Phone</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none text-black"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-black mb-2">Project Type</label>
              <select
                required
                className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none text-black"
                value={formData.projectType}
                onChange={(e) => setFormData({...formData, projectType: e.target.value})}
              >
                <option value="">Select a service</option>
                <option value="Siding">Siding</option>
                <option value="Windows">Windows</option>
                <option value="Framing">Framing</option>
                <option value="Interior Trim Carpentry">Interior Trim Carpentry</option>
                <option value="Decks">Decks</option>
                <option value="All In One">All In One</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-black mb-2">Project Details</label>
              <textarea
                required
                rows={6}
                className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none text-black"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>
            
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full py-4 text-lg font-semibold transition-all disabled:opacity-50"
              style={{ backgroundColor: 'rgb(231, 212, 158)', color: '#000' }}
              onMouseEnter={(e) => !isSubmitting && (e.currentTarget.style.opacity = '0.9')}
              onMouseLeave={(e) => !isSubmitting && (e.currentTarget.style.opacity = '1')}
            >
              {isSubmitting ? 'Sending...' : 'Request Free Consultation'}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}