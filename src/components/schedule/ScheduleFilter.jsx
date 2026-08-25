import React from 'react';
import { Filter } from 'lucide-react';

export default function ScheduleFilter({ selectedCategory, setSelectedCategory }) {
  const categories = ['All', 'Tech', 'Workshop', 'E-Sports', 'General'];

  return (
    <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
      <Filter className="w-4 h-4 text-cyan-400 shrink-0 mr-1" />
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all whitespace-nowrap ${
            selectedCategory === cat
              ? 'bg-cyan-500 text-[#0B0F17] font-bold shadow-md shadow-cyan-500/20'
              : 'bg-gray-900/60 text-gray-400 hover:text-white hover:bg-white/5 border border-white/5'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
