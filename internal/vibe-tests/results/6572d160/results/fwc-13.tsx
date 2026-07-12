// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Lightbox} from '@astryxdesign/core/Lightbox';

const images = [
  {src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600', alt: 'Product front'},
  {src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600', alt: 'Product side'},
  {src: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600', alt: 'Product detail'},
  {src: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=600', alt: 'Product in use'},
];

export default function ProductGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const media = images.map((img) => ({type: 'image' as const, src: img.src, alt: img.alt}));

  return (
    <div className="max-w-xl mx-auto p-6">
      <div className="grid grid-cols-4 gap-2">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className="w-full aspect-square object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => {
              setCurrentIndex(i);
              setIsOpen(true);
            }}
          />
        ))}
      </div>
      <Lightbox
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        media={media}
        index={currentIndex}
        onIndexChange={setCurrentIndex}
      />
    </div>
  );
}
