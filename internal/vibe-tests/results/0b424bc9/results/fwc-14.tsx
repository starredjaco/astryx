// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Lightbox} from '@astryxdesign/core/Lightbox';
import {Grid} from '@astryxdesign/core/Grid';

type MediaItem = {
  type: 'image' | 'video';
  src: string;
  alt: string;
  poster?: string;
};

const mediaItems: MediaItem[] = [
  {type: 'image', src: '/photos/landscape.jpg', alt: 'Mountain landscape'},
  {type: 'video', src: '/videos/demo.mp4', alt: 'Product demo', poster: '/photos/poster1.jpg'},
  {type: 'image', src: '/photos/portrait.jpg', alt: 'Portrait photo'},
  {type: 'image', src: '/photos/city.jpg', alt: 'City skyline'},
  {type: 'video', src: '/videos/tutorial.mp4', alt: 'Tutorial', poster: '/photos/poster2.jpg'},
  {type: 'image', src: '/photos/nature.jpg', alt: 'Nature scene'},
];

export default function MediaGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const lightboxMedia = mediaItems.map((item) => ({
    src: item.src,
    alt: item.alt,
    type: item.type as 'image' | 'video',
    ...(item.poster ? {poster: item.poster} : {}),
  }));

  return (
    <div className="p-4">
      <Grid columns={3} gap={3}>
        {mediaItems.map((item, index) => (
          <div
            key={item.src}
            className="cursor-pointer rounded-lg overflow-hidden hover:ring-2 hover:ring-blue-500 transition-shadow"
            onClick={() => {
              setCurrentIndex(index);
              setIsOpen(true);
            }}
            role="button"
            tabIndex={0}
            aria-label={`View ${item.alt}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setCurrentIndex(index);
                setIsOpen(true);
              }
            }}
          >
            {item.type === 'image' ? (
              <img src={item.src} alt={item.alt} className="w-full h-48 object-cover" />
            ) : (
              <video src={item.src} poster={item.poster} className="w-full h-48 object-cover" aria-label={item.alt} />
            )}
          </div>
        ))}
      </Grid>

      <Lightbox
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        media={lightboxMedia}
        index={currentIndex}
        onIndexChange={setCurrentIndex}
        hasZoom
      />
    </div>
  );
}
