import React from 'react';
import { X, Trophy, MapPin, Calendar, Clock, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function EventDetailModal({ event, onClose, onRegisterTeam }) {
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#0B0F17] border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-gray-900 border border-white/10 text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Event Header */}
        <div className="mb-6">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
            {event.category}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3">{event.title}</h2>
          <p className="text-xs text-gray-400 font-mono mt-1">{event.eligibility}</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-gray-900/80 p-4 rounded-xl border border-white/10 mb-6 font-mono text-xs">
          <div>
            <span className="text-gray-500 block">PRIZE POOL</span>
            <span className="text-yellow-400 font-bold text-sm">{event.prizePool}</span>
          </div>
          <div>
            <span className="text-gray-500 block">ENTRY FEE</span>
            <span className="text-cyan-400 font-bold text-sm">{event.fee}</span>
          </div>
          <div>
            <span className="text-gray-500 block">DATE</span>
            <span className="text-white text-sm">{event.date}</span>
          </div>
          <div>
            <span className="text-gray-500 block">VENUE</span>
            <span className="text-white text-sm">{event.venue}</span>
          </div>
        </div>

        {/* Detailed Rules */}
        <div className="space-y-4 mb-8">
          <h4 className="text-sm font-bold text-white font-mono flex items-center space-x-2">
            <ShieldAlert className="w-4 h-4 text-cyan-400" />
            <span>RULES & REGULATIONS</span>
          </h4>
          <ul className="space-y-2">
            {event.rules.map((rule, idx) => (
              <li key={idx} className="flex items-start space-x-2 text-xs text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Modal Actions */}
        <div className="flex gap-3">
          <button
            onClick={() => {
              onClose();
              onRegisterTeam(event);
            }}
            className="flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-xs font-bold font-mono tracking-wider shadow-lg shadow-cyan-500/20 hover:scale-[1.01] transition-all"
          >
            REGISTER FOR THIS EVENT
          </button>
        </div>

      </div>
    </div>
  );
}
