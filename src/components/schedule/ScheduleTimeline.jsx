import React, { useState } from 'react';
import { Clock, MapPin, User, Tag, Calendar } from 'lucide-react';
import { SCHEDULE_DATA } from '../../data/scheduleData';

export default function ScheduleTimeline({ onSelectEvent }) {
  const [activeDay, setActiveDay] = useState('Day 1');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const currentDayData = SCHEDULE_DATA.find((d) => d.day === activeDay);
  const categories = ['All', 'Tech', 'Workshop', 'E-Sports', 'General'];

  const filteredEvents = currentDayData?.events.filter((item) =>
    categoryFilter === 'All' ? true : item.category === categoryFilter
  );

  return (
    <div className="space-y-8">
      {/* Day Selector Tabs */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div className="flex space-x-2 bg-gray-900/80 p-1.5 rounded-xl border border-white/10">
          {SCHEDULE_DATA.map((d) => (
            <button
              key={d.day}
              onClick={() => setActiveDay(d.day)}
              className={`px-5 py-2.5 rounded-lg text-xs font-mono font-bold transition-all ${
                activeDay === d.day
                  ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg shadow-cyan-500/20'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {d.day} • {d.date}
            </button>
          ))}
        </div>

        {/* Schedule Category Pill Filter */}
        <div className="flex items-center space-x-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                categoryFilter === cat
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Stream */}
      <div className="relative border-l border-white/10 ml-4 sm:ml-32 space-y-8">
        {filteredEvents?.map((item, idx) => (
          <div key={idx} className="relative pl-6 sm:pl-8 group">
            {/* Timeline Node Dot */}
            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-md shadow-cyan-400/50 group-hover:scale-150 transition-transform" />

            {/* Time Stamp (Desktop Offset) */}
            <div className="sm:absolute sm:-left-32 sm:top-1 sm:w-24 text-xs font-mono text-cyan-400 font-semibold mb-2 sm:mb-0 sm:text-right">
              {item.time}
            </div>

            {/* Event Details Card */}
            <div className="bg-[#111827]/60 border border-white/10 hover:border-cyan-500/40 rounded-2xl p-5 backdrop-blur-md transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-white/5 text-violet-400 border border-violet-500/20">
                  {item.category}
                </span>
                <span className="text-xs font-mono text-gray-400 flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{item.venue}</span>
                </span>
              </div>

              <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>

              {item.speaker && (
                <div className="flex items-center space-x-2 text-xs font-mono text-gray-400 pt-2 border-t border-white/5">
                  <User className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Presenter: <strong className="text-gray-200">{item.speaker}</strong></span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
