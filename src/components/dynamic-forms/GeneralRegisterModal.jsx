import React, { useState } from 'react';
import { X, CheckCircle, Ticket } from 'lucide-react';

export default function GeneralRegisterModal({ onClose }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [college, setCollege] = useState('GEHU Haldwani');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-md bg-[#0B0F17] border border-white/20 rounded-2xl p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-gray-900 text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center space-x-2 mb-2">
              <Ticket className="w-5 h-5 text-cyan-400" />
              <h3 className="text-xl font-bold text-white">General Visitor Pass</h3>
            </div>
            <p className="text-xs text-gray-400 font-mono mb-4">
              Grants all-access entry to keynotes, project expos, live esports arena, and valedictory sessions.
            </p>

            <div>
              <label className="block text-xs font-mono text-gray-400 mb-1">FULL NAME</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Deepesh..."
                className="w-full bg-[#111827] text-white p-2.5 rounded-xl border border-white/10 text-xs focus:border-cyan-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-gray-400 mb-1">EMAIL ADDRESS</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="student@gehu.ac.in"
                className="w-full bg-[#111827] text-white p-2.5 rounded-xl border border-white/10 text-xs focus:border-cyan-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-gray-400 mb-1">COLLEGE / INSTITUTION</label>
              <input
                type="text"
                required
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                placeholder="Graphic Era Hill University"
                className="w-full bg-[#111827] text-white p-2.5 rounded-xl border border-white/10 text-xs focus:border-cyan-400 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold text-xs font-mono shadow-lg shadow-cyan-500/20 active:scale-95 transition-all"
            >
              CLAIM FEST PASS
            </button>
          </form>
        ) : (
          <div className="py-8 text-center space-y-4">
            <CheckCircle className="w-16 h-16 text-cyan-400 mx-auto animate-bounce" />
            <h3 className="text-2xl font-bold text-white">PASS ISSUED!</h3>
            <p className="text-xs text-gray-400 font-mono">Ticket Code: <span className="text-cyan-400 font-bold">NIRVAN-GEN-8902</span></p>
            <p className="text-xs text-gray-300">
              Welcome, <span className="text-white font-bold">{fullName}</span>! Present this ticket at the registration desk for your digital entry wristband.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-gray-900 border border-white/10 text-xs font-mono text-white hover:bg-white/5"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
