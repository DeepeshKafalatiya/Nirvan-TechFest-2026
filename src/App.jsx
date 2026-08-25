import React, { useState } from 'react';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Dynamic Page Views
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import SchedulePage from './pages/SchedulePage';
import SpeakersPage from './pages/SpeakersPage';
import GalleryPage from './pages/GalleryPage';
import SponsorsPage from './pages/SponsorsPage';

// Modals
import EventDetailModal from './components/events/EventDetailModal';
import EventRegisterModal from './components/dynamic-forms/EventRegisterModal';

// Data
import { EVENTS_DATA } from './data/eventsData';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [activeEventModal, setActiveEventModal] = useState(null);
  const [registerEvent, setRegisterEvent] = useState(null);

  // Helper handler to open registration modal for a specific or default event
  const handleOpenRegistration = (event = null) => {
    setRegisterEvent(event || EVENTS_DATA[0]);
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-white font-sans antialiased selection:bg-cyan-500 selection:text-[#0B0F17] flex flex-col justify-between">
      
      {/* Sticky Top Navigation */}
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        onOpenRegister={() => handleOpenRegistration()} 
      />

      {/* Main Dynamic View Switcher */}
      <div className="flex-grow">
        {activePage === 'home' && (
          <HomePage 
            onExplore={() => setActivePage('events')} 
            onRegister={() => handleOpenRegistration()} 
            onSelectEvent={(event) => setActiveEventModal(event)}
          />
        )}

        {activePage === 'events' && (
          <EventsPage 
            onSelectEvent={(event) => setActiveEventModal(event)} 
          />
        )}

        {activePage === 'schedule' && (
          <SchedulePage 
            onSelectEvent={(event) => setActiveEventModal(event)}
          />
        )}

        {activePage === 'speakers' && (
          <SpeakersPage />
        )}

        {activePage === 'gallery' && (
          <GalleryPage />
        )}

        {activePage === 'sponsors' && (
          <SponsorsPage />
        )}
      </div>

      {/* Global Persistent Footer */}
      <Footer setActivePage={setActivePage} />

      {/* Global Interactive Modals */}
      {activeEventModal && (
        <EventDetailModal 
          event={activeEventModal} 
          onClose={() => setActiveEventModal(null)} 
          onRegisterTeam={(ev) => handleOpenRegistration(ev)} 
        />
      )}

      {registerEvent && (
        <EventRegisterModal 
          event={registerEvent} 
          onClose={() => setRegisterEvent(null)} 
        />
      )}

    </div>
  );
}
