// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Button} from '@astryxdesign/core/Button';
import {Heading} from '@astryxdesign/core/Text';
import {Text} from '@astryxdesign/core/Text';
import {Icon} from '@astryxdesign/core/Icon';
import {Grid} from '@astryxdesign/core/Layout';
import {Popover} from '@astryxdesign/core/Popover';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  container: {
    maxWidth: 800,
    margin: '0 auto',
  },
  coverImage: {
    width: '100%',
    height: 200,
    objectFit: 'cover',
    borderRadius: 8,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: 16,
  },
  iconButton: {
    fontSize: 48,
    cursor: 'pointer',
  },
  iconGrid: {
    padding: 8,
  },
});

const ICONS = ['\u{1F4DD}', '\u{1F680}', '\u{1F4A1}', '\u{2B50}', '\u{1F3AF}', '\u{1F4DA}', '\u{1F525}', '\u{1F30D}', '\u{2705}', '\u{1F389}', '\u{1F4CA}', '\u{1F3C6}'];

export default function NotionPageHeader() {
  const [selectedIcon, setSelectedIcon] = useState('\u{1F4DD}');
  const [coverUrl, setCoverUrl] = useState('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=200&fit=crop');
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  return (
    <div {...stylex.props(styles.container)}>
      <img src={coverUrl} alt="Page cover" {...stylex.props(styles.coverImage)} />
      <div {...stylex.props(styles.header)}>
        <Popover
          isOpen={isPickerOpen}
          onOpenChange={setIsPickerOpen}
          trigger={
            <Button label="Change icon" variant="ghost" onClick={() => setIsPickerOpen(true)}>
              <span {...stylex.props(styles.iconButton)}>{selectedIcon}</span>
            </Button>
          }
        >
          <Grid columns={4} gap={1}>
            {ICONS.map((icon) => (
              <Button
                key={icon}
                label={icon}
                variant="ghost"
                onClick={() => {
                  setSelectedIcon(icon);
                  setIsPickerOpen(false);
                }}
              >
                {icon}
              </Button>
            ))}
          </Grid>
        </Popover>
        <Heading level={1}>My Page Title</Heading>
      </div>
      <Text type="supporting" color="secondary">Start writing here...</Text>
    </div>
  );
}
