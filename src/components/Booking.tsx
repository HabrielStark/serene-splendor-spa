
import React, { useState, useEffect, useRef } from 'react';
import { toast } from "sonner";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });
  const bookingRef = useRef<HTMLDivElement>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast.success("Your booking request has been received. We'll contact you shortly to confirm your appointment.", {
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      message: ''
    });
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (bookingRef.current) {
      observer.observe(bookingRef.current);
    }
    
    return () => {
      if (bookingRef.current) {
        observer.unobserve(bookingRef.current);
      }
    };
  }, []);
  
  return (
    <section id="booking" className="py-20 md:py-32 bg-spa-sage/10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div ref={bookingRef} className="fade-in-section grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-spa-moss/20 text-spa-charcoal/80 text-xs tracking-widest uppercase mb-4">
                Reserve Your Experience
              </span>
              <h2 className="text-3xl md:text-4xl font-display mb-6 text-spa-charcoal">
                Begin Your Journey to Wellness
              </h2>
              <p className="text-spa-charcoal/70 font-serif mb-8">
                Take the first step towards a more balanced and rejuvenated self. 
                Our wellness advisors will craft a personalized experience tailored to your needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-spa-gold/20 flex items-center justify-center text-spa-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-spa-charcoal font-display text-lg">Call Us</h3>
                    <p className="text-spa-charcoal/70">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-spa-gold/20 flex items-center justify-center text-spa-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-spa-charcoal font-display text-lg">Email Us</h3>
                    <p className="text-spa-charcoal/70">bookings@sereneretreat.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-spa-gold/20 flex items-center justify-center text-spa-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-spa-charcoal font-display text-lg">Visit Us</h3>
                    <p className="text-spa-charcoal/70">123 Serenity Lane, Peaceful Valley, CA 94123</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-sm shadow-sm">
              <h3 className="text-2xl font-display mb-6 text-spa-charcoal">Book Your Session</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-spa-charcoal/80 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-spa-stone/30 rounded-sm focus:outline-none focus:ring-1 focus:ring-spa-gold/50 focus:border-spa-gold/50"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-spa-charcoal/80 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-spa-stone/30 rounded-sm focus:outline-none focus:ring-1 focus:ring-spa-gold/50 focus:border-spa-gold/50"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-spa-charcoal/80 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-spa-stone/30 rounded-sm focus:outline-none focus:ring-1 focus:ring-spa-gold/50 focus:border-spa-gold/50"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-spa-charcoal/80 mb-1">
                      Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-spa-stone/30 rounded-sm focus:outline-none focus:ring-1 focus:ring-spa-gold/50 focus:border-spa-gold/50 bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="massage">Therapeutic Massage</option>
                      <option value="facial">Facial Therapy</option>
                      <option value="ayurvedic">Ayurvedic Treatment</option>
                      <option value="hydro">Hydrotherapy</option>
                      <option value="yoga">Yoga & Movement</option>
                      <option value="mindfulness">Mindfulness Session</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-spa-charcoal/80 mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-spa-stone/30 rounded-sm focus:outline-none focus:ring-1 focus:ring-spa-gold/50 focus:border-spa-gold/50"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-spa-charcoal/80 mb-1">
                    Special Requests
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-spa-stone/30 rounded-sm focus:outline-none focus:ring-1 focus:ring-spa-gold/50 focus:border-spa-gold/50"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-ripple w-full bg-spa-gold hover:bg-spa-gold/90 text-white py-3 rounded-sm 
                          transition-all duration-300 font-medium tracking-wider"
                  onClick={(e) => {
                    const target = e.currentTarget;
                    const rect = target.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const ripple = document.createElement('span');
                    ripple.className = 'ripple';
                    ripple.style.left = `${x}px`;
                    ripple.style.top = `${y}px`;
                    
                    target.appendChild(ripple);
                    
                    setTimeout(() => {
                      ripple.remove();
                    }, 800);
                  }}
                >
                  BOOK APPOINTMENT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
