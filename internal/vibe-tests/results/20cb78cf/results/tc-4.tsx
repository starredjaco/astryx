// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Theme} from '@astryxdesign/core/Theme';
import {Card} from '@astryxdesign/core/Card';
import {Button} from '@astryxdesign/core/Button';
import {Text} from '@astryxdesign/core/Text';
import {Heading} from '@astryxdesign/core/Text';
import {Grid} from '@astryxdesign/core/Layout';
import {defineTheme} from '@astryxdesign/core';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  container: {
    padding: 24,
  },
  previewCard: {
    padding: 24,
    borderRadius: 12,
  },
  selected: {
    outline: '2px solid var(--color-accent)',
    outlineOffset: 2,
  },
});

const midnightTheme = defineTheme({
  colors: {
    background: '#1a1025',
    surface: '#2d1f3d',
    text: '#e8dff5',
    accent: '#9b59b6',
    border: '#4a3560',
  },
});

const earthTheme = defineTheme({
  colors: {
    background: '#faf5f0',
    surface: '#f5ebe0',
    text: '#3d2c1e',
    accent: '#8b5e3c',
    border: '#d4b89c',
  },
});

export default function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState<'default' | 'midnight' | 'earth'>('default');

  const themes = [
    {id: 'default' as const, name: 'Default', description: 'Clean and neutral'},
    {id: 'midnight' as const, name: 'Midnight', description: 'Dark purple tones'},
    {id: 'earth' as const, name: 'Earth', description: 'Warm brown tones'},
  ];

  return (
    <div {...stylex.props(styles.container)}>
      <Heading level={2}>Choose a Theme</Heading>
      <Grid columns={3} gap={4}>
        {themes.map((theme) => (
          <Card
            key={theme.id}
            padding={4}
            xstyle={[styles.previewCard, activeTheme === theme.id && styles.selected]}
          >
            <Heading level={3}>{theme.name}</Heading>
            <Text color="secondary">{theme.description}</Text>
            <Button
              label={activeTheme === theme.id ? 'Active' : 'Select'}
              variant={activeTheme === theme.id ? 'primary' : 'secondary'}
              onClick={() => setActiveTheme(theme.id)}
            />
          </Card>
        ))}
      </Grid>
    </div>
  );
}
