// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Lightbox} from '@astryxdesign/core/Lightbox';
import stylex from '@stylexjs/stylex';

type MediaItem = {
  type: 'image' | 'video';
  src: string;
  alt: string;
  poster?: string;
};

const sampleMedia: MediaItem[] = [
  {type: 'image', src: '/images/photo-1.jpg', alt: 'Mountain landscape'},
  {type: 'video', src: '/videos/clip-1.mp4', alt: 'Time lapse video', poster: '/images/poster-1.jpg'},
  {type: 'image', src: '/images/photo-2.jpg', alt: 'Ocean sunset'},
  {type: 'image', src: '/images/photo-3.jpg', alt: 'City skyline'},
  {type: 'video', src: '/videos/clip-2.mp4', alt: 'Nature documentary', poster: '/images/poster-2.jpg'},
  {type: 'image', src: '/images/photo-4.jpg', alt: 'Forest trail'},
];

export default function MediaGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const lightboxMedia = sampleMedia.map(item =>
    item.type === 'video'
      ? {type: 'video' as const, src: item.src, alt: item.alt}
      : {type: 'image' as const, src: item.src, alt: item.alt}
  );

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sampleMedia.map((item, i) => (
          <button
            key={i}
            className="relative aspect-video overflow-hidden rounded-lg cursor-pointer focus:ring-2 focus:ring-blue-500 focus:outline-none"
            onClick={() => {
              setIndex(i);
              setIsOpen(true);
            }}
            aria-label={`Open ${item.alt}`}
          >
            <img
              src={item.type === 'video' ? item.poster : item.src}
              alt={item.alt}
              className="w-full h-full object-cover"
            />
            {item.type === 'video' && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>
      <Lightbox
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        media={lightboxMedia}
        index={index}
        onIndexChange={setIndex}
        hasZoom
      />
    </>
  );
}
