import React from 'react';
import { Cpu, Users, Trophy, Rocket, Sparkles, Code2 } from 'lucide-react';

export default function AboutFest() {
  const stats = [
    { label: 'ATTENDEES', value: '5,000+', icon: Users, color: 'text-cyan-400' },
    { label: 'PRIZE POOL', value: '₹3,000,000+', icon: Trophy, color: 'text-yellow-400' },
    { label: 'COMPETITIONS', value: '25+', icon: Code2, color: 'text-violet-400' },
    { label: 'UNIVERSITIES', value: '120+', icon: Rocket, color: 'text-teal-400' },
  ];

  return (
    <section className="py-20 relative bg-[#0B0F17] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE LEGACY & VISION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Catalyzing Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Tech Pioneers</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-mono">
            NIRVAN '26 is Graphic Era Hill University’s premier annual technical fest. Designed as a global arena for builders, coders, hackers, and creators, NIRVAN transforms bold ideas into scalable open-source technology.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={idx}
                className="bg-[#111827]/60 border border-white/10 hover:border-cyan-500/40 rounded-2xl p-6 backdrop-blur-md transition-all group text-center"
              >
                <IconComponent className={`w-6 h-6 ${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform`} />
                <div className="text-2xl sm:text-4xl font-extrabold font-mono text-white mb-1">{stat.value}</div>
                <div className="text-[10px] sm:text-xs font-mono text-gray-400 tracking-wider uppercase">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Vision Narrative Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#111827]/40 border border-white/10 p-6 rounded-2xl">
            <div className="text-xs font-mono text-cyan-400 mb-2">// 01. INNOVATION FIRST</div>
            <h3 className="text-lg font-bold text-white mb-2">36-Hour Open Hackathons</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Tackle real-world challenges in AI, Web3, Distributed Systems, and Green Tech alongside top industry mentors.
            </p>
          </div>
          <div className="bg-[#111827]/40 border border-white/10 p-6 rounded-2xl">
            <div className="text-xs font-mono text-violet-400 mb-2">// 02. BATTLE arena</div>
            <h3 className="text-lg font-bold text-white mb-2">High-Stakes Esports & CTFs</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Demonstrate tactical supremacy and cybersecurity prowess in structured tournaments broadcasted live.
            </p>
          </div>
          <div className="bg-[#111827]/40 border border-white/10 p-6 rounded-2xl">
            <div className="text-xs font-mono text-teal-400 mb-2">// 03. NETWORKING</div>
            <h3 className="text-lg font-bold text-white mb-2">Industry Leaders & Keynotes</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Connect directly with technical directors, founders, and engineers driving modern computing paradigms.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
