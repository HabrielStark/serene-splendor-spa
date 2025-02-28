
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#" className="text-spa-charcoal font-display text-xl md:text-2xl tracking-wider">
              SERENE
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-spa-charcoal hover:text-spa-stone transition-colors duration-300 text-sm tracking-wide">
              ABOUT
            </a>
            <a href="#services" className="text-spa-charcoal hover:text-spa-stone transition-colors duration-300 text-sm tracking-wide">
              SERVICES
            </a>
            <a href="#testimonials" className="text-spa-charcoal hover:text-spa-stone transition-colors duration-300 text-sm tracking-wide">
              TESTIMONIALS
            </a>
            <a href="#booking" className="bg-spa-gold/90 hover:bg-spa-gold text-white px-5 py-2 rounded-sm transition-colors duration-300 text-sm tracking-wide">
              BOOK NOW
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-spa-charcoal p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md transition-all transform origin-top">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-spa-charcoal hover:text-spa-stone transition-colors duration-300 py-2 text-sm tracking-wide"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT
            </a>
            <a 
              href="#services" 
              className="text-spa-charcoal hover:text-spa-stone transition-colors duration-300 py-2 text-sm tracking-wide"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SERVICES
            </a>
            <a 
              href="#testimonials" 
              className="text-spa-charcoal hover:text-spa-stone transition-colors duration-300 py-2 text-sm tracking-wide"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              TESTIMONIALS
            </a>
            <a 
              href="#booking" 
              className="bg-spa-gold/90 hover:bg-spa-gold text-white px-4 py-2 rounded-sm transition-colors duration-300 text-center text-sm tracking-wide"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              BOOK NOW
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
