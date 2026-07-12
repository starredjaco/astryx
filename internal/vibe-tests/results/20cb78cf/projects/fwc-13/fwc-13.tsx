// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Lightbox} from '@astryxdesign/core/Lightbox';
import {Grid} from '@astryxdesign/core/Layout';
import {Text} from '@astryxdesign/core/Text';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  container: {
    maxWidth: 600,
    margin: '0 auto',
    padding: 24,
  },
  thumbnail: {
    width: '100%',
    aspectRatio: '1',
    objectFit: 'cover',
    borderRadius: 8,
    cursor: 'pointer',
  },
});

const images = [
  {src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600', alt: 'Product front view'},
  {src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600', alt: 'Product side view'},
  {src: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600', alt: 'Product detail'},
  {src: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=600', alt: 'Product in use'},
];

export default function ProductGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const media = images.map((img) => ({type: 'image' as const, src: img.src, alt: img.alt}));

  return (
    <div {...stylex.props(styles.container)}>
      <Grid columns={4} gap={2}>
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            {...stylex.props(styles.thumbnail)}
            onClick={() => {
              setCurrentIndex(i);
              setIsOpen(true);
            }}
          />
        ))}
      </Grid>
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
