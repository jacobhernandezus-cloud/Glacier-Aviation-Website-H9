import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-aviation-blue/95 backdrop-blur-md shadow-lg py-2 border-b border-white/10' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group"
        >
           <div className="w-10 h-10 bg-aviation-light rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(102,252,241,0.3)]">
                <svg className="w-6 h-6 text-aviation-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
           </div>
           <div className="flex flex-col">
               <span className="text-white font-bold text-xl leading-none uppercase tracking-wide">Glacier</span>
               <span className="text-aviation-light font-medium text-xs tracking-[0.2em] uppercase">Aviation</span>
           </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-gray-300 text-sm font-semibold uppercase tracking-wider hover:text-aviation-light transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+18004522437" className="flex items-center gap-2 text-white hover:text-aviation-light transition-colors">
                <Phone size={18} />
                <span className="font-semibold">1-800-GLACIER</span>
            </a>
            <a 
                href="#booking" 
                onClick={(e) => handleNavClick(e, '#booking')}
                className="bg-transparent border border-aviation-light text-aviation-light hover:bg-aviation-light hover:text-aviation-blue font-bold py-2 px-6 rounded-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_10px_rgba(102,252,241,0.1)] hover:shadow-[0_0_20px_rgba(102,252,241,0.4)]"
            >
                Book Now
            </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white hover:text-aviation-light transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-aviation-gray border-t border-white/10 shadow-xl py-6 px-4 flex flex-col gap-4 max-h-[calc(100vh-80px)] overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white text-lg font-medium block py-2 border-b border-white/5 hover:text-aviation-light"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#booking" 
            onClick={(e) => handleNavClick(e, '#booking')} 
            className="w-full bg-aviation-light text-center block text-aviation-blue font-bold py-3 mt-4 rounded-sm uppercase"
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;