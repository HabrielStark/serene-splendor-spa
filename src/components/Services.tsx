
import React, { useEffect, useRef } from 'react';

interface ServiceProps {
  title: string;
  description: string;
  icon: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceProps> = ({ title, description, icon, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
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
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className="service-card fade-in-section p-8 flex flex-col items-center text-center transition-all duration-500 h-full"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-6 text-4xl text-spa-gold">{icon}</div>
      <h3 className="text-xl font-display mb-4 text-spa-charcoal">{title}</h3>
      <p className="text-spa-charcoal/70 font-serif">{description}</p>
    </div>
  );
};

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const waterRippleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!waterRippleRef.current || !sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      
      // Check if mouse is within section bounds
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Create ripple effect
        const ripple = document.createElement('div');
        ripple.className = 'water-ripple';
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        waterRippleRef.current.appendChild(ripple);
        
        // Remove ripple after animation completes
        setTimeout(() => {
          ripple.remove();
        }, 3000);
      }
    };
    
    // Throttled event listener for better performance
    let lastMove = 0;
    const throttledMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastMove > 500) { // Only trigger every 500ms
        lastMove = now;
        handleMouseMove(e);
      }
    };
    
    document.addEventListener('mousemove', throttledMove);
    
    return () => {
      document.removeEventListener('mousemove', throttledMove);
    };
  }, []);
  
  return (
    <section id="services" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden bg-spa-ivory/50">
      <div ref={waterRippleRef} className="absolute inset-0 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-spa-sage/20 text-spa-charcoal/80 text-xs tracking-widest uppercase mb-4">
            Our Offerings
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6 text-spa-charcoal">
            Immersive Wellness Experiences
          </h2>
          <p className="text-spa-charcoal/70 font-serif max-w-2xl mx-auto">
            Each of our treatments is designed to nurture both body and mind, 
            creating a harmonious balance that restores and rejuvenates.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon="✧"
            title="Mind & Body Balance"
            description="Reconnect with your inner self through our guided meditation and mindfulness practices in serene natural surroundings."
            delay={100}
          />
          <ServiceCard 
            icon="✧"
            title="Therapeutic Massage"
            description="Our expert therapists combine ancient techniques with modern approaches to release tension and promote deep relaxation."
            delay={200}
          />
          <ServiceCard 
            icon="✧"
            title="Ayurvedic Treatments"
            description="Traditional holistic healing methods personalized to your body type and specific needs for complete wellness."
            delay={300}
          />
          <ServiceCard 
            icon="✧"
            title="Facial Therapies"
            description="Rejuvenate your skin with organic products and techniques that cleanse, nourish, and revitalize your complexion."
            delay={400}
          />
          <ServiceCard 
            icon="✧"
            title="Hydrotherapy"
            description="Immerse yourself in the healing properties of water with our specialized treatments that detoxify and revitalize."
            delay={500}
          />
          <ServiceCard 
            icon="✧"
            title="Yoga & Movement"
            description="Strengthen the connection between mind and body through gentle, guided movement in our peaceful studio spaces."
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
