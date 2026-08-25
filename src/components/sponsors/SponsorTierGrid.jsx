import React from 'react';
import { Download, Award, Shield } from 'lucide-react';
import { SPONSORS_DATA } from '../../data/sponsorsData';

export default function SponsorTierGrid() {
  return (
    <div className="space-y-12">
      {/* Download Prospectus Hero Banner */}
      <div className="bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-transparent border border-cyan-500/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">PARTNER WITH US</span>
          <h3 className="text-2xl font-bold text-white mt-1">Sponsor NIRVAN '26</h3>
          <p className="text-xs text-gray-400 max-w-xl mt-1">
            Connect with 5,000+ top engineering talent, innovators, and future developers across North India.
          </p>
        </div>
        <a
          href="/prospectus.pdf"
          download
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-mono font-bold text-xs shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all flex items-center space-x-2 shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>DOWNLOAD PROSPECTUS (PDF)</span>
        </a>
      </div>

      {/* Tiered Grid */}
      {['Title', 'Gold', 'Community'].map((tier) => {
        const tierSponsors = SPONSORS_DATA.filter((s) => s.tier === tier);
        if (!tierSponsors.length) return null;

        return (
          <div key={tier} className="space-y-4">
            <h4 className="text-sm font-mono font-bold text-gray-400 uppercase tracking-wider flex items-center space-x-2">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>{tier} SPONSORS</span>
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {tierSponsors.map((sponsor) => (
                <a
                  key={sponsor.id}
                  href={sponsor.website}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#111827]/60 border border-white/10 hover:border-cyan-500/40 rounded-2xl p-6 flex flex-col items-center justify-center group transition-all backdrop-blur-md h-32"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-12 w-auto filter grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100"
                  />
                  <span className="text-[10px] font-mono text-gray-400 mt-3 group-hover:text-cyan-400">
                    {sponsor.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
