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
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-vesper-black/95 backdrop-blur-lg border-b border-vesper-granite/20 py-3 shadow-2xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Vesper VA Logo Mark */}
        <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-4 group"
        >
           <div className="relative w-12 h-10 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full text-vesper-blue fill-none stroke-current" strokeWidth="4">
                <path d="M20,20 L45,80 L70,20" /> {/* V Shape */}
                <path d="M40,20 L90,20 L65,80" /> {/* A Shape */}
                <line x1="50" y1="10" x2="40" y2="90" className="opacity-50" strokeWidth="2" /> {/* Diagonal Split from Guidelines */}
              </svg>
           </div>
           <div className="flex flex-col">
               <span className="text-vesper-sandstone font-bold text-2xl leading-none uppercase tracking-widest">Vesper</span>
               <span className="text-vesper-granite font-light text-[10px] tracking-[0.4em] uppercase">Aviation</span>
           </div>
        </a>

        {/* Desktop Nav - Clean, Spaced */}
        <nav className="hidden lg:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-vesper-granite text-xs font-semibold uppercase tracking-[0.2em] hover:text-vesper-sandstone transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-vesper-blue hover:after:w-full after:transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action area */}
        <div className="hidden lg:flex items-center gap-8">
            <a href="tel:+1800VESPER" className="flex items-center gap-2 text-vesper-granite hover:text-vesper-sandstone transition-colors group">
                <Phone size={14} className="group-hover:text-vesper-blue transition-colors" />
                <span className="text-xs font-bold tracking-widest uppercase">Concierge Line</span>
            </a>
            <a 
                href="#booking" 
                onClick={(e) => handleNavClick(e, '#booking')}
                className="bg-vesper-blue hover:bg-vesper-sandstone hover:text-vesper-black text-vesper-sandstone font-bold py-2.5 px-8 rounded-none uppercase text-[10px] tracking-[0.3em] transition-all duration-500 shadow-xl"
            >
                Inquire
            </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-vesper-sandstone hover:text-vesper-blue transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-vesper-shadow border-t border-vesper-granite/10 shadow-2xl py-10 px-6 flex flex-col gap-6 animate-in slide-in-from-top-4 duration-300">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-vesper-sandstone text-xl font-light uppercase tracking-widest block py-3 border-b border-vesper-granite/10 hover:text-vesper-blue transition-colors"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#booking" 
            onClick={(e) => handleNavClick(e, '#booking')} 
            className="w-full bg-vesper-blue text-center block text-vesper-sandstone font-bold py-4 mt-4 rounded-none uppercase tracking-[0.2em]"
          >
            Request Concierge
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;