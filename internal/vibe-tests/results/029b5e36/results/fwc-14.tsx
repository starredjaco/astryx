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

const mediaItems: MediaItem[] = [
  {type: 'image', src: '/photos/landscape.jpg', alt: 'Mountain landscape'},
  {type: 'video', src: '/videos/demo.mp4', alt: 'Product demo', poster: '/photos/poster1.jpg'},
  {type: 'image', src: '/photos/portrait.jpg', alt: 'Portrait photo'},
  {type: 'image', src: '/photos/city.jpg', alt: 'City skyline'},
  {type: 'video', src: '/videos/tutorial.mp4', alt: 'Tutorial', poster: '/photos/poster2.jpg'},
  {type: 'image', src: '/photos/nature.jpg', alt: 'Nature scene'},
];

export default function MediaGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);

  const selectedItem = selectedIndex !== null ? mediaItems[selectedIndex] : null;

  const handlePrev = () => {
    if (selectedIndex !== null && selectedIndex > 0) {setSelectedIndex(selectedIndex - 1);}
  };

  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < mediaItems.length - 1) {setSelectedIndex(selectedIndex + 1);}
  };

  const handleDoubleClick = () => {
    if (selectedItem?.type === 'image') {
      setZoom(zoom === 1 ? 2 : 1);
    }
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-4">
        {mediaItems.map((item, index) => (
          <div
            key={item.src}
            className="cursor-pointer rounded-lg overflow-hidden hover:ring-2 hover:ring-primary transition-all"
            onClick={() => { setSelectedIndex(index); setZoom(1); }}
            role="button"
            tabIndex={0}
            aria-label={`View ${item.alt}`}
          >
            {item.type === 'image' ? (
              <img src={item.src} alt={item.alt} className="w-full h-48 object-cover" />
            ) : (
              <video src={item.src} poster={item.poster} className="w-full h-48 object-cover" aria-label={item.alt} />
            )}
          </div>
        ))}
      </div>

      <Dialog open={selectedIndex !== null} onOpenChange={(open) => { if (!open) { setSelectedIndex(null); setZoom(1); } }}>
        <DialogContent className="max-w-4xl p-0 bg-black/95">
          <div className="relative flex items-center justify-center min-h-[60vh]">
            {selectedItem?.type === 'image' ? (
              <img
                src={selectedItem.src}
                alt={selectedItem.alt}
                className="max-h-[80vh] object-contain transition-transform"
                style={{transform: `scale(${zoom})`}}
                onDoubleClick={handleDoubleClick}
              />
            ) : selectedItem?.type === 'video' ? (
              <video src={selectedItem.src} controls className="max-h-[80vh]" aria-label={selectedItem.alt} />
            ) : null}

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              <Button variant="secondary" size="sm" onClick={handlePrev} disabled={selectedIndex === 0}>Prev</Button>
              <Button variant="secondary" size="sm" onClick={handleNext} disabled={selectedIndex === mediaItems.length - 1}>Next</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
