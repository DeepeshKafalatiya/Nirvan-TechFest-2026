import React from 'react';
import { Search, Filter, Layers } from 'lucide-react';

export default function EventFilterBar({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedTeamSize,
  setSelectedTeamSize
}) {
  const categories = ['All', 'Hackathon', 'CTF', 'E-Sports', 'Workshops'];
  const teamSizes = ['All Sizes', 'Solo (1)', '2-4 Members', '5 Members'];

  return (
    <div className="bg-[#111827]/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl mb-8 shadow-xl space-y-4 md:space-y-0 md:flex md:items-center md:justify-between md:gap-4">
      
      {/* Realtime Search Input */}
      <div className="relative flex-1">
        <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by event title, tech stack, or tags..."
          className="w-full bg-[#0B0F17] text-white pl-10 pr-4 py-2.5 rounded-xl border border-white/10 focus:border-cyan-400 focus:outline-none text-xs font-mono placeholder:text-gray-500"
        />
      </div>

      {/* Category Pills */}
      <div className="flex items-center space-x-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-cyan-500 text-[#0B0F17] font-bold shadow-md shadow-cyan-500/20'
                : 'bg-gray-900/60 text-gray-400 hover:text-white hover:bg-white/5 border border-white/5'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Team Size Dropdown */}
      <div className="flex items-center space-x-2">
        <Filter className="w-4 h-4 text-cyan-400 shrink-0" />
        <select
          value={selectedTeamSize}
          onChange={(e) => setSelectedTeamSize(e.target.value)}
          className="bg-[#0B0F17] text-gray-300 text-xs font-mono py-2.5 px-3 rounded-xl border border-white/10 focus:border-cyan-400 focus:outline-none cursor-pointer"
        >
          {teamSizes.map((size) => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>
      </div>

    </div>
  );
}
