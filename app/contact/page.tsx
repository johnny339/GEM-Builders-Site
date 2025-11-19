'use client';

import SiteBackground from "@/components/SiteBackground";
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    phone: '',
    projectType: '',
    foundUs: '',
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
        setFormData({ name: '', email: '', location: '', phone: '', projectType: '', foundUs: '', message: '' });
      } else {
        showNotification('error', 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      showNotification('error', 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* <Header transparent={false} /> */}

          <SiteBackground/>
      
      {/* Custom Notification Toast */}
      <AnimatePresence>
        {notification.show && (
          <motion.div 
            className="fixed top-4 right-4 z-50"
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div 
              className={`px-6 py-4 rounded-lg shadow-2xl border-2 max-w-md ${
                notification.type === 'success' 
                  ? 'bg-white border-black' 
                  : 'bg-black border-white'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="shrink-0">
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
                <motion.button
                  onClick={() => setNotification({ ...notification, show: false })}
                  className={`flex-shrink-0 ${notification.type === 'success' ? 'text-gray-500 hover:text-black' : 'text-gray-400 hover:text-white'}`}
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ✕
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>      
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Start Your Project</h2>
            <p className="text-xl text-gray-600">
              Get in touch for a free consultation and quote
            </p>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none text-black transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none text-black transition-colors"
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
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none text-black transition-colors"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Phone</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none text-black transition-colors"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-black mb-2">Project Type</label>
              <select
                required
                className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none text-black transition-colors"
                value={formData.projectType}
                onChange={(e) => setFormData({...formData, projectType: e.target.value})}
              >
                <option value="">Select a service</option>
                <option value="Siding">Siding</option>
                <option value="Windows">Windows</option>
                <option value="Framing">Framing</option>
                <option value="Interior Trim Carpentry">Interior Trim Carpentry</option>
                <option value="Custom Closets & Pantries">Custom Closets & Pantries</option>
                <option value="Decks">Decks</option>
                <option value="All In One">All In One</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-black mb-2">How did you hear about us?</label>
              <select
                required
                className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none text-black transition-colors"
                value={formData.foundUs}
                onChange={(e) => setFormData({...formData, foundUs: e.target.value})}
              >
                <option value="">Select an option</option>
                <option value="Siding">Google</option>
                <option value="Windows">Facebook</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-black mb-2">Project Details</label>
              <textarea
                required
                rows={6}
                className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none text-black transition-colors"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>
            
            <motion.button
              type="submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full py-4 text-lg font-semibold transition-all disabled:opacity-50"
              style={{ backgroundColor: 'rgb(231, 212, 158)', color: '#000' }}
              whileHover={{ scale: isSubmitting ? 1 : 1.02, opacity: isSubmitting ? 0.5 : 0.9 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              {isSubmitting ? 'Sending...' : 'Request Free Consultation'}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
}