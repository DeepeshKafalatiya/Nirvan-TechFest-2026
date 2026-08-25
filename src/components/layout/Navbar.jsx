import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, ChevronRight } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, onOpenRegister }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Events', id: 'events' },
    { name: 'Schedule', id: 'schedule' },
    { name: 'Speakers', id: 'speakers' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Sponsors', id: 'sponsors' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0B0F17]/85 backdrop-blur-md border-b border-white/10 shadow-2xl py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logos & Title Section */}
        <div 
          onClick={() => setActivePage('home')}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          {/* Logo Container */}
          <div className="flex items-center space-x-2 bg-gray-900/60 p-1.5 rounded-xl border border-white/10 backdrop-blur-md">
            {/* Graphic Era Logo */}
            <img 
              src="/gehu-logo.png" 
              alt="Graphic Era Logo" 
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              onError={(e) => { e.target.style.display = 'none'; }} // Graceful fallback if image missing
            />
            
            <div className="h-6 w-[1px] bg-white/20" /> {/* Divider Line */}

            {/* Tech Geeks Logo */}
            <img 
              src="/tech-geeks-logo.png" 
              alt="Tech Geeks Logo" 
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>

          {/* Festival Title */}
          <div>
            <span className="font-extrabold text-lg sm:text-xl tracking-wider text-white font-mono flex items-center">
              NIRVAN<span className="text-cyan-400">'26</span>
            </span>
            <span className="text-[9px] text-gray-400 block tracking-widest uppercase -mt-1 font-mono">
              GEHU x Tech Geeks
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-1 bg-gray-900/50 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => setActivePage(link.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                  isActive 
                    ? 'bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-cyan-400 border border-cyan-500/30 shadow-sm shadow-cyan-500/20' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </div>

        {/* CTA & Mobile Menu Button */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onOpenRegister}
            className="relative group overflow-hidden rounded-xl p-[1px] font-semibold text-xs transition-all duration-300 active:scale-95"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-violet-500 to-cyan-500 rounded-xl group-hover:opacity-100 opacity-80 transition-opacity animate-gradient" />
            <span className="relative px-4 py-2.5 rounded-[11px] bg-[#0B0F17] transition-all duration-200 group-hover:bg-opacity-0 flex items-center space-x-2 text-white font-mono">
              <Zap className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
              <span>REGISTER</span>
            </span>
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl bg-gray-900/80 border border-white/10 text-gray-300 hover:text-white"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0B0F17]/95 border-b border-white/10 backdrop-blur-xl px-4 pt-3 pb-6 mt-3 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setActivePage(link.id);
                setMobileOpen(false);
              }}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium ${
                activePage === link.id
                  ? 'bg-gradient-to-r from-cyan-500/10 to-violet-500/10 text-cyan-400 border border-cyan-500/30'
                  : 'text-gray-300 hover:bg-white/5'
              }`}
            >
              <span>{link.name}</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
