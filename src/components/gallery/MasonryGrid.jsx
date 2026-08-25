import React, { useState } from 'react';
import { Maximize2, X, Sparkles } from 'lucide-react';

export default function MasonryGrid({ photos = [] }) {
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <div className="w-full">
      {/* CSS Columns Masonry Layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {photos.map((photo, idx) => (
          <div
            key={photo.id || idx}
            onClick={() => setActivePhoto(photo)}
            className="break-inside-avoid relative rounded-2xl overflow-hidden group cursor-pointer border border-white/10 hover:border-cyan-500/50 transition-all duration-300 bg-[#111827]/60 backdrop-blur-md shadow-lg hover:shadow-cyan-500/20"
          >
            {/* Image */}
            <img
              src={photo.url}
              alt={photo.caption}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 font-mono text-xs text-gray-500"
              loading="lazy"
            />

            {/* Hover Gradient & Glassmorphic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/90 via-[#0B0F17]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between">
              
              {/* Top Tag */}
              <div className="flex justify-between items-center">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  {photo.edition || 'NIRVAN HIGHLIGHT'}
                </span>
                <div className="p-1.5 rounded-lg bg-black/50 text-white border border-white/10">
                  <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
                </div>
              </div>

              {/* Bottom Caption */}
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">{photo.caption}</h4>
                {photo.category && (
                  <span className="text-[10px] font-mono text-gray-400 flex items-center space-x-1">
                    <Sparkles className="w-3 h-3 text-violet-400 inline mr-1" />
                    <span>{photo.category}</span>
                  </span>
                )}
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fade-in">
          <div className="relative max-w-4xl w-full bg-[#0B0F17] border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-gray-900/80 border border-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox Image View */}
            <div className="max-h-[75vh] overflow-hidden flex items-center justify-center bg-black/50">
              <img
                src={activePhoto.url}
                alt={activePhoto.caption}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>

            {/* Image Details */}
            <div className="p-6 bg-[#111827] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block">
                  {activePhoto.edition || 'NIRVAN ARCHIVE'}
                </span>
                <h3 className="text-lg font-bold text-white">{activePhoto.caption}</h3>
              </div>
              {activePhoto.date && (
                <span className="text-xs font-mono text-gray-400 bg-white/5 px-3 py-1.5 rounded-xl border border-white/5">
                  {activePhoto.date}
                </span>
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
