import React from 'react';
import { Trophy, Users, Calendar, ArrowUpRight, Tag } from 'lucide-react';

export default function EventCard({ event, onSelect }) {
  return (
    <div className="group relative bg-[#111827]/60 hover:bg-[#111827]/90 border border-white/10 hover:border-cyan-500/40 rounded-2xl p-6 transition-all duration-300 backdrop-blur-md flex flex-col justify-between hover:shadow-xl hover:shadow-cyan-500/10">
      
      <div>
        {/* Top Header & Category */}
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase font-bold tracking-wider bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-cyan-400 border border-cyan-500/30">
            {event.category}
          </span>
          <span className="text-xs font-mono text-gray-400 flex items-center space-x-1">
            <Users className="w-3.5 h-3.5 text-violet-400" />
            <span>{event.teamSize}</span>
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {event.title}
        </h3>
        <p className="text-xs text-gray-400 line-clamp-2 mb-6 leading-relaxed">
          {event.shortDesc}
        </p>
      </div>

      {/* Highlights Grid */}
      <div className="border-t border-white/10 pt-4 space-y-3">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center space-x-1.5 text-gray-400">
            <Trophy className="w-4 h-4 text-yellow-400" />
            <span>Prize Pool</span>
          </div>
          <span className="font-mono font-bold text-yellow-400">{event.prizePool}</span>
        </div>

        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center space-x-1.5 text-gray-400">
            <Calendar className="w-4 h-4 text-cyan-400" />
            <span>Date</span>
          </div>
          <span className="font-mono text-gray-300">{event.date}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {event.tags.map((tag, idx) => (
            <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-400">
              #{tag}
            </span>
          ))}
        </div>

        {/* Trigger Modal Action */}
        <button
          onClick={() => onSelect(event)}
          className="w-full mt-4 py-2.5 rounded-xl bg-white/5 hover:bg-cyan-500 hover:text-[#0B0F17] text-white text-xs font-bold font-mono transition-all duration-200 flex items-center justify-center space-x-1 group-hover:border-transparent border border-white/10"
        >
          <span>VIEW DETAILS</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
