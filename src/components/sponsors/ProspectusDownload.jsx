import React from 'react';
import { Download, FileText, ArrowUpRight } from 'lucide-react';

export default function ProspectusDownload() {
  return (
    <div className="bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-transparent border border-cyan-500/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="space-y-2">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
          <FileText className="w-3.5 h-3.5" />
          <span>SPONSORSHIP DECK 2026</span>
        </div>
        <h3 className="text-2xl font-bold text-white">Download NIRVAN '26 Prospectus</h3>
        <p className="text-xs text-gray-400 max-w-xl font-mono">
          Discover tier benefits, branding placements, campus reach, and direct recruitment avenues for your organization.
        </p>
      </div>
      <a
        href="/prospectus.pdf"
        download
        className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-mono font-bold text-xs shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all flex items-center space-x-2 shrink-0"
      >
        <Download className="w-4 h-4" />
        <span>DOWNLOAD PDF (2.4 MB)</span>
        <ArrowUpRight className="w-4 h-4" />
      </a>
    </div>
  );
}
