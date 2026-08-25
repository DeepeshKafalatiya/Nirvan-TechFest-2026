import React from 'react';
import ScheduleTimeline from '../components/schedule/ScheduleTimeline';

export default function SchedulePage() {
  return (
    <main className="max-w-5xl mx-auto px-4 pt-32 pb-20">
      <div className="mb-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">FEST AGENDA & TIMELINE</h1>
        <p className="text-xs font-mono text-gray-400">Track keynotes, hackathon checkpoints, and gaming brackets live.</p>
      </div>

      <ScheduleTimeline />
    </main>
  );
}
