import React from 'react';
import { Calendar, MapPin, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

export default function HeroSection({ onExplore, onRegister }) {
  return (
    <div className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#0B0F17]">
      {/* Background Decorative Grid and Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293712_1px,transparent_1px),linear-gradient(to_bottom,#1f293712_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 text-center z-10">
        
        {/* Status Badge */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>GEHU ANNUAL TECH FESTIVAL • 2026 EDITION</span>
        </div>
        {/* Joint Organizational Logos Header */}
        <div className="flex items-center justify-center space-x-4 mb-6">
          {/* GEHU Logo */}
          <div className="p-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg shadow-cyan-500/5 hover:border-cyan-500/30 transition-all duration-300">
            <img 
              src="/gehu-logo.png" 
              alt="GEHU Logo" 
              className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-md"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>

  {/* Divider Symbol */}
  <span className="text-cyan-400 font-mono text-xl font-bold opacity-60">×</span>

  {/* Tech Geeks Logo */}
  <div className="p-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg shadow-violet-500/5 hover:border-violet-500/30 transition-all duration-300">
    <img 
      src="/tech-geeks-logo.png" 
      alt="Tech Geeks Logo" 
      className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-md"
      onError={(e) => { e.target.style.display = 'none'; }}
    />
  </div>
</div>

        {/* Hero Title */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6">
          NIRVAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-violet-500">'26</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-2xl text-gray-300 font-light max-w-2xl mx-auto mb-8 font-mono">
          "Where Ideas Become Innovation"
        </p>

        {/* Metadata Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-gray-400 font-mono mb-8">
          <div className="flex items-center space-x-2 bg-gray-900/60 px-4 py-2 rounded-xl border border-white/5">
            <Calendar className="w-4 h-4 text-cyan-400" />
            <span>OCTOBER 14 - 15, 2026</span>
          </div>
          <div className="flex items-center space-x-2 bg-gray-900/60 px-4 py-2 rounded-xl border border-white/5">
            <MapPin className="w-4 h-4 text-violet-400" />
            <span>GEHU CAMPUS, DEHRADUN</span>
          </div>
        </div>

        {/* Countdown Timer Block */}
        <CountdownTimer targetDate="2026-10-14T09:00:00" />

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <button
            onClick={onRegister}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center space-x-2"
          >
            <span>REGISTER NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={onExplore}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gray-900/80 border border-white/10 hover:border-cyan-500/40 text-gray-300 hover:text-white font-semibold text-sm tracking-wide backdrop-blur-md transition-all flex items-center justify-center space-x-2"
          >
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>EXPLORE ARENA</span>
          </button>
        </div>

      </div>
    </div>
  );
}
