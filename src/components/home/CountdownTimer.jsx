import React, { useState, useEffect } from 'react';

export default function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINS', value: timeLeft.minutes },
    { label: 'SECS', value: timeLeft.seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto my-6">
      {timeUnits.map((unit, idx) => (
        <div 
          key={idx}
          className="bg-[#111827]/70 backdrop-blur-md border border-white/10 rounded-xl p-3 text-center shadow-lg hover:border-cyan-500/30 transition-all"
        >
          <div className="text-xl sm:text-3xl font-extrabold text-white font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
            {String(unit.value).padStart(2, '0')}
          </div>
          <div className="text-[9px] sm:text-[11px] font-mono text-cyan-400 tracking-wider mt-1">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
}
