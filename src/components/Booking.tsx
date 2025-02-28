
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const bookingRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    // Simulate form submission with a delay to show loading state
    setTimeout(() => {
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
      
      setIsSubmitting(false);
    }, 1500);
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
    
    // Add subtle floating animation to form elements when they come into view
    if (formRef.current) {
      const formElements = formRef.current.querySelectorAll('input, select, textarea, button');
      formElements.forEach((element, index) => {
        element.classList.add('opacity-0');
        
        setTimeout(() => {
          element.classList.add('animate-fade-in');
          element.style.animationDelay = `${200 + (index * 100)}ms`;
        }, 500);
      });
    }
    
    return () => {
      if (bookingRef.current) {
        observer.unobserve(bookingRef.current);
      }
    };
  }, []);
  
  // Add decorative elements
  const renderDecoElements = () => {
    return (
      <>
        <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-spa-gold/10 blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 rounded-full bg-spa-sage/10 blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-8 h-8 rounded-full bg-spa-stone/10 blur-sm animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-12 h-12 rounded-full bg-spa-gold/5 blur-md animate-float" style={{ animationDelay: '1.5s' }}></div>
      </>
    );
  };
  
  return (
    <section id="booking" className="py-20 md:py-32 bg-gradient-to-b from-spa-sage/5 to-spa-ivory/80 relative overflow-hidden">
      {renderDecoElements()}
      
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div ref={bookingRef} className="fade-in-section grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-spa-moss/20 text-spa-charcoal/80 text-xs tracking-widest uppercase mb-4">
                Reserve Your Experience
              </span>
              <h2 className="text-3xl md:text-4xl font-display mb-6 text-spa-charcoal relative">
                Begin Your Journey to Wellness
                <span className="absolute -inset-1 bg-spa-gold/5 blur-xl -z-10 animate-soft-glow rounded-full opacity-70"></span>
              </h2>
              <p className="text-spa-charcoal/70 font-serif mb-8 leading-relaxed">
                Take the first step towards a more balanced and rejuvenated self. 
                Our wellness advisors will craft a personalized experience tailored to your needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start group hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-spa-gold/20 flex items-center justify-center text-spa-gold group-hover:bg-spa-gold/30 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-spa-charcoal font-display text-lg">Call Us</h3>
                    <p className="text-spa-charcoal/70">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start group hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-spa-gold/20 flex items-center justify-center text-spa-gold group-hover:bg-spa-gold/30 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-spa-charcoal font-display text-lg">Email Us</h3>
                    <p className="text-spa-charcoal/70">bookings@sereneretreat.com</p>
                  </div>
                </div>
                
                <div className="flex items-start group hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-spa-gold/20 flex items-center justify-center text-spa-gold group-hover:bg-spa-gold/30 transition-colors duration-300">
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
            
            <div className="bg-white p-8 rounded-sm shadow-md hover:shadow-lg transition-shadow duration-500 relative overflow-hidden group">
              {/* Decorative corner flourish */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-spa-gold/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-spa-sage/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-2xl font-display mb-6 text-spa-charcoal relative inline-block">
                Book Your Session
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-spa-gold group-hover:w-full transition-all duration-500"></span>
              </h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-spa-charcoal/80 mb-1 group-hover:text-spa-charcoal transition-colors duration-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-spa-stone/30 rounded-sm focus:outline-none focus:ring-1 focus:ring-spa-gold/50 focus:border-spa-gold/50 transition-all duration-300 hover:border-spa-gold/30"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium text-spa-charcoal/80 mb-1 group-hover:text-spa-charcoal transition-colors duration-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-spa-stone/30 rounded-sm focus:outline-none focus:ring-1 focus:ring-spa-gold/50 focus:border-spa-gold/50 transition-all duration-300 hover:border-spa-gold/30"
                    />
                  </div>
                  
                  <div className="group">
                    <label htmlFor="phone" className="block text-sm font-medium text-spa-charcoal/80 mb-1 group-hover:text-spa-charcoal transition-colors duration-300">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-spa-stone/30 rounded-sm focus:outline-none focus:ring-1 focus:ring-spa-gold/50 focus:border-spa-gold/50 transition-all duration-300 hover:border-spa-gold/30"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="service" className="block text-sm font-medium text-spa-charcoal/80 mb-1 group-hover:text-spa-charcoal transition-colors duration-300">
                      Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-spa-stone/30 rounded-sm focus:outline-none focus:ring-1 focus:ring-spa-gold/50 focus:border-spa-gold/50 bg-white transition-all duration-300 hover:border-spa-gold/30"
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
                  
                  <div className="group">
                    <label htmlFor="date" className="block text-sm font-medium text-spa-charcoal/80 mb-1 group-hover:text-spa-charcoal transition-colors duration-300">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-spa-stone/30 rounded-sm focus:outline-none focus:ring-1 focus:ring-spa-gold/50 focus:border-spa-gold/50 transition-all duration-300 hover:border-spa-gold/30"
                    />
                  </div>
                </div>
                
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-spa-charcoal/80 mb-1 group-hover:text-spa-charcoal transition-colors duration-300">
                    Special Requests
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-spa-stone/30 rounded-sm focus:outline-none focus:ring-1 focus:ring-spa-gold/50 focus:border-spa-gold/50 transition-all duration-300 hover:border-spa-gold/30"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-ripple relative w-full bg-spa-gold hover:bg-spa-gold/90 text-white py-3 rounded-sm 
                          transition-all duration-300 font-medium tracking-wider overflow-hidden transform hover:scale-[1.02] active:scale-[0.98]"
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
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      PROCESSING...
                    </div>
                  ) : (
                    <span className="flex items-center justify-center">
                      BOOK APPOINTMENT
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  )}
                </button>
                
                {/* Decorative element */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-spa-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
