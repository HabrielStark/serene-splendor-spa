
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Booking from '../components/Booking';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll animation logic for fade-in sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Get all elements with fade-in-section class
    const fadeElements = document.querySelectorAll('.fade-in-section');
    fadeElements.forEach((el) => {
      observer.observe(el);
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      });
    });
    
    return () => {
      fadeElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-spa-ivory/50 overflow-hidden">
      <Navbar />
      <Hero />
      
      {/* About Section */}
      <section id="about" className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-section">
              <div 
                className="relative h-96 md:h-[600px] rounded-sm overflow-hidden"
                data-aos="fade-up"
              >
                <img 
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Serene Spa Environment" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-charcoal/20 to-transparent"></div>
              </div>
            </div>
            
            <div className="fade-in-section">
              <span className="inline-block py-1 px-3 rounded-full bg-spa-sage/20 text-spa-charcoal/80 text-xs tracking-widest uppercase mb-4">
                Our Philosophy
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6 text-spa-charcoal">
                Mindful Luxury in Every Detail
              </h2>
              <p className="text-spa-charcoal/70 font-serif mb-6">
                At Serene, we believe true luxury lies in the art of mindfulness—being fully present in each moment. 
                Our sanctuary is designed to nourish your senses and quiet your mind, creating space for deep renewal.
              </p>
              <p className="text-spa-charcoal/70 font-serif mb-8">
                Each element of our retreat—from the organic materials and soft textures to the gentle sounds and soothing 
                aromas—is thoughtfully curated to create an atmosphere of tranquility and wellbeing.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <div className="text-4xl text-spa-gold mb-2">15+</div>
                  <div className="text-spa-charcoal font-display">Years of Experience</div>
                </div>
                
                <div className="flex flex-col">
                  <div className="text-4xl text-spa-gold mb-2">20+</div>
                  <div className="text-spa-charcoal font-display">Expert Practitioners</div>
                </div>
                
                <div className="flex flex-col">
                  <div className="text-4xl text-spa-gold mb-2">12+</div>
                  <div className="text-spa-charcoal font-display">Wellness Treatments</div>
                </div>
                
                <div className="flex flex-col">
                  <div className="text-4xl text-spa-gold mb-2">5000+</div>
                  <div className="text-spa-charcoal font-display">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Services />
      <Testimonials />
      <Booking />
      <Footer />
    </div>
  );
};

export default Index;
