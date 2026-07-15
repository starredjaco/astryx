// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

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
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16, padding: 16}}>
        {sampleMedia.map((item, i) => (
          <button
            key={i}
            onClick={() => {setCurrentIndex(i); setScale(1); setIsOpen(true);}}
            style={{position: 'relative', aspectRatio: '16/9', overflow: 'hidden', borderRadius: 8, border: 'none', padding: 0, cursor: 'pointer'}}
            aria-label={`Open ${item.alt}`}
          >
            <img
              src={item.type === 'video' ? item.poster : item.src}
              alt={item.alt}
              style={{width: '100%', height: '100%', objectFit: 'cover'}}
            />
            {item.type === 'video' && (
              <div style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.3)'}}>
                <svg width={48} height={48} fill="white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
            )}
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          style={{position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000}}
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-label="Media lightbox"
        >
          <div onClick={e => e.stopPropagation()} style={{position: 'relative', maxWidth: '90vw', maxHeight: '90vh'}}>
            {currentItem.type === 'video' ? (
              <video src={currentItem.src} controls style={{maxWidth: '100%', maxHeight: '80vh'}} aria-label={currentItem.alt} />
            ) : (
              <img
                src={currentItem.src}
                alt={currentItem.alt}
                style={{maxWidth: '100%', maxHeight: '80vh', transform: `scale(${scale})`, transition: 'transform 0.2s', cursor: 'zoom-in'}}
                onDoubleClick={handleDoubleClick}
              />
            )}
            <div style={{position: 'absolute', bottom: -40, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8}}>
              <button onClick={() => setCurrentIndex(p => Math.max(0, p - 1))} disabled={currentIndex === 0} style={{padding: '4px 12px', borderRadius: 4, border: 'none', background: 'white', cursor: 'pointer'}}>Prev</button>
              <button onClick={() => setCurrentIndex(p => Math.min(sampleMedia.length - 1, p + 1))} disabled={currentIndex === sampleMedia.length - 1} style={{padding: '4px 12px', borderRadius: 4, border: 'none', background: 'white', cursor: 'pointer'}}>Next</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
