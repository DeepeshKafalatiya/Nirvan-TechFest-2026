import React, { useState } from 'react';
import EventFilterBar from '../components/events/EventFilterBar';
import EventCard from '../components/events/EventCard';
import { EVENTS_DATA } from '../data/eventsData';

export default function EventsPage({ onSelectEvent }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTeamSize, setSelectedTeamSize] = useState('All Sizes');

  const filteredEvents = EVENTS_DATA.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCat = selectedCategory === 'All' || event.category === selectedCategory;
    const matchesTeam = selectedTeamSize === 'All Sizes' || event.teamSize === selectedTeamSize;
    return matchesSearch && matchesCat && matchesTeam;
  });

  return (
    <main className="max-w-7xl mx-auto px-4 pt-32 pb-20">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">COMPETITION ARENA</h1>
        <p className="text-xs font-mono text-gray-400">
          Discover hackathons, CTFs, gaming leagues, and workshops.
        </p>
      </div>

      <EventFilterBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedTeamSize={selectedTeamSize}
        setSelectedTeamSize={setSelectedTeamSize}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} onSelect={onSelectEvent} />
        ))}
      </div>
    </main>
  );
}
