
import React, { useEffect, useRef, useState } from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  index: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, position, index }) => {
  const testimonialRef = useRef<HTMLDivElement>(null);
  
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
    
    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }
    
    return () => {
      if (testimonialRef.current) {
        observer.unobserve(testimonialRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={testimonialRef}
      className="fade-in-section bg-white rounded-sm shadow-sm p-8 md:p-10 transition-transform duration-500 hover:shadow-md"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <svg className="w-8 h-8 text-spa-gold/60 mb-4" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.722 6.065c-5.884 2.93-9.809 8.062-9.809 14.4 0 3.2 2.284 5.6 5.488 5.6 3.2 0 5.822-2.4 5.822-5.6 0-3.068-2.622-5.467-5.822-5.467-.335 0-.67.034-1.005.067 1.072-3.6 3.692-6.8 6.58-8.797l-1.254-.203zM25.146 6.065c-5.884 2.93-9.809 8.062-9.809 14.4 0 3.2 2.284 5.6 5.488 5.6 3.2 0 5.822-2.4 5.822-5.6 0-3.068-2.622-5.467-5.822-5.467-.335 0-.67.034-1.005.067 1.072-3.6 3.692-6.8 6.58-8.797l-1.254-.203z"></path>
      </svg>
      <p className="font-handwritten text-xl md:text-2xl leading-relaxed mb-6 text-spa-charcoal/80">
        {quote}
      </p>
      <div className="flex items-center">
        <div>
          <p className="font-display text-spa-charcoal">{author}</p>
          <p className="text-spa-stone text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      quote: "The atmosphere at Serene completely transformed my experience. I left feeling renewed in both body and spirit, like I'd rediscovered a part of myself.",
      author: "Emily Johnson",
      position: "Wellness Enthusiast"
    },
    {
      quote: "Every detail here is carefully considered. From the serene environment to the expert techniques, my weekend retreat was nothing short of transformative.",
      author: "Michael Chen",
      position: "Business Executive"
    },
    {
      quote: "The mindfulness sessions completely changed my perspective. I've incorporated the techniques into my daily routine and feel more centered than ever.",
      author: "Sarah Williams",
      position: "Yoga Instructor"
    }
  ];
  
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-spa-sand/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-spa-gold/20 text-spa-charcoal/80 text-xs tracking-widest uppercase mb-4">
            Guest Experiences
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6 text-spa-charcoal">
            Moments of Transformation
          </h2>
          <p className="text-spa-charcoal/70 font-serif max-w-2xl mx-auto">
            Discover the stories of those who have experienced the healing journey at our sanctuary.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              index={index}
            />
          ))}
        </div>
        
        {/* Mobile Testimonial Slider (visible on small screens) */}
        <div className="md:hidden mt-8 relative">
          <div className="overflow-hidden px-4">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Testimonial
                    quote={testimonial.quote}
                    author={testimonial.author}
                    position={testimonial.position}
                    index={0} // No delay in mobile view
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? 'bg-spa-gold' : 'bg-spa-stone/30'
                }`}
                onClick={() => handleDotClick(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
