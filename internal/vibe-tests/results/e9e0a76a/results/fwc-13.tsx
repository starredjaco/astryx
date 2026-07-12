// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState, useEffect} from 'react';

const images = [
  {src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600', alt: 'Product front'},
  {src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600', alt: 'Product side'},
  {src: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600', alt: 'Product detail'},
  {src: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=600', alt: 'Product in use'},
];

export default function ProductGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isOpen) {return;}
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {setCurrentIndex((i) => (i - 1 + images.length) % images.length);}
      if (e.key === 'ArrowRight') {setCurrentIndex((i) => (i + 1) % images.length);}
      if (e.key === 'Escape') {setIsOpen(false);}
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen]);

  return (
    <div style={{maxWidth: 600, margin: '0 auto', padding: 24}}>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8}}>
        {images.map((img, i) => (
          <img key={i} src={img.src} alt={img.alt} style={{width: '100%', aspectRatio: '1', objectFit: 'cover', borderRadius: 8, cursor: 'pointer'}} onClick={() => { setCurrentIndex(i); setIsOpen(true); }} />
        ))}
      </div>
      {isOpen && (
        <div style={{position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000}} onClick={() => setIsOpen(false)}>
          <button onClick={(e) => { e.stopPropagation(); setCurrentIndex((i) => (i - 1 + images.length) % images.length); }} style={{position: 'absolute', left: 16, color: 'white', fontSize: 32, background: 'none', border: 'none', cursor: 'pointer'}}>&larr;</button>
          <img src={images[currentIndex].src} alt={images[currentIndex].alt} style={{maxHeight: '80vh', maxWidth: '80vw', objectFit: 'contain'}} onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); setCurrentIndex((i) => (i + 1) % images.length); }} style={{position: 'absolute', right: 16, color: 'white', fontSize: 32, background: 'none', border: 'none', cursor: 'pointer'}}>&rarr;</button>
          <span style={{position: 'absolute', bottom: 24, color: 'white', fontSize: 14}}>{currentIndex + 1} of {images.length}</span>
        </div>
      )}
    </div>
  );
}
