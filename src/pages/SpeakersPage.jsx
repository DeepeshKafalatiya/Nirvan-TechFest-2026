import React, { useState } from 'react';
import SpeakerCard from '../components/speakers/SpeakerCard';
import SpeakerBioModal from '../components/speakers/SpeakerBioModal';
import { SPEAKERS_DATA } from '../data/speakersData';

export default function SpeakersPage() {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  return (
    <main className="max-w-7xl mx-auto px-4 pt-32 pb-20">
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">KEYNOTE SPEAKERS & MENTORS</h1>
        <p className="text-xs font-mono text-gray-400">Learn directly from AI researchers, ethical hackers, and technical leaders.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {SPEAKERS_DATA.map((speaker) => (
          <SpeakerCard key={speaker.id} speaker={speaker} onSelect={setSelectedSpeaker} />
        ))}
      </div>

      {selectedSpeaker && (
        <SpeakerBioModal speaker={selectedSpeaker} onClose={() => setSelectedSpeaker(null)} />
      )}
    </main>
  );
}
