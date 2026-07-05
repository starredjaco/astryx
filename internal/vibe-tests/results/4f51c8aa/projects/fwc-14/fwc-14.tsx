// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

type MediaItem = { type: 'image' | 'video'; src: string; alt: string; poster?: string };

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

  return (
    <div style={{padding: 16}}>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16}}>
        {mediaItems.map((item, index) => (
          <div
            key={item.src}
            style={{cursor: 'pointer', borderRadius: 8, overflow: 'hidden', border: '1px solid #e0e0e0'}}
            onClick={() => { setSelectedIndex(index); setZoom(1); }}
            role="button"
            tabIndex={0}
            aria-label={`View ${item.alt}`}
          >
            {item.type === 'image' ? (
              <img src={item.src} alt={item.alt} style={{width: '100%', height: 200, objectFit: 'cover', display: 'block'}} />
            ) : (
              <video src={item.src} poster={item.poster} style={{width: '100%', height: 200, objectFit: 'cover', display: 'block'}} aria-label={item.alt} />
            )}
          </div>
        ))}
      </div>

      {selectedItem && (
        <div
          style={{position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000}}
          onClick={() => setSelectedIndex(null)}
        >
          <div onClick={(e) => e.stopPropagation()} style={{position: 'relative', maxWidth: '90vw', maxHeight: '90vh'}}>
            {selectedItem.type === 'image' ? (
              <img
                src={selectedItem.src}
                alt={selectedItem.alt}
                style={{maxHeight: '80vh', objectFit: 'contain', transform: `scale(${zoom})`, transition: 'transform 0.2s'}}
                onDoubleClick={() => setZoom(zoom === 1 ? 2 : 1)}
              />
            ) : (
              <video src={selectedItem.src} controls style={{maxHeight: '80vh'}} aria-label={selectedItem.alt} />
            )}
            <div style={{position: 'absolute', bottom: -48, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8}}>
              <button onClick={() => setSelectedIndex(Math.max(0, selectedIndex! - 1))} style={{padding: '8px 16px', backgroundColor: 'white', border: 'none', borderRadius: 4, cursor: 'pointer'}}>Prev</button>
              <button onClick={() => setSelectedIndex(Math.min(mediaItems.length - 1, selectedIndex! + 1))} style={{padding: '8px 16px', backgroundColor: 'white', border: 'none', borderRadius: 4, cursor: 'pointer'}}>Next</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
