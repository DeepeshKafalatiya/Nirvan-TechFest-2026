import React from 'react';
import { X, Calendar, Clock, MapPin, Linkedin, Globe } from 'lucide-react';

export default function SpeakerBioModal({ speaker, onClose }) {
  if (!speaker) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#0B0F17] border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-gray-900 text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-4 mb-6">
          <img
            src={speaker.image}
            alt={speaker.name}
            className="w-20 h-20 rounded-2xl object-cover border border-cyan-500/40"
          />
          <div>
            <h3 className="text-2xl font-bold text-white">{speaker.name}</h3>
            <p className="text-xs font-mono text-cyan-400">{speaker.role} @ {speaker.company}</p>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <h4 className="text-xs font-mono text-gray-400 uppercase">BIOGRAPHY</h4>
          <p className="text-xs text-gray-300 leading-relaxed">{speaker.bio}</p>
        </div>

        <div className="bg-gray-900/80 p-4 rounded-xl border border-white/10 space-y-2 mb-6 font-mono text-xs">
          <div className="text-violet-400 font-bold uppercase text-[10px]">SESSION SCHEDULE</div>
          <div className="text-white font-semibold">{speaker.topic}</div>
          <div className="flex items-center space-x-4 text-gray-400 pt-1">
            <span className="flex items-center space-x-1"><Clock className="w-3.5 h-3.5 text-cyan-400" /><span>{speaker.sessionTime}</span></span>
            <span className="flex items-center space-x-1"><MapPin className="w-3.5 h-3.5 text-cyan-400" /><span>{speaker.sessionVenue}</span></span>
          </div>
        </div>

        <div className="flex space-x-3">
          <a
            href={speaker.linkedin || '#'}
            target="_blank"
            rel="noreferrer"
            className="flex-1 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono text-xs flex items-center justify-center space-x-2 border border-white/10"
          >
            <Linkedin className="w-4 h-4 text-cyan-400" />
            <span>LINKEDIN</span>
          </a>
        </div>
      </div>
    </div>
  );
}
