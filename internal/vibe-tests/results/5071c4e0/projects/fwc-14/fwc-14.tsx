// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Grid} from '@astryxdesign/core/Grid';
import {AspectRatio} from '@astryxdesign/core/AspectRatio';
import {Lightbox} from '@astryxdesign/core/Lightbox';
import stylex from '@stylexjs/stylex';

type MediaItem = {
  type: 'image' | 'video';
  src: string;
  alt: string;
  poster?: string;
};

const styles = stylex.create({
  thumbnail: {
    cursor: 'pointer',
    borderRadius: 8,
    overflow: 'hidden',
  },
  media: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

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
      <Grid columns={{minWidth: 200, max: 3}} gap={3}>
        {sampleMedia.map((item, i) => (
          <div
            key={i}
            {...stylex.props(styles.thumbnail)}
            onClick={() => {
              setIndex(i);
              setIsOpen(true);
            }}
            role="button"
            tabIndex={0}
            aria-label={`Open ${item.alt}`}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                setIndex(i);
                setIsOpen(true);
              }
            }}
          >
            <AspectRatio ratio={16 / 9} fit="cover">
              {item.type === 'video' ? (
                <img src={item.poster} alt={item.alt} {...stylex.props(styles.media)} />
              ) : (
                <img src={item.src} alt={item.alt} {...stylex.props(styles.media)} />
              )}
            </AspectRatio>
          </div>
        ))}
      </Grid>
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
