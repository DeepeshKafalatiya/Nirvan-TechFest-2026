import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutFest from '../components/home/AboutFest';
import EventCard from '../components/events/EventCard';
import { EVENTS_DATA } from '../data/eventsData';

export default function HomePage({ onExplore, onRegister, onSelectEvent }) {
  return (
    <div>
      <HeroSection onExplore={onExplore} onRegister={onRegister} />
      <AboutFest />
      
      {/* Featured Events Preview */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">FEATURED ARENA EVENTS</h2>
            <p className="text-xs font-mono text-gray-400 mt-1">High-stakes flagship challenges with grand prize pools.</p>
          </div>
          <button
            onClick={onExplore}
            className="text-xs font-mono text-cyan-400 hover:underline flex items-center space-x-1"
          >
            <span>VIEW ALL ({EVENTS_DATA.length}) →</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENTS_DATA.slice(0, 3).map((event) => (
            <EventCard key={event.id} event={event} onSelect={onSelectEvent} />
          ))}
        </div>
      </section>
    </div>
  );
}
