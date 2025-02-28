
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createMistElements = () => {
      if (!heroRef.current) return;
      
      // Remove any existing mist elements
      const existingMist = heroRef.current.querySelectorAll('.mist');
      existingMist.forEach(el => el.remove());
      
      // Create new mist elements
      for (let i = 0; i < 5; i++) {
        const mist = document.createElement('div');
        mist.className = 'mist';
        
        // Set random starting positions and sizes
        const width = Math.random() * 40 + 20; // 20-60% width
        const height = Math.random() * 30 + 10; // 10-40% height
        const left = Math.random() * 80; // 0-80% from left
        const top = Math.random() * 60 + 20; // 20-80% from top
        const delay = Math.random() * 5; // 0-5s delay
        
        mist.style.width = `${width}%`;
        mist.style.height = `${height}%`;
        mist.style.left = `${left}%`;
        mist.style.top = `${top}%`;
        mist.style.animationDelay = `${delay}s`;
        
        heroRef.current.appendChild(mist);
      }
    };
    
    // Create initial mist elements
    createMistElements();
    
    // Recreate mist elements on window resize for responsiveness
    const handleResize = () => {
      createMistElements();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={heroRef} className="relative h-screen overflow-hidden" id="home">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-center bg-cover"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          filter: 'brightness(0.9)'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-8">
        <div className="animate-fade-in transition-opacity opacity-0" style={{ animationDelay: '0.3s' }}>
          <span className="inline-block py-1 px-3 rounded-full bg-spa-gold/20 text-spa-charcoal text-xs tracking-widest uppercase mb-6">
            Luxury Wellness Retreat
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-light mb-4 text-spa-charcoal animate-fade-in transition-opacity opacity-0" style={{ animationDelay: '0.6s' }}>
          Rediscover <span className="relative">
            Tranquility
            <span className="absolute -inset-1 bg-spa-gold/10 blur-xl animate-soft-glow rounded-full -z-10"></span>
          </span>
        </h1>
        
        <p className="max-w-lg mx-auto text-spa-charcoal/80 mb-8 font-serif animate-fade-in transition-opacity opacity-0" style={{ animationDelay: '0.9s' }}>
          A sanctuary where time slows down, allowing you to reconnect with your inner self while surrounded by natural serenity and mindful luxury.
        </p>
        
        <div className="animate-fade-in transition-opacity opacity-0" style={{ animationDelay: '1.2s' }}>
          <a 
            href="#booking" 
            className="btn-ripple bg-spa-gold hover:bg-spa-gold/90 text-white px-8 py-3 rounded-sm 
                     transition-all duration-300 inline-block tracking-wider text-sm"
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
            EXPLORE OUR RETREAT
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-spa-charcoal/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-spa-charcoal/30 rounded-full mt-2 animate-fade-in" style={{ animationDelay: '1.5s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
