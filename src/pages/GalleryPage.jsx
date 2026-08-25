import React from 'react';
import GalleryGrid from '../components/gallery/MasonryGrid';

export default function GalleryPage() {
  const photos = [
    { url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800', caption: 'Inauguration Keynote 2025', edition: 'NIRVAN 2025' },
    { url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800', caption: 'CodeForge Overnight Hackathon', edition: 'NIRVAN 2025' },
    { url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800', caption: 'Valorant Tournament Arena', edition: 'NIRVAN 2025' },
    { url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800', caption: 'Quantum AI Workshop Lab', edition: 'NIRVAN 2025' },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 pt-32 pb-20">
      <div className="mb-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">MEDIA GALLERY</h1>
        <p className="text-xs font-mono text-gray-400">Relive iconic moments from previous editions of NIRVAN TechFest.</p>
      </div>

      <GalleryGrid photos={photos} />
    </main>
  );
}
