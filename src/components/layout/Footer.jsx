import React from 'react';
import { Cpu, Github, Twitter, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer({ setActivePage }) {
  return (
    <footer className="bg-[#080B11] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center">
                <Cpu className="w-4 h-4 text-white" />
              </div>
              <div className="flex items-center justify-center space-x-4 mb-4">
                <img src="/gehu-logo.png" alt="Graphic Era" className="h-10 w-auto" />
                <span className="text-gray-500 font-mono">×</span>
                <img src="/tech-geeks-logo.png" alt="Tech Geeks" className="h-10 w-auto" />
              </div>
              <span className="font-extrabold text-lg text-white font-mono">
                NIRVAN<span className="text-cyan-400">'26</span>
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed font-mono">
              Where Ideas Become Innovation. The annual flagship technical festival of Graphic Era Hill University.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-xs font-mono font-bold text-white uppercase mb-4 tracking-wider">NAVIGATION</h5>
            <ul className="space-y-2 text-xs text-gray-400 font-mono">
              {['Home', 'Events', 'Schedule', 'Speakers', 'Sponsors'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => setActivePage(item.toLowerCase())}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-xs font-mono font-bold text-white uppercase mb-4 tracking-wider">VENUE & CONTACT</h5>
            <div className="space-y-2 text-xs text-gray-400 font-mono">
              <p className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>GEHU Campus, Haldwani </span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>nirvan2026@gehu.ac.in</span>
              </p>
            </div>
          </div>

          {/* Socials & Live Indicator */}
          <div>
            <h5 className="text-xs font-mono font-bold text-white uppercase mb-4 tracking-wider">STATUS</h5>
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>REGISTRATIONS LIVE</span>
            </div>
            <div className="flex space-x-3 text-gray-400">
              <a href="#" className="p-2 rounded-xl bg-white/5 hover:text-cyan-400"><Github className="w-4 h-4" /></a>
              <a href="#" className="p-2 rounded-xl bg-white/5 hover:text-cyan-400"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="p-2 rounded-xl bg-white/5 hover:text-cyan-400"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 font-mono">
          <p>© 2026 NIRVAN TechFest, GEHU. All rights reserved.</p>
          <p>Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
