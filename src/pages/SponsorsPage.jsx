import React from 'react';
import SponsorTierGrid from '../components/sponsors/SponsorTierGrid';

export default function SponsorsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 pt-32 pb-20">
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">OUR SPONSORS & PARTNERS</h1>
        <p className="text-xs font-mono text-gray-400">Backed by industry-leading cloud providers, technology leaders, and developer communities.</p>
      </div>

      <SponsorTierGrid />
    </main>
  );
}  
