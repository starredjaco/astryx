// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Dialog, DialogContent} from '@/components/ui/dialog';
import {Button} from '@/components/ui/button';

const images = [
  {src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600', alt: 'Product front'},
  {src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600', alt: 'Product side'},
  {src: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600', alt: 'Product detail'},
  {src: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=600', alt: 'Product in use'},
];

export default function ProductGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setCurrentIndex((i) => (i + 1) % images.length);

  return (
    <div className="max-w-xl mx-auto p-6">
      <div className="grid grid-cols-4 gap-2">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className="w-full aspect-square object-cover rounded-lg cursor-pointer hover:opacity-80"
            onClick={() => { setCurrentIndex(i); setIsOpen(true); }}
          />
        ))}
      </div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 bg-black">
          <div className="relative flex items-center justify-center min-h-[60vh]">
            <Button variant="ghost" className="absolute left-2 text-white" onClick={prev}>&larr;</Button>
            <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="max-h-[80vh] object-contain" />
            <Button variant="ghost" className="absolute right-2 text-white" onClick={next}>&rarr;</Button>
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
              {currentIndex + 1} of {images.length}
            </span>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
