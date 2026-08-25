import React, { useState } from 'react';
import { X, UserPlus, CheckCircle, AlertCircle } from 'lucide-react';

export default function EventRegisterModal({ event, onClose }) {
  const [teamName, setTeamName] = useState('');
  const [leaderName, setLeaderName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [members, setMembers] = useState(['']);
  const [submitted, setSubmitted] = useState(false);

  const handleAddMember = () => {
    if (members.length < (event?.maxTeam || 4) - 1) {
      setMembers([...members, '']);
    }
  };

  const handleMemberChange = (index, value) => {
    const updated = [...members];
    updated[index] = value;
    setMembers(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#0B0F17] border border-white/20 rounded-2xl p-6 shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-gray-900 text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mb-4">
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                EVENT REGISTRATION
              </span>
              <h3 className="text-xl font-bold text-white">{event?.title || 'NIRVAN Pass'}</h3>
            </div>

            <div>
              <label className="block text-xs font-mono text-gray-400 mb-1">TEAM NAME</label>
              <input
                type="text"
                required
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                placeholder="e.g. CyberKnights"
                className="w-full bg-[#111827] text-white p-2.5 rounded-xl border border-white/10 text-xs focus:border-cyan-400 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1">LEADER NAME</label>
                <input
                  type="text"
                  required
                  value={leaderName}
                  onChange={(e) => setLeaderName(e.target.value)}
                  placeholder="Deepesh..."
                  className="w-full bg-[#111827] text-white p-2.5 rounded-xl border border-white/10 text-xs focus:border-cyan-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1">PHONE NUMBER</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 9876543210"
                  className="w-full bg-[#111827] text-white p-2.5 rounded-xl border border-white/10 text-xs focus:border-cyan-400 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-gray-400 mb-1">OFFICIAL EMAIL</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="leader@gehu.ac.in"
                className="w-full bg-[#111827] text-white p-2.5 rounded-xl border border-white/10 text-xs focus:border-cyan-400 focus:outline-none"
              />
            </div>

            {/* Dynamic Member Inputs */}
            {event?.maxTeam > 1 && (
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono text-gray-400">ADDITIONAL TEAM MEMBERS</label>
                  {members.length < event.maxTeam - 1 && (
                    <button
                      type="button"
                      onClick={handleAddMember}
                      className="text-[11px] font-mono text-cyan-400 hover:underline flex items-center space-x-1"
                    >
                      <UserPlus className="w-3 h-3" />
                      <span>Add Member</span>
                    </button>
                  )}
                </div>

                {members.map((member, idx) => (
                  <input
                    key={idx}
                    type="text"
                    value={member}
                    onChange={(e) => handleMemberChange(idx, e.target.value)}
                    placeholder={`Member ${idx + 2} Full Name`}
                    className="w-full bg-[#111827] text-white p-2 rounded-xl border border-white/10 text-xs focus:border-cyan-400 focus:outline-none"
                  />
                ))}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 mt-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold text-xs font-mono shadow-lg shadow-cyan-500/20 active:scale-95 transition-all"
            >
              CONFIRM REGISTRATION
            </button>
          </form>
        ) : (
          /* Confirmation Success Screen */
          <div className="py-8 text-center space-y-4">
            <CheckCircle className="w-16 h-16 text-cyan-400 mx-auto animate-bounce" />
            <h3 className="text-2xl font-bold text-white">REGISTRATION CONFIRMED!</h3>
            <p className="text-xs text-gray-400 font-mono">
              Pass ID: <span className="text-cyan-400 font-bold">NIRVAN-2026-X892</span>
            </p>
            <p className="text-xs text-gray-300">
              A confirmation email with guidelines and QR code access pass has been sent to <span className="text-white font-mono">{email}</span>.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-gray-900 border border-white/10 text-xs font-mono text-white hover:bg-white/5"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
