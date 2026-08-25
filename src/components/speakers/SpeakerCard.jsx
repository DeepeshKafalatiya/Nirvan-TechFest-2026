import React from 'react';
import { ExternalLink, Linkedin, Twitter } from 'lucide-react';

export default function SpeakerCard({ speaker, onSelect }) {
  return (
    <div className="group relative bg-[#111827]/60 hover:bg-[#111827]/90 border border-white/10 hover:border-cyan-500/40 rounded-2xl p-5 transition-all duration-300 backdrop-blur-md flex flex-col items-center text-center">
      
      {/* Avatar Container */}
      <div className="relative w-24 h-24 mb-4 rounded-2xl overflow-hidden p-0.5 bg-gradient-to-tr from-cyan-500 to-violet-600 group-hover:scale-105 transition-transform">
        <img
          src={speaker.image}
          alt={speaker.name}
          className="w-full h-full object-cover rounded-[14px]"
        />
      </div>

      <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 mb-1">
        {speaker.role}
      </span>
      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
        {speaker.name}
      </h3>
      <p className="text-xs text-gray-400 font-mono mb-4">{speaker.company}</p>

      {/* Session Title Tag */}
      <div className="w-full bg-white/5 border border-white/5 rounded-xl p-2.5 mb-4 text-left">
        <span className="text-[9px] font-mono text-violet-400 block uppercase">KEYNOTE TOPIC</span>
        <span className="text-xs font-semibold text-gray-200 line-clamp-1">{speaker.topic}</span>
      </div>

      <button
        onClick={() => onSelect(speaker)}
        className="w-full py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 hover:text-[#0B0F17] text-cyan-400 text-xs font-mono font-bold transition-all border border-cyan-500/30 flex items-center justify-center space-x-1"
      >
        <span>VIEW BIO & SCHEDULE</span>
        <ExternalLink className="w-3.5 h-3.5" />
      </button>

    </div>
  );
}
