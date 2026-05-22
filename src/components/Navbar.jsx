import React, { useState, useEffect } from 'react';
import { Menu, X, Database } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Dashboards & Projects', href: '#projects', id: 'projects' },
    { name: 'Roadmap', href: '#learning', id: 'learning' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background change on scroll
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section on scroll
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 120; // offset

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-3 bg-bg-dark/80 backdrop-blur-md border-b border-white/5 shadow-lg' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-accent-blue/10 border border-accent-blue/20 text-accent-blue group-hover:bg-accent-blue/20 group-hover:border-accent-blue/40 transition-all duration-300 shadow-glow-blue">
            <Database className="w-5 h-5" />
          </div>
          <span className="font-heading font-bold text-lg tracking-wider text-white">
            BI<span className="text-accent-blue">ANALYST</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium text-sm transition-all duration-300 relative py-1 ${
                activeSection === link.id
                  ? 'text-accent-blue'
                  : 'text-text-secondary hover:text-white'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-blue to-accent-teal rounded-full shadow-glow-blue animate-pulse" />
              )}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="#projects" 
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-accent-blue to-accent-teal hover:from-accent-blue/90 hover:to-accent-teal/90 text-bg-dark shadow-glow-blue transition-all duration-300 hover:scale-105"
          >
            Explore Dashboards
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-text-secondary hover:text-white transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-bg-dark/95 border-b border-white/5 backdrop-blur-lg animate-fade-in">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-medium py-2 px-3 rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'text-accent-blue bg-accent-blue/5'
                    : 'text-text-secondary hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 w-full text-center px-4 py-2.5 rounded-lg bg-gradient-to-r from-accent-blue to-accent-teal text-bg-dark font-semibold text-sm shadow-glow-blue"
            >
              Explore Dashboards
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
