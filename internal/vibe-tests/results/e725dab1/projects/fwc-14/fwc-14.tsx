// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Dialog, DialogContent} from '@/components/ui/dialog';
import {Button} from '@/components/ui/button';

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scale, setScale] = useState(1);

  const currentItem = sampleMedia[currentIndex];

  const handleDoubleClick = () => {
    if (currentItem.type === 'image') {
      setScale(prev => prev === 1 ? 2 : 1);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {sampleMedia.map((item, i) => (
          <button
            key={i}
            className="relative aspect-video overflow-hidden rounded-lg group focus:ring-2 focus:ring-ring focus:outline-none"
            onClick={() => {
              setCurrentIndex(i);
              setScale(1);
              setIsOpen(true);
            }}
          >
            <img
              src={item.type === 'video' ? item.poster : item.src}
              alt={item.alt}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
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

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 bg-black border-none">
          <div className="relative w-full h-[80vh] flex items-center justify-center">
            {currentItem?.type === 'video' ? (
              <video
                src={currentItem.src}
                controls
                className="max-w-full max-h-full"
                aria-label={currentItem.alt}
              />
            ) : (
              <img
                src={currentItem?.src}
                alt={currentItem?.alt}
                className="max-w-full max-h-full transition-transform cursor-zoom-in"
                style={{transform: `scale(${scale})`}}
                onDoubleClick={handleDoubleClick}
              />
            )}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                disabled={currentIndex === 0}
              >
                Previous
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setCurrentIndex(prev => Math.min(sampleMedia.length - 1, prev + 1))}
                disabled={currentIndex === sampleMedia.length - 1}
              >
                Next
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
