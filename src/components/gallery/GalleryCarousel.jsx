import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Pause, Play, Sparkles, X } from 'lucide-react';

export default function GalleryCarousel({ photos = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Fallback demo data if no props provided
  const items = photos.length > 0 ? photos : [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200',
      caption: 'Inauguration Keynote & Laser Show',
      edition: 'NIRVAN 2025',
      category: 'CEREMONY'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200',
      caption: 'CodeForge 36H Hackathon Finals',
      edition: 'NIRVAN 2025',
      category: 'HACKATHON'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200',
      caption: 'Valorant Championship Grand Arena',
      edition: 'NIRVAN 2025',
      category: 'ESPORTS'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200',
      caption: 'Quantum Computing Hands-on Workshop',
      edition: 'NIRVAN 2025',
      category: 'WORKSHOP'
    }
  ];

  // Auto-play ticker effect
  useEffect(() => {
    let timer;
    if (isPlaying && !isLightboxOpen) {
      timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }, 4000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, isLightboxOpen, items.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const activePhoto = items[currentIndex];

  return (
    <div className="w-full space-y-4">
      {/* Main Carousel Card Container */}
      <div className="relative h-[380px] sm:h-[480px] md:h-[560px] w-full rounded-3xl overflow-hidden border border-white/10 bg-[#111827]/80 backdrop-blur-md shadow-2xl group">
        
        {/* Background Image Slide */}
        <img
          src={activePhoto.url}
          alt={activePhoto.caption}
          className="w-full h-full object-cover transition-all duration-700 ease-out scale-100 group-hover:scale-105"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-[#0B0F17]/30 to-transparent" />

        {/* Top Control Bar */}
        <div className="absolute top-4 right-4 flex items-center space-x-2 z-10">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2.5 rounded-xl bg-[#0B0F17]/70 backdrop-blur-md border border-white/10 text-gray-300 hover:text-white hover:border-cyan-500/40 transition-all"
            title={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
          >
            {isPlaying ? <Pause className="w-4 h-4 text-cyan-400" /> : <Play className="w-4 h-4 text-cyan-400" />}
          </button>

          <button
            onClick={() => setIsLightboxOpen(true)}
            className="p-2.5 rounded-xl bg-[#0B0F17]/70 backdrop-blur-md border border-white/10 text-gray-300 hover:text-white hover:border-cyan-500/40 transition-all"
            title="Expand Fullscreen Lightbox"
          >
            <Maximize2 className="w-4 h-4 text-cyan-400" />
          </button>
        </div>

        {/* Bottom Slide Caption & Info */}
        <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-xl space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{activePhoto.edition} • {activePhoto.category}</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
              {activePhoto.caption}
            </h3>
          </div>

          {/* Navigation Direction Buttons */}
          <div className="flex items-center space-x-2 shrink-0">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl bg-[#0B0F17]/80 backdrop-blur-md border border-white/10 text-white hover:border-cyan-400 hover:bg-cyan-500/20 transition-all active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-xl bg-[#0B0F17]/80 backdrop-blur-md border border-white/10 text-white hover:border-cyan-400 hover:bg-cyan-500/20 transition-all active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Progress Bar Ticker */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-300" 
            style={{ width: `${((currentIndex + 1) / items.length) * 100}%` }}
          />
        </div>

      </div>

      {/* Thumbnail Bar Selector */}
      <div className="grid grid-cols-4 gap-2 sm:gap-4 pt-2">
        {items.map((item, idx) => (
          <button
            key={item.id || idx}
            onClick={() => setCurrentIndex(idx)}
            className={`relative h-16 sm:h-20 rounded-xl overflow-hidden border transition-all duration-300 ${
              currentIndex === idx
                ? 'border-cyan-400 ring-2 ring-cyan-400/30 scale-[1.02]'
                : 'border-white/10 opacity-50 hover:opacity-100'
            }`}
          >
            <img src={item.url} alt={item.caption} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40" />
            <span className="absolute bottom-1 left-2 text-[9px] font-mono text-white font-bold truncate pr-1">
              0{idx + 1}
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 p-3 rounded-xl bg-gray-900 border border-white/10 text-gray-400 hover:text-white z-20"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center">
            <img
              src={activePhoto.url}
              alt={activePhoto.caption}
              className="max-h-[75vh] w-auto rounded-2xl border border-white/20 shadow-2xl object-contain"
            />
            <div className="mt-4 text-center">
              <span className="text-xs font-mono text-cyan-400 uppercase">{activePhoto.edition}</span>
              <h4 className="text-lg font-bold text-white">{activePhoto.caption}</h4>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
